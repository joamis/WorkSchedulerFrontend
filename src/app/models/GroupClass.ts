export class GroupClass {
  constructor(
    public nameOfSubject: string = '',
    public date: Date = new Date(),
    public numberOfPeople: number = 0,
    public groupID: number = 0) {
  }
}

export class Group {
  constructor(
    public groupID: number = null,
    public dayOfWeek: string = '',
    public startTime: string = '',
    public duration: number = null,
    public numberOfPeople: number = null,
  ) {
  }
}
