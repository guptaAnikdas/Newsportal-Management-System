import { IsNotEmpty, IsInt, Length, IsEmail, IsString } from "class-validator";

export class ReviewArticle {   
   

   @IsNotEmpty({ message: "field cannot be empty"})
   @IsString()
    article: string;
   
//    @IsEmail() 
//     email: string;

//     @Length(3,8)
//     password: string;

 
//     address: string;

//     adminid:number;



}