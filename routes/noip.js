//
// import libraries
const objExpress = require('express');
const objReqPro = require('request-promise');
const objRouter = objExpress.Router();

//
// variables
const strRootUrl = "/nic/update";

//
// Update IP address of dynamic hostname
/**
 * @api {get} /noip/:id/:ip Update IP address
 * @apiGroup NoIP
 * @apiVersion 0.1.0
 *
 * @apiParam {String} id dynamic NoIP hostname
 * @apiParam {String} ip IP address to which the hostname will be set
 *
 * @apiExample {curl} Example usage:
 *     curl {url}/noip/abc.myvnc.com/12.1.4.56
 * 
 * @apiSuccess {String} status  Enum: 'good IP_ADDRESS' 'nochg IP_ADDRESS'
 * 
 * @apiSuccessExample Success-Response:
 *     good 12.1.4.56
 *
 * @apiError {String} status  Enum: 'nohost' 'badauth' 'badagent' '!donator' 'abuse' '911'
 * 
 * @apiErrorExample Error-Response:
 *     nohost
 */
objRouter.get('/:id/:ip', (req, res) => {
  const strHost = req.params.id;
  const strIp = req.params.ip;
  const strUrl = strRootUrl + '?hostname=' + strHost + '&myip=' + strIp;
  console.log(strUrl);

  const strAuth = btoa('dennislwm:brigette22');
  //
  //  construct options
  const jsnOpts = {
    url: strRootUrl,
    method: 'GET',
    headers: {
      Host: 'dynupdate.no-ip.com',
      Authorization: 'Basic base64-encoded-auth-string'
    }
  }
  objReqPro(jsnOpts).then(function (jsnBody) {
    //
    //  status Enum: 'good IP_ADDRESS' 'nochg IP_ADDRESS' 'nohost' 'badauth' 'badagent' '!donator' 'abuse' '911'
    const strBody = JSON.parse(jsnBody);
    res.status(200).json(strBody);
  }).catch(function (err) { console.log(err); })
});

//
// export function
module.exports = objRouter;
