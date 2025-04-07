function generarNumeroAleatorio() {
    const passwordLength = document.getElementById("passwordLength").value;

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrsñtuvwxyz0123456789?";
    let contrasena = "";

    for (let i = 0; i < passwordLength; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }

    if (contrasena.length < 8) {
        alert("Es recomendable que la contraseña tenga mas de 8 caracteres");
    }

    passwordDisplay.innerHTML = `
        <h2 class="titulo">Contraseña Generada:</h2>
        <button class="btn btn-primary" onclick="copiarContrasena('${contrasena}')">Copiar Contraseña</button>
        <h2 class="contra">${contrasena}</h2>
    `;
}

function copiarContrasena(contrasena: string): void {
    navigator.clipboard.writeText(contrasena);
    alert("Contraseña copiada al portapapeles.");
}


function LimpiarContra(): void {
    let contrasena: string = "";
    let passwordDisplay.innerHTML = "";
}