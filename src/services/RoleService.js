class RoleService {
  constructor(roleModel) {
    this.Role = roleModel;
  }

  async getAll() {
    return this.Role.findAll();
  }

  async getById(id) {
    const role = await this.Role.findByPk(id);
    if (!role) {
      throw new Error("Rol no encontrado");
    }
    return role;
  }

  async create(data) {
    const role = await this.Role.create(data);
    return role;
  }

  async update(id, data) {
    const role = await this.Role.findByPk(id);
    if (!role) {
      throw new Error("Rol no encontrado");
    }
    await role.update(data);
    return role;
  }

  async delete(id) {
    const deleted = await this.Role.destroy({ where: { id } });
    if (!deleted) {
      throw new Error("Rol no encontrado");
    }
    return true;
  }

  async getByIdSimple(id) {
    return this.Role.findByPk(id);
  }
}

export default RoleService;
