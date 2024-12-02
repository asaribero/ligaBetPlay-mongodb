# Liga BetPlay - MongoDB NoSQL Project

## Descripción
Este proyecto implementa el diseño de una base de datos NoSQL para gestionar el torneo Liga BetPlay Dimayor 2024, desarrollado en MongoDB. Incluye la gestión de:
- Equipos
- Jugadores
- Árbitros
- Partidos
- Tabla de posiciones

## Contenido del Repositorio
- `colecciones/`: Archivos JSON con los datos de las colecciones.
- `scripts/`: Scripts de MongoDB para la creación de colecciones y operaciones CRUD.

## Cómo usar
1. Importa las colecciones en MongoDB usando Compass o `mongoimport`.
2. Ejecuta los scripts de creación y operaciones CRUD con `mongosh`.

## Video Explicativo
[Ver video](https://laiberocol-my.sharepoint.com/:v:/g/personal/aamazoro_estudiante_ibero_edu_co/EWJPPAs7lHpKi2eRwZhX7c8BuI7T9D_KIxswRKAvYpeZ4A?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ULx2cZ)


## Documentación actividad 2

Escenario de Pruebas	
-	Configuración del Replica Set:
•	Nodo Primario: localhost:27017
•	Nodo Secundario 1: localhost:27018
•	Nodo Secundario 2: localhost:27019
-	Base de Datos: ligaBetPlay
-	Colecciones Probadas: equipos, jugadores, partidos


Caso de Prueba 1: Replicación de Datos
•	Descripción: Verificar que los datos insertados en el nodo primario se replican automáticamente en los nodos secundarios.
•	Pasos:
1.	Conéctate al nodo primario (puerto 27017).
2.	Inserta un documento en la colección equipos:
db.equipos.insertOne({
  _id: "E7",
  nombre: "Tolima",
  ciudad: "Ibagué",
  entrenador: "Hernán Torres"
});
3.	Conéctate a uno de los nodos secundarios (puerto 27018) y habilita lecturas:
db.getMongo().setReadPref("secondary");
db.equipos.find({ _id: "E7" });
•	Resultado Esperado: El documento insertado en el primario debe estar disponible en el secundario.

Caso de Prueba 2: Elección de un Nuevo Nodo Primario
•	Descripción: Simular la caída del nodo primario y verificar que se elija automáticamente un nuevo nodo primario.
•	Pasos:
1.	Detén el nodo primario:
Ctrl+C en la terminal del nodo primario.
2.	Conéctate a uno de los nodos secundarios (por ejemplo, 27018) y verifica el nuevo estado:
rs.status();
•	Resultado Esperado: Uno de los nodos secundarios debe ser elegido el nuevo primario (stateStr: "PRIMARY").

Caso de Prueba 3: Disponibilidad de Lecturas en Secundarios
•	Descripción: Probar que los nodos secundarios pueden manejar operaciones de lectura.
•	Pasos:
1.	Conéctate a un nodo secundario (por ejemplo, 27018) y habilitas lecturas:
db.getMongo().setReadPref("secondary");
db.jugadores.find();
•	Resultado Esperado: Los nodos secundarios devuelven los datos disponibles en la base de datos.

## Video Explicativo actidad 2
[Ver video] = https://laiberocol-my.sharepoint.com/:v:/g/personal/aamazoro_estudiante_ibero_edu_co/EW3PCbekWgZHpgUhWK3iXlIBkCGxskMOsa_MwNIrfthKaw?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=35NAQ9
