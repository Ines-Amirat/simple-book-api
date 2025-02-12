
import connexion from '../../config/db.js';

function GET_books(req, res) {


    connexion.query("select * from books ", function (err, result, fields) {
        if (err) {
            console.log("error");
        } else if (result != "") {

            console.log(result);
            res.setHeader('Content-type', 'application/json');
            res.write(JSON.stringify(result));
            res.end();
        }
        else {
            console.log(result);
            res.setHeader('Content-type', 'application/json');
            res.write(JSON.stringify({ message: "no books available " }));
            res.end();
        }
    });

}

export default GET_books;

