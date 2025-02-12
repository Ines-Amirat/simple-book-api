
import  connexion  from '../../config/db.js';

 function books_endpoints(req,res) {

    if (req.url == '/api/books' && req.method == 'GET') {
        connexion.query("select * from books ", function (err, result, fields) {
            if (err) {
                console.log("error");
            } else {

                console.log(result);
                res.setHeader('Content-type', 'application/json');
                res.write(JSON.stringify(result));
                res.end();
            }
        });
        return res ;

    }
}

export default  books_endpoints

