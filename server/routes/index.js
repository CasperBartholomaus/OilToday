module.exports = function (app) {
    app.use("/api", require("./user"));
    app.use("/api", require("./product"));
};