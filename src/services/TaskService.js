class TaskService {
  constructor(TaskModel) {
    this.Task = TaskModel;
  }

  createTask = async ({ title, description, status, priority, userId }) =>
     {
    const task = await this.Task.create({
      title,
      description,
      status,
      priority,
      userId,
    });
    return task;
  }

  async getTasksByUser(userId, { status, priority } = {}) {
    const where = { userId };

    if (status) {
      where.status = status;
    }
    if (priority) {
      where.priority = priority;
    }

    const tasks = await this.Task.findAll({
      where,
      order: [["createdAt", "DESC"]],
    });

    return tasks;
  }

  async getTaskById(taskId, userId) {
    const task = await this.Task.findOne({
      where: { id: taskId, userId },
    });

    if (!task) {
      throw new Error("Tarea no encontrada");
    }

    return task;
  }

  async updateTask(taskId, userId, data) {
    const task = await this.Task.findOne({
      where: { id: taskId, userId },
    });

    if (!task) {
      throw new Error("Tarea no encontrada");
    }

    await task.update(data);
    return task;
  }

  async deleteTask(taskId, userId) {
    const deleted = await this.Task.destroy({
      where: { id: taskId, userId },
    });

    if (!deleted) {
      throw new Error("Tarea no encontrada");
    }

    return true;
  }
}

export default TaskService;
