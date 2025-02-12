import http, { request } from 'http';
import 'dotenv/config';
import books_endpoints from '../src/endpoints/books.js';


const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {


      if (req.url == '/api/books' && req.method == 'GET') {
              books_endpoints(req,res);
      }
      
             

});

console.log(import.meta.url)

server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
});
//server.listen(8000);

