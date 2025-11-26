import Role from "./Role.js";
import User from "./User.js";
import Task from "./Task.js";

Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role, { foreignKey: "roleId" });

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

export { Role, User, Task };
