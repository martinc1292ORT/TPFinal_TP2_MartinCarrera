import UserService from "../services/UserService.js";

class UserController {
  constructor(service) {
    this.userService = service;
  }

  // GET 
  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).send({
        success: true,
        message: users,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  // POST 
  createUser = async (req, res) => {
    try {
      const { name, mail, pass, roleId} = req.body;

      const user = await this.userService.createUser({
        name,
        mail,
        pass,
        roleId: roleId
      });

      res.status(201).send({
        success: true,
        message: user, // { id, name }
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  // POST 
  login = async (req, res) => {
    try {
      const { mail, pass } = req.body;

      const token = await this.userService.login({ mail, pass });
      
      res.cookie("payload", token);

      res.status(200).send({
        success: true,
        message: "Usuario logueado",
      });

    } catch (error) {
      res.status(401).send({
        success: false,
        message: error.message,
      });
    }
  };

  // GET
  me = async (req, res) => {
    try {
      const { user } = req; // viene del middleware authenticate
      const data = await this.userService.me(user);
      res.status(200).send({
        success: true,
        message: data,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserController;
