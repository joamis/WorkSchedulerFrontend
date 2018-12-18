import {Preference} from './Preference';

export class SubjectId
{
  constructor(
    public nameOfSubject = '',
    public groupID = 0
  ) {}
}
export class Student {
  constructor(
    public _id: string = '',
    public name: string = '',
    public username: string = '',
    public surname: string = '',
    public levelOfSatisfaction: number = 0,
    public choices: Preference = new Preference(),
    public subjectsIds: SubjectId[] = []
  ) {}
}
