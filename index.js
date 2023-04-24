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
          <p style="font size="16px;"><b>${comments[i].title}</b>
            <small>${comments[i].created_at
              .replace("T", "  ")
              .replace("Z", "")
              .slice(0, -3)}</small>
          </p>
          <p style="text-indent: 10px;font-size:14px;">${comments[i].body}</p>
        </li><hr>`;
      }
    });
}







function registerComment(auth) {
  let $commentRegistration = document.getElementById("comment-registration");
  $commentRegistration.addEventListener("click", () => {
    {once : true};
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
        $nickname.value = "";
        $commentInput.value = "";
        window.location.reload();
      });
    }
  });
}

function getTime() {
const now = new Date(); // 현재 시간
const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000); // 현재 시간을 utc로 변환한 밀리세컨드값
const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
const koreaNow = new Date(utcNow + koreaTimeDiff); // utc로 변환된 값을 한국 시간으로 변환시키기 위해 9시간(밀리세컨드)를 더함
$date.innerText = year + month + date + amOrPm + " " + hour + ":" + minute + ":" + second;
}
