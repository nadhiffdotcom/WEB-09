const dataPraktikan = [
    { nama: "Raikhan", nilaiTugas: [80, 85, 90] },
    { nama: "John", nilaiTugas: [60, 60, 60] },
    { nama: "Paul", nilaiTugas: [90, 90, 90] },
    { nama: "Olivia", nilaiTugas: [75, 75, 75] },
    { nama: "Mayer", nilaiTugas: [45, 45, 45] }
];

const namaAsisten = prompt("Masukkan nama Asisten Lab:");

function hitungRataRata(nilai) {
    let total = 0;

    for (let i = 0; i < nilai.length; i++) {
        total += nilai[i];
    }

    return total / nilai.length;
}

function tentukanStatus(rataRata) {
    if (rataRata >= 75) {
        return "LULUS";
    } else {
        return "TIDAK LULUS";
    }
}

const hasilPraktikan = dataPraktikan.map(function(praktikan) {
    const rataRata = hitungRataRata(praktikan.nilaiTugas);
    const status = tentukanStatus(rataRata);

    return {
        nama: praktikan.nama,
        rataRata: rataRata,
        status: status
    };
});

console.log(hasilPraktikan);


document.write(`
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #fff0f5;
            padding: 25px;
            margin: 0;
        }

        h1 {
            text-align: center;
            color: #d66b91;
            margin-bottom: 5px;
        }

        .asisten {
            text-align: left;
            color: #d66b91;
            background-color: #ffffff;
            border: 2px solid #f7b6cc;
            border-radius: 10px;
            padding: 15px 20px;
            margin: 30px auto;
            font-size: 18px;
            width: 80%;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }

        .asisten span {
            font-size: 14px;
            color: #999999;
        }

        .container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
        }

        .card {
            background-color: #ffffff;
            width: 210px;
            padding: 20px;
            border-radius: 18px;
            border: 2px solid #f7c6d9;
            text-align: center;
        }

        .card h3 {
            color: #d66b91;
            margin-top: 0;
            font-size: 22px;
        }

        .nilai {
            font-size: 28px;
            font-weight: bold;
            color: #e58aaa;
        }

        .lulus {
            background-color: #ffe0eb;
            color: #0bcd6c;
            padding: 8px;
            border-radius: 10px;
            font-weight: bold;
        }

        .tidak-lulus {
            background-color: #ffd1dc;
            color: #c94f68;
            padding: 8px;
            border-radius: 10px;
            font-weight: bold;
        }
    </style>

    <h1>Sistem Laporan Praktikum</h1>

<div class="asisten">
    <strong>Selamat datang Asisten ${namaAsisten}!</strong>
    <br>
    <span>Berikut adalah laporan hasil evaluasi praktikum.</span>
</div>

<div class="container">
`);

hasilPraktikan.forEach(function(praktikan) {

    let classStatus;

    if (praktikan.status === "LULUS") {
        classStatus = "lulus";
    } else {
        classStatus = "tidak-lulus";
    }

    document.write(`
        <div class="card">
            <h3>${praktikan.nama}</h3>

            <p>Rata-rata Nilai</p>

            <div class="nilai">
                ${praktikan.rataRata}
            </div>

            <p class="${classStatus}">
                ${praktikan.status}
            </p>
        </div>
    `);
});

document.write(`
    </div>
`);