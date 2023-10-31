// scroll pitc js
window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >= 0);
});

// asmaul-husna js
window.onload = function () {
    getDataAsma();
}

function getDataAsma() {
fetch('https://api.aladhan.com/v1/asmaAlHusna')
.then(function (response) {
if (!response.ok) {
    throw new Error ('gagal mengambil data')

} else {
    return response.json();
}

}) 
.then(function (asma) {
    displayDataAsma(asma);
})
.catch(function (error){
    console.log('terjadi kesalahan', error);
})

}

function displayDataAsma(asma) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML='';

    asma.data.forEach( function (asma){
        let asmaDiv = document.createElement('div');
        asmaDiv.classList.add('kotak');

        let abuDiv = document.createElement('div');
        abuDiv.classList.add('kecil');

        let nomorAsma = document.createElement('button');
        nomorAsma.innerHTML = asma.number;
        nomorAsma.classList.add('nomer');

        let namaAsma = document.createElement('h3');
        namaAsma.innerHTML = asma.transliteration;
        namaAsma.classList.add('nama');

        let gambar = document.createElement('save');
        gambar.classList.add('save');

        let putihDiv = document.createElement('div');
        putihDiv.classList.add('sukses');

        let arabAsma = document.createElement('h2');
        arabAsma.innerHTML = asma.name;
        arabAsma.classList.add('arab');

        let artiAsma = document.createElement('p');
        artiAsma.innerHTML = 'The Meaning' + asma.en.meaning;
        artiAsma.classList.add('arti');

        let value = document.createElement('p');
        value.classList.add('line');

        asmaDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomorAsma);
        abuDiv.appendChild(namaAsma);
        abuDiv.appendChild(gambar);
        asmaDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabAsma);
        putihDiv.appendChild(artiAsma);
        putihDiv.appendChild(value);

        resultDiv.appendChild(asmaDiv)
    })
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bxs-moon');
    if(this.classList.toggle( 'bxs-sun')){
        body.style.background = '#d7e5ca';
        body.style.color = 'black';
        body.style.transition = '2s';
        }else {
            body.style.background = 'black';
            body.style.color = 'white';
            body.style.transition = '2s';
        }
})