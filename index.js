const express = require("express")
const bodyParser = require('body-parser')
const dynamoose = require('dynamoose')
const app = express()
const DbRepository = require('./db.repository')
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


// const AWS = require("aws-sdk");
// AWS.config.update({
//     region: "local",
//     endpoint: "http://localhost:8000"
// });
// var docClient = new AWS.DynamoDB.DocumentClient();
dynamoose.aws.sdk.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
})


app.get("/", (req, res) => {
    res.send("Hello")
})

// app.post('/', (req, res) => {
//     console.log('body', req.body)
//     req.body.forEach(function(scran) {
//       var params = {
//               TableName: "Scranton",
//               Item: {
//                   "id": scran.id,
//                   "type": scran.type,
//                   "name": scran.name,
//                   "description": scran.description
//               }
//           };
//       docClient.put(params, function(err, data) {
//              if (err) {
//                  console.error(err);
//              } else {
//                  console.log("PutItem succeeded:", scran.name);
//              }
//           });
//       });
//     res.send("pass")
// })

app.post('/create', (req, res) => {
    console.log('req body', req.body)
    const repository = new DbRepository();
    repository.create(req.body)
    
})

app.listen(3000, () => console.log('server Start Port = 3000'))