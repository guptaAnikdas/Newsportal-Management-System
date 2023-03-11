import {
    Body,
    Controller,
    Delete,
    FileTypeValidator,
    Get,
    MaxFileSizeValidator,
    Param,
    ParseFilePipe,
    ParseIntPipe,
    Post,
    Put,
    Query,
    Session,
    UploadedFile,
    UseGuards,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { CreateEditor } from './editorform.dto';
import {  EditorFormupdate } from './editorformupdate.dto';
  import { EditorService} from './editorservice.service';
  import { ReviewArticle } from '../reviewarticle/reviewarticle.dto';
  import { ArticleService} from '../reviewarticle/reviewarticleservice.service';
  import { diskStorage } from 'multer';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { UnauthorizedException } from '@nestjs/common/exceptions';
import { SessionGuard } from './session.guard';
  

 
  
  @Controller('/editor')
  export class EditorController {
    constructor(private editorService: EditorService,
      private articleService: ArticleService
      )
     {}
  
    @Get('/index')
    getEditor(): any {
      return this.editorService.getIndex();
    }
    @Get('/findeditor/:id')
    getEditorByID(@Param('id', ParseIntPipe) id: number): any {
      return this.editorService.getEditorByID(id);
    }
    
  @Get('/findeditor')
  getEditorByIDName(@Query() qry: any): any {
    return this.editorService.getEditorByIDName(qry);
  }

    @Post('/inserteditor')
  @UsePipes(new ValidationPipe())
    insertEditor(@Body() mydto: CreateEditor): any {
      return this.editorService.insertUser(mydto);
    }
  
    @Put('/updateeditor')
    @UsePipes(new ValidationPipe())
    updateEditor(@Body('name') name: string, @Body('id') id: number): any {
      return this.editorService.updateUser(name, id);
    }

    @Put('/updateeditor/:id')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    updateEditorbyid(
      @Body() mydto: EditorFormupdate,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.editorService.updateEditorbyid(mydto, id);
    }

    @Delete('/deleteditor/:id')
    deleteEditorbyid(@Param('id', ParseIntPipe) id: number): any {
      return this.editorService.deleteEditorbyid(id);
     
    }
    @Post('/signup')
@UseInterceptors(FileInterceptor('filename',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() mydto:CreateEditor,@UploadedFile(new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename;  

return this.editorService.signup(mydto);
// console.log(file)

}

   @Get('/signin')
signin( @Session() session, @Body() mydto:CreateEditor)
{
if(this.editorService.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"success"};

}
else
{
  return {message:"invalid credentials"};
}
 
}
@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"you are logged out"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}

    @Get('/findarticle')
getArticleByIDName(@Query() qry: any): any {
  return this.articleService.getArticleByIDName(qry);
}

@Get('/findarticle/:id')
  getArticleByID(@Param('id', ParseIntPipe) id: number): any {
    return this.articleService.getArticleByID(id);
  }

  @Post('/insertarticle')
  @UsePipes(new ValidationPipe())
    insertArticle(@Body() mydto: ReviewArticle): any {
      return this.articleService.insertArticle(mydto);
    }

    @Put('/updatearticle/')
    @UsePipes(new ValidationPipe())
    updateArticle(@Body('article') article: string): any {
      return this.articleService.updateArticle(article);
    }

    @Put('/updatearticle/:id')
    @UsePipes(new ValidationPipe())
    updateArticlebyid(
      @Body() mydto: ReviewArticle,
      @Param('id', ParseIntPipe) id: number,
    ): any {
      return this.articleService.updateArticlebyid(mydto, id);
    }

    @Delete('/deletearticle/:id')
  deleteArticlebyid(@Param('id', ParseIntPipe) id: number): any {
    return this.articleService.deleteArticlebyid(id);
  }
  // @Post('/sendemail')
  // sendEmail(@Body() mydata){
  // return this.editorService.sendEmail(mydata);
  // }
    // @Post('/insertmanager')
    // @UsePipes(new ValidationPipe())
    //   insertManager(@Body() managerdto: ManagerForm): any {
    //     return this.managerService.insertManager(managerdto);
    //   }
  
    // @Put('/updateadmin/:id')
    // @UsePipes(new ValidationPipe())
    // updateAdminbyid(
    //   @Body() mydto: AdminFormUpdate,
    //   @Param('id', ParseIntPipe) id: number,
    // ): any {
    //   return this.adminService.updateUserbyid(mydto, id);
    // }
  
    // @Delete('/deleteadmin/:id')
    // deleteAdminbyid(@Param('id', ParseIntPipe) id: number): any {
    //   return this.adminService.deleteUserbyid(id);
     
    // }
  
    // @Post('/insertmanager')
    // @UsePipes(new ValidationPipe())
    //   insertManager(@Body() managerdto: ManagerForm): any {
    //     return this.managerService.insertManager(managerdto);
    //   }
     
    //   @Get('/findmanagersbyadmin/:id')
    //   getManagerByAdminID(@Param('id', ParseIntPipe) id: number): any {
    //     return this.adminService.getManagersByAdminID(id);
    //   }
  
    //   @Get('/findadminbymanager/:id')
    //   getAdminByManagerID(@Param('id', ParseIntPipe) id: number): any {
    //     return this.managerService.getAdminByManagerID(id);
    //   }
  
  
  
  }

// function getEditor() {
//   throw new Error('Function not implemented.');
// }
