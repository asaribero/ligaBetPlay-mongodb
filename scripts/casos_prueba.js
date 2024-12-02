// Caso de Prueba 1: Insertar un documento en el nodo primario
print("Insertando documento en el primario...");
db.equipos.insertOne({
  "_id": "E6",
  "nombre": "Santa Fe",
  "ciudad": "Bogotá",
  "entrenador": "Harold Rivera"
});


print("Comando para consultar desde un secundario");
db.getMongo().setReadPref("secondary");

print("Consultando documento desde nodo secundario...");
var resultado = db.equipos.find({ "_id": "E6" });
printjson(resultado.toArray());

// Caso de Prueba 2: Elección de un Nuevo Nodo Primario
rs.status();

// Caso de Prueba 3: Disponibilidad de Lecturas en Secundarios

db.getMongo().setReadPref("secondary");
db.jugadores.find();