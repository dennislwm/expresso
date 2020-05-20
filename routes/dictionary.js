//
// import libraries
const objExpress = require('express');
const objReqPro = require('request-promise');
const objRouter = objExpress.Router();

//
// variables
const strRootUrl = "https://b8qalj4ph8.execute-api.ap-south-1.amazonaws.com/production/dictionary";

//
// Redirect short URLs
/**
 * @api {get} /dictionary/:id Lookup word in dictionary
 * @apiName GetWord
 * @apiGroup Dictionary
 * @apiVersion 0.1.0
 *
 * @apiParam {String} id word to check
 *
 * @apiExample {curl} Example usage:
 *     curl {url}/dictionary/tribulation
 *
 * @apiSuccess {String} word  Word to check
 * @apiSuccess {String} meaning  Meaning of word
 *
 * @apiSuccessExample Success - Response:
 * {
 *   "word": "tribulation",
 *   "meaning": "A trying period or event"
 * }
 *
 * @apiError { String } message  Error message
 */
objRouter.get('/:id', (req, res) => {
  const strWord = req.params.id;
  const strUrl = strRootUrl + '?word=' + strWord;
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
});

//
// export function
module.exports = objRouter;
