const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/tareas')
    .then(db => console.log('base de datos conectada'))
    .catch(err => console.error(err));


//Configuraciones
app.set('port', process.env.port || 4000);

//Archivos estaticos
//console.log(__dirname+'\\public')
app.use(express.static(__dirname+'\\public'));

//Middlewares


app.use(morgan('dev'));

app.use(express.json());

//Routes
app.use('/tasks', require('./routes/tasks'))



//Servidor escuchando
app.listen(app.get('port'), ()=>{
    console.log('Servidor en puerto', app.get('port'));
    
})