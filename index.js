const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const routerApiV1 = require( './server/routes/index.js')

const app = express();
const port = 5000;//puede ser cualquier puerto

app.use(morgan('dev'));//Use activa morgan en todo el proyecto
app.use(cors());//Use activa cors con () para que todos los usuarios puedan ingresar esto se debe de configurar solo para user autorizados
app.use(express.json());//Use activa express.json para que los datos sean enviados en formato json

app.get('/get', (req, res) => {
    return res.status(200).send('Hola desde express');
});

app.use('/api/v1', routerApiV1);

app.listen(port, () =>{
     console.log(`Listening on port ${port}!`)
});

// console.log('Hello World xd');
