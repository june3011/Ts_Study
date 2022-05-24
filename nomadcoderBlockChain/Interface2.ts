// abstract class Userr {
//   constructor(protected firstName: string, protected lastName: string) {}

//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }
interface Userr {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

// class Playerr extends Userr {
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   sayHi(name: string) {
//     return `Hello ${name}. My name is ${this.fullName()}`;
//   }
// }
class Playerr implements Userr, Human {
  // 하나 이상의 인터페이스를 동시에 상속가능
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// interface를 type으로 쓸 수도 있음
function makeUser(user: Userr) {
  //   return {
  //     firstName: "aa",
  //     lastName: "zz",
  //     fullName: () => "zzaa",
  //     sayHi: (name) => `hi, ${name}`,
  //   };
  return `${user.sayHi}`;
}

makeUser({
  firstName: "kiki",
  lastName: "jj",
  fullName: () => "xx",
  sayHi: (name) => `hi, ${name}`,
});
