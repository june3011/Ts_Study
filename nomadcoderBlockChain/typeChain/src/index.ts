/*
// // // const hello = () => "hi";

// // class Block {
// //   constructor(private data: string) {}
// //   static hello() {
// //     return "hi";
// //   }
// // }

// // document.querySelector()
// // tsconfig.json에 적은 "lib": ["ES6", "DOM"];
// // ES6는 우리의 코드가 ES6를 지원하는 환경에서 실행될 것이다 라는 뜻이다.
// // DOM은 이 코드가 웹 브라우저 위에서 동작한다는 것을 알려준다. (타겟 런타임 환경)
// // 덕분에 사용할 API를 알게 되서 자동완성 기능을 제공해줄 수 있따
// // ex) document.~~  localstorage.getItem

// import { init, exit } from "myPackage";

// // init({
// //   url: "true",
// // });

// // exit(1);

// // localStorage.clear(); 

// init({ url: "hello" });

// exit(36);
*/

import * as crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevvHash: string, height: number, data: string) {
    const toHash = `${prevvHash}${height}${data}`; // string
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];

  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    // 이전 해쉬값, 이 블록의 길이 + 1
    const block = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(block);
  }
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");

blockchain.getBlocks().push(new Block("xxxxx", 111, "HACKEDDD"));

console.log(blockchain.getBlocks);

// https://www.typescriptlang.org/docs/handbook/intro.html
