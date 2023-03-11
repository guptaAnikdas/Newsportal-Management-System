import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { EditorController } from './editor/editor.controller';
import { EditorModule } from './editor/editormodule.module';



@Module({
  imports: [EditorModule,  TypeOrmModule.forRoot(
   { type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'editor',
    autoLoadEntities: true,
    synchronize: true,
  }
  ),],
  controllers: [],
  providers: [],
})
export class AppModule {}