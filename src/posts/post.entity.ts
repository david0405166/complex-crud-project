import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';

@Entity()
export class Post {
  @ApiProperty({ example: 1, description: 'The ID of the post' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Post Title', description: 'The title of the post' })
  @Column()
  title: string;

  @ApiProperty({ example: 'This is a post content', description: 'The content of the post' })
  @Column()
  content: string;

  @ManyToOne(() => User, user => user.posts)
  user: User;
}
