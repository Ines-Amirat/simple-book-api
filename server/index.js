import http, { request } from 'http';
import 'dotenv/config';
import connexion from '../config/db.js';


const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
      res.setHeader('Content-type', 'application/json');

      // Route : Page d'accueil 
      if ((req.url == '/' && req.method == 'GET')) {
            res.write(JSON.stringify({ message: "Bienvenue dans l'API" }));
            res.end();

      }
      else {
            // Route : Liste des livres
            if (req.url == '/api/books' && req.method == 'GET') {
                  connexion.query("select * from books ", function (err, result, fields) {
                        if (err) {
                              console.log("error");
                              res.statusCode = 500;
                              res.write(JSON.stringify({ message: "Server Error" }));
                              res.end();
                        } else {
                              if (result != "") {
                                    console.log(result);
                                    res.statusCode = 200;
                                    res.write(JSON.stringify(result));

                              }
                              else {
                                    console.log(result);
                                    res.statusCode = 200;
                                    res.write(JSON.stringify({ message: "no books available " }));

                              }
                              res.end();
                        }

                  });
            }
            // Route : Ajouter un livre par l'Admin
            else if (req.url == '/api/books' && req.method == 'POST') {
                  let body = "";
                  req.on('data', (chunk) => {
                        body += chunk.toString();
                  })
                  req.on('end', () => {
                        try {
                              const newbook = JSON.parse(body);
                              const query = "INSERT INTO books (book_id, title,  author, genre, published_year, state) values (?, ?, ?, ?, ?, ?)";
                              const values = [newbook.book_id, newbook.title, newbook.author, newbook.genre, newbook.published_year, newbook.state];
                              connexion.query(query, values, (err) => {

                                    res.setHeader('Content-type', 'application/json');
                                    if (err) {
                                          res.statusCode = 500;
                                          res.write(JSON.stringify({ message: "Error " }));
                                    }
                                    else {
                                          res.statusCode = 201;
                                          res.write(JSON.stringify({ message: "Book added successfully " }));

                                    }
                                    res.end();
                              });
                        }
                        catch (error) {
                              res.setHeader('Content-type', 'application/json');
                              res.statusCode = 400;
                              res.write(JSON.stringify({ message: "Invalid JSON format " }));
                              res.end();

                        }
                  });
            }
            // Route : Supprimer un livre par l'Admin
            else if (req.url.startsWith('/api/books') && req.method == 'DELETE') {
                  const id = req.url.split('/')[3];
                  const query = `delete from books where book_id = ?`;
                  connexion.query(query, [id] , function (err, result, fields) {
                        res.setHeader('Content-type', 'application/json');
                        if (err) {
                              res.statusCode = 500;
                              res.write(JSON.stringify({ message: "Server Error" }));
                             
                        } else {
                              res.statusCode = 201;
                              res.write(JSON.stringify({ message: "Book deleted successfully " }));

                        }
                        res.end();

                  });

            }
      }




});

console.log(import.meta.url)

server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});
//server.listen(8000);

