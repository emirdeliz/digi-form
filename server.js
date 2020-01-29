const cors = require("cors");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const { MongoClient } = require( "mongodb");
const { MongoMemoryServer } = require( 'mongodb-memory-server');

let db = null;
const getDB = async () => {
  if (db) {
    return db.collection('register');
  }

  const mongod = new MongoMemoryServer();
  const mongoUri = await mongod.getConnectionString();
  const con = await MongoClient.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  db = con.db(await mongod.getDbName());
  return db.collection('register');
};

const schema = buildSchema(`
  type Register {
    name: String
    zip: String
    street: String
    numberStreet: String
    neighborhood: String
    city: String
    state: String
  }

  input RegisterInput {
    name: String
    zip: String
    street: String
    numberStreet: String
    neighborhood: String
    city: String
    state: String
  }

  type Query {
    infoRegister: Register
  }

  type Mutation {
    updateRegister(input: RegisterInput): Register
  }
`);

const root = {
  infoRegister: async () => {
    const col = await getDB();
    const register = await col.findOne();
    return register;
  },
  updateRegister: async (data) => {
    const col = await getDB();
    await col.insertOne(data.input);

    const newRegister = await col.findOne();
    return newRegister;
  },
};

const app = express();
app.use(cors());
app.use("/graphql", graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000);

console.log("Running a GraphQL API server at localhost:4000/graphql");