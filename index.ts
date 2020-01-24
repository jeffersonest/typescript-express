import Server from './src/server'
const server = new Server(3000)
console.log(server.getPort())