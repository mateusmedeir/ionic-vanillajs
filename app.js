const nameInput = document.querySelector('#input-name');
const ratingInput = document.querySelector('#input-rating');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const coursesList = document.querySelector('#courses-list');

const clearInputs = () => {
    nameInput.value = '';
    ratingInput.value = '';
}

confirmBtn.addEventListener('click', () => {
    const enteredName = nameInput.value;
    const enteredRating = ratingInput.value;

    if (enteredName.trim().length <= 0 || 
    enteredRating <= 0 || enteredRating > 5 || 
    enteredRating.trim().length <= 0) {
        invalidInputsAlert();
        return;
    };
    
    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<p><strong>${enteredName}</strong> - ${enteredRating}/5</p>`;
    coursesList.appendChild(newItem);
    clearInputs();
});

async function invalidInputsAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Inputs';
    alert.message = 'Please enter valid name and rating!';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
}

cancelBtn.addEventListener('click', clearInputs);