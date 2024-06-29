import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Questions } from './Questions';

@Index('questiontypes_code_key', ['code'], { unique: true })
@Index('questiontypes_pkey', ['id'], { unique: true })
@Entity('questiontypes', { schema: 'public' })
export class Questiontypes {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'code', unique: true, length: 50 })
  code: string;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @OneToMany(() => Questions, (questions) => questions.questiontype)
  questions: Questions[];
}
