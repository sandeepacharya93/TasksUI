
import { DatePipe } from '@angular/common';
export interface Deserializable {
    deserialize(input: any): this;
}


export class ToDoTask implements Deserializable{

    Id: number =0;
    Name: string="";
    Description: string ="";
    UserId: number=0;
    IsChecked: boolean=true;
    CreatedOn: Date=new Date();
    ModifiedOn: Date=new Date();

    deserialize(data: any): this
    {
        Object.assign(this, data);
        return this;
    }
 }