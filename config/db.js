import mysql from 'mysql'

const connexion = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      database: 'Library_managment',
      user: 'root',
      password: 'Ines.2004!!'
});


connexion.connect(function (err) {
      if (err) {
            console.log("connexion failure ");
      }
      else {
            console.log("connexion successed ");
      }
})


export default connexion;
