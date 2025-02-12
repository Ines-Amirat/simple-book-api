
import GET_books from '../../src/data_access/booksQueries.js';

 function books_endpoints(req,res) {

    if (req.url == '/api/books' && req.method == 'GET') {
        GET_books(req,res)

    }
}

export default  books_endpoints

