import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Test } from './Test';

@Index('Grade_pkey', ['id'], { unique: true })
@Entity('Grade', { schema: 'public' })
export class Grade {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: number;

  @Column('character varying', { name: 'code', nullable: true, length: 255 })
  code: string | null;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('character varying', {
    name: 'description',
    nullable: true,
    length: 400,
  })
  description: string | null;

  @OneToMany(() => Test, (test) => test.grade)
  tests: Test[];
}
