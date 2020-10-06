import { getObjectFromRequestBody } from "../utils/employeeUtils"
import { Employee } from "../model/employee"

export const saveEmployee = async (eventBody: string) => {

        const emp = getObjectFromRequestBody(eventBody)
        console.log("Employee extracted form request body successfully")
        await Employee.writer.batchPut(emp);

}