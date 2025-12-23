import Task from "../models/task.model.js";
import TaskComment from "../models/taskComment.model.js";

export const addComment = async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.sendStatus(404);

  const comment = await TaskComment.create({
    task_id: task.id,
    user_id: req.user.id,
    comment: req.body.comment
  });

  res.status(201).json(comment);
};

export const listComments = async (req, res) => {
  const comments = await TaskComment.findAll({
    where: { task_id: req.params.id }
  });

  res.json(comments);
};
