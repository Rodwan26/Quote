NewQuote();
document.getElementById("NewQuote").addEventListener("click", NewQuote);
document.getElementById("tweet").addEventListener("click", GetTweet);
function GetTweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      document.getElementById("quote").textContent +
      "  ---- by " +
      document.getElementById("author").textContent,
    "Tweet Window ",
    "width: 100vw,height:600vh"
  );
}

function NewQuote() {
  const api = "https://api.quotable.io/random";

  axios.get(api).then(function GetQuote(response) {
    console.log(response);
    document.getElementById("quote").textContent = `${response.data.content} `;
    document.getElementById("author").textContent = ` ${response.data.author}`;
  });
}
