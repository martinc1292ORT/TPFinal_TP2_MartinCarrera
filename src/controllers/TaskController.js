class TaskController {
  constructor(taskService) {
    this.taskService = taskService;
  }

  create = async (req, res) => {
    try {
      const userId = req.user.id;
      const { title, description, status, priority } = req.body;

      if (!title) {
        return res.status(400).send({
          success: false,
          message: "El título es obligatorio",
        });
      }

      const task = await this.taskService.createTask({
        title,
        description,
        status,
        priority,
        userId,
      });

      return res.status(201).send({
        success: true,
        message: task,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getAll = async (req, res) => {
    try {
      const userId = req.user.id;
      const { status, priority } = req.query;

      const tasks = await this.taskService.getTasksByUser(userId, {
        status,
        priority,
      });

      return res.status(200).send({
        success: true,
        message: tasks,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getOne = async (req, res) => {
    try {
      const userId = req.user.id;
      const { id } = req.params;

      const task = await this.taskService.getTaskById(id, userId);

      return res.status(200).send({
        success: true,
        message: task,
      });
    } catch (error) {
      return res.status(404).send({
        success: false,
        message: error.message,
      });
    }
  };

  update = async (req, res) => {
    try {
      const userId = req.user.id;
      const { id } = req.params;

      const updated = await this.taskService.updateTask(id, userId, req.body);

      return res.status(200).send({
        success: true,
        message: updated,
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  delete = async (req, res) => {
    try {
      const userId = req.user.id;
      const { id } = req.params;

      await this.taskService.deleteTask(id, userId);

      return res.status(200).send({
        success: true,
        message: "Tarea eliminada correctamente",
      });
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default TaskController;
