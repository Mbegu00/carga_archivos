const express = require('express');
const app = express();
//es para poder recibir los archivos 
const multer = require('multer');
//Es para poder obtener la extenxion de los archivos
const mimeTypes = require('mime-types');

//diskStorage es para guardar en el disco
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        //cb es un callback seria devuelve los valores cuando termine la funcion
        // date.now() es para poder obtener la hora por milisegundoa del servidor
        cb("",Date.now() + "." + mimeTypes.extension(file.mimetype))
    }
})


const upload = multer({
    storage: storage,
})

app.get('/',(req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/views/index.html');
})

//
app.post('/files',upload.single('avatar') ,(req, res)=>{
    res.send('todo bien')
})


app.listen(3000, ()=> console.log('server en linea'))