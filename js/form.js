// Set the alert button's click function
document.getElementById('alert-button').addEventListener('click', (event) => {
    event.preventDefault();

    if (document.getElementById('lorem').checked) {
        alert(document.getElementById('lorem-text').innerHTML);
    }
    else {
        alert(document.getElementById('ipsum-text').innerHTML);
    }
});