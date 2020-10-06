module.exports   = {
    tables: [
      {
        TableName: `employee`,
        KeySchema: [{AttributeName: 'id', KeyType: 'HASH'},{AttributeName: 'userId', KeyType: 'RANGE'}],
        AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'},{AttributeName: 'userId', AttributeType: 'S'}],
        ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},
      },
      // etc
    ],
  }