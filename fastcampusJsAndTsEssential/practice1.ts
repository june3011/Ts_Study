let x = 10; // x 변수 생성 근데 언제 사용되는 변수인 지 알 수 없음
let age = 10; // 누가봐도 알 수 있게 변수명 네이밍하기
let weight: number = 80; // weight의 자료형 표시

type Centimeter = number;

let height: Centimeter = 176;

type RainbowColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "navy"
  | "purple";
let color: RainbowColor = "orange";
// color = "black"; // 에러 발생
