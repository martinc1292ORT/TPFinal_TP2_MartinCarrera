import Role from "./Role.js";
import User from "./User.js";

// uno a muchos
Role.hasMany(User, { foreignKey: "roleId" });

// uno a uno
User.belongsTo(Role, { foreignKey: "roleId" });

export { Role, User };
