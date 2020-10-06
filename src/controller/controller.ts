
import { saveEmployee } from '../service/employeeService';
import {Responses} from '../utils/responses';

export async function handler(event, _context) {
  
  console.log(`The recieved request body is ${event.body["id"]}`)
  try{
    //Bad request check
    const savedId = await saveEmployee(event.body)
    console.log(event.body)
    console.log("saved Id----> " + savedId)
    return Responses._200({ 'message': 'The data has been saved' })
  }
  catch(e){
    if((e.message as string).startsWith("400")){
      return Responses._400({ 'message': (e.message as string).substring(4) })  
    }
    return Responses._500({ 'message': e.message })
  }

} 