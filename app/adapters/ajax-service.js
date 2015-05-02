// import { raw as ajax } from 'ic-ajax';
// import ENV from 'co-op-online/config/environment';

/**
* Provides low-level access to the API, allowing both authenticated and raw AJAX requests.
*
* @class AjaxService
*/

// var defaultHeaders = {
//   'X-CoopAppVersion': `Web:0.1 (1)`, // @todo wire into config
//   'X-Original-Prefix': ''
// };

/**
* Performs an AJAX request to the API. The request url is prefixed with ENV.apiHost
* as specified in environment.js to allow for custom API proxying.
*
* @param  {string} method  HTTP method
* @param  {string} contentType Content type to send with the request
* @param  {string} url    URL to request
* @param  {string} headers HTTP headers
* @param  {string} data    JSON payload
* @param  {object} opts    An optional hash of AJAX request properties to override
* @return {object}        AJAX promise
* @see    environment.js
* @method rawRequest
*/
// export function rawRequest(method, contentType, url, headers, data, opts={}) {
//   if(url.indexOf('http') !== 0){
//     // Append URL to proxy host, adding leading slash if required
//     url = ENV.apiHost + (url.length > 0 && url.charAt(0) === '/' ? url : '/' + url);
//   }

//   var processData = (contentType === null);

//   if(contentType == null) {
//     contentType = "application/x-www-form-urlencoded";
//   }

//   if(opts.url) {
//     // The URL shouldn't be overridden
//     delete opts.url;
//   }

//   var properties = {
//     url:        url,
//     type:        method,
//     data:        data,
//     dataType:    'json',
//     contentType: contentType,
//     mimeType: null,
//     processData: processData,
//     headers: _.extend({}, defaultHeaders, headers || {})
//   };

//   properties = _.assign(properties, opts);

//   return ajax(properties).then(result => {
//     // Check for location header for background/account image - if it exists, return the locationHeader
//     var locationHeader = result.jqXHR.getResponseHeader('location');

//     if(locationHeader) {
//       return locationHeader;
//     }

//     return result.response;
//   });
// }

/**
* Performs an AJAX request with an authorisation token to the API
*
* @param  {string} method  HTTP method
* @param  {string} contentType The content type to send with the request
* @param  {string} url    URL to request
* @param  {string} token  authorisation token
* @param  {string} headers HTTP headers
* @param  {string} data    JSON payload
* @return {object}        AJAX promise
* @method  request
*/
// export function request(method, contentType, url, token, headers, data, opts={}){
//   return rawRequest(method, contentType, url, _.extend({'Authorization': `Bearer ${token}`}, headers), data, opts);
// }

/**
* Performs an authenticated GET request to the API
*
* @method get
*/
// export var get = _.partial(request, 'GET', null);

/**
* Performs an authenticated POST request to the API
*
* @method post
*/
// export var post = _.partial(request, 'POST', null);

/**
* Performs an authenticated DELETE request to the API
*
* @method delete
*/
// export var remove = _.partial(request, 'DELETE', null);

/**
* Performs an raw GET request to the API
*
* @method rawGet
*/
// export var rawGet = _.partial(rawRequest, 'GET', null);

/**
* Performs an raw POST request to the API
*
* @method rawPost
*/
// export var rawPost = _.partial(rawRequest, 'POST', null);

/**
* Performs an AJAX request with an authorisation token to the API, and the given JSON object as the request body
*
* @param  {string} method  HTTP method
* @param  {string} url    URL to request
* @param  {string} token  authorisation token
* @param  {string} data    JSON payload
* @return {object}        AJAX promise
* @method  request
*/
// export var jsonRequest = function(method, url, token, data) {
// return request(method, 'application/json; charset=utf-8', url, token, {}, JSON.stringify(data));
// };

/**
* Performs an authenticated GET request to the API, with the specified object as the body
*
* @method get
*/
// export var getJson = _.partial(jsonRequest, 'GET');

/**
* Performs an authenticated POST request to the API, with the specified object as the body
*
* @method post
*/
// export var postJson = _.partial(jsonRequest, 'POST');

/**
* Performs an authenticated PUT request to the API, with the specified object as the body
*
* @method put
*/
// export var putJson = _.partial(jsonRequest, 'PUT');

// export var imageRequest = function(token, url) {
//   return request("GET", null, url, token, { 'Accept': 'image/base64' }, null, { dataType: 'text' });
// };


/**
* Performs an AJAX request with an authorisation token to the API, the given JSON object as the request body, and has a bodiless response
*
* @param  {string} method    HTTP method
* @param  {string} url      URL to request
* @param  {string} token    authorisation token
* @param  {string} data      JSON payload
* @return {object}          AJAX promise
* @method  request
*/
// export var jsonBodilessResponseRequest = function(method, url, token, data) {
//   return request(method, 'application/json; charset=utf-8', url, token, {}, JSON.stringify(data), {dataType: 'text'});
// };

// export var putJsonBodilessResponse = _.partial(jsonBodilessResponseRequest, 'PUT');
