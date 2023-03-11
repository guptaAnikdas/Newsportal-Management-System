import { IsNotEmpty, IsInt, Length } from "class-validator";

export class EditorFormupdate {   
   
   @Length(3,8)
    name: string;



}
