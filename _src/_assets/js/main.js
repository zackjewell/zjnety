const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

if (prefersLightScheme) {
    toggleSwitch.checked = false;
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-site-theme', 'light');
} else {
    toggleSwitch.checked = true;
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-site-theme', 'dark');
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-site-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-site-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);