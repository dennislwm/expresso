//
// import libraries
const objExpress = require('express');
const objReqPro = require('request-promise');
const objRouter = objExpress.Router();

//
// variables
const strRootUrl = "https://dev.to/api/articles";

//
// GET articles
objRouter.get('/articles', (req, res) => {
  res.status(200).json({ msg: 'Show all articles' });
});

//
// GET articles with tag
/**
 * @api {get} /devto/articles/tag/:id Get articles with tag
 * @apiGroup Devto
 * @apiVersion 0.1.0
 * 
 * @apiParam {String} id Tag
 *
 * @apiExample {curl} Example usage:
 *     curl {url}/devto/articles/tag/javascript
 * 
 * @apiSuccess {string[]} JSON articles
 *
 * @apiError {string[]} Empty
 */
objRouter.get('/articles/tag/:id', (req, res) => {
  const strTag = req.params.id;
  const strUrl = strRootUrl + '?tag=' + strTag;
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
});

// GET articles with tag and page
objRouter.get('/articles/tag/:id/:page', (req, res) => {
  const strTag = req.params.id;
  const intPage = req.params.page;
  const strUrl = strRootUrl + '?tag=' + strTag + '&page=' + intPage;
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
});

//
// GET articles with state=fresh
objRouter.get('/articles/fresh', (req, res) => {
  const strUrl = strRootUrl + '?state=fresh';
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
})

//
// GET articles with state=fresh and page
objRouter.get('/articles/fresh/:page', (req, res) => {
  const intPage = req.params.page;
  const strUrl = strRootUrl + '?state=fresh' + '&page=' + intPage;
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
})

//
// GET articles with state=rising
objRouter.get('/articles/rising', (req, res) => {
  const strUrl = strRootUrl + '?state=rising';
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
})
//
// GET articles with state=rising and page
objRouter.get('/articles/rising/:page', (req, res) => {
  const intPage = req.params.page;
  const strUrl = strRootUrl + '?state=rising' + '&page=' + intPage;
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
})

//
// GET top articles
objRouter.get('/articles/top', (req, res) => {
  const strUrl = strRootUrl + '?top=1';
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
})
//
// GET top articles in the last N days
objRouter.get('/articles/top/:top', (req, res) => {
  const intTop = req.params.top;
  const strUrl = strRootUrl + '?top=' + intTop;
  console.log(strUrl);
  objReqPro({
    url: strUrl,
    method: 'GET'
  }).then(function (body) {
    res.status(200).json(JSON.parse(body));
  }).catch(function (err) { console.log(err); })
})

//
// export function
module.exports = objRouter;
