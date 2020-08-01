import axios from 'axios';

const axiosRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        axios({
            method,
            headers: {'Content-Type': 'application/json'},
            url,
            data,
          })
          .then((response) => {
                resolve(response);
          })
          .catch(function (error) {
                console.log(`Error in axiosRequest: ${error}`);
                reject(error);
          });
    });
};

module.exports = {
    axiosRequest,
}