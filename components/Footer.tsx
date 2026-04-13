// components/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <p>
          © {new Date().getFullYear()} Sierra Marine Gemi Donatım Hizmetleri
          San. Tic. Ltd. Şti.
        </p>
        <p className="flex gap-3">
          <a href="/gizlilik-sozlesmesi" className="hover:text-slate-700">
            Gizlilik Sözleşmesi
          </a>
          <span>•</span>
          <span>info@sierramarine.com.tr</span>
        </p>
      </div>
    </footer>
  );
}
