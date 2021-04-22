function tusciaFunkcija () {
    return false;
}

console.log(tusciaFunkcija());

console.log('----------------');

const name1 = 'John';
const name2 = 'Steve';
const name3 = 'Maria';

function sayHi(vardas) {
    return `Hi, ${vardas}!`;
}

const hi1 = sayHi(name1);
console.log(hi1);

const hi2 = sayHi(name2);
console.log(hi2);

const hi3 = sayHi(name3);
console.log(hi3);

console.log('----------------');

const marks1 = [10, 2, 8, 4, 6];
const marks2 = [9, 1, 7, 3];
const marks3 = [10, 9, 8, 2];

function average(pazymiai) {
    let suma = 0;
    const kiekis = pazymiai.length;

    // logic
    for (let i = 0; i < kiekis; i++) {
        const pazymys = pazymiai[i];
        suma += pazymys;
    }

    return suma / kiekis;
}

const ave1 = average(marks1);
console.log(ave1);

const ave2 = average(marks2);
console.log(ave2);

const ave3 = average(marks3);
console.log(ave3);

console.log('------2. Funkcija pavadinimu “daugyba”----------');


function daugyba(a, b) {
    const rezultatas = a * b;
    return rezultatas
}
console.log(daugyba(4, 5));

console.log('------3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”----------');

function skaitmenuKiekisSkaiciuje(a) {
    
    if (typeof a !== 'number') {
        return 'ERROR: Pateikta netinkamo tipo reikšmė';
    }
    
    if (Number.isNaN(a)) {
        return 'ERROR: Pateikta netinkamo tipo reikšmė';
    }
   
    let skaitmenuKiekis = 1;
    for (let i = a; i > 10; i = i / 10) {
        skaitmenuKiekis = skaitmenuKiekis + 1;     
    }

    return skaitmenuKiekis;
}

console.log(skaitmenuKiekisSkaiciuje(3.14));
console.log(skaitmenuKiekisSkaiciuje(12));
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );

console.log('------4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:----------');

function didziausiasSkaiciusSarase (list) {

    if (!Array.isArray(list)) {
        return 'ERROR: Pateikta netinkamo tipo reikšmė';
    }

    if (list.length === 0) {
        return 'ERROR: Pateiktas sąrašas negali būti tuščias';
    }

    let didziausiasSkaicius = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > didziausiasSkaicius) {
            didziausiasSkaicius = list[i];
        }
    }

    return didziausiasSkaicius;
}

console.log( didziausiasSkaiciusSarase([-1, -6, -3]));
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( [] ) );

console.log('------5. Funkcija pavadinimu “isrinktiRaides”----------');

function isrinktiRaides(text, nthLetter) {
    if (typeof text !== 'string') {
        return 'ERROR: Pateikta netinkamo tipo reikšmė';
    }
    if (text.length === 0 || text.length > 100) {
        return 'ERROR: Pirmojo kintamojo reikšmė yra netinkamo dydžio';
    }
    if (typeof nthLetter !== 'number') {
        return 'ERROR: Antrasis kintamasis yra netinkamo tipo.';
    }
    if (nthLetter <= 0) {
        return 'ERROR: Antrasis kintamasis turi būti didesnis už nulį';
    }
    if (nthLetter > text.length) {
        return 'ERROR: Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį';
    }
    let letters = '';

    for (let i = nthLetter - 1; i < text.length; i += nthLetter) {
        letters = letters + text[i];
    } 
    return letters;
}
console.log( isrinktiRaides( 'abcdefg', 2 ) );
console.log( isrinktiRaides( 'abcdefghijkl', 3 ) );
console.log( isrinktiRaides( 'abc', 0 ) );
console.log( isrinktiRaides( 'abc', 4 ) );
console.log( isrinktiRaides( 1561, 2 ) );

console.log('------6. Funkcija pavadinimu “dalyba”----------');