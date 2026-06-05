// Feedback
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('feedbackModal');
    const openBtn = document.getElementById('feedbackBtn');
    const closeBtn = document.getElementById('closeModal');
    const form = document.getElementById('feedbackForm');

    // Öffnen
    openBtn.addEventListener('click', () => modal.style.display = 'flex');

    // Schließen
    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    // Absenden (nach kurzem Timeout schließen)
    form.addEventListener('submit', () => {
        setTimeout(() => {
            alert("Vielen Dank für dein Feedback!");
            modal.style.display = 'none';
            form.reset();
        }, 500);
    });
});