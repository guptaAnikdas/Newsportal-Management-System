// import { AdminEntity } from 'src/admin/adminentity.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity("article")
export class ArticleEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  article: string;

//   @Column()
//   email: string;

//   @Column()
//   password: string;

//   @Column()
//   address: string;

//   @ManyToOne(() => AdminEntity, (admin) => admin.managers)
//     admin: AdminEntity

}