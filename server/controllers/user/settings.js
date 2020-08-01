const axios = require("axios");

const userSettings = (req, res) => {
    const token  = req.body.token;
        console.log(token);
        axios({
            method: 'get',
            headers: {'Content-Type': 'application/json', 'authtoken': token},
            url: "https://youngliving.com/vo.dlv.api/downline/detail/user/405",
          }).then(response => {
              console.log(response.data);
              res.send({
                  status: "success",
                  message: response.data,
              })
          }).catch(err => {
              res.send({
                  status : "error",
                  message: "Kan de gegevens niet ophalen",
              });
          });  
};

module.exports = {
    userSettings,
}