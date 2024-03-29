// scroll pitc js
window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >= 0);
});

// al-quran js

window.onload = function () {
    getDataSurat();
}

function getDataSurat() {
    const jadwalAPI = `https://api.myquran.com/v2/quran/juz/semua`
    fetch(jadwalAPI)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('gagal mengambil data')
            }
            return response.json();
        })

        .then(function (data) {
            displayData(data);
        })
        .catch(function (error) {
            console.log('terjadi kesalahan', error);
        })
}

function displayData(data) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    data.hasil.forEach(function (surat) {
        let suratDiv = document.createElement("div");
        suratDiv.classList.add("kotak");

        let abuDiv = document.createElement("div");
        abuDiv.classList.add("kecil");

        let nomerSurat = document.createElement("button");
        nomerSurat.innerHTML = surat.nomor;
        nomerSurat.classList.add("nomer");

        let namaSurat = document.createElement("h3");
        namaSurat.innerHTML = surat.nama;
        namaSurat.classList.add("nama");

        let gambar = document.createElement("save");
        gambar.classList.add("save");

        let putihDiv = document.createElement("div");
        putihDiv.classList.add("sukses");

        let arabSurat = document.createElement("h2");
        arabSurat.innerHTML = surat.asma;
        arabSurat.classList.add("arab");

        let ayatSurat = document.createElement("p");
        ayatSurat.innerHTML = "Ayat surat:" + surat.ayat;
        ayatSurat.classList.add("ayat");

        let artiSurat = document.createElement("p");
        artiSurat.innerHTML = "The meaning: " + surat.arti;
        artiSurat.classList.add("arti");

        let value = document.createElement("p");
        value.classList.add("line");

        suratDiv.appendChild(abuDiv);
        abuDiv.appendChild(nomerSurat);
        abuDiv.appendChild(namaSurat);
        abuDiv.appendChild(gambar);
        suratDiv.appendChild(putihDiv);
        putihDiv.appendChild(arabSurat);
        putihDiv.appendChild(artiSurat);
        putihDiv.appendChild(value);
        putihDiv.appendChild(ayatSurat);

        resultDiv.appendChild(suratDiv);
    });
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