import { Employee } from "../model/employee"
import { CustomError} from "../error/customError"


export const getObjectFromRequestBody = (eventBody: string): Employee[] => {
    console.log("Request Parsing Started")
    let employeeArray: Employee[] = new Array(0);
    const requestBody = JSON.parse(eventBody)
    if (Array.isArray(requestBody)) {
        console.log("Parsing JSON array")
        for (let i = 0; i < requestBody.length; i++) {
            console.log(requestBody[i]["id"])
            employeeArray.push(createEmployeeObject(requestBody[i]))
        }
        console.log(`JSON array parsing completed`)
    }
    else {
        console.log("Parsing single JSON object")
        employeeArray.push(createEmployeeObject(requestBody))
        console.log("JSON Object parsing completed")
    }

    console.log(`Request Parsing Finished for ${employeeArray.length}`)
    return employeeArray
}

const createEmployeeObject = (jsonObject: string): Employee => {
    console.log("Parsing single JSON object")
    let emp = new Employee();
    if (validateJson(jsonObject)) {
        
        emp.id = jsonObject["id"]
        emp.name = jsonObject["name"]
        emp.vatNumber = jsonObject["vat-number"]
        emp.userId = jsonObject["user-id"]
    }
    else{
        throw new CustomError("400: Request body structure is not correct")
    }
    return emp
}
//TODO :  Improve validation logic to comparnig against a schema with something like AJV
const validateJson = (jsonObject: string): boolean => {
    let isValid = false
    if ((jsonObject.hasOwnProperty("id") && jsonObject["id"].length > 0) &&
        (jsonObject.hasOwnProperty("name") && jsonObject["name"].length > 0) &&
        (jsonObject.hasOwnProperty("vat-number") && jsonObject["vat-number"].length > 0) &&
        (jsonObject.hasOwnProperty("user-id")) && jsonObject["user-id"].length > 0) {
        isValid = true
    }
    return isValid

}






