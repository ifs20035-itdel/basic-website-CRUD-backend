const listAllUser = `SELECT * FROM user`;
const getUserById = `SELECT * FROM user where id==$1`;



module.exports {
  listAllUser,
  getUserById,
}