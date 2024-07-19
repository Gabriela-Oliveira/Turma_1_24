// function varrerLista() {
//     const lojaSapatos = ['Nike','Nike','Nike','Nike','Nike','Nike','Nike','Nike','Nike','Nike','Nike', 'Olympkus', 'Nike', 'Nike', 'Adidas', 'Nike', 'Beira Rio', 'Nike', 'ASICS'];

//     // console.log(lojaSapatos);
//     // console.log(lojaSapatos.length);

//     var qtdNikes = 0;

//     for (var index = 0; index < lojaSapatos.length; index++) {
//         const tenis = lojaSapatos[index];
//         if (tenis === 'Nike') {
//             qtdNikes++;
//             // console.log('Poxa infelizmente os tênis da  ' + tenis + ' eu só vou ter o número 35!');
//         } else {
//             // console.log('O tênis da ' + tenis + ' temos todos os números!');
//         }
//     }

//     console.log(qtdNikes);
// }

// varrerLista();

function sort() {
    const nomes = ["Bianca", "Carlos", "Antonio"];

    var nomesCopia = nomes;

    console.log(nomes);

    nomesCopia.sort();

    console.log(nomesCopia);
}

sort();