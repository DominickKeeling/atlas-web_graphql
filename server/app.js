const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const dbURI = 'mongodb+srv://dominickkeeling:root@cluster0.dufsxi1.mongodb.net/GraphQLAPI';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('connected to database'))
.catch(err => console.error(err));

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});
