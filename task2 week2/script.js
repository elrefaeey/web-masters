document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            if (e.target.innerText === 'ON') {
                display.value = '';
            } else if (e.target.innerText === 'OFF') {
                display.value = '';
            } else if (e.target.innerText === 'DE') {
                display.value = display.value.slice(0, -1);
            } else if (e.target.innerText === '=') {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
            } else {
                display.value += e.target.innerText;
            }
        });
    });
});
