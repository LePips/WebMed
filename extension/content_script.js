var test = document.querySelectorAll('h1, h2, p, span, a');

for (let j = 0, j < text.length; j++) {
    if (text[j].innerHTML.includes('a')) {
        text[j].innerHTML = text[j].innerHTML.replace('Onboarding', 'your mom')
    }
}
