const ExampleSchema = require('./db.schema')
const dynamoose = require('dynamoose')


module.exports = class DbRepository {
    constructor() {
        this.dbInstance = dynamoose.model("Scranton", ExampleSchema)
    }

    create = async (reqBody) => {
        return await this.dbInstance.create({
            id: reqBody.id,
            type: reqBody.type,
            name: reqBody.name,
            description: reqBody.description
        })
    }
} 