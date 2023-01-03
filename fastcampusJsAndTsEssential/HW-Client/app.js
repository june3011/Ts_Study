// const rootDiv = document.getElementById("root");
// rootDiv.innerHTML = "<ul><li>하나</li><li>셋</li></ul>";

// console.log(rootDiv);

const container = document.getElementById("root");
const ajax = new XMLHttpRequest();
const content = document.createElement("div");
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

ajax.open("get", NEWS_URL, false);
ajax.send();

// console.log(ajax.response);

const newPeed = JSON.parse(ajax.response);

// console.log(newPeed);    // network 탭에 있는 preview에 있는 객체형식으로 출력됨. 상대적으로 보기 편해짐.
//

const ul = document.createElement("ul");

window.addEventListener("hashchange", function () {
  //   console.log("해시가 변경됨");

  const id = location.hash.substring(1);
  //   console.log(id);  // #이 제거된 id값만 출력

  ajax.open("GET", CONTENT_URL.replace("@id", id), false);
  ajax.send();

  const newsContent = JSON.parse(ajax.response);

  const title = this.document.createElement("h1");
  title.innerHTML = newsContent.title;

  content.appendChild(title);
  console.log(newsContent);
});

for (let i = 0; i < newPeed.length; i++) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = `#${newPeed[i].id}`;
  //   a.href = `#`;  // 바뀌어도 그대로 #이기 때문에 이벤트 발생할 때 찍히는 콘솔로그는 한 번만 찍힘.
  a.innerHTML = `${newPeed[i].title} {${newPeed[i].comments_count}}`;

  //   a.addEventListener("click", function() {})

  li.appendChild(a);
  ul.appendChild(li);
}

container.appendChild(ul);
container.appendChild(content);
