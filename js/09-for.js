/*
for () {}
*/

// kaip pereiti per sarasa
const marks = [10, 2, 8, 4, 3];

for (let i = 0; i < marks.length; i++) {
    const skaicius = marks[i];
    console.log(skaicius);
}

console.log('------------------');

// pereiti per intervala imtinai

const nuo = -8;
const iki = -2;

for (let i = nuo; i <= iki; i++) {
    console.log(i);
}

console.log('------------------');

// pereiti per intervala imtinai atbulai

const nuo2 = 8;
const iki2 = 4;

for (let i = nuo2; i >= iki2; i--) {
    console.log(i);
}

console.log('------------------');

// teksto ilgis ir i-toji raide
const hi = 'labas';

for (let i = 0; i < hi.length; i++) {
    const raide = hi[i];
    console.log(raide);
}

console.log('------------------');

const num1 = 15;
const div = 3;

const rem = num1 % div;
console.log(rem);


console.log('------------------');

for (let i = marks.length -1; i >= 0; i--) {
    console.log(marks[i]);
}

console.log('--------uzduotys su suma---------');

const nuo3 = -70;
const iki3 = 30;
let suma3 = 0;

for (let i = nuo3; i <= iki3; i++) {
    suma3 += i;
}
const ats = `Intervale nuo ${nuo3} iki ${iki3} suma yra ${suma3}`;
console.log(ats);


console.log('--------uzduotys su suma---------');

const nuo5 = -70;
const iki5 = 30;
let suma4 = 0;

for (let i = nuo5; i <= iki5; i++) {
    suma4 += i;
}
console.log(suma4);
console.log('--------uzduotys----------');

const nuo6 = 575;
const iki6 = 815;
let suma6 = 0;

for (let i = nuo6; i <= iki6; i++) {
    suma6 += i;
}
console.log(suma6);

console.log('--------uzduotys----------');

const nuo7 = -50;
const iki7 = 50;
let suma7 = 0;

for (let i = nuo7; i <= iki7; i++) {
suma7 += i
}
console.log(suma7);
console.log('--------uzduotys--2--------');

const nuo8 = -70;
const iki8 = 30;
let sum8 = 0;

for (let i = nuo8; i <= iki8; i++) {
    sum8 += i;
}
console.log(sum8);


console.log('--------uzduotys-perrasyti is kito galo---------');
const sveikas = 'labas';

for (let i = sveikas.length -1; i >= 0; i--) {
    const raide = sveikas[i];
    console.log(raide);
}

console.log('--------uzduotys----------');

const sveikas2 = 'labas';
let reversed = ``;

for (let i = sveikas2.length -1; i >= 0; i--) {
    reversed += sveikas2[i];
}
console.log(reversed);

console.log('--------uzduotys----------');

const vardas = 'Dovile';
let reversed1 = '';

for (let i = vardas.length - 1; i >= 0; i--) {
    reversed1 += vardas[i];
}
console.log(reversed1);

console.log('--------uzduotys----------');

const pavarde = 'kerbelyte';
let reversed2 = '';

for (let i = pavarde.length - 1; i >= 0; i--) {
    reversed2 += pavarde[i];
}
console.log(reversed2);

console.log('--------uzduotys----kiek skaiciu, kurie dalijasi be liekanos------');
const nuo4 = 0;
const iki4 = 0;
let number3 = 0;
let number5 = 0;
let number7 = 0;

for (let i = nuo4; i <= iki4; i++) {
    if (i % 3 === 0) {
        number3 += 1;
    }
    if (i % 5 === 0) {
        number5 += 1;
    }
    if (i % 7 === 0) {
        number7 += 1;
    }
}
const ats4 = `Skaičių intervale tarp ${nuo4} ir ${iki4}, besidalijančių be liekanos iš 3 yra ${number3} vienetai.`
console.log(ats4);
const ats5 = `Skaičių intervale tarp ${nuo4} ir ${iki4}, besidalijančių be liekanos iš 5 yra ${number5} vienetai.`
console.log(ats5);
const ats6 = `Skaičių intervale tarp ${nuo4} ir ${iki4}, besidalijančių be liekanos iš 7 yra ${number7} vienetai.`
console.log(ats6);
console.log('--------uzduotys----kiek skaiciu, kurie dalijasi be liekanos------');

const nuo9 = 8;
const iki9 = 31;
let dalinasi3 = 0;
let dalinasi5 = 0;
let dalinasi7 = 0;

for (let i = nuo9; i <= iki9; i++) {
    if (i % 3 === 0) {
        dalinasi3 +=1;
    }
    if (i % 5 === 0) {
        dalinasi5 += 1;
    }
    if (i % 7 === 0) {
        dalinasi7 += 1;
    }
}
console.log(dalinasi3);
console.log(dalinasi5);
console.log(dalinasi7);