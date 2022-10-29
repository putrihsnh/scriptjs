console.log("Selamat Pagi")

//variabel
//let npm = 2125250097
//let nama = "Putri Hasanah"
//array
//let arrayMahasiswa =["Putri", "Cute"]
//let arrayDosen = Array("ahmad", "Ali")
//objek
//let mahasiswa = {npm: 2125250097, nama: "Putri", hobi:["ngoding", "gaming", "Reading"] }

//console.log(arrayMahasiswa[0])
//console.log(arrayDosen[1])
//console.log(mahasiswa.nama) //output putri
//console.log(mahasiswa.hobi[0]) // output ngoding


console.log("mulai")

let txtNpm = document.getElementById("npm")
let txtNama = document.getElementById("nama")
let listMhs = document.getElementById("listMahasiswa")
let tblMhs = document.getElementById("tblMahasiswa")

let data = []
tampil()


function simpan() {
    console.log("Button simpan ditekan")
    console.log(txtNpm.value)
    console.log(txtNama)

    // simpan object ke array data

    if (localStorage.getItem("lsMahasiswa") == null) {
        //jika localstroge dgn key 
        data.push({
            "npm": number.Npm.value,
            "nama": txtNama.value
        })
        localStorage.setItem("lsMahasiswa", JSON.stringify(data))
    } else {
        //jika local stroge dgn key ls mahasiswa sdh ada/ sdh di simpan sebelumnya
        //ambil dulu data di local stroge dgn key lsmahasiswa
        //push data batru kedalam array
        //simpan data ke dalam local storage 
        let datals = JSON.parse(localStorage.getItem("lsMahasiswa"))
        console.log(datals)
        //push data baru
        datals.push({
            "npm": txtNpm.value,
            "nama": txtNama.value
        })

        localStorage.setItem("lsMahasiswa", JSON.stringify(datals))
    }

    // panggil function tampil()
    tampil()
}

function tampil() {
    listMhs.innerHTML = ""
    // gunakan forEach
    data.forEach(listData)
    // clear elemen tblMahasiswa

    tblMhs.innerHTML = ""

    // ambil data local storage
    let dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"))
    dataTampil.forEach(listData)
}

function listData(item, index) {
    // inner html elemen ul id =" list mahasiswa"pd index html

    listMhs.innerHTML += "<li class = 'list-group-item'>" + item.npm + "-" + item.nama + "</li>"

    tblMhs.innerHTML += `<tr><td>${item.nama}</td><td>${item.npm}</td></tr>`
}