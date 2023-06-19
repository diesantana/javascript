const btn = document.querySelector('#toggleButton');

btn.addEventListener('click', function() {
    btn.nextElementSibling.classList.toggle('hidden');
});

