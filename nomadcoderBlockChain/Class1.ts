abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string
  ) {}

  abstract getNickname(): void;
  //   abstract getNickname(): string;

  protected getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class People extends User {
  getNickname() {
    console.log(this.nickname);
  }
  //   getNicknamdAndFullName(): string {
  //     return `Nickname: ${this.getNickname()}, FullName: ${this.getFullName}`;
  //   }
}

const jun = new People("jun", "ki", "준");
// console.log(jun.nickname);
// console.log(jun.getNicknamdAndFullName());
