import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewArticle} from "./reviewarticle.dto";
import { ArticleEntity } from "./reviewarticleentity.entity";


@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(ArticleEntity)
        private articleRepo: Repository<ArticleEntity>,
      ) {}


    //   getIndex():any { 
    //     return this.editorRepo.find();
        
    
    getArticleByID(id):any {
        return this.articleRepo.findOneBy({ id });
      }

    
      insertArticle(mydto:ReviewArticle):any {
        const editorarticle = new ArticleEntity()
        editorarticle.article = mydto.article;
        return this.articleRepo.save(editorarticle);
      }

      updateArticle(article: any):any {
        console.log(article);
        return this.articleRepo.update(article,article);
        }

        updateArticlebyid(mydto:ReviewArticle,id):any {
          return this.articleRepo.update(id,mydto);
             }

             getArticleByIDName(qry):any {
              return this.articleRepo.findOneBy({ id:qry.id,article:qry.article });
          }

          deleteArticlebyid(id):any {
    
            return this.articleRepo.delete(id);
        }

    }


          