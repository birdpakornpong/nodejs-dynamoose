const express = require("express")
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


const AWS = require("aws-sdk");
AWS.config.update({
    region: "local",
    endpoint: "http://localhost:8000"
});
var docClient = new AWS.DynamoDB.DocumentClient();

app.get("/", (req, res) => {
    res.send("Hello")
})

app.post('/', (req, res) => {
    console.log('body', req.body)
    req.body.forEach(function(scran) {
      var params = {
              TableName: "Scranton",
              Item: {
                  "id": scran.id,
                  "type": scran.type,
                  "name": scran.name,
                  "description": scran.description
              }
          };
      docClient.put(params, function(err, data) {
             if (err) {
                 console.error(err);
             } else {
                 console.log("PutItem succeeded:", scran.name);
             }
          });
      });
    res.send("pass")
})

app.listen(3000, () => console.log('server Start Port = 3000'))