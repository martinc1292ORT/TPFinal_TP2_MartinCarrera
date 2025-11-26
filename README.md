# **TP2 – Gestor de Tareas**

API RESTful enfocada principalmente en la gestión de tareas, que además incluye la administración de usuarios y roles.
Implementada con **Node.js**, **Express**, **Sequelize** y autenticación mediante **JWT**, siguiendo arquitectura **MVC + Services**.

---

## **Tecnologías**

- Node.js  
- Express  
- Sequelize ORM  
- MySQL  
- JWT  
- Bcrypt  
- Cookie-Parser  
- Dotenv  
- Arquitectura MVC + Services

---

## **Instalación**

### **1. Clonar repositorio**
~~~bash
git clone https://github.com/martinc1292ORT/TPFinal_TP2_MartinCarrera.git
~~~

### **2. Instalar dependencias**
~~~bash
npm install
~~~

### **3. Configurar entorno**
Crear un archivo `.env` en la raíz:

~~~env
DB_NAME=gestorTareasbd
DB_USER=root
DB_PASSWORD=
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
SERVER_PORT=3000
JWT_SECRET=G3st0rTar3as!

~~~

### **4. Crear base de datos**

Este proyecto utiliza Sequelize como ORM para la gestión de la base de datos, junto con MySQL a través de XAMPP.
Debido a esto, no es necesario crear la base de datos manualmente mediante comandos SQL.
Sequelize se encargará de generar automáticamente la base de datos y las tablas correspondientes.
Solo es necesario asegurarse de que MySQL esté en ejecución en XAMPP y que los datos de conexión estén correctamente configurados en el archivo de entorno.
~~~

### **5. Ejecutar servidor**
~~~bash
npm run dev
~~~

Salida esperada:
~~~
🚀 Modelos de la BD sincronizados
🚀 Servidor escuchando en http://localhost:3000
~~~

---

## **Endpoints principales**

### **Autenticación**

#### **POST /users** — Registrar usuario
~~~json
{
  "name": "Martin",
  "mail": "martin@example.com",
  "pass": "1234",
  "roleId": 1
}
~~~

#### **POST /users/login** — Iniciar sesión  
Genera cookie con JWT.
~~~json
{
  "mail": "martin@example.com",
  "pass": "1234"
}
~~~

#### **GET /users/me**  
Retorna los datos del usuario autenticado.

---

## **Tareas**

Todas las rutas requieren autenticación.

### **POST /tasks** — Crear tarea
~~~json
{
  "title": "Estudiar",
  "description": "Repasar MVC",
  "priority": "alta"
}
~~~

### **GET /tasks** — Listar tareas del usuario  
Admins (`roleId = 1`) ven todas.

Filtros:
~~~
/tasks?status=pending
/tasks?priority=high
/tasks?order=priority
~~~

### **GET /tasks/:id** — Obtener tarea

### **PUT /tasks/:id** — Actualizar tarea
~~~json
{
  "status": "hecho"
}
~~~

### **DELETE /tasks/:id** — Eliminar tarea

---

## **Arquitectura**

~~~
src/
 ├─ controllers/    -> Controladores
 ├─ services/       -> Lógica de negocio
 ├─ models/         -> Modelos Sequelize
 ├─ routes/         -> Rutas
 ├─ middlewares/    -> Autenticación JWT
 ├─ utils/          -> Helpers y tokens
 ├─ db/             -> Configuración Sequelize
 └─ app.js          -> Configuración Express
~~~

---

## **Autenticación**

- Login genera un **JWT**  
- El token se guarda en cookie (`payload`)  
- El middleware `authenticate` valida el token  
- Si es válido, agrega `req.user`  
- Todas las rutas protegidas dependen de este mecanismo  
