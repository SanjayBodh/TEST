// app.js
document.addEventListener('DOMContentLoaded', function () {
    const cookiePopup = document.getElementById('cookie-popup');
    const dismissButton = document.getElementById('dismiss-button');

    // Check if the user has already dismissed the cookie popup
    if (getCookie('cookiePopupDismissed') === 'true') {
        cookiePopup.style.display = 'none';
    } else {
        cookiePopup.style.display = 'block';
    }

    // Dismiss the cookie popup on button click
    dismissButton.addEventListener('click', function () {
        cookiePopup.style.display = 'none';
        // Set a cookie to remember that the user has dismissed the popup
        setCookie('cookiePopupDismissed', 'true', 365);
    });
});

// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

// Function to get the value of a cookie by name
function getCookie(name) {
    const cookieArray = document.cookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookiePair = cookieArray[i].split('=');
        if (name === cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}