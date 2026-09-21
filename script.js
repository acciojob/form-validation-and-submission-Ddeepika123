//your JS code here. If required.
const form = document.getElementById("myForm");
const terms = document.getElementById("terms");
const submit = document.getElementById("submit");

terms.addEventListener("change", function () {

    if (terms.checked) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }

});

form.addEventListener("submit", function (event) {

    if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
    }

});