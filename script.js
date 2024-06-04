// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});
