
* Backend realizado basado en las clases, siguiendo la estructura de dominios de Autenticación (auth) y Productos (products). 
La idea final es poder crear un archivo para Backend, que pueda ser adaptado a cualquier tienda o comercio de pequeña escala, adoptando el PATRON  "Repository" óptimo para poder cambiar de tipo de bases de datos, de una forma ágil, sin tener que modificar todo el código permitiendo asi, utilizar las mejores opciones en relacion costo beneficio.

**La base de datos esta desplegada en AtlasMongo DB.

***"Inf adicional importante para la configuración  para la configuración del archivo .env"
PORT=4040
DB_HOST=localhost
DB_USERNAME=matias
DB_PASSWORD=mongodb
DB_NAME=mnunez
JWT_SECRET_KEY=clave-secreta

