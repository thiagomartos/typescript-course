import * as http from 'http';

const server = http.createServer();

server.listen(3000, () => console.log('Server está rodando na port 3000'));