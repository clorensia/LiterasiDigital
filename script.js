// Function to get form data
function handleGetFormData() {
    return {
        name: document.getElementById('name').value,
        city: document.getElementById('city').value,
        email: document.getElementById('email').value,
        zipCode: document.getElementById('zip-code').value,
        status: document.getElementById('status').checked
    };
}

// Function to check if input is number
function isNumber(str) {
    if (str === null || str.trim() === "") return false;
    return !isNaN(Number(str));
}

// Function to check if checkbox is checked
function checkboxIsChecked() {
    return document.getElementById('status').checked;
}

function validateFormData(obj) {
  return obj !== null &&
         !isNaN(obj.zipCode) &&
         document.getElementById('status')?.checked === true;
}
function submit() {
    event.preventDefault(); 

    const formData = handleGetFormData(); 
    const isValid = validateFormData(formData); 

    const warningDiv = document.getElementById('warning'); 

    if (!isValid) {
        warningDiv.textContent = "Periksa form anda sekali lagi"; 
    } else {
        warningDiv.textContent = ""; 
    }
}

// Tambahkan event listener pada form saat halaman dimuat
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', submit);
});
