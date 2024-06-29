import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Questions } from './Questions';
import { Tests } from './Tests';

@Index('testquestions_pkey', ['questionid', 'testid'], { unique: true })
@Entity('testquestions', { schema: 'public' })
export class Testquestions {
  @Column('integer', { primary: true, name: 'testid' })
  testid: number;

  @Column('integer', { primary: true, name: 'questionid' })
  questionid: number;

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

  @ManyToOne(() => Questions, (questions) => questions.testquestions)
  @JoinColumn([{ name: 'questionid', referencedColumnName: 'questionid' }])
  question: Questions;

  @ManyToOne(() => Tests, (tests) => tests.testquestions)
  @JoinColumn([{ name: 'testid', referencedColumnName: 'testid' }])
  test: Tests;
}
