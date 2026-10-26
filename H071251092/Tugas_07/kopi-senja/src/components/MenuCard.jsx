export default function MenuCard({ menu, detailTerbuka, onToggleDetail, onTambah, formatRupiah }) {
  return (
    <article className={`flex flex-col rounded-3xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${menu.tersedia ? "border-[#eee4d8]" : "border-[#e8e2dc] opacity-75"}`}>
      <div className="relative mb-4 flex h-32 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#f5e9d8] to-[#ead4b9]">
        <span className="text-6xl drop-shadow-sm" aria-hidden="true">{menu.emoji}</span>
        {!menu.tersedia && <span className="absolute right-2 top-2 rounded-full bg-[#4a3b30] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Habis</span>}
        {menu.tersedia && <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#78583d]">Favorit senja</span>}
      </div>
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-start justify-between gap-2"><h3 className="font-extrabold">{menu.nama}</h3><span className="whitespace-nowrap text-sm font-extrabold text-[#936640]">{formatRupiah(menu.harga)}</span></div>
        <p className="mb-4 text-xs font-semibold text-[#9b8a79]">{menu.kategori}</p>
        {detailTerbuka && <p className="mb-4 rounded-xl bg-[#faf5ed] p-3 text-sm leading-5 text-[#725b47]">{menu.deskripsi}</p>}
        <div className="mt-auto flex gap-2">
          <button type="button" onClick={onToggleDetail} aria-expanded={detailTerbuka} className="flex-1 rounded-xl border border-[#e6d8c8] px-3 py-2.5 text-xs font-bold text-[#71553d] transition hover:bg-[#faf5ed]">{detailTerbuka ? "Tutup detail" : "Lihat detail"}</button>
          <button type="button" onClick={onTambah} disabled={!menu.tersedia} className="flex-1 rounded-xl bg-[#302016] px-3 py-2.5 text-xs font-bold text-white transition hover:bg-[#533823] disabled:cursor-not-allowed disabled:bg-[#d5cec6] disabled:text-[#766f68]">{menu.tersedia ? "+ Tambah" : "Tidak tersedia"}</button>
        </div>
      </div>
    </article>
  );
}
