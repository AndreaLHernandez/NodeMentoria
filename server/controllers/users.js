const getUser = (req, res) => {
    // return res.status(200).send('Hola desde express');
    try {
        return res.status(200).send('Usuario encontrado');
    }
    catch(error){
        return res.status(404).send(error.message);
    }
}

const postUser = (req, res) => {
    // return res.status(200).send('Hola desde express');
    try {
        return res.status(200).send('Usuario creado');
    }
    catch(error){
        return res.status(404).send(error.message);
    }
}

const putUser = (req, res) => {
    // return res.status(200).send('Hola desde express');
    try {
        return res.status(200).send('Usuario actualizado');
    }
    catch(error){
        return res.status(404).send(error.message);
    }
}

const deleteUser = (req, res) => {
    // return res.status(200).send('Hola desde express');
    try {
        return res.status(200).send('Usuario borrado');
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