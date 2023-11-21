alert(`Hai! Sebelum masuk ke laman WEBPRO, Kita akan bermain "Tebak Angka"`);

let x= parseInt(prompt(`Masukkan angka yang anda inginkan *(lebih kecil lebih baik)`));

while (!x) {
    x= parseInt(prompt(`Inputan harus berupa angka!`));
};

let y=1;

let gues= Math.floor(Math.random()*x+1);
alert(`Inputan sebelumnya merupakan nilai maksimal interval dari tebakan berikut`)
let jawaban= parseInt(prompt(`Tebak angka:`));
while (jawaban !== gues) {
    y++;

    if (jawaban> gues) {
        jawaban= parseInt(prompt(`Coba lagi dengan angka yang lebih kecil dari ${jawaban}`));
    } else if (jawaban< gues) {
        jawaban= parseInt(prompt(`Coba lagi dengan angka yang lebih besar dari ${jawaban}`));
    } else {
        jawaban= parseInt(prompt(`Inputan harus berupa angka!`));
    }
};

if (y== 1) {
    alert(`SELAMAT, Tebakan anda benar dengan hanya satu percobaan. Ampun suhu..!`)
} else if (y<= 5) {
    alert(`SELAMAT, Tebakan anda benar setelah ${y} percobaan, yaah lumayanlah..!`)
} else {
    alert(`SELAMAT, Tebakan anda benar setelah ${y} percobaan dan itu sangat PAYAH!!`)
};

const mathsin= (Number) => Math.sin(Number);
console.log(mathsin(90));

const mathcos= (Number) => Math.cos(Number);
console.log(mathcos(90));

let hi= 'hi';