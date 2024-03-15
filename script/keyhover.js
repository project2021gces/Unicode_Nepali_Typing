document.addEventListener('keydown', keyhoverEvents);
document.addEventListener('keyup', keyhoverEvents);

function keyhoverEvents(event) {
    const innerdataKeys = document.querySelectorAll(`div[data-key="${event.key}"]`);
    if (innerdataKeys) {
        innerdataKeys.forEach((innerdataKey) => {
            const keyMainDiv = innerdataKey.closest('.key');
            if (event.type === 'keydown') {
                keyMainDiv.classList.add('active');
                keyMainDiv.style.backgroundColor = '#d1f2e6';
            } else if (event.type === 'keyup') {
                keyMainDiv.classList.remove('active');
                keyMainDiv.style.backgroundColor = '';
            }
        });
    }
}