document.getElementById('myForm').addEventListener('input', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const organization = document.getElementById('organization').value;
    const description = document.getElementById('description').value;
    const terms = document.getElementById('terms').checked;
    const submitBtn = document.getElementById('submitBtn');

    let nameValid = /^[A-Za-z\s]{1,12}$/.test(name);
    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    let organizationValid = organization.length <= 10;
    let descriptionValid = description.length <= 50;

   
    updateErrorMessage('name', nameValid, 'Name should be 1-12 letters and spaces only.');
    updateErrorMessage('email', emailValid, 'Invalid email format.');
    updateErrorMessage('organization', organizationValid, 'Organization should be up to 10 characters.');
    updateErrorMessage('description', descriptionValid, 'Description should be up to 50 characters.');

    if (nameValid && emailValid && organizationValid && descriptionValid && terms) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});

function updateErrorMessage(fieldId, isValid, errorMessage) {
    let errorElement = document.getElementById(fieldId + 'Error');
    if (!isValid) {
        if (!errorElement) {
            errorElement = document.createElement('div');
            errorElement.id = fieldId + 'Error';
            errorElement.style.color = 'red';
            errorElement.textContent = errorMessage;
            document.getElementById(fieldId).after(errorElement);
        }
    } else {
        if (errorElement) {
            errorElement.remove();
        }
    }
}

document.getElementById('submitBtn').addEventListener('click', function() {
    alert('Form submitted!');
});

//CAROUSAL JS
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExampleSlidesOnly');
    

    var prevArrow = document.createElement('a');
    prevArrow.className = 'carousel-control-prev';
    prevArrow.href = '#carouselExampleSlidesOnly';
    prevArrow.role = 'button';
    prevArrow.setAttribute('data-slide', 'prev');
    prevArrow.innerHTML = '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span>';
    carousel.appendChild(prevArrow);
    
    
    var nextArrow = document.createElement('a');
    nextArrow.className = 'carousel-control-next';
    nextArrow.href = '#carouselExampleSlidesOnly';
    nextArrow.role = 'button';
    nextArrow.setAttribute('data-slide', 'next');
    nextArrow.innerHTML = '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span>';
    carousel.appendChild(nextArrow);
});