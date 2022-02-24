const getUser = (req, res) => {
    // return res.status(200).send('Hola desde express');
    try {
        const {page, name} = req.query;
        console.log(page, name);
        return res.status(200).send('Usuario encontrado');
    }
    catch(error){
        return res.status(404).send(error.message);
    }
}

const postUser = (req, res) => {// necesita los valore para crear el usuario, se obtienen del body
    try {
        const{name, email} = req.body;
        console.log(name, email);
        return res.status(200).send('Usuario creado');
    }
    catch(error){
        return res.status(404).send(error.message);
    }
}

const putUser = (req, res) => {
    // return res.status(200).send('Hola desde express');
    try {

        const{body, params} = req;
        console.log(body, params);
        return res.status(200).send('Usuario actualizado con id:'+params.id);
    }
    catch(error){
        return res.status(404).send(error.message);
    }
}

const deleteUser = (req, res) => {
    // return res.status(200).send('Hola desde express');
    try {
        const { id } = req.params;
        return res.status(200).send('Usuario borrado con id: ' + id);
    }
    catch(error){
        return res.status(404).send(error.message);
    }
}

module.exports = { //se usan {} cuando se van a exportar varios metodos
    getUser,
    postUser,
    putUser,
    deleteUser
};