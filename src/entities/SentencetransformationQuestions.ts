import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { Questions } from './Questions';

@Index('sentencetransformation_questions_pkey', ['questionid'], {
  unique: true,
})
@Entity('sentencetransformation_questions', { schema: 'public' })
export class SentencetransformationQuestions {
  @Column('integer', { primary: true, name: 'questionid' })
  questionid: number;

  @Column('text', { name: 'originalsentence' })
  originalsentence: string;

  @Column('text', { name: 'transformedsentence' })
  transformedsentence: string;

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
    (questions) => questions.sentencetransformationQuestions,
  )
  @JoinColumn([{ name: 'questionid', referencedColumnName: 'questionid' }])
  question: Questions;
}
