let input = document.querySelector('INPUT');
let someClass = document.querySelector('.color');

function change() {
    if (input.value === 'change color') {
        someClass.setAttribute('class', 'red');
    } else if (input.value === 'change color and text') {
        someClass.textContent = 'some another text';
        someClass.setAttribute('class', 'red');
    }
}