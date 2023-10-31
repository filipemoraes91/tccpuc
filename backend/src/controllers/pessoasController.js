const pessoasModel = require('../models/pessoasModel');

const getAll = async(req, res) => {
    console.log('akiaki')
    const [pessoas] = await pessoasModel.getAll();
    return res.status(200).json(pessoas);
};

const addPessoa = async(req, res) => {
    const addPessoa = await pessoasModel.addPessoa(req.body);
    return res.status(201).json({"message" : addPessoa});
}
module.exports = {
    getAll,
    addPessoa
};