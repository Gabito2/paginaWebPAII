function generarNumeroAleatorio(): void {
    const inputElement = document.getElementById("passwordLength") as HTMLInputElement;
    const passwordDisplay = document.getElementById("passwordDisplay") as HTMLDivElement;

    const passwordLength: number = parseInt(inputElement.value);

    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert("Ingrese un número válido para la longitud de la contraseña.");
        return;
    }

    const caracteres: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?";
    let contrasena: string = "";

    for (let i: number = 0; i < passwordLength; i++) {
        const indiceAleatorio: number = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }

    if (contrasena.length < 8) {
        alert("Es recomendable que la contraseña tenga más de 8 caracteres");
    }

    passwordDisplay.innerHTML = `
        <h2 class="titulo">Contraseña Generada:</h2>
        <button class="btn btn-primary" onclick="copiarContrasena('${contrasena}')">Copiar Contraseña</button>
        <h2 class="contra">${contrasena}</h2>
    `;
}

function copiarContrasena(contrasena: string): void {
    navigator.clipboard.writeText(contrasena).then(() => {
        alert("Contraseña copiada al portapapeles.");
    });
}

function LimpiarContra(): void {
    const passwordDisplay = document.getElementById("passwordDisplay") as HTMLDivElement;
    passwordDisplay.innerHTML = "";
}
