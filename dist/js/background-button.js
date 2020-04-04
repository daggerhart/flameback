
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/Tabs/sendMessage
browser.browserAction.onClicked.addListener(function(tab, OnClickData) {
    const sending = browser.tabs.sendMessage(
        tab.id,
        "removeOnPaste"
    )
});
