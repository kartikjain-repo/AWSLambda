import {
    Decorator,
    Query,
    Table
} from "dynamo-types"

@Decorator.Table({ name: "employee" })
export class Employee extends Table {
   
    @Decorator.FullPrimaryKey("id","userId")
    static readonly primaryKey: Query.FullPrimaryKey<Employee, string, string>;
    
    @Decorator.Attribute({ name: "id" })
    public id: string
   
    @Decorator.Attribute({ name: "userId" })
    userId: string
   
    @Decorator.Attribute({ name: "name" })
    name: string
   
    @Decorator.Attribute({ name: "vatNumber" })
    vatNumber: string

    @Decorator.Writer()
    public static readonly writer: Query.Writer<Employee>;
    

}