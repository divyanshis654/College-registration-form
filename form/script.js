document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm()) {
        alert('Form submitted successfully!');
        form.reset(); // To clear the form after submission
    }
});

function validateForm() {
    let valid = true;

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const streetAddress = document.getElementById('street-address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zipCode = document.getElementById('zip-code').value.trim();
    const country = document.getElementById('country').value.trim();
    const regNum = document.getElementById('student-reg-num').value.trim();
    const contactNumber = document.getElementById('contact-number').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const guardianName = document.getElementById('guardian-name').value.trim();
    const guardianContact = document.getElementById('guardian-contact').value.trim();
    const guardianEmail = document.getElementById('guardian-email').value.trim();
    const emergencyContact = document.getElementById('emergency-contact').value.trim();

    // Clear previous error messages
    hideError('firstNameError');
    hideError('lastNameError');
    hideError('streetAddressError');
    hideError('cityError');
    hideError('stateError');
    hideError('zipCodeError');
    hideError('countryError');
    hideError('regnumError');
    hideError('contactError');
    hideError('emailError');
    hideError('passwordError');
    hideError('confirmPasswordError');
    hideError('guardianNameError');
    hideError('guardianContactError');
    hideError('guardianEmailError');
    hideError('emergencyContactError');

    // Validate first name
    if (firstName === '') {
        showError('firstNameError', 'First name is required');
        valid = false;
    }

    // Validate last name
    if (lastName === '') {
        showError('lastNameError', 'Last name is required');
        valid = false;
    }

    // Validate street address
    if (streetAddress === '') {
        showError('streetAddressError', 'Street address is required');
        valid = false;
    }

    // Validate city
    if (city === '') {
        showError('cityError', 'City is required');
        valid = false;
    }

    // Validate state
    if (state === '') {
        showError('stateError', 'State is required');
        valid = false;
    }

    // Validate zip code
    if (zipCode === '') {
        showError('zipCodeError', 'Zip code is required');
        valid = false;
    }

    // Validate country
    if (country === '') {
        showError('countryError', 'Country is required');
        valid = false;
    }

    // Validate registration number
    if (regNum === '') {
        showError('regnumError', 'Registration number is required');
        valid = false;
    }

    // Validate contact number
    if (contactNumber === '') {
        showError('contactError', 'Contact number is required');
        valid = false;
    } else if (!validatePhoneNumber(contactNumber)) {
        showError('contactError', 'Invalid contact number');
        valid = false;
    }

    // Validate email
    if (email === '') {
        showError('emailError', 'Email is required');
        valid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email');
        valid = false;
    }

    // Validate password
    if (password === '') {
        showError('passwordError', 'Password is required');
        valid = false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        showError('confirmPasswordError', 'Confirm password is required');
        valid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match');
        valid = false;
    }

    // Validate guardian name
    if (guardianName === '') {
        showError('guardianNameError', 'Guardian name is required');
        valid = false;
    }

    // Validate guardian contact
    if (guardianContact === '') {
        showError('guardianContactError', 'Guardian contact number is required');
        valid = false;
    } else if (!validatePhoneNumber(guardianContact)) {
        showError('guardianContactError', 'Invalid guardian contact number');
        valid = false;
    }

    // Validate guardian email
    if (guardianEmail === '') {
        showError('guardianEmailError', 'Guardian email is required');
        valid = false;
    } else if (!validateEmail(guardianEmail)) {
        showError('guardianEmailError', 'Invalid guardian email');
        valid = false;
    }

    // Validate emergency contact
    if (emergencyContact === '') {
        showError('emergencyContactError', 'Emergency contact number is required');
        valid = false;
    } else if (!validatePhoneNumber(emergencyContact)) {
        showError('emergencyContactError', 'Invalid emergency contact number');
        valid = false;
    }

    return valid;
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function hideError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
    errorElement.style.display = 'none';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}

function validatePhoneNumber(phone) {
    const re = /^\d{10}$/;
    return re.test(phone);
}

// Dynamic field highlighting
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.backgroundColor = '#ADD8E6';
    });
    input.addEventListener('blur', function() {
        this.style.backgroundColor = '';
    });
});

// Tooltip feature
const tooltipElements = document.querySelectorAll('[data-tooltip]');
tooltipElements.forEach(elem => {
    elem.addEventListener('mouseenter', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = this.getAttribute('data-tooltip');
        document.body.appendChild(tooltip);
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.top = `${rect.bottom + 10}px`;
    });

    elem.addEventListener('mouseleave', function() {
        document.querySelector('.tooltip').remove();
    });
});
