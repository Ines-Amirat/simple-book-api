import http from 'http';
import 'dotenv/config';

const PORT = process.env.PORT || 8000;
const server = http.createServer((req, res) => {
      res.write("hello");
      res.end();
});

server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });
//server.listen(8000);

