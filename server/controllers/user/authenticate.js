const axios = require("axios");

const userLogin = (req, res) => {
    const { memberId, password } = req.body;

    if (!memberId && !password) {
        res.send({
            status : "error",
            message: "Vul je lidmaatschapnummer en wachtwoord in",
        });
    } else if (!memberId) {
        res.send({
            status : "error",
            message: "Vul je lidmaatschapnummer in",
        });
    } else if (!password) {
        res.send({
            status : "error",
            message: "Vul je wachtwoord in",
        });
    } else {
        axios({
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            url: "https://www.youngliving.com/api/accounts/token",
            data: {
                memberId,
                password
            }
          }).then(response => {
              console.log(response.data);
              res.send({
                  status: "success",
                  message: response.data,
              })
          }).catch(err => {
              res.send({
                  status : "error",
                  message: "Gegevens zijn onjuist",
              });
          });
    }    
};

module.exports = {
    userLogin,
}