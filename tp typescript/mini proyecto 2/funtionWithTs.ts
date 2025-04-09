function generarPassword(longitud: number): string {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < longitud; i++) {
        const randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }
    return password;
}

document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.getElementById("generateBtn") as HTMLButtonElement;
    const passwordBox = document.getElementById("passwordBox") as HTMLDivElement;
    const lengthInput = document.getElementById("length") as HTMLInputElement;

    generateBtn.addEventListener("click", () => {
        const length = parseInt(lengthInput.value);
        if (length >= 4 && length <= 50) {
            const password = generarPassword(length);
            passwordBox.textContent = password;
        } else {
            passwordBox.textContent = "La longitud debe estar entre 4 y 50 caracteres ";
        }
    });
});