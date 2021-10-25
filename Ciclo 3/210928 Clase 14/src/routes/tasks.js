const express = require('express');
const router  = express.Router();

const Task = require('../models/Task');
router.get('/', async(req,res) => {
    const tareas = await Task.find();
    console.log(tareas);
    res.json(tareas);
    //task.find();
    //res.send('Hay tareas aquí');
})

router.post('/', async(req,res) => {
    new Task();
    console.log(new Task())
})

module.exports = router;