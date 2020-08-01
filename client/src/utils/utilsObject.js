const filterObject = (data, allowed) => {
    return Object.keys(data)
          .filter(key => allowed.includes(key))
          .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
          }, {});
};

const removeEmptyKeysObject = (data) => {
    return Object.keys(data)
        .filter(key => data[key] !== "")
        .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
          }, {});
}

module.exports = {
    filterObject,
    removeEmptyKeysObject
}