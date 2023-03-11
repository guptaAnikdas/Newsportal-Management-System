import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleEntity } from "./reviewarticleentity.entity";



@Module({
imports: [TypeOrmModule.forFeature([ArticleEntity])],
controllers: [],
providers: [],

})

export class ArticleModule {}