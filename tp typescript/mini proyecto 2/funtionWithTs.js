function generarPassword(longitud) {
    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < longitud; i++) {
        var randomIndex = Math.floor(Math.random() * caracteres.length);
        password += caracteres[randomIndex];
    }
    return password;
}
document.addEventListener("DOMContentLoaded", function () {
    var generateBtn = document.getElementById("generateBtn");
    var passwordBox = document.getElementById("passwordBox");
    var lengthInput = document.getElementById("length");
    generateBtn.addEventListener("click", function () {
        var length = parseInt(lengthInput.value);
        if (length >= 4 && length <= 50) {
            var password = generarPassword(length);
            passwordBox.textContent = password;
        }
        else {
            passwordBox.textContent = "La longitud debe estar entre 4 y 50 caracteres ";
        }
    });
});
