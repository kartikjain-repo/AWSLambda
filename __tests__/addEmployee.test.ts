// import  {DocumentClient} from 'aws-sdk/clients/dynamodb';
import { handler } from "../src/controller/controller"
import {isApiGatewayResponse} from "../src/testUtils/validateResponse"


describe('Integration test',( ) => {
  test('test with request body containing empty id', async() => {
    const event = {
      body:'{"id": "","name": "asfd", "vat-number": "DE123456","user-id": "gid:adfs" }'
    }
    const result = await handler(event, null)
    expect(result).toBeDefined()
    expect(result.statusCode).toBe(400)
    expect(isApiGatewayResponse(result)).toBe(true)
  }),
  test('test with request body containing no id field', async() => {
    const event = {
      body:'{"name": "asfd", "vat-number": "DE123456","user-id": "gid:adfs" }'
    }
    const result = await handler(event, null)
    expect(result).toBeDefined()
    expect(result.statusCode).toBe(400)
    expect(isApiGatewayResponse(result)).toBe(true)
  })

})


// const config = {
//   convertEmptyValues: true,
//   ...(isTest && {
//     endpoint: 'localhost:8000',
//     sslEnabled: false,
//     region: 'local-env',
//   }),
// };

// const ddb = new DocumentClient(config);
// describe("Integration Test", () => {
//     it('Save Single Object', () => {
//       const event = {
//         "body":{
//           "id": "UID-127",
//           "name": "asfd",
//           "vat-number": "DE123456",
//           "user-id": "gid:adfs"
//       }};
//       expect(handler(event, null)).toBe('Data has been saved ');
//     });
  
// })





// import { handler } from "../src/controller/controller"

// // let sandbox = require('@architect/sandbox')
// // beforeAll(async () => {
// //   await sandbox.start()
// // })
// // afterAll(async () => {
// //   await sandbox.end()
// // })
// describe("This is a simple test", () => {
//   // test('Data has been saved for [object Object]', () => {
//   //   const event = {
//   //     "body":{
//   //       "id": "UID-127",
//   //       "name": "asfd",
//   //       "vat-number": "DE123456",
//   //       "user-id": "gid:adfs"
//   //   }};
//   //   expect(handler(event, null)).toBe('Data has been saved for [object Object]');
//   // });




//   it('should insert item into table', async () => {
//     await ddb
//       .put({
//         TableName: 'employees', Item: {
//           "id": "UID-127",
//           "name": "asfd",
//           "vat-number": "DE123456",
//           "user-id": "gid:adfs"
//         }
//       })
//       .promise();

//     const { Item } = await ddb.get({ TableName: 'files', Key: { id: '1' } }).promise();

//     expect(Item).toEqual({
//       "id": "UID-127",
//       "name": "asfd",
//       "vat-number": "DE123456",
//       "user-id": "gid:adfs"
//     });
//   });
// })