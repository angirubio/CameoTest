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
    "INSERT INTO usuario (nombre, apellido, nombre_usuario, email, contrasena, fotousuario, status) VALUES (?, ?, ?, ?, ?, ?, ?)";
  connection.query(
    sql,
    [
      req.body.nombre,
      req.body.apellido,
      req.body.nombre_usuario,
      req.body.email,
      req.body.contrasena,
      req.body.fotousuario,
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
  connection.query(sql, [req.body.nombre_usuario, req.body.contrasena], function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
});

// Actualizacion de perfil

app.put("/usuario", function (req, response) {
  let array = [
    req.body.nombre,
    req.body.apellido,
    req.body.nombre_usuario,
    req.body.email,
    req.body.contrasena,
    req.body.fotousuario,
    req.body.status,
    req.body.usuario_id,
  ];
  let sql =
    "UPDATE usuario SET nombre = ?, apellido = ?, nombre_usuario = ?, email = ?, contrasena = ?, fotousuario = ?, status = ? WHERE usuario_id = ?";
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
    req.body.publicada
  ];
  let sql =
    "INSERT INTO clases (titulo, descripcion, precio, tema, habilidad, fecha, plataforma, foto, usuario_id, publicada) VALUES (?,?,?,?,?,?,?,?,?,?)";
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
    "(SELECT usuario.usuario_id, usuario.nombre, usuario.apellido, usuario.nombre_usuario, usuario.email, usuario.fotousuario, usuario.status, clases.clases_id, clases.titulo, clases.descripcion, clases.precio, clases.tema, clases.habilidad, clases.fecha, clases.plataforma, clases.foto FROM clases JOIN usuario ON (clases.usuario_id = usuario.usuario_id) WHERE clases.plataforma='presencial' ORDER BY clases.fecha DESC LIMIT 6) UNION ALL (SELECT usuario.usuario_id, usuario.nombre, usuario.apellido, usuario.nombre_usuario, usuario.email, usuario.fotousuario, usuario.status, clases.clases_id, clases.titulo, clases.descripcion, clases.precio, clases.tema, clases.habilidad, clases.fecha, clases.plataforma, clases.foto FROM clases JOIN usuario ON (clases.usuario_id = usuario.usuario_id) WHERE clases.plataforma='online' ORDER BY clases.fecha DESC LIMIT 6)";
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

// Mostrar clases en Organizar Clases

app.get("/clases", function (request, response) {
  console.log(request.query);
  let sql = "SELECT * FROM clases WHERE clases.usuario_id = ? ORDER BY clases.fecha DESC";
  connection.query(sql, [request.query.usuario_id], function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
});

//Añadir cameo

app.post("/clases/cameos", function (req, res) {
  let sql = "INSERT INTO cameos (clases_id, solicitante_id) VALUES (?, ?)";
  connection.query(sql, [req.body.clases_id, req.body.solicitante_id], function (
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

app.get("/clases/miscameos", function (request, response) {
  let sql =
    "SELECT * FROM clases JOIN cameos ON(clases.clases_id = cameos.clases_id) JOIN usuario ON(cameos.solicitante_id = usuario.usuario_id) WHERE cameos.solicitante_id = ?";
  connection.query(sql, [request.query.solicitante_id], function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
});

app.get("/clases/solicitudes", function (request, response) {
  let sql =
    "SELECT * FROM clases JOIN cameos ON(clases.clases_id = cameos.clases_id) JOIN usuario ON(cameos.solicitante_id = usuario.usuario_id) WHERE clases.usuario_id = ?";
  connection.query(sql, [request.query.usuario_id], function (err, result) {
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
    "SELECT * FROM clases WHERE titulo LIKE '%" + req.query.titulo + "%' OR descripcion LIKE '%" + req.query.titulo + "%' OR tema LIKE '%" + req.query.titulo + "%' OR habilidad LIKE '%" + req.query.titulo + "%'";
  console.log(sql);

  connection.query(sql, function (err, result) {
    if (err) console.log(err);
    else {
      response.send(result);
    }
  });
});

//Chat

app.post("/chat", (req, res) => {
  let sql =
    "INSERT INTO chat (usuario_id, receptor_id, mensaje) VALUES (?,?,?)";
  connection.query(sql, [req.body.usuario_id, req.body.receptor_id, req.body.mensaje], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/chat/conversacion", (req, res) => {
  let sql ="SELECT mensaje FROM chat WHERE usuario_id = ? AND receptor_id = ? OR receptor_id = ? AND usuario_id = ? ORDER BY mensaje_id";
  connection.query(sql, [req.query.usuario_id, req.query.receptor_id, req.query.usuario_id, req.query.receptor_id], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/chat/usuarios", (req, res) => {
  let sql =
    "SELECT DISTINCT usuario.usuario_id, usuario.nombre_usuario, usuario.fotousuario FROM usuario JOIN chat ON (usuario.usuario_id = chat.receptor_id) WHERE chat.usuario_id = ? OR chat.receptor_id = ?";
  connection.query(sql, [req.query.usuario_id, req.query.receptor_id], function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3000);
