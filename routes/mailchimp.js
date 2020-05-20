//
// import libraries
const objExpress = require('express');
const objReqPro = require('request-promise');
const objRouter = objExpress.Router();

//
//  variables
//  URL: https://mailchimp.com/developer/reference/lists/
const strRootApiUrl = "https://us18.api.mailchimp.com/3.0/lists/25fbbf075a";

//
// POST member
/**
 * @api {post} /mailchimp/add Add member to list
 * @apiGroup Mailchimp
 * @apiVersion 0.1.0
 *
 * @apiParam {String} firstName First name
 * @apiParam {String} lastName Last name
 * @apiParam {String} email Email
 *
 * @apiSuccess {String} Status 200
 * @apiSuccess {Number} error_count equals 0
 * 
 * @apiError {String} Status 200
 * @apiError {Number} error_count greater than 0
 * @apiError {Number} errors Error messages
 */
objRouter.post('/add', (req, res) => {
  //
  //  retrieve html form inputs
  //  no validation as done at html
  const { firstName, lastName, email } = req.body;

  //
  //  construct data
  //  status Enum: 'subscribed' 'unsubscribed' 'cleaned' 'pending' 'transactional'
  //  Note: Opt-in settings only apply to Mailchimp signup forms, so form integrations and API opt-in are unaffected.
  //  Note: Despite Mailchimp documentation above, double opt-in is available for API, just set status = 'pending'
  const formData = {
    update_existing: true,
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }

  //
  //  convert JSON to string
  const postData = JSON.stringify(formData);

  //
  //  construct options
  const opts = {
    url: strRootApiUrl,
    method: 'POST',
    headers: {
      Authorization: 'auth 6b6e20b2e60aad344e25c9e403080638-us18'
    },
    body: postData
  }
  objReqPro(opts).then(function (body) {
    //
    //  Mailchimp returns status code 200 even if there is an error
    const { errors, error_count } = JSON.parse(body);
    if (error_count > 0) {
      errors.forEach(element => {
        console.log(element.error_code + ": " + element.error);
      });
      res.redirect('/fail.html');
    }
    else res.status(200).redirect('/success.html');
  }).catch(function (err) {
    console.log(err);
    res.redirect('/fail.html');
  })
});

//
// export function
module.exports = objRouter;
