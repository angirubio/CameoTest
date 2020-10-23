const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("http");

const app = express();

let cors = require("cors");
let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: null,
  database: "CAMEO",
});

connection.connect(function (err, res) {
  if (err) console.log(err);
  else console.log("Conectado!");
});

// REGISTRO DE USUARIOS

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/usuario", function (req, response) {
  let sql =
    "INSERT INTO usuario (nombre, apellido, nombre_usuario, email, contrasena, foto, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [
      req.body.nombre,
      req.body.apellido,
      req.body.nombre_usuario,
      req.body.email,
      req.body.contrasena,
      req.body.foto,
      req.body.status,
    ],
    function (err, result) {
      if (err) console.log(err);
      else {
        response.send(result);
      }
    }
  );
});

// Login

app.post("/usuario/login", function (req, response) {
  let sql =
    "SELECT * FROM usuario WHERE (usuario.nombre_usuario = ? AND usuario.contrasena = ?)";
  connection.query(
    sql,
    [req.body.nombre_usuario, req.body.contrasena],
    function (err, result) {
      if (err) console.log(err);
      else {
        response.send(result);
      }
    }
  );
});

// Actualizacion de perfil

app.put("/usuario", function (req, response) {
  let array = [
    req.body.nombre,
    req.body.apellido,
    req.body.nombre_usuario,
    req.body.email,
    req.body.contrasena,
    req.body.foto,
    req.body.status,
    req.body.usuario_id,
  ];
  let sql =
    "UPDATE usuario SET nombre = ?, apellido = ?, nombre_usuario = ?, email = ?, contrasena = ?, foto = ?, status = ? WHERE usuario_id = ?";
  connection.query(sql, array, function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
      console.log(array);
    }
  });
});

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
    req.body.usuario_id,
  ];
  let sql =
    "INSERT INTO clases (titulo, descripcion, precio, tema, habilidad, fecha, plataforma, foto, usuario_id) VALUES (?,?,?,?,?,?,?,?,?)";
  connection.query(sql, params, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// MOSTRAR CLASES EN HOME

app.get("/home", (req, res) => {
  let sql =
    "SELECT usuario.nombre_usuario, CLASES.clases_id, clases.titulo, clases.descripcion, CLASES.precio, CLASES.tema, CLASES.habilidad, CLASES.fecha, CLASES.plataforma, CLASES.foto FROM CLASES JOIN usuario ON (CLASES.usuario_id = usuario.usuario_id) ";
  connection.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log("Lista de CAMEOS encontrada!");
      res.send(result);
      console.log(result);
    }
  });
});

//Mostrar clases en Organizar Clases

app.get("/clases", function (request, response) {
  console.log(request.query);
  let sql = "SELECT * FROM clases WHERE clases.usuario_id = ?";
  connection.query(sql, [request.query.usuario_id], function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
});

//Añadir cameo

app.post("/clases/cameos", function (req, res) {
  let sql = "INSERT INTO cameos (clases_id, usuario_id) VALUES (?, ?)";
  connection.query(sql, [req.body.clases_id, req.body.usuario_id], function (
    err,
    result
  ) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//Acceso a cameos

app.get("/clases/cameos", function (request, response) {
  let sql =
    "SELECT * FROM clases JOIN cameos ON(clases.clases_id = cameos.clase_id) JOIN usuario ON(cameos.usuario_id = usuario.usuario_id) WHERE cameos.usuario_id = ?";
  connection.query(sql, [request.body.usuario_id], function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
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

//Filtrar búsquedas

app.get("/clases/buscar", function (req, response) {
  let sql =
    "SELECT * FROM clases WHERE titulo LIKE '%" + req.query.titulo + "%'";
  console.log(sql);

  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
});

// Funciona:
// SELECT * FROM clases WHERE clases.titulo LIKE '%petanca%'

app.listen(3000);
