import Axios from 'axios';
import qs from 'qs'

const axios = Axios.create({
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin" : "*",
        accept: 'application/json',
    },
    // baseURL,
    // headers: {
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        // 'X-SANDBOX-MODE': sandbox_header
    // },
    responseType: 'json'
});

// Axios.request(confirm);

 export  function saveMobile (url2, mobile1){
    console.log(" is Post Method Demo",url2,mobile1);

    

//     fetch(url2, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     mobile : mobile1
//   })
// })

    
//    axios({
//         method : 'post',
//         url : url2,
//         headers: {
//         'Content-Type': 'application/json'},
//         'Accept': 'application/json',
//         'Content-Disposition': 'mobile',
//         data : {
//             mobile : mobile1
//         }
//    })
//    .then(function (response) {
//         console.log(response);
//       })

    // Axios.post(url2, qs.stringify(mobile1), axios)
    // .then( (response) => {
    //     console.log(response.data);
    // }, (error) =>{
    //     console.log(error);
    // })
} 

// class HTTPService {

//     static post({ url, headers = {}, data = {} }) {
//         data = omitBy(data, isNil);
//         return axios.post(url, data, {
//             headers: {
//                 'X-Access-Token': Utility.token,
//                 ...headers
//             }
//         })
//             .then(HTTPService.checkAuthorization);
//     }
    
//     static put({ url, headers = {}, data = {} }) {
//         data = omitBy(data, isNil);
//         return axios.put(url, data, {
//             headers: {
//                 'X-Access-Token': Utility.token,
//                 ...headers
//             }
//         })
//             .then(HTTPService.checkAuthorization);
//     }
//     static get({ url, headers = {}, params = {}, data = {} }) {
//         return axios.get(url, {
//             headers: {
//                 'X-Access-Token': Utility.token,
//                 ...headers
//             },
//             params: {
//                 ...params
//             },
//             data: data
//         })
//             .then(HTTPService.checkAuthorization);
//     }
//     static delete({ url, headers = {} }) {
//         return axios.delete(url, {
//             headers: {
//                 'X-Access-Token': Utility.token,
//                 ...headers
//             }
//         })
//             .then(HTTPService.checkAuthorization);
//     }
//     static checkAuthorization({ data = {} }) {
//         if (data.code === RESPONSE_CODES.SUCCESS) {
//             // API success nothing to do
//         } else if (data.code === RESPONSE_CODES.UNAUTHORIZED) {
//             if (!Utility.logoutInProgress) {
//                 message.error(data.message);
//                 Utility.logoutInProgress = true;
//                 store.dispatch(userSignOut());
//             }
//         } else {
//             message.error(data.message || 'Error occured.');
//         }
//         return data;
//     }
// }
// export default HTTPService;