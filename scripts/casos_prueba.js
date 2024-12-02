// Prueba 1: Insertar un documento en el nodo primario
print("Insertando documento en el primario...");
db.equipos.insertOne({
  "_id": "E6",
  "nombre": "Santa Fe",
  "ciudad": "Bogotá",
  "entrenador": "Harold Rivera"
});

// Prueba 2: Consultar el documento en los nodos secundarios
print("Habilitando lectura desde nodos secundarios...");
db.getMongo().setSlaveOk();

print("Consultando documento desde nodo secundario...");
var resultado = db.equipos.find({ "_id": "E6" });
printjson(resultado.toArray());