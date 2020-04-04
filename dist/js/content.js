
function removeOnPaste() {
    document.querySelectorAll('[onpaste]').forEach(function(item) {
        item.removeAttribute('onpaste')
    })
}

// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage
browser.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message === "removeOnPaste") {
        removeOnPaste()
    }
})

removeOnPaste()
