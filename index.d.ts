declare module 'emp/handler' {

}
declare module 'emp/src/controller/controller' {
  export function handler(event: any, _context: any): Promise<any>;

}
declare module 'emp/src/model/employee' {
  export interface Employee {
      id: string;
      userId: string;
      name: string;
      vatNumber: string;
  }

}
declare module 'emp/src/service/employeeRepo' {
  import { Employee } from 'emp/src/model/employee';
  export const saveEmployeeToDynamoDB: (emp: Employee) => Promise<void>;

}
declare module 'emp/src/service/employeeService' {
  export const saveEmployee: (eventBody: string) => Promise<any>;

}
declare module 'emp/src/utils/io' {
  import { Employee } from "emp/src/model/employee";
  export const getObjectFromRequestBody: (eventBody: string) => Employee;

}
declare module 'emp/src/utils/responses' {
  export const Responses: {
      defineResponse(statusCode?: number, data?: {}): {
          headers: {
              'Content-Type': string;
          };
          statusCode: number;
          body: string;
      };
      _200(data?: {}): any;
      _400(data?: {}): any;
      _500(data?: {}): any;
  };

}
declare module 'emp/__tests__/addEmployee.test' {
  export {};

}
declare module 'emp/__tests__/responses.test' {
  export {};

}
declare module 'emp' {
  import main = require('emp/index');
  export = main;
}