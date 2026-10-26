export default function RingkasanPesanan({ keranjang, jumlahPesanan, totalHarga, onUbahJumlah, formatRupiah }) {
  return (
    <section className="rounded-3xl border border-[#e9dfd2] bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-extrabold">Ringkasan pesanan</h2><span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#f4ece1] px-2 text-xs font-extrabold">{jumlahPesanan}</span></div>
      {keranjang.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#e3d6c7] bg-[#fdfaf6] px-4 py-7 text-center"><span className="text-3xl">🧺</span><p className="mt-2 text-sm font-bold">Keranjang masih kosong</p><p className="mt-1 text-xs leading-5 text-[#9a8876]">Tambahkan menu favoritmu untuk mulai memesan.</p></div>
      ) : (
        <ul className="divide-y divide-[#f0e8df]">
          {keranjang.map((item) => (
            <li key={item.id} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0"><p className="truncate text-sm font-bold">{item.nama}</p><p className="mt-1 text-xs text-[#9a8876]">{formatRupiah(item.harga)} / item</p></div>
              <div className="flex shrink-0 items-center gap-2"><button type="button" aria-label={`Kurangi ${item.nama}`} onClick={() => onUbahJumlah(item.id, -1)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e8ddd0] font-bold hover:bg-[#faf5ed]">−</button><span className="w-4 text-center text-sm font-bold">{item.jumlah}</span><button type="button" aria-label={`Tambah ${item.nama}`} onClick={() => onUbahJumlah(item.id, 1)} className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#e8ddd0] font-bold hover:bg-[#faf5ed]">+</button></div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 border-t border-dashed border-[#dfd0bf] pt-4"><div className="flex items-center justify-between text-sm text-[#806b57]"><span>Total item</span><span>{jumlahPesanan}</span></div><div className="mt-2 flex items-center justify-between"><span className="font-bold">Total harga</span><span className="text-lg font-black text-[#936640]">{formatRupiah(totalHarga)}</span></div></div>
    </section>
  );
}
