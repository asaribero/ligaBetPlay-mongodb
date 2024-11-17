// Crear un nuevo equipo
db.equipos.insertOne({ "_id": "E6", "nombre": "Santa Fe", "ciudad": "Bogotá", "entrenador": "Harold Rivera" });

// Leer jugadores de Atlético Nacional
db.jugadores.find({ "equipo_id": "E1" }).pretty();

// Actualizar puntos de un equipo
db.tabla_posiciones.updateOne(
    { "_id": "E1" },
    { $set: { "puntos": 40 } }
);

// Eliminar un partido
db.partidos.deleteOne({ "_id": "M301" });
