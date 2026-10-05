import "./styles.css"

/** Input Groups */
const form = document.querySelector('.create-acc');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const postal = document.querySelector('#postal');
const pass = document.querySelector('#password');
const passConfirm = document.querySelector('#confirm');

/**Error Messages */

const emailError = document.querySelector('.emailError');
const countryError = document.querySelector('.countryError');
const postalError = document.querySelector('.postalError');
const passwordError = document.querySelector('.passwordError');
const passConfirmError = document.querySelector('.pConfirmError');

/**inline validation display as user types */

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent  = '';
    } else {
        showError();
    };
});

country.addEventListener('input', (e) => {
    if (country.validity.valid) {
        countryError.textContent  = '';
    } else {
        e.preventDefault()
        showError();

    };
});

postal.addEventListener('input', (e) => {
    if (postal.validity.valid) {
        postalError.textContent  = '';
    } else {
        e.preventDefault()
        showError();
    };
});

pass.addEventListener('input', (e) => {
    if (pass.validity.valid) {
        passwordError.textContent = "Strong Password"
        passwordError.classList.add('passConfirmMatch');
    } else {
        e.preventDefault()
        showError();
        passwordError.classList.remove('passConfirmMatch');
    }
});

passConfirm.addEventListener('input', (e) => {
    if (pass.value !== passConfirm.value) {
        passConfirmError.textContent = 'Passwords do not match';
        passConfirmError.classList.remove("passConfirmMatch");
    } else if (pass.value === passConfirm.value && passConfirm.value !== "") {
        passConfirmError.textContent = 'Passwords Match';
        passConfirmError.classList.add("passConfirmMatch");
    } else {
        passConfirmError.textContent = "";
        passConfirmError.classList.remove("passConfirmMatch");
    }
});

/**Prevent the form from submitting when a field is invalid */

form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        showError();
        e.preventDefault();
    } else if (!country.validity.valid) {
        showError();
        e.preventDefault();
    } else if (!postal.validity.valid) {
        showError();
        e.preventDefault();
    } else if (!pass.validity.valid) {
        showError();
        e.preventDefault();
    } else if (pass.value !== passConfirm.value) {
        passConfirmError.textContent = 'Passwords do not match';
        e.preventDefault();
    }
});

/**Function that toggles the correct Error */

function showError () {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'This does not appear to be a valid Email address';
    } else if (email.validity.valueMissing) {
        emailError.textContent = 'You must Fill out this Field';
    } else if (country.validity.valueMissing) {
        countryError.textContent = 'Please Select Your Country';
    } else if (postal.validity.valueMissing) {
        postalError.textContent = 'Please Fill this Field';
    } else if (pass.validity.patternMismatch) {
        passwordError.textContent = 'Use 8+ characters with a mix of letters, numbers and symbols.'
    } else if (pass.validity.valueMissing) {
        passwordError.textContent = 'You must Fill out this Field';
    } else if (passConfirm.validity.valueMissing) {
        passConfirmError.textContent = 'Please Confirm your Password';
    };
};

/**Toggling  Password start*/

function togglePassword () {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#confirm');
    const togglePassBtn = document.querySelector ('.passPrivacy-btn');
    const passwordConfirmBtn = document.querySelector('.passConfirmPrivacy-btn');

    togglePassBtn.addEventListener('click', () => {
        if (password.type === 'password') {
            password.type = 'text';
            togglePassBtn.textContent = 'Hide';
        } else {
            password.type = 'password';
            togglePassBtn.textContent = 'show';
        }
    });

    passwordConfirmBtn.addEventListener('click', () => {
        if (passwordConfirm.type === 'password') {
            passwordConfirm.type = 'text';
            passwordConfirmBtn.textContent = 'Hide';
        } else {
            passwordConfirm.type = 'password';
            passwordConfirmBtn.textContent = 'show';
        }
    });
}

togglePassword();

