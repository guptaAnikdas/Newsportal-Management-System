import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EditorController } from "./editor.controller"
import { EditorService } from "./editorservice.service"
import { EditorEntity } from "./editorentity.entity"
import { ArticleEntity } from "src/reviewarticle/reviewarticleentity.entity";
import { ArticleService } from "src/reviewarticle/reviewarticleservice.service";


@Module({
imports: [TypeOrmModule.forFeature([EditorEntity,ArticleEntity])],
controllers: [EditorController],
providers: [EditorService,ArticleService],

})

export class EditorModule {}