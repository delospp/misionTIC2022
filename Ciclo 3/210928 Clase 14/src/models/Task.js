const mongoose = require('mongoose');
const {Schema} = mongoose;

const Task = new Schema(
    {
        productos: String,
        descripcion: String,
        precio: Number
    }
);

module.exports = mongoose.model('Task', Task)