chrome.runtime.onInstalled.addListener(function() {
  // chrome.storage.sync.set({color: '#3aa757', keywords: ['COVID19', 'masks', 'vaccine']}, function() {
  //   console.log("");
  // });



  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {},
        })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
});

// if (true) {
//     window.open("popup.html", "extension_popup", "width=300,height=400,status=no,scrollbars=yes,resizable=no");
// }
