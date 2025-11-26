class RoleController {
  constructor(roleService) {
    this.roleService = roleService;
  }

  getAll = async (req, res) => {
    try {
      const roles = await this.roleService.getAll();
      res.status(200).send({
        success: true,
        message: roles,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getOne = async (req, res) => {
    try {
      const { id } = req.params;
      const role = await this.roleService.getById(id);
      res.status(200).send({
        success: true,
        message: role,
      });
    } catch (error) {
      res.status(404).send({
        success: false,
        message: error.message,
      });
    }
  };

  create = async (req, res) => {
    try {
      const { roleName } = req.body;
      if (!roleName) {
        return res.status(400).send({
          success: false,
          message: "El nombre de rol es obligatorio",
        });
      }
      const role = await this.roleService.create({ roleName });
      res.status(201).send({
        success: true,
        message: role,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.params;
      const { roleName } = req.body;

      const role = await this.roleService.update(id, { roleName });
      res.status(200).send({
        success: true,
        message: role,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  delete = async (req, res) => {
    try {
      const { id } = req.params;
      await this.roleService.delete(id);

      res.status(200).send({
        success: true,
        message: "Rol eliminado correctamente",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };


  getMyRole = async (req, res) => {
    try {
      const roleId = req.user.role; // viene del token
      const role = await this.roleService.getByIdSimple(roleId);

      if (!role) {
        return res.status(404).send({
          success: false,
          message: "Rol no encontrado",
        });
      }

      res.status(200).send({
        success: true,
        message: role,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default RoleController;
