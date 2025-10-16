const hover = document.getElementsByClassName("hover redditname")[1];
console.log("test");
subredditName = window.location.href.split("/")[4];
console.log(subredditName);
fetch("https://old.reddit.com/r/" + subredditName + "/about.json").then((response) => {
  console.log(response);
  response.json().then((data) => {
    console.log(data);
    const subcount = data.data.subscribers;
    const test = document.createElement("div");
    test.innerHTML = subcount + " subscribers";
    hover.append(test)
  });

  const test = document.createElement("div");
  test.innerHTML = subcount;
  hover.append(test)
});
