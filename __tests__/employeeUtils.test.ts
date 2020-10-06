import { getObjectFromRequestBody } from "../src/utils/employeeUtils"

test('Responses is an object', () => {
    const data = '    {"id": "UID-228","name": "asfd", "vat-number": "DE123456","user-id": "gid:adfs" }'
    expect(typeof getObjectFromRequestBody(data)).toBe("object");
});

test('Responses for invalid request body with id missing', () => {
    const data = '    {"name": "asfd", "vat-number": "DE123456","user-id": "gid:adfs" }'
    try{
        getObjectFromRequestBody(data)
        expect(true).toBe(false);
    }
  catch(e){
    expect(e.message).toBe("400: Request body structure is not correct")
  }
});

test('Responses for invalid request body with field empty', () => {
    const data = '    {"id": "","name": "asfd", "vat-number": "DE123456","user-id": "gid:adfs" }'
    try{
        getObjectFromRequestBody(data)
        expect(true).toBe(false);
    }
  catch(e){
    expect(e.message).toBe("400: Request body structure is not correct")
  }
});