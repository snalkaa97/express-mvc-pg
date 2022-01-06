const res = require('express/lib/response');
const db = require('../config/database')
const userModel  = require('../models/userModel')

const getUsers =  async (request, response) => { //Contoh pake Model
    const userData = await userModel.getUsers();
    const data = {
        success: true,
        msg: 'List All users',
        data: userData.rows,
    }
    response.render('users/index', {data: userData.rows})
}
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    db.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const create = (request, response) => {
        response.render('users/create', {});
  }
  
  const createUser = (request, response) => {
    const { name, email } = request.body
  
    db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results);
      response.status(201).send(`User added with ID: ${results}`)
    })
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, email } = request.body
  
    db.query(
      'UPDATE users SET name = $1, email = $2 WHERE id = $3',
      [name, email, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    db.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }

  module.exports = {
    getUsers,
    create,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }