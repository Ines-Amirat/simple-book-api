import http from 'http';
import 'dotenv/config';

import  connexion  from "../config/db.js";


const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {


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

      }



});

server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});
//server.listen(8000);

