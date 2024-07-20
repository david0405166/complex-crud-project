import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Post } from '../posts/post.entity';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'The ID of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'john.doe', description: 'The username of the user' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  @Column()
  password: string;

  @ApiProperty({ example: 'user', description: 'The role of the user' })
  @Column()
  role: string;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];
}
