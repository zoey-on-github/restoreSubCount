const hover = document.getElementsByClassName("hover redditname")[1];
const subredditName = window.location.pathname.split("/")[2];

// www.reddit.com may serve either UI. Only fetch and render when the old Reddit
// sidebar is present.
if (hover && subredditName) {
  fetch(`/r/${encodeURIComponent(subredditName)}/about.json`)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load subreddit information");
      return response.json();
    })
    .then((data) => {
      const subscribers = data?.data?.subscribers;
      if (!Number.isSafeInteger(subscribers) || subscribers < 0) return;

      const formatter = Intl.NumberFormat("en", { notation: "compact" });
      const hoverFormatter = Intl.NumberFormat();
      const subcount = document.createElement("div");

      subcount.textContent = `${formatter.format(subscribers)} subscribers`;
      subcount.setAttribute(
        "title",
        `${hoverFormatter.format(subscribers)} subscribers`,
      );
      hover.append(subcount);
    })
    .catch(() => {
      // Leave the page unchanged when the API is unavailable.
    });
}
