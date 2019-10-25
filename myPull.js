class Connection {
    constructor() {
        this.resourse = 'someResourse';
    }

    use() {
        console.log(`$use ${this.resourse}`);
    }
}

class Client {
    constructor() {
        this.connection = null;
    }

    requestConnection(pull) {
        pull.giveConnection().then(connection => {
            this.connection = connection
        })
    }

    destroyConnection() {
        this.connection.returnConnectionToPull()
    }

    useConnection() {
        this.connection.useConnection();
    }
}

class OpenedConnection {
    constructor(pull, connection) {
        this.pull = pull
        this.connection = connection
        // this.returnTimer = setTimeout(() => {this.returnConnectionToPull()}, 300)
    }

    useConnection() {
        clearTimeout(this.returnTimer)
        this.returnTimer = setTimeout(() => {this.returnConnectionToPull()}, 300)
        this.connection.use()
    }

    returnConnectionToPull() {
        this.pull.getConnectionBack(this.connection);
        this.pull = 'connection is closed'
        this.connection = 'connection is closed'
    }
}

class Resolver {
    constructor(resolve, pull) {
        this.resolve = resolve
        this.pull = pull
    }

    resolveConnection() {
        this.resolve(new OpenedConnection(pull, this.pull.freeConnections[0]))
    }
}

class Pull {
    constructor() {
        this.freeConnections = [new Connection(this), new Connection(this), new Connection(this)];
        this.givenConnections = [];
        this.clientQueue = [];
    }

    // resolveConnection() {
    //     this.clientQueue.pop().resolveConnection()
    // }


    giveConnection() {
        let resolveConnection;
        let connectionPromise = new Promise((resolve, reject) => {
            resolveConnection = resolve
        })
        if (this.freeConnections.length) {
            let toBeGiven = this.freeConnections.shift()
            this.givenConnections.push(toBeGiven)
            let clientResolver = new Resolver(resolveConnection, this)
            clientResolver.resolveConnection()
            return connectionPromise
        } else {
            let clientResolver = new Resolver(resolveConnection, this)
            this.clientQueue.push(clientResolver)
            return connectionPromise
        }
    }

    getConnectionBack(connection) {
        this.freeConnections.push(connection)
        this.givenConnections.shift()
        if (this.clientQueue.length) {
            this.clientQueue[0].resolveConnection()
        }
    }

}

let pull = new Pull()
let client1 = new Client()
let client2 = new Client()
let client3 = new Client()
let client4 = new Client()

client1.requestConnection(pull)
client2.requestConnection(pull)
client3.requestConnection(pull)
client4.requestConnection(pull)


setTimeout(() => {console.log(client1)}, 200)
setTimeout(() => {console.log(client2)}, 200)
setTimeout(() => {console.log(client3)}, 200)
setTimeout(() => {(client3).destroyConnection()}, 200)
setTimeout(() => {console.log(client4)}, 200)

