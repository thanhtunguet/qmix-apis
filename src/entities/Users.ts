import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Questions } from './Questions';
import { Tests } from './Tests';

@Index('users_email_key', ['email'], { unique: true })
@Index('users_pkey', ['userid'], { unique: true })
@Index('users_username_key', ['username'], { unique: true })
@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'userid' })
  userid: number;

  @Column('character varying', { name: 'username', unique: true, length: 255 })
  username: string;

  @Column('character varying', { name: 'email', unique: true, length: 255 })
  email: string;

  @Column('character varying', { name: 'password', length: 255 })
  password: string;

  @Column('character', { name: 'gender', nullable: true, length: 1 })
  gender: string | null;

  @Column('date', { name: 'birthday', nullable: true })
  birthday: string | null;

  @Column('character varying', { name: 'role', length: 50 })
  role: string;

  @Column('timestamp without time zone', {
    name: 'createdat',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdat: Date | null;

  @Column('timestamp without time zone', {
    name: 'updatedat',
    nullable: true,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedat: Date | null;

  @Column('timestamp without time zone', { name: 'deletedat', nullable: true })
  deletedat: Date | null;

  @OneToMany(() => Questions, (questions) => questions.createdby)
  questions: Questions[];

  @OneToMany(() => Tests, (tests) => tests.createdby)
  tests: Tests[];
}
