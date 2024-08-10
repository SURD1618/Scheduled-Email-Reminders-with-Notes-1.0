chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

// Ensure alarms are correctly initialized
chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.notifications.create(alarm.name, {
    type: "basic",
    iconUrl: "icons/icon128.png",
    title: "Email Reminder",
    message: `Reminder: ${alarm.name}`,
    buttons: [{ title: "Open Email" }],
    priority: 0,
  });
});

// Handle notification button click events
chrome.notifications.onButtonClicked.addListener((notificationId) => {
  // Open the default email client with the subject pre-filled
  chrome.storage.local.get(notificationId, (result) => {
    const mailtoLink = `mailto:?subject=${encodeURIComponent(
      notificationId
    )}&body=${encodeURIComponent(result[notificationId] || "")}`;
    chrome.tabs.create({ url: mailtoLink });
  });
});
