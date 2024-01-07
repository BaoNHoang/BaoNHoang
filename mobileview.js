if (window.innerWidth <= 768) {
    document.addEventListener('DOMContentLoaded', function () {
        var buttons = document.querySelectorAll('#buttons, #buttonspro');
        var h1 = document.querySelector('h1');
        var h2 = document.querySelector('h2');
        var h3 = document.querySelector('h3');
        var ul = document.querySelector('ul');
        var p = document.querySelector('p');
        var section = document.querySelector('section');
        var aboutMe = document.querySelector('#aboutMe');

        buttons.forEach(function (button) {
            button.style.padding = '10px';
        });

        if (h1) {
            h1.style.fontSize = 'larger';
        }

        if (h2) {
            h2.style.fontSize = 'large';
        }

        if (h3) {
            h3.style.fontSize = 'medium';
        }
        if (ul) {
            ul.style.flexDirection = 'column';
        }

        if (p) {
            p.style.fontSize = 'small';
        }

        if (section) {
            section.style.maxWidth = '100%';
            section.style.padding = '0 10px';
        }

        if (aboutMe) {
            aboutMe.style.fontSize = 'small';
        }
    });
}