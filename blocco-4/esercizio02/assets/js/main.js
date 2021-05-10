/*
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D )
 */

var tRettangolo = {
    base : 10,
    altezza : 5
}

var ipotenusa;
var perimetro;
var area;

ipotenusa = Math.sqrt(Math.pow(tRettangolo.base, 2) + Math.pow(tRettangolo.altezza, 2));

perimetro = (ipotenusa + tRettangolo.base + tRettangolo.altezza).toFixed(2);

console.log(perimetro);

area = parseInt((tRettangolo.base * tRettangolo.altezza) / 2);

console.log(area);