// updates the icon badge with the time and specified color
function updateBadge(time) {
  chrome.browserAction.setBadgeText({
    text: time.toString()
  });
  chrome.browserAction.setBadgeBackgroundColor({
    color: "#287C9E";
  });
}

