// const rootDiv = document.getElementById("root");
// rootDiv.innerHTML = "<ul><li>하나</li><li>셋</li></ul>";

// console.log(rootDiv);

const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";

ajax.open("get", NEWS_URL, false);
ajax.send();

// console.log(ajax.response);

const newPeed = JSON.parse(ajax.response);

// console.log(newPeed);    // network 탭에 있는 preview에 있는 객체형식으로 출력됨. 상대적으로 보기 편해짐.
//

const ul = document.createElement("ul");

for (let i = 0; i < newPeed.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = newPeed[i].title;
  ul.appendChild(li);
}

document.getElementById("root").appendChild(ul);
