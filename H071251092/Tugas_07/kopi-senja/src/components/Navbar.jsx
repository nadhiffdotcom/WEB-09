export default function Navbar({ jumlahPesanan, totalHarga, formatRupiah }) {
  return (
    <header className="sticky top-0 z-20 border-b border-[#e9dfd2] bg-[#fffdf9]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Kedai Kopi Senja beranda">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#302016] text-xl">☕</span>
          <span><span className="block text-sm font-black tracking-tight">KEDAI KOPI SENJA</span><span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-[#98765b]">A little pause, a lot of warmth</span></span>
        </a>
        <div className="rounded-2xl bg-[#f4ece1] px-3 py-2 text-right sm:px-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#866449]">Pesananmu</p>
          <p className="text-sm font-extrabold">{jumlahPesanan} item <span className="mx-1 text-[#c6b29d]">·</span> {formatRupiah(totalHarga)}</p>
        </div>
      </div>
    </header>
  );
}
