type PlayerA = {
  name: string;
};
type PlayerAA = PlayerA & {
  lastName: string;
};
// 이미 정의되었기 때문에 중복으로 정의할 수 없음
// type PlayerAA ={
//     health: number;
// }
const playerA: PlayerAA = {
  name: "kijun1",
  lastName: "kim",
};
/////////////
interface PlayerB {
  name: string;
}
interface PlayerBB extends PlayerB {
  lastName: string;
}
// interface는 여러 번 중복해서 정의해도 하나로 합쳐짐
interface PlayerBB {
  health: number;
}
const playerB: PlayerBB = {
  name: "kijun2",
  lastName: "kim",
  health: 10,
};

// 타입과 인터페이스로 간단히 추상 클래스 만들어보자
type PlayerAAA = {
  firstName: string;
};
interface PlayerBBB {
  firstName: string;
}

class UserA implements PlayerAAA, PlayerBBB {
  constructor(public firstName: string) {}
}
class UserB implements PlayerBBB {
  constructor(public firstName: string) {}
}

// 타입스크립트 커뮤니티 )
// 클래스나 오브젝트의 모양을 정의하고 싶을 때는 interface
// 나머지 모든 경우에는 type

// 다시 한 번 정리 !!
// 가장 큰 차이점
// type은 새 property를 추가하기 위해 다시 선언될 수 없지만
// interface는 항상 상속가능
// interface는 중복해서 여러 번 선언할 수 있다. (하나로 합쳐짐)

// ex
// interface
// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
//   getBear(): Bear;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

// ---
// type
// type Animal = {
//   name: string;
// };

// type Bear = Animal & {
//   honey: boolean;
// };

// const bear = getBear();
// bear.name;
// bear.honey;

// Animal타입을 만든 이후에 새 타입을 만들어서 & 연산자를 사용해야함
