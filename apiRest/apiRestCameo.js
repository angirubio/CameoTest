const express = require("express");
const bodyParser = require('body-parser');
const { request } = require("http");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let cors = require('cors')
app.use(cors())

let mysql = require("mysql");
let connection = mysql.createConnection
(
    {
        host: "localhost",
        user: "root",
        password: null,
        database: "CAMEO"
    }
)

connection.connect(function(err,res)
{
    if (err)
    console.log(err);
    else
    console.log("Conectado!");
});

app.post("/usuario",
    function(req, response)
    {
        let sql = "INSERT INTO usuario (nombre, apellido, nombre_usuario, email, contrasena, foto) VALUES (?, ?, ?, ?, ?, ?, ?)";
        connection.query(sql, [req.body.nombre, req.body.apellido, req.body.nombre_usuario, req.body.email, req.body.contrasena, req.body.foto, req.body.satus], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.post("/usuario/login",
    function(req, response)
    {
        let sql = "SELECT * FROM usuario WHERE (usuario.nombre_usuario = ? AND usuario.contrasena = ?)";
        connection.query(sql, [req.body.nombre_usuario, req.body.contrasena], function( err, result)
        {
            if (err)
            console.log(err);
            else
            {
                response.send(result);
            }
        })
    }
);

app.put("/usuario",
    function(req, response)
    {
        let array = [req.body.nombre, req.body.apellido, req.body.nombre_usuario, req.body.email, req.body.contrasena, req.body.foto, req.body.status, req.body.usuario_id]
        let sql = "UPDATE usuario SET nombre = ?, apellido = ?, nombre_usuario = ?, email = ?, contrasena = ?, foto = ?, status = ? WHERE usuario_id = ?";
        connection.query(sql, array, function( err, result)
        {
            if (err)
            console.log(err);
            else{
                response.send(result);
                console.log(array);
            }
        })
    }
);

// app.put("/usuario",
//     function(req, response)
//     {
//         let array = [req.body.titulo, req.body.interprete, req.body.anyoPublicacion, req.body.usuario_id]
//         let sql = "UPDATE usuario SET titulo = ?, interprete = ?, anyoPublicacion = ? WHERE usuario_id = ?";
//         connection.query(sql, array, function( err, result)
//         {
//             if (err)
//             console.log(err);
//             else
//             {
//                 response.send(result);
//             }
//         })
//     }
// );

// app.delete("/usuario",
//     function(req, response)
//     {
//         let sql = "DELETE FROM usuario WHERE usuario_id = ?";
//         connection.query(sql, [req.body.id], function( err, result)
//         {
//             if (err)
//             console.log(err);
//             else
//             {
//                 response.send(result);
//             }
//         })
//     }
// );

app.listen(3000);