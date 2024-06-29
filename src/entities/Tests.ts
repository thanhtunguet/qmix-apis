import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Testquestions } from './Testquestions';
import { Users } from './Users';

@Index('tests_pkey', ['testid'], { unique: true })
@Entity('tests', { schema: 'public' })
export class Tests {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'testid' })
  testid: number;

  @Column('character varying', { name: 'testname', length: 255 })
  testname: string;

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

  @OneToMany(() => Testquestions, (testquestions) => testquestions.test)
  testquestions: Testquestions[];

  @ManyToOne(() => Users, (users) => users.tests)
  @JoinColumn([{ name: 'createdby', referencedColumnName: 'userid' }])
  createdby: Users;
}
