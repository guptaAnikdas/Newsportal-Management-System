import { Injectable } from '@nestjs/common';
import { CreateEditor } from "./editorform.dto";
import { EditorEntity } from './editorentity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { EditorFormupdate } from './editorformupdate.dto';
// import { MailerService } from "@nestjs-modules/mailer/dist";
@Injectable()
export class EditorService {
  deleteUserbyid: any;
  deleteeditorbyid(id: number): any {
    throw new Error('Method not implemented.');
  }
  // deleteEditorbyid(id: number): any {
  //   throw new Error('Method not implemented.');
  // }
  // getEditorByID(id: number): any {
  //   throw new Error('Method not implemented.');
  // }
  insertEditor: any;
  // getEditorByIDName(qry: any): any {
  //   throw new Error('Method not implemented.');
  // }
    constructor(
        @InjectRepository(EditorEntity)
        private editorRepo: Repository<EditorEntity>,
      ) {}

getIndex():any { 
    return this.editorRepo.find();
    

}
getEditorByID(id):any {
  return this.editorRepo.findOneBy({ id });
}

getEditorByIDName(qry):any {
  return this.editorRepo.findOneBy({ id:qry.id,name:qry.name });
}

insertUser(mydto:CreateEditor):any {
    const editoraccount = new EditorEntity()
    editoraccount.email = "asdasd";
   return this.editorRepo.save(mydto);
   
      } 
      
      updateUser(name: any,id: string | number):any {
        console.log(name+id);
        return this.editorRepo.update(id,{name:name});
        }

        updateEditorbyid(mydto: EditorFormupdate,id):any {
          return this.editorRepo.update(id,mydto);
             }

        
        deleteEditorbyid(id):any {
    
        return this.editorRepo.delete(id);
    }
    async signup(mydto) {
      const salt = await bcrypt.genSalt();
      const hassedpassed = await bcrypt.hash(mydto.password, salt);
      mydto.password= hassedpassed;
      return this.editorRepo.save(mydto);
      }

    async signin(mydto){
      console.log(mydto.password);
  const mydata= await this.editorRepo.findOneBy({email: mydto.email});
  const isMatch= await bcrypt.compare(mydto.password, mydata.password);
  if(isMatch) {
  return 1;
  }
  else {
      return 0;
  }
  
}
// async sendEmail(mydata){
//   return   await this.editorservice.sendMail({
//          to: mydata.email,
//          subject: mydata.subject,
//          text: mydata.text, 
//        });
 
//  }

}