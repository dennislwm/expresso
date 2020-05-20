//
// import libraries
const objExpress = require('express');
const objReqPro = require('request-promise');
const objRouter = objExpress.Router();

//
// variables
const strRootUrl = "http://167.71.208.194:4001/db/query?pretty";

//
// Get list of tables (non-sqlite)
/**
 * @api {get} /ghost/table Get list of tables (non-sqlite)
 * @apiGroup Ghost
 * @apiVersion 0.1.0
 *
 * @apiExample {curl} Example usage:
 *     curl {url}/ghost/table
 * 
 * @apiSuccess {String[]} tables  Table names
 *
 * @apiSuccessExample Success - Response:
 * {
 *   "tables": ["foo","bar"]
 * }
 *
 * @apiError {String} error  400 Bad Request
 */
objRouter.get('/table', (req, res) => {
  const strTag = req.params.id;
  const strBody = "SELECT name FROM sqlite_master WHERE type='table' AND name<>'sqlite_sequence'";
  //
  // array of sql statements
  const arrData = [strBody];
  //
  // post data
  const postData = JSON.stringify(arrData);

  //
  //  construct options
  const opts = {
    uri: strRootUrl,
    method: 'POST',
    encoding: "utf-8",
    headers: {
      "Content-Type": "application/json"
    },
    body: postData
  }
  objReqPro(opts).then(function (body) {
    const { results, time } = JSON.parse(body);
    if (results[0].error)
      res.status(400).json(results[0].error);
    else {
      //
      //  Convert [["A"],["B"],["C"]] to ["A","B","C"]
      const flat = results[0].values.map(x => x[0]);
      //
      //  Convert ["A","B","C"] to { tables: ["A","B","C"] }
      res.status(200).json({ "tables": flat });
    }
  }).catch(function (err) {
    console.log(err);
  })
});

//
// Select * from table
/**
 * @api {get} /ghost/table/:id Select * from table
 * @apiGroup Ghost
 * @apiVersion 0.1.0
 *
 * @apiParam {String} id Table
 *
 * @apiExample {curl} Example usage:
 *     curl {url}/ghost/table/foo
 * 
 * @apiSuccess {String[]} names Column names
 * @apiSuccess {String[]} types Column types
 * @apiSuccess {[]} values Column values
 *
 * @apiError {String} error  400 Bad Request
 *
 * @apiErrorExample Error - Response:
 * {
 *      "error": "no such table: foo"
 * }
 */
objRouter.get('/table/:id', (req, res) => {
  const strTag = req.params.id;
  const strBody = "SELECT * FROM " + strTag;
  //
  // array of sql statements
  const arrData = [strBody];
  //
  // post data
  const postData = JSON.stringify(arrData);

  //
  //  construct options
  const opts = {
    uri: strRootUrl,
    method: 'POST',
    encoding: "utf-8",
    headers: {
      "Content-Type": "application/json"
    },
    body: postData
  }
  objReqPro(opts).then(function (body) {
    const { results, time } = JSON.parse(body);
    if (results[0].error)
      res.status(400).json(results[0]);
    else
      res.status(200).json(results);
  }).catch(function (err) {
    console.log(err);
  })
});

//
// export function
module.exports = objRouter;
