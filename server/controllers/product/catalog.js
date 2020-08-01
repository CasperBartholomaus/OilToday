const axios = require("axios");

const getOilCategories = (req, res) => {
    const token = req.body.token;
    axios({
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'authtoken': token },
        url: "https://www.youngliving.com/api/shopping/product-catalog/nl-NL/NL/2",
    }).then(response => {
        //Get the subCategories like News, Oils etc.
        const categorys = response.data.nfrRootCategory.subCategories;
        //Get the oilCategorie with all subs and products
        const oilRootCategory = categorys.find(subCategory => subCategory.name === "Essential Oil Products");
        //Get all names from the oil subcategories
        const oilSubCategoryNames = oilRootCategory.subCategories.map(subCategory => subCategory.name);

        res.send({
            status: "success",
            message: oilSubCategoryNames,
        })
    }).catch(err => {

        res.send({
            status: "error",
            message: "Kan de gegevens niet ophalen" + err,
        });
    });
};

module.exports = {
    getOilCategories,
}