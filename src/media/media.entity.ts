import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum MediaType {
  MOVIE = 'movie',
  TVSHOW = 'tvshow'
}
@Entity()
export class Media {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: "enum",
    enum: MediaType,
    default: null
  })
  type: MediaType;

  @Column({ nullable: true })
  releaseYear: number;

  @CreateDateColumn()
  createdAt: Date;
}