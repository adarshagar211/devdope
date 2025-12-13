// Copy text
function changeCopyText(button) {
    const input = document.querySelector(button.getAttribute('data-clipboard-target'));
    if (!input) return;

    input.select();
    document.execCommand('copy');

    const originalText = button.textContent;
    button.textContent = 'Copied!';

    setTimeout(() => {
        button.textContent = originalText;
    }, 2000);
}

document.addEventListener("DOMContentLoaded", () => {
   // Future scripts
});
