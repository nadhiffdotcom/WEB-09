export default function FormPesan({ nama, onNamaChange, nomorMeja, onNomorMejaChange, onSubmit, pesanError }) {
  return (
    <section className="rounded-3xl bg-[#302016] p-5 text-white shadow-lg">
      <div className="mb-4"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#d9b18a]">Satu langkah lagi</p><h2 className="mt-1 text-xl font-extrabold">Data pemesan</h2><p className="mt-1 text-xs leading-5 text-[#d5c5b5]">Isi detail berikut sebelum mengirim pesananmu.</p></div>
      <form onSubmit={onSubmit} noValidate>
        <label htmlFor="nama-pemesan" className="mb-1.5 block text-xs font-bold text-[#f0e3d5]">Nama pemesan</label>
        <input id="nama-pemesan" name="nama" type="text" autoComplete="name" value={nama} onChange={(event) => onNamaChange(event.target.value)} placeholder="Contoh: Dinda" className="mb-4 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 text-sm text-white outline-none placeholder:text-[#b8a797] focus:border-[#e3b98f] focus:ring-2 focus:ring-[#e3b98f]/20" />
        <label htmlFor="nomor-meja" className="mb-1.5 block text-xs font-bold text-[#f0e3d5]">Nomor meja</label>
        <input id="nomor-meja" name="nomorMeja" type="number" min="1" step="1" inputMode="numeric" value={nomorMeja} onChange={(event) => onNomorMejaChange(event.target.value)} placeholder="Contoh: 05" className="mb-4 w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-3 text-sm text-white outline-none placeholder:text-[#b8a797] focus:border-[#e3b98f] focus:ring-2 focus:ring-[#e3b98f]/20" />
        {pesanError && <p role="alert" className="mb-4 rounded-xl border border-red-300/30 bg-red-400/10 p-3 text-xs leading-5 text-red-100">{pesanError}</p>}
        <button type="submit" className="w-full rounded-xl bg-[#e6bd94] px-4 py-3 text-sm font-extrabold text-[#302016] transition hover:bg-[#f1d2b1] focus:outline-none focus:ring-2 focus:ring-white/60">Kirim pesanan <span aria-hidden="true">→</span></button>
        <p className="mt-3 text-center text-[10px] leading-4 text-[#bfae9d]">Pesananmu akan diproses setelah berhasil dikirim.</p>
      </form>
    </section>
  );
}
