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

// REGISTRO DE USUARIOS

app.post("/usuario",
    function(req, response)
    {
        let sql = "INSERT INTO usuario (nombre, apellido, nombre_usuario, email, contrasena, foto, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
        connection.query(sql, [req.body.nombre, req.body.apellido, req.body.nombre_usuario, req.body.email, req.body.contrasena, req.body.foto, req.body.status], function( err, result)
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


// LOGIN

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


// ACTUALIZACION DE PERFIL

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


// CREACION DE CLASES

app.post("/clases", (req, res) => {
    let params = [
      req.body.titulo,
      req.body.descripcion,
      req.body.precio,
      req.body.tema,
      req.body.habilidad,
      req.body.fecha,
      req.body.plataforma,
      req.body.foto,
      req.body.usuario_id
    ];
    let sql =
      "INSERT INTO CLASES (titulo, descripcion, precio, tema, habilidad, fecha, plataforma, foto, usuario_id) VALUES (?,?,?,?,?,?,?,?,?)";
    connection.query(sql, params, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log("Clase creada correctamente!");
        res.send(result);
        console.log(result);
      }
    });
  });

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

//ENDPOINT DE CAMEOS

//OBTIENE TODOS LOS CAMEOS DEL USUARIO CON EL ID PASADO POR EL PARÁMETRO
app.get("/usuario/cameos/:id",      
    function (request, response)
    {
            let params = request.params.id;
            let sql = "SELECT * FROM cameos WHERE usuario_id = ?";

            connection.query(sql, params, function (err, result)
            {
                if (err)
                    console.log(err);
                else
                {
                    if(result == 0)
                    {
                        response.send("todavía no te has apuntado a ningún cameo");
                    }
                   
                    else
                    {
                        console.log("Esta es la lista de tus cameos: ");
                        console.log(result);
                        response.send(result); 
                    }
                }
            });
    });

//AÑADE UN NUEVO CAMEO A LA LISTA DE CAMEOS
app.post("/usuario/cameos",
function(request, response)
{
    let params = new Array (request.body.clase_id, request.body.usuario.id);
    let sql = "INSERT INTO cameos (clase_id, usuario_id) VALUES (?, ?)";

    connection.query(sql, params, function (err, result)
    {
        if (err)
            console.log(err);

        else     
        {
            console.log("Nuevo cameo añadido: ");
            console.log(result);
            response.send(JSON.stringify({ mensaje: "Nuevo cameo añadido con id: " + result.insertId}));
        }   
    });
});
app.listen(3000);