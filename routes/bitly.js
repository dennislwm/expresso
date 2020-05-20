//
// import libraries
const objExpress = require('express');
const objReqPro = require('request-promise');
const objRouter = objExpress.Router();

//
// variables
const strRootUrl = "https://bit.ly/";

//
// Redirect short URLs
/**
 * @api {get} /bitly/:id Redirect short URL
 * @apiGroup Bitly
 * @apiVersion 0.1.0
 *
 * @apiParam {String} id Short code
 *
 * @apiExample {curl} Example usage:
 *     curl {url}/bitly/teedy01
 * 
 * @apiSuccess Redirect Page will be redirected to the long URL.
 *
 * @apiError PageNotFound Page not found 404 Error
 */
objRouter.get('/:id', (req, res) => {
  const strTag = req.params.id;
  const strUrl = strRootUrl + strTag;
  console.log(strUrl);
  res.redirect(strUrl);
});

//
// export function
module.exports = objRouter;
