var text = document.querySelectorAll('h1, h2, p, span, a, div');


for (var j = 0; j < text.length; j++) {
    if (text[j].innerHTML.includes('mask')) {
        var injection = '<a href="https://lepips.github.io/WebMed/" style="background-color: orange">mask<a>';
        text[j].innerHTML = text[j].innerHTML.replace('mask', injection)
    } else if (text[j].innerHTML.toLowerCase().includes('social distancing')) {
        var injection = '<a href="https://lepips.github.io/WebMed/" style="background-color: orange">social distancing<a>';
        text[j].innerHTML = text[j].innerHTML.replace('social distancing', injection)
    }
}
