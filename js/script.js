// scroll pitc js
window.addEventListener("scroll",function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY >= 0);
});

let hrs = document.getElementById("hrs");
let min = document.getElementById('min');
let sec = document.getElementById('sec');

// jam js
setInterval(()=>{
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)


const city = 1301 ;
const date = new Date();
const dd = String(date.getDate()).padStart (2, '0'); // paddstart itu didepan angka ada angka 0 jika digitnya kurang dari batas yang kita tentukan.
const mm = String(date.getMonth()+1).padStart (2, '0');
const yyyy = date.getFullYear();

console.log(mm);

const now = yyyy + '-' + mm + "-" + dd;

// Jadwal sholat API
const jadwalAPI = `https://api.myquran.com/v2/sholat/jadwal/${city}/${yyyy}/${mm}`

fetch(jadwalAPI)
.then(function (response){
    if (!response.ok) {
        throw new Error('API tidak dapat di akses, ada yang unvalid!!!')
    }
    return response.json();
}) 
.then((data) => {
    const jadwal = data.data;
    const list = jadwal.jadwal;
    const listJadwal = document.getElementById('list-jadwal');
    const kota = document.getElementById('city');
    const prov = document.getElementById('prov');

    kota.innerHTML = jadwal.lokasi;
    prov.innerHTML = jadwal.daerah;

    list.forEach((el) => {
        const tr = document.createElement('tr');
        if (el.date === now) {
            tr.classList.add('table-primary')
        }

        // tanggal
        const dd = document.createElement('td');
        dd.innerText = el.tanggal;
        dd.classList.add('date');

        // imsak
        const imsak = document.createElement('td');
        imsak.innerText = el.imsak;

        // subuh
        const subuh= document.createElement('td');
        subuh.innerText = el.subuh;

        // terbit
        const terbit = document.createElement('td');
        terbit.innerText = el.terbit;

        // dzuhur
        const dzuhur = document.createElement('td');
        dzuhur.innerText = el.dzuhur;

        // ashar
        const ashar = document.createElement('td');
        ashar.innerText = el.ashar;

        // maghrib
        const maghrib = document.createElement('td');
        maghrib.innerText = el.maghrib;

        // isya
        const isya = document.createElement('td');
        isya.innerText = el.isya;


        listJadwal.appendChild(tr);
        tr.appendChild(dd);
        tr.appendChild(imsak);
        tr.appendChild(subuh);
        tr.appendChild(terbit);
        tr.appendChild(dzuhur);
        tr.appendChild(ashar);
        tr.appendChild(maghrib);
        tr.appendChild(isya);
    });
})

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