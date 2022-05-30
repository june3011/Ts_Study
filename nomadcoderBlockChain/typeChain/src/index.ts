// // const hello = () => "hi";

// class Block {
//   constructor(private data: string) {}
//   static hello() {
//     return "hi";
//   }
// }

// document.querySelector()
// tsconfig.json에 적은 "lib": ["ES6", "DOM"];
// ES6는 우리의 코드가 ES6를 지원하는 환경에서 실행될 것이다 라는 뜻이다.
// DOM은 이 코드가 웹 브라우저 위에서 동작한다는 것을 알려준다. (타겟 런타임 환경)
// 덕분에 사용할 API를 알게 되서 자동완성 기능을 제공해줄 수 있따
// ex) document.~~  localstorage.getItem

import { init, exit } from "myPackage";

// init({
//   url: "true",
// });

// exit(1);

// localStorage.clear();

init({ url: "hello" });

exit(36);
