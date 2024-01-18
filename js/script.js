function hitungLuasKeliling() {
    var sideLength = parseFloat(document.getElementById("sideLength").value);

    if (!isNaN(sideLength) && sideLength > 0) {
        var luas = sideLength * sideLength;
        var keliling = 4 * sideLength;

        displayResults(sideLength, luas, keliling);
    } else {
        alert("Masukkan panjang sisi yang valid.");
    }
}

function displayResults(sideLength, luas, keliling) {
    document.getElementById("luasResult").innerText = "Luas: " + luas.toFixed(2) + " satuan luas";
    document.getElementById("kelilingResult").innerText = "Keliling: " + keliling.toFixed(2) + " satuan panjang";

    displayExplanation(sideLength, luas, keliling);

    document.getElementById("result-container").style.display = "block";
}

function displayExplanation(sideLength, luas, keliling) {
    var explanationList = document.getElementById("calculationExplanation");
    explanationList.innerHTML = ""; // Clear previous explanations

    var explanationItems = [
        "Luas = Panjang Sisi × Panjang Sisi",
        "<br>",
        "Luas = " + sideLength + " × " + sideLength + " = " + luas.toFixed(2) + " satuan luas",
        "<br>",
        "<br>",
        "Keliling = 4 × Panjang Sisi",
        "<br>",
        "Keliling = 4 × " + sideLength + " = " + keliling.toFixed(2) + " satuan panjang"
    ];

    explanationList.innerHTML = explanationItems.join('');
}

function resetForm() {
    document.getElementById("result-container").style.display = "none";
    document.getElementById("calculator-form").reset(); // Reset the form
    document.getElementById("luasResult").innerText = "Luas: "; // Clear the result messages
    document.getElementById("kelilingResult").innerText = "Keliling: ";
    document.getElementById("calculationExplanation").innerHTML = ""; // Clear the explanation list
}
