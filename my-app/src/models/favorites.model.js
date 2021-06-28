const connection = require("../db-connection");

const findManyFavorites = () => {
  const sql = "SELECT * FROM favorites";
  return connection.promise().query(sql);
};

const findOneFavoritesById = (id) => {
  const sql = "SELECT * FROM favorites WHERE id=?";
  return connection.promise().query(sql, [id]);
};

const createOneFavorites = (project) => {
  const sql = "INSERT INTO favorites SET ?";
  return connection.promise().query(sql, [project]);
};

const updateOneFavorites = (project, id) => {
  const sql = "UPDATE favorites SET ? WHERE id=?";
  return connection.promise().query(sql, [project, id]);
};

const deleteOneFavorites = (id) => {
  const sql = "DELETE FROM favorites WHERE id=?";
  return connection.promise().query(sql, [id]);
};

// à compléter
const findAllFavoritesInfos = () => {
  const sql = "";
  return connection.promise().query(sql);
};

module.exports = {
  findManyFavorites,
  findOneFavoritesById,
  createOneFavorites,
  updateOneFavorites,
  deleteOneFavorites,
  findAllFavoritesInfos,
};
