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


let txtnpm = document.getElementById("npm")
let txtnama = document.getElementById("nama")
let listMhs = document.getElementById("listmahasiswa")
let data = []

function simpan(){
    console.log("Button simpan ditekan")
    console.log(txtnpm.value)
    console.log(txtnama.value)

 data.push(
     {"npm": txtnpm.value ,
      "nama" : txtnama.value}
 )
 tampil()
}
function tampil(){
    listMhs.innerHTML = ""
    //gunakan forEach
    data.forEach(listData)
}
function listData(item, index ) {
    listMhs.innerHTML += item.npm+ "-" + item.nama
}