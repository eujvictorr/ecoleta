// importar a dependencia do sqlite3 
const sqlite3 = require("sqlite3").verbose() 

// criar o objeto que vai fazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

/*

// utilizar o objeto de banco de dados, para nossas operacoes 
db.serialize(() => {
    
    // com comando sql =>
    
    // 1 criar uma tabela 
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            image TEXT, 
            name TEXT,
            adress TEXT, 
            adress2 TEXT, 
            state TEXT, 
            city TEXT, 
            items TEXT
        );
    `) 

    // 2 inserir dados na tabela
    const query = `
        INSERT INTO places(
            image, 
            name, 
            adress, 
            adress2, 
            state, 
            city, 
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        "https://www.google.com",
        "Colectoria", 
        "Guilherme Gemballa, Jardim America", 
        "Numero 260", 
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletronicos, lampadas"
    ]
   
    function afterInsertData(err) {
        if(err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)
    
    // 3 consultar os dados da tabela
    db.all(`SELECT name FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }

        console.log(rows)
    })
    
    // 4 deletar os dados da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
        if(err){
            return console.log(err)
        }
        
        console.log("Registro deletado com sucesso")
    })
})

*/