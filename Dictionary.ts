type Words = {
  [key: string]: string; // property 의 이름은 모르지만, 타입만을 알 때 이걸 씀
};

// let dict: Words = {
//   1: "food",     // key 1, food string
//   2: "",
//   3: "",
// };

// let dict: Words = {};

class Dict {
  private words: Words;
  constructor() {
    this.words = {}; // 수동으로 초기화
  }

  add(word: Word) {
    // 클래스를 타입처럼 사용
    // 파라미터가 이 클래스의 인스턴스이기를 원하면 사용
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}

  // 단어의 정의 추가, 수정하는 메소드
  // 단어를 출력하는 메소드 만들어보기
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi"); // "한국의 음식"
