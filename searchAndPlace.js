var text = document.querySelectorAll('h1, h2, p, span, a');

chrome.storage.sync.get('keywords', function (data) {

});


for (var j = 0; j < text.length; j++) {
    if (text[j].innerHTML.includes('Engaging')) {
        text[j].innerHTML = text[j].innerHTML.replace('Onboarding', 'your mom')
    }
}
