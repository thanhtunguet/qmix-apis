import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Questions } from './Questions';

@Index('sentencerewriting_questions_pkey', ['questionid'], { unique: true })
@Entity('sentencerewriting_questions', { schema: 'public' })
export class SentencerewritingQuestions {
  @Column('integer', { primary: true, name: 'questionid' })
  questionid: number;

  @Column('text', { name: 'originalsentence' })
  originalsentence: string;

  @Column('text', { name: 'givenword' })
  givenword: string;

  @Column('text', { name: 'rewrittensentence' })
  rewrittensentence: string;

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

  @OneToOne(
    () => Questions,
    (questions) => questions.sentencerewritingQuestions,
  )
  @JoinColumn([{ name: 'questionid', referencedColumnName: 'questionid' }])
  question: Questions;
}
