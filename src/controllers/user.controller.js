import User from "../models/user.model.js";

export const me = async (req, res) => {
  const user = await User.findByPk(req.user.id, {
    attributes: { exclude: ["password"] }
  });
  res.json(user);
};

export const listUsers = async (req, res) => {
  const page = parseInt(req.query.page || 1);
  const limit = parseInt(req.query.limit || 10);

  const users = await User.findAndCountAll({
    where: { deletedAt: null },
    offset: (page - 1) * limit,
    limit,
    attributes: { exclude: ["password"] }
  });

  res.json({
    total: users.count,
    data: users.rows
  });
};

export const updateStatus = async (req, res) => {
  const { status } = req.body;

  await User.update(
    { status },
    { where: { id: req.params.id } }
  );

  res.json({ message: "User status updated" });
};

export const deleteUser = async (req, res) => {
  await User.update(
    { deletedAt: new Date() },
    { where: { id: req.params.id } }
  );

  res.sendStatus(204);
};
