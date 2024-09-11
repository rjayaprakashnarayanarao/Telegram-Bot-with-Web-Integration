document.addEventListener("DOMContentLoaded", function() {    
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
});

function redirectToTelegram() {
    window.open("https://t.me/spin2earn_community", "_blank");
    console.log("Opened in a new tab");
    document.addEventListener("visibilitychange", function() {
        if (document.visibilityState === 'visible') {
            window.location.reload();
        }
    });
}

// loading page

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    let loaded = false;
    let timer;
  
  
    // Function to hide loading screen
    function hideLoadingScreen() {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        mainContent.style.display = 'block';
        // for background img
        document.body.classList.add('background-loaded');
    }
  
    // Event listener for when all content is fully loaded
    window.addEventListener('load', () => {
        loaded = true;
        if (timer) {
            clearTimeout(timer); // Clear any existing timer if content loads before 1 second
        }
        hideLoadingScreen(); // Hide loading screen immediately when content is fully loaded
    });
  
    // Set a timer to hide loading screen after 1 second if content loads quickly
    timer = setTimeout(() => {
        if (loaded) return; // If content has already loaded, do nothing
        hideLoadingScreen();
    }, 1000); // 1 second
});