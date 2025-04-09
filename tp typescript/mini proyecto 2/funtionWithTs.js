function generarNumeroAleatorio() {
    var inputElement = document.getElementById("passwordLength");
    var passwordDisplay = document.getElementById("passwordDisplay");
    var passwordLength = parseInt(inputElement.value);
    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert("Ingrese un número válido para la longitud de la contraseña.");
        return;
    }
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?";
    var contrasena = "";
    for (var i = 0; i < passwordLength; i++) {
        var indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }
    if (contrasena.length < 8) {
        alert("Es recomendable que la contraseña tenga más de 8 caracteres");
    }
    passwordDisplay.innerHTML = "\n        <h2 class=\"titulo\">Contrase\u00F1a Generada:</h2>\n        <button class=\"btn btn-primary\" onclick=\"copiarContrasena('".concat(contrasena, "')\">Copiar Contrase\u00F1a</button>\n        <h2 class=\"contra\">").concat(contrasena, "</h2>\n    ");
}
function copiarContrasena(contrasena) {
    navigator.clipboard.writeText(contrasena).then(function () {
        alert("Contraseña copiada al portapapeles.");
    });
}
function LimpiarContra() {
    var passwordDisplay = document.getElementById("passwordDisplay");
    passwordDisplay.innerHTML = "";
}
