// code to copy password to clipword
export async function copyText() {
    const text = document.getElementById('password-div').innerText;

    try {
        await navigator.clipboard.writeText(text);
        alert('password copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
};