const db = require('../../config/database') 
const date = require('../utils/dates')
module.exports = {
    all(callback){
        const query = `SELECT * FROM messages`
       db.query(query, function(err, results){
            if (err) return res.send("Houve um erro com sua busca")
            callback(results.rows)
       })
    },
    show(id, res, callback){

        const query = `SELECT * FROM messages WHERE message_id=${id}`
        db.query(query, function(err, results){
            if (err) return res.send(err)
            callback(results.rows)
        })

    },
    create(data,res, callback){
        console.log(data)
        const query = `INSERT INTO messages (message, url, created_at) VALUES($1, $2, $3) RETURNING message_id`
        
        const values = [data.message, data.url, date.date()]
        db.query(query, values, function(err, results){
            console.log(err)
            if (err) return res.send(err)
            callback(results.rows[0])
        })

    },
    update(){

    },
    delete(){

    }


}