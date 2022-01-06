const db = require('../config/database')
module.exports = {
    getUsers: ()=> {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
                if(error){
                    reject(new Error(error))
                } else {
                    resolve(results)
                }
            })
        })
    }
}