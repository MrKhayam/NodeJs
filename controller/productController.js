const { param } = require("../routes/product-route");

const getData = (req,res) => {
    res.send('Function is running so smoothly.');
};

const postData = (req,res) => {
    res.send('Data has been posted successfully.')
}

const updateData = (req,res) => {
    const id = req.params.id;
    res.send(`Data has been updated on id : ${id}`);
}

const deleteData = (req,res) => {
    const id = req.params.id;
    res.send(`Data has been deleted on id : ${id}`);
}

module.exports = {
    getData,
    postData,
    updateData,
    deleteData
};