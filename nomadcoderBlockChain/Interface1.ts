type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;
type Name = string; // 타입 별명 만들 수 있음
// type은 보다 더 많은 용도로 사용할 수 있다.

// interface 는 오직 오브젝트 형태를 표현할 때만 쓸 수 있다.
interface PPlayer {
  nickname: string;
  team: Team;
  health: Health;
}
// type PPlayer = {
//   nickname: string;
//   team: Team;
//   helath: Health;
// };

const kijun: PPlayer = {
  nickname: "jun",
  team: "red",
  health: 10,
};

//

interface UUser {
  readonly name: string; // 읽기만 가능, 수정 불가
}

// interface는 클래스와 비슷하다
interface Player1 extends UUser {}
// type Player1 = UUser &{

// }

const june: Player1 = {
  name: "june",
};

// june.name = "laksjflaskjdflaksdj

interface Person {
  name: string;
}
interface Person {
  lastName: string;
}
interface Person {
  health: number;
}

// interface를 3번 각각 만들어도 타입스크립트가 알아서 하나로 합쳐준다.
const saram: Person = {
  name: "kijun",
  lastName: "kim",
  health: 10,
};

// type으로 여러번 선언하면 식별자 중복 에러 발생
// type TTT = {
//   name: string;
// };
// type TTT = {
//   lastName: string;
// };

// interface는 객체지향 프로그래밍의 개념을 활용해서 디자인되었다
// type은 좀 더 유연하다
//     타입 별명 만들기, 지정한 값들만 가지도록 타입을 제한하기 등등 여러가지 원하는 것들 가능
