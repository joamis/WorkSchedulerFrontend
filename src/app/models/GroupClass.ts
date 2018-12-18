export class GroupClass {
  constructor(
    public nameOfSubject: string = '',
    public date: Date = new Date(),
    public numberOfPeople: number = 0,
    public groupID: number = 0) {}
}

export class Group {
  constructor(
    public groupID: number = 0,
    public date: Date = new Date(),
    public numberOfPeople: number = 0
    ) {}
}
