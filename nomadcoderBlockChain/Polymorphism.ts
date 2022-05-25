// 이미 타입스크립트에 의해 선언된
// 자바스크립트의 웹 스토리지 API를 위한 인터페이스
// interface Storage{

// }

interface SStorage<T> {
  [key: string]: T;
}
// 제네릭을 클래스로 보내고, 클래스는 제네릭을 인터페이스로 보냄
// 인터페이스는 제네릭을 사용
class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  // 리턴타입을 T로 해서 객체 생성할 때 지정한 타입으로 리턴함

  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get("ket");
stringsStorage.set("ket", "hello");

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("xxx");
booleansStorage.set("xxx", true);
console.log(booleansStorage.get("xxx"));

// ts파일 실행하는 방법
// npm i -g ts-node
// ts-node 파일명
