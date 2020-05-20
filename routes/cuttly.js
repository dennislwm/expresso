//
// import libraries
const objExpress = require('express');
const objReqPro = require('request-promise');
const objRouter = objExpress.Router();

//
// variables
const strRootUrl = "https://cutt.ly/";
const strRootApiUrl = "https://cutt.ly/api/api.php?key=47593e7e488fd8f9bebd46ecfe447fc66e8c0";

//
//  Custom short URL
//    /new/:id/:long 
/**
 * @api {post} /cuttly/new/:id/:long Create short URL
 * @apiGroup Cuttly
 * @apiVersion 0.1.0
 *
 * @apiParam {String} id Short code
 * @apiParam {String} long Long url
 *
 * @apiExample {curl} Example usage:
 *     curl {url}/cuttly/new/teedy01/https://teedy.myvnc.com
 * 
 * @apiSuccess {Number} Status-1 The shortened link comes from the domain that shortens the link, i.e. the link has already been shortened.
 * @apiSuccess {Number} Status-2 The entered link is not a link.
 * @apiSuccess {Number} Status-3 The preferred link name is already taken.
 * @apiSuccess {Number} Status-4 Invalid API key.
 * @apiSuccess {Number} Status-5 The link has not passed the validation. Includes invalid characters.
 * @apiSuccess {Number} Status-6 The link provided is from a blocked domain.
 * @apiSuccess {Number} Status-7 OK the link has been shortened
 * 
 * @apiSuccessExample {json} Success-Response:
 *     {
 *        "status": "OK",
 *        "url": {
 *            "date": "15/03/21",
 *            "shortLink": "https://cutt.ly/teedy01",
 *            "fullLink": "https://teedy.myvnc.com",
 *            "title": "Teedy"
 *        }
 *     }
 */
objRouter.get('/new/*', (req, res) => {
  let strIndex = req.url.indexOf("/new/");
  const intLen = "/new/".length
  const strQuery = req.url.substr(strIndex + intLen);
  strIndex = strQuery.indexOf("/");
  const strTag = strQuery.substr(0, strIndex);
  const strLong = strQuery.substr(strIndex + 1);
  const strUrl = strRootApiUrl + "&name=" + strTag + "&short=" + encodeURIComponent(strLong)
  console.log(strUrl);
  res.redirect(strUrl);
});

//
//  Redirect short URL
/**
 * @api {get} /cuttly/:id Redirect short URL
 * @apiGroup Cuttly
 * @apiVersion 0.1.0
 *
 * @apiParam {String} id Short code
 *
 * @apiExample {curl} Example usage:
 *     curl {url}/cuttly/teedy01
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
