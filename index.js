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
          <p>${comments[i].body}</p>
        </li><hr>`;
      }  
    });
}

function registerComment(auth) {
  let $commentRegistration = document.getElementById("comment-registration");
  $commentRegistration.addEventListener("click", () => {
    let $nickname = document.getElementById("nickname");
    let $commentInput = document.getElementById("comment_input");
    new Date().getTime(); // 1637546948303
new Date(1637546948303); // Mon Nov 22 2021 11:09:08 GMT+0900 (한국 표준시)    
        
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

