const token1 = "ghp_1K9GR7j";
const token2 = "8zLyotbD";
const token3 = "90ZkFh92EaJ";
const token4 = "7Glu3ebF4n";
loadComments(token1 + token2 + token3 + token4);
registerComment(token1 + token2 + token3 + token4);

function loadComments(auth) {
  fetch("https://api.github.com/repos/kijin-jiyoung/kijin-jiyoung.github.io/issues", {
    method: "GET",
    headers: {
      Authorization: "token " + auth,
    },
  })
    .then((res) => res.json())
    .then((comments) => {
      let $commentList = document.getElementById("comment-list");
      for (let i in comments) {
         $commentList.innerHTML += `
        <li>
          <p>${comments[i].title}  
            <small>${comments[i].created_at
              .replace("T", "  ")
              .replace("Z", "")
              .slice(0, -3)}</small>
          </p>
          <p>${comments[i].body}</p><hr>
        </li>`;
      }
    });

Array.sort(function(a, b){
  return a.id - b.id
})  
  
  
  
}







function registerComment(auth) {
  let $commentRegistration = document.getElementById("comment-registration");
  $commentRegistration.addEventListener("click", () => {
    let $nickname = document.getElementById("nickname");
    let $commentInput = document.getElementById("comment_input");
        
    if (!$nickname.value) {
      alert("닉네임을 입력해주세요!");
    } else if (!$commentInput.value) {
      alert("축하메시지를 입력해주세요!");
    } else {
      fetch(
        "https://api.github.com/repos/kijin-jiyoung/kijin-jiyoung.github.io/issues",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "token " + auth,
          },
          body: JSON.stringify({
            title: $nickname.value,
            body: $commentInput.value,
          }),
        }
      ).then(() => {
        sendMail($nickname.value, $commentInput.value);
        $nickname.value = "";
        $commentInput.value = "";
      });
    }
  });
}

let $time = document.getElementById("time");
let $date = document.getElementById("date");

function getTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  $date.innerText = year + "-" + month + "-" + date;

  let hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  let amOrPm = (hour < 12) ? "오전" : "오후";
  hour = (hour === 12) ? hour : hour % 12;
  $time.innerText = amOrPm + " " + hour + ":" + minute + ":" + second;
}
setInterval(getTime, 1000);

sortBy(data, {
    prop: "date",
    parser: function (item) {
        return new Date(item);
    }
});





