console.log(document.getElementsByClassName("hover redditname")[1]);
console.log("test");
subredditName = window.location.href;
console.log(subredditName);
fetch(subredditName + "about.json").then((response) => {
  console.log(response);
  response.json().then((data) => {
    console.log(data);
  });
});
