const dynamoose =  require('dynamoose');

module.exports = new dynamoose.Schema(
    {
        id: {
            type: Number,
            hashKey: true,
            required: true
        },
        type: {
            type: String,         
            required: true
        },
        name: {
            type: String,          
            required: true
        },
        description: {
            type: String,
            required: false,
            default: ""
        }
    },
    {
        timestamps: {
            createdAt: 'CreateDate',
            updatedAt: 'UpdateDate' 
        }
    }
);