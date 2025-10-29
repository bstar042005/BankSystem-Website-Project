// --- ASSIGNMENT 5: ACCOUNT OPENING ---

function handleAccountOpening(event) {
    // 1. Prevent the form from submitting normally (which would refresh the page)
    event.preventDefault(); 

    // 2. Get the values from the input fields
    const customerName = document.getElementById('cname').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;

    // 3. Store the values in the browser's temporary storage (Session Storage)
    sessionStorage.setItem('cname', customerName);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('city', city);

    // 4. Redirect the user to the display page
    window.location.href = 'account_details.html';
    
    // Return false to officially stop the form submission
    return false;
}

// --- ASSIGNMENT 6: LOGIN ---

function handleLogin(event) {
    // 1. Prevent the form from submitting normally
    event.preventDefault(); 

    // 2. Get the values from the input fields
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pword').value;

    // 3. Store the values in the browser's temporary storage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);

    // 4. Redirect the user to the display page
    window.location.href = 'login_details.html';
    
    // Return false to officially stop the form submission
    return false;
}


// --- CODE TO RUN ON DISPLAY PAGES ---

// Function runs when 'account_details.html' loads
function displayAccountDetails() {
    // Check if we are on the correct page
    if (window.location.pathname.endsWith('account_details.html')) {
        // Retrieve values from Session Storage
        const cname = sessionStorage.getItem('cname');
        const address = sessionStorage.getItem('address');
        const city = sessionStorage.getItem('city');

        // Insert the retrieved values into the correct span IDs
        document.getElementById('display-cname').textContent = cname;
        document.getElementById('display-address').textContent = address;
        document.getElementById('display-city').textContent = city;
    }
}

// Function runs when 'login_details.html' loads
function displayLoginDetails() {
    // Check if we are on the correct page
    if (window.location.pathname.endsWith('login_details.html')) {
        // Retrieve values from Session Storage
        const username = sessionStorage.getItem('username');
        const password = sessionStorage.getItem('password');

        // Insert the retrieved values into the correct span IDs
        document.getElementById('display-uname').textContent = username;
        document.getElementById('display-pword').textContent = password;
    }
}


// Attach the display functions to run when the display pages load
window.onload = function() {
    displayAccountDetails();
    displayLoginDetails();
};