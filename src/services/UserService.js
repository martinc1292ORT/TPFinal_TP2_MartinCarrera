import { generateToken } from "../utils/jwt.js";

class UserService {
  constructor(userModel, roleModel) {
    this.user = userModel;
    this.role = roleModel;
  }

  getAllUsers = async () => {
    const users = await this.user.findAll({
      attributes: ["id", "name", "mail", "roleId"],
      include: {
        model: this.role,
        attributes: ["roleName"],
      },
    });

    return users;
  };

  createUser = async (data) => {
    const payload = { ...data };
    const { id, name } = await this.user.create(payload);
    return { id, name };
  };

  login = async ({ mail, pass }) => {
    const user = await this.user.findOne({ where: { mail } });
    if (!user) {
      throw new Error("user not found");
    }

    const isValid = await this.user.compare(pass, user.pass);
    if (!isValid) {
      throw new Error("user not found");
    }

    const payload = {
      id: user.id,
      name: user.name,
      role: user.roleId,
    };

    const token = generateToken(payload);
    return token;
  };

  //  Devuelve los datos del usuario autenticado
  me = async (user) => {
    return user;
  };
}

export default UserService;
