"use client";

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-navy-900 text-white overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/hero-ship.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-900/70 z-1"></div>
        <div className="relative z-2 mx-auto max-w-6xl px-4 py-20 text-center">
          <p className="text-sm uppercase tracking-wider text-gold-400 mb-2">HAKKIMIZDA</p>
          <h1 className="text-4xl md:text-5xl font-bold">Hakkımızda</h1>
          <p className="text-gray-200 max-w-2xl mx-auto mt-4">
            Sierra Marine, gemi donatım ve seyir çözümlerinde güvenilir ortağınız.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-slate max-w-none">
          <h2 className="text-xl font-semibold text-navy-800 mb-4">Sierra Marine Gemi Donatım Hizmetleri San. Tic. Ltd. Şti.</h2>
          <p>Sierra Marine, 2023 yılında kurulmuş, kısa sürede denizcilik sektöründe bilinirliğini artırmış bir gemi donatım ve seyir çözümleri markasıdır. Kurucularının denizcilik alanındaki uzun yıllara dayanan tecrübesi, şirketin hem teknik yeterliliğini hem de sektörel bakış açısını güçlendirmektedir.</p>
          <p>Faaliyetlerimizin merkezinde, ticari gemiler ve yatlar için gerekli olan donatım, emniyet ekipmanları, basılı ve dijital seyir haritaları ile notik yayınların temini yer almaktadır. Gemilerin klas ve mevzuata uygun şekilde işletilmesi için ihtiyaç duyulan ürün ve dokümanların büyük bölümünü tek elden sağlayabilecek bir yapı oluşturmayı hedefliyoruz.</p>
          <p>Sierra Marine; ITU, IMO, Witherby's gibi ulusal/uluslararası otoritelerin yayınlarını takip ederek, güncel düzenlemelere uygun ürün ve yayınları stoklarında bulundurmayı esas alır. Seyir Hidrografi ve Oşinografi Dairesi Başkanlığı ve diğer resmi kurumların yayınları, müşterilerimize sunduğumuz portföyün önemli bir parçasını oluşturmaktadır.</p>
          <p>Ürün gamımız; gemi donatım malzemeleri, emniyet ve yangınla mücadele ekipmanları, notik harita ve yayınlar, köprüüstü ekipmanları, medikal malzemeler, kimyasallar ve survey hazırlığına yönelik çeşitli kalemleri kapsamaktadır. Amaç, bir geminin güvenli ve kesintisiz operasyonu için ihtiyaç duyduğu her kalemde güvenilir bir tedarikçi olmaktır.</p>
          <p>Tüm bu süreçlerde önceliğimiz; doğru ürünü, doğru zamanda, uygun maliyetle ve mevzuata uygun şekilde sunmaktır. Müşterilerimizle uzun vadeli iş birlikleri kurmayı, güvene dayalı, şeffaf ve çözüm odaklı bir yaklaşım sürdürmeyi şirket kültürümüzün temel unsuru olarak benimsiyoruz.</p>
        </div>
      </div>
    </div>
  );
}
