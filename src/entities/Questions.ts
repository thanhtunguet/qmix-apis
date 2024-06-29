import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ErrorcorrectionQuestions } from './ErrorcorrectionQuestions';
import { FillinblanksQuestions } from './FillinblanksQuestions';
import { McqQuestions } from './McqQuestions';
import { PrepositionQuestions } from './PrepositionQuestions';
import { Users } from './Users';
import { Questiontypes } from './Questiontypes';
import { ReadingcomprehensionQuestions } from './ReadingcomprehensionQuestions';
import { SentencerewritingQuestions } from './SentencerewritingQuestions';
import { SentencetransformationQuestions } from './SentencetransformationQuestions';
import { Testquestions } from './Testquestions';
import { WordformQuestions } from './WordformQuestions';

@Index('questions_pkey', ['questionid'], { unique: true })
@Entity('questions', { schema: 'public' })
export class Questions {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'questionid' })
  questionid: number;

  @Column('integer', { name: 'scorelevel' })
  scorelevel: number;

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
    () => ErrorcorrectionQuestions,
    (errorcorrectionQuestions) => errorcorrectionQuestions.question,
  )
  errorcorrectionQuestions: ErrorcorrectionQuestions;

  @OneToOne(
    () => FillinblanksQuestions,
    (fillinblanksQuestions) => fillinblanksQuestions.question,
  )
  fillinblanksQuestions: FillinblanksQuestions;

  @OneToOne(() => McqQuestions, (mcqQuestions) => mcqQuestions.question)
  mcqQuestions: McqQuestions;

  @OneToOne(
    () => PrepositionQuestions,
    (prepositionQuestions) => prepositionQuestions.question,
  )
  prepositionQuestions: PrepositionQuestions;

  @ManyToOne(() => Users, (users) => users.questions)
  @JoinColumn([{ name: 'createdby', referencedColumnName: 'userid' }])
  createdby: Users;

  @ManyToOne(() => Questiontypes, (questiontypes) => questiontypes.questions)
  @JoinColumn([{ name: 'questiontypeid', referencedColumnName: 'id' }])
  questiontype: Questiontypes;

  @OneToOne(
    () => ReadingcomprehensionQuestions,
    (readingcomprehensionQuestions) => readingcomprehensionQuestions.question,
  )
  readingcomprehensionQuestions: ReadingcomprehensionQuestions;

  @OneToOne(
    () => SentencerewritingQuestions,
    (sentencerewritingQuestions) => sentencerewritingQuestions.question,
  )
  sentencerewritingQuestions: SentencerewritingQuestions;

  @OneToOne(
    () => SentencetransformationQuestions,
    (sentencetransformationQuestions) =>
      sentencetransformationQuestions.question,
  )
  sentencetransformationQuestions: SentencetransformationQuestions;

  @OneToMany(() => Testquestions, (testquestions) => testquestions.question)
  testquestions: Testquestions[];

  @OneToOne(
    () => WordformQuestions,
    (wordformQuestions) => wordformQuestions.question,
  )
  wordformQuestions: WordformQuestions;
}
