import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, assigned_to } = req.body;

    if (!title || !assigned_to) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const task = await Task.create({
      title,
      description,
      assigned_to,
      created_by: req.user.id,   // 👈 from JWT
      status: "pending"
    });

    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Task creation failed" });
  }
};

export const updateTask = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.sendStatus(404);

  if (task.status === "completed") {
    return res.status(400).json({ message: "Completed task cannot be edited" });
  }

  const { status } = req.body;

  if (status === "completed") {
    if (task.assigned_to !== req.user.id) {
      return res.status(403).json({
        message: "Only assigned user can complete task"
      });
    }
    task.completed_at = new Date();
  }

  task.status = status || task.status;
  await task.save();

  res.json(task);
};

export const listTasks = async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
};
