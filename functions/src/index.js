import * as functions from "firebase-functions";
import Datastore from "@google-cloud/datastore";

// Creates a client
const datastore = new Datastore({
  projectId: process.env.PROJECT_ID
});

exports.handler = functions.https.onRequest((request, response) => {
  var query = datastore.createQuery('Todo');
  query.run((err, entities, info) => {
    response.send(entities);
  })
});