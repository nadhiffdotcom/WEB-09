import MenuCard from "./MenuCard.jsx";

const kategori = ["Semua", "Kopi", "Non-Kopi", "Makanan"];

export default function MenuList({ menus, kategoriAktif, onKategoriChange, detailTerbuka, onToggleDetail, onTambah, formatRupiah }) {
  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter kategori">
        {kategori.map((namaKategori) => (
          <button key={namaKategori} type="button" onClick={() => onKategoriChange(namaKategori)} aria-pressed={kategoriAktif === namaKategori}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${kategoriAktif === namaKategori ? "bg-[#302016] text-white shadow-md" : "border border-[#e8ddd0] bg-white text-[#765a43] hover:border-[#b99775]"}`}>
            {namaKategori === "Semua" ? "Semua menu" : namaKategori}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {menus.map((menu) => (
          <MenuCard key={menu.id} menu={menu} detailTerbuka={detailTerbuka === menu.id} onToggleDetail={() => onToggleDetail(detailTerbuka === menu.id ? null : menu.id)} onTambah={() => onTambah(menu)} formatRupiah={formatRupiah} />
        ))}
      </div>
    </div>
  );
}
