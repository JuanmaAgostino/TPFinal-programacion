const express = require('express');
const router = express.Router();
const { mostrarAlumnos, obtenerAlumnoPorId, eliminarAlumno, editarAlumno, crearAlumno, obtenerAlumnosConUsuarios } = require('../controller/alumnosController');

//rutas de los distintas cosas que puedo hacer con los alumnos

// /alumnos es el nombre de la tabla a la que quiero ingresar

router.get("/alumnos", mostrarAlumnos); //Muestro todos los alumnos
router.post("/alumnos/:id", obtenerAlumnoPorId);//Muestro el alumno con el id indicado
router.delete("/alumnos/:id", eliminarAlumno);//Elimino al alumno por el id seleccionado
router.put("/alumnos/:id", editarAlumno); //edito el alumno indicado con el id
router.post("/alumnos/", crearAlumno); //creo un alumno
router.get("/alumnos-usuarios", obtenerAlumnosConUsuarios); // Obtener alumnos con datos de usuario


module.exports = router;