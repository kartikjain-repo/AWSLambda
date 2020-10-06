import { saveEmployee } from "../src/service/employeeService"


test('Responses for invalid Request with missing id for handler', async () => {
    const data = '{"id": "","name": "asfd", "vat-number": "DE123456","user-id": "gid:adfs" }'
    try {
        await saveEmployee(data)
    }
    catch (error) {
        expect(error.message).toBe("400: Request body structure is not correct")
    }
});
test('Responses for invalid Request with missing id for handler', async () => {
    const data = '{,"name": "asfd", "vat-number": "DE123456","user-id": "gid:adfs" }'
    try {
        await saveEmployee(data)
    }
    catch (error) {
        expect(error.message).toBe("400: Request body structure is not correct")
    }
});
