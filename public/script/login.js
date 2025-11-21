document.getElementById("loginBtn").onclick = async () => {
  const name = document.getElementById("username").value.trim();

  if (!name) {
    alert("名前を入力してください");
    return;
  }

  // localStorage に保存
  localStorage.setItem("username", name);

  // サーバーにも登録
  await fetch("/api/registerUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  // 掲示板へ
  location.href = "/";
};

// すでにログイン済みなら自動でリダイレクト
if (localStorage.getItem("username")) {
  location.href = "/";
}
