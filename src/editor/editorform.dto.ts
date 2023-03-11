import { IsNotEmpty, IsString, Length, IsEmail } from "class-validator";

export class CreateEditor {
    @IsNotEmpty({ message: "Name Can not be Empty"})
    @IsString({ message: "Name can not be a number"})
    name: string;
    
    @IsEmail()
    email: string;
    @Length(8)
    password: string;
    address: string;
  filename: string;
}