// Inicializar el Replica Set
rs.initiate({
    _id: "rs0", // Nombre del Replica Set
    members: [
      { _id: 0, host: "localhost:27017" }, // Nodo primario
      { _id: 1, host: "localhost:27018" }, // Nodo secundario
      { _id: 2, host: "localhost:27019" }  // Nodo secundario
    ]
  });
  
  // Verificar el estado del Replica Set
  print("Estado del Replica Set:");
  printjson(rs.status());