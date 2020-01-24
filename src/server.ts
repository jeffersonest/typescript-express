class Server {
    protected port: number

    constructor(_port: number) {
        this.port = _port 
    }

    getPort(): number {
        return this.port
    }
}

export default Server