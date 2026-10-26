import { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import MenuList from "./components/MenuList.jsx";
import RingkasanPesanan from "./components/RingkasanPesanan.jsx";
import FormPesan from "./components/FormPesan.jsx";
import Footer from "./components/Footer.jsx";

const dataMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren.", emoji: "☕" },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih.", emoji: "🖤" },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal.", emoji: "🥛" },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu.", emoji: "🍵" },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa.", emoji: "🫖" },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat.", emoji: "🍫" },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju.", emoji: "🍞" },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju.", emoji: "🍌" },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi.", emoji: "🍳" },
];

const formatRupiah = (nilai) => new Intl.NumberFormat("id-ID", {
  style: "currency", currency: "IDR", maximumFractionDigits: 0,
}).format(nilai);

export { formatRupiah };

export default function App() {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [detailTerbuka, setDetailTerbuka] = useState(null);
  const [keranjang, setKeranjang] = useState([]);
  const [nama, setNama] = useState("");
  const [nomorMeja, setNomorMeja] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");
  const [pesanError, setPesanError] = useState("");

  const menuTampil = useMemo(
    () => kategoriAktif === "Semua" ? dataMenu : dataMenu.filter((menu) => menu.kategori === kategoriAktif),
    [kategoriAktif]
  );
  const jumlahPesanan = keranjang.reduce((total, item) => total + item.jumlah, 0);
  const totalHarga = keranjang.reduce((total, item) => total + item.harga * item.jumlah, 0);

  function tambahPesanan(menu) {
    if (!menu.tersedia) return;
    setPesanSukses("");
    setPesanError("");
    setKeranjang((sebelumnya) => {
      const ada = sebelumnya.find((item) => item.id === menu.id);
      if (ada) return sebelumnya.map((item) => item.id === menu.id ? { ...item, jumlah: item.jumlah + 1 } : item);
      return [...sebelumnya, { id: menu.id, nama: menu.nama, harga: menu.harga, jumlah: 1 }];
    });
  }

  function ubahJumlah(id, perubahan) {
    setKeranjang((sebelumnya) => sebelumnya
      .map((item) => item.id === id ? { ...item, jumlah: item.jumlah + perubahan } : item)
      .filter((item) => item.jumlah > 0));
  }

  function kirimPesanan(event) {
    event.preventDefault();
    setPesanSukses("");
    setPesanError("");
    if (!keranjang.length) {
      setPesanError("Pesanan masih kosong. Tambahkan minimal satu menu terlebih dahulu.");
      return;
    }
    if (!nama.trim()) {
      setPesanError("Nama pemesan wajib diisi.");
      return;
    }
    if (!nomorMeja.trim() || !/^[0-9]+$/.test(nomorMeja.trim()) || Number(nomorMeja) < 1) {
      setPesanError("Nomor meja harus berupa angka mulai dari 1.");
      return;
    }
    setPesanSukses(`Terima kasih, ${nama.trim()}! Pesanan untuk meja ${nomorMeja} berhasil dikirim.`);
    setKeranjang([]);
    setNama("");
    setNomorMeja("");
    setPesanError("");
  }

  return (
    <div className="min-h-screen bg-[#faf7f1] text-[#292017]">
      <Navbar jumlahPesanan={jumlahPesanan} totalHarga={totalHarga} formatRupiah={formatRupiah} />
      <main className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
        <section className="mb-8 overflow-hidden rounded-[2rem] bg-[#302016] text-white shadow-xl">
          <div className="grid items-center gap-4 px-6 py-8 sm:px-10 sm:py-10 md:grid-cols-[1.4fr_0.6fr]">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#e7bc8b]">Kedai Kopi Senja · Sejak pagi hingga senja</p>
              <h1 className="max-w-xl text-3xl font-black leading-tight sm:text-5xl">Temukan teman untuk setiap cerita.</h1>
              <p className="mt-4 max-w-lg text-sm leading-6 text-[#e8ddd2] sm:text-base">Seduhan hangat, rasa yang akrab, dan jeda kecil untuk harimu. Pilih favoritmu, kami siapkan dengan hati.</p>
            </div>
            <div className="hidden justify-center md:flex">
              <div className="flex h-44 w-44 items-center justify-center rounded-full border border-[#8f6b4d] bg-[#493020] text-7xl shadow-inner">☕</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 border-t border-white/10 px-6 py-4 text-sm text-[#e8ddd2] sm:px-10">
            <span>✦ Dibuat saat dipesan</span><span>✦ Bahan pilihan</span><span>✦ Suasana nyaman</span>
          </div>
        </section>

        {pesanSukses && <div role="status" className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-800">{pesanSukses}</div>}

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9a704e]">Dari dapur kami</p><h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">Menu pilihan</h2></div>
              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#72583f] shadow-sm">{menuTampil.length} menu</span>
            </div>
            <MenuList menus={menuTampil} kategoriAktif={kategoriAktif} onKategoriChange={setKategoriAktif} detailTerbuka={detailTerbuka} onToggleDetail={setDetailTerbuka} onTambah={tambahPesanan} formatRupiah={formatRupiah} />
          </section>

          <aside className="space-y-5 lg:sticky lg:top-24">
            <RingkasanPesanan keranjang={keranjang} jumlahPesanan={jumlahPesanan} totalHarga={totalHarga} onUbahJumlah={ubahJumlah} formatRupiah={formatRupiah} />
            <FormPesan nama={nama} onNamaChange={setNama} nomorMeja={nomorMeja} onNomorMejaChange={setNomorMeja} onSubmit={kirimPesanan} pesanError={pesanError} />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
