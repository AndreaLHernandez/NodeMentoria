const express = require('express');
const app = express();
const port = 5000;//puede ser cualquier puerto

app.get('/get', (req, res) => {
    return res.status(200).send('Hola desde express');
    // res.send('Hello World!')

});

app.listen(port, () =>{
     console.log(`Listening on port ${port}!`)
});

console.log('Hello World xd');
