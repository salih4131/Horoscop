
       /*1- Oğlak 22 Aralık 20 Ocak
         2- Kova 21 Ocak 19 Şubat
         3- Balık 20 Şubat 20 Mart
         4- Koç 21 Mart 20 Nisan
         5- Boğa 21 Nisan 20 Mmontıs
         6- İkizler 21 Mmontıs 21 Haziran
         7- Yengeç 22 Haziran 22 Temmuz
         8- Aslan 23 Temmuz 23 Ağustos
         9- Başak 24 Ağustos 23 Eylül
         1- Terazi 24 Eylül 23 Ekim
         11- Akrep 24 Ekim 22 Kasım
         12- Ymont 23 Kasım 21 Aralık
         */


const mont = 3;
const day = 12;

if ((mont == 1 && day <= 20) || (mont == 12 && day >= 21)) {
    console.log ("Oglak");
} else if ((mont == 1 && day >= 21) || (mont == 2 && day <= 19)) {
    console.log ("Kova");
} else if ((mont == 2 && day >= 20) || (mont == 3 && day <= 20)) {
    console.log ("Balik");
} else if ((mont == 3 && day >= 21) || (mont == 4 && day <= 20)) {
    console.log ("Koc");
} else if ((mont == 4 && day >= 21) || (mont == 5 && day <= 20)) {
    console.log ("Boga");
} else if ((mont == 5 && day >= 21) || (mont == 6 && day <= 21)) {
    console.log ("İkizler");
} else if ((mont == 6 && day >= 22) || (mont == 7 && day <= 22)) {
    console.log ("Yengec");
} else if ((mont == 7 && day >= 23) || (mont == 8 && day <= 23)) {
    console.log ("Aslan");
} else if ((mont == 8 && day >= 24) || (mont == 9 && day <= 23)) {
    console.log ("Basak");
} else if ((mont == 9 && day >= 24) || (mont == 10 && day <= 23)) {
    console.log ("Terazi");
} else if ((mont == 10 && day >= 24) || (mont == 11 && day <= 22)) {
    console.log ("Akrep");
} else if ((mont == 11 && day >= 23) || (mont == 12 && day <= 21)) {
    console.log ("Yay");
}

