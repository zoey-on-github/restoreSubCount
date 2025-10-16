const hover = document.getElementsByClassName("hover redditname")[1];
console.log("test");
subredditName = window.location.href.split("/")[4];
console.log(subredditName);
/*
async function getSubCount() {
  const response = fetch(subredditName + "about.json")
  
   console.log(data);
    console.log(data.data.subscribers)
    const subcount = data.data.subscribers;
  });
});
}
  */
console.log(subcount);
//Element.insertAdjacentHTML("afterend",hover)
const test = document.createElement("div");
test.innerHTML="test"
hover.append(test)

