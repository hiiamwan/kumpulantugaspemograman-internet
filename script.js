function hitung(operasi) {
    var bilangan1 = parseFloat(document.fform.bilangan1.value);
    var bilangan2 = parseFloat(document.fform.bilangan2.value);
    var hasil;

    if (isNaN(bilangan1) || isNaN(bilangan2)) {
        alert("Masukkan bilangan yang valid.");
        return;
    }

    switch (operasi) {
        case 'tambah':
            hasil = bilangan1 + bilangan2;
            break;
        case 'kurang':
            hasil = bilangan1 - bilangan2;
            break;
        case 'kali':
            hasil = bilangan1 * bilangan2;
            break;
        case 'bagi':
            if (bilangan2 === 0) {
                alert("Pembagian oleh nol tidak diperbolehkan.");
                return;
            }
            hasil = bilangan1 / bilangan2;
            break;
        default:
            alert("Operasi tidak valid.");
            return;
    }

    document.getElementById("hasil").innerHTML = "Hasil: " + hasil;
}
