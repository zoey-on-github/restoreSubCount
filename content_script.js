const hover = document.getElementsByClassName("hover redditname")[1];
subredditName = window.location.href.split("/")[4];
oldOrNew = window.location.href.split("/")[2].split(".")[0];
if (hover) {
  fetch("https://" + oldOrNew + ".reddit.com/r/" + subredditName + "/about.json").then(
    (response) => {
      console.log(response);
      response.json().then((data) => {
        console.log(data);
        let formatter = Intl.NumberFormat("en", { notation: "compact" });
        let hoverFormatter = Intl.NumberFormat();
        const hoverSubcount = hoverFormatter.format(data.data.subscribers);
        const formattedSubcount = formatter.format(data.data.subscribers);
        const test = document.createElement("div");
        test.innerHTML = formattedSubcount + " subscribers";
        test.setAttribute("title", hoverSubcount + " subscribers");
        hover.append(test);
      });
    },
  );
}
