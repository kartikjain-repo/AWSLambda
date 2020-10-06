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

