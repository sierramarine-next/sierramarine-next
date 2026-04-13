// lib/services.ts

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  content: string;
  icon: string;
  image?: string;
};

// ---------- TÜRKÇE HİZMETLER ----------
const trServices: Service[] = [
  {
    slug: "gemi-donatim",
    title: "Gemi Donatım",
    excerpt: "Yeni inşa ve mevcut gemiler için güvenlik, konfor ve operasyon odaklı donatım çözümleri.",
    description: "Makine dairesi, güverte, köprüüstü ve yaşam alanları için her türlü donanım. Sertifikalı ürünler, hızlı tedarik, teknik danışmanlık.",
    content: `
      <h2>Gemi Donatım Çözümlerimiz</h2>
      <p>Sierra Marine olarak, yeni inşa edilen gemilerden mevcut filolara kadar geniş bir yelpazede <strong>gemi donatım hizmeti</strong> sunuyoruz. Amacımız, geminizin operasyonel verimliliğini artırmak, güvenlik standartlarını en üst seviyede tutmak ve konforlu bir çalışma ortamı sağlamaktır.</p>
      
      <h3>Kapsamlı Ürün Yelpazemiz</h3>
      <ul>
        <li><strong>Can kurtarma ekipmanları:</strong> SOLAS onaylı can salları (6-25 kişilik), can yelekleri (100N, 150N, 275N, bebek/çocuk), hidrostatik kilitler, halat atar sistemleri, can simitleri (2.5kg, 4kg, ışıklı), işaret fişekleri ve parakete ışıkları.</li>
        <li><strong>Yangınla mücadele sistemleri:</strong> Yangın hortumları (çeşitli çaplar), nozullar, Storz, Makama, İngiliz, Rus ve ABD tipi bağlantı parçaları, yangın dolapları, portatif söndürücüler (karbondioksit, köpük, kuru kimyevi).</li>
        <li><strong>Boru ve havalandırma işaretlemeleri:</strong> ISO 14726'ya uygun akış okları, tehlike sembolleri, boru etiketleri ve renk kodları (su, yakıt, hava, kimyasallar).</li>
        <li><strong>Pilot ve embarkasyon ekipmanları:</strong> Pilot merdivenleri (UL 1044 standardı), embarkasyon merdivenleri, manyetik tutucular, acil durum aydınlatmaları (LED'li).</li>
        <li><strong>Köprüüstü donanımı:</strong> Seyir fenerleri (COLREG uyumlu), sinyal lambaları, sis düdükleri, manyetik pusulalar, harita masaları ve seyir aletleri.</li>
        <li><strong>Yaşam mahalleri donanımı:</strong> Kabin mobilyaları, aydınlatma, havalandırma, ısıtma-soğutma sistemleri.</li>
      </ul>
      
      <h3>Neden Sierra Marine?</h3>
      <p>Tüm ürünlerimiz uluslararası klas kuruluşları (DNV, Lloyd's Register, Bureau Veritas, Türk Loydu) tarafından onaylıdır. Stoklarımızda sürekli bulunan yedek parçalar ve hızlı lojistik ağımız sayesinde acil ihtiyaçlarınıza anında cevap veriyoruz. Ayrıca, donatım projeleriniz için <strong>teknik danışmanlık ve kurulum desteği</strong> de sağlıyoruz.</p>
      
      <img src="/services/outfittings.png" alt="Gemi Donatım" class="w-full rounded-lg my-4" />
      <img src="/services/fittings.png" alt="Yangın Hortumu Bağlantıları" class="w-full rounded-lg my-4" />
      <p><strong>Teklif ve bilgi için lütfen bizimle iletişime geçin.</strong> Filonuzun ihtiyaçlarına özel çözümler geliştirmekten mutluluk duyarız.</p>
    `,
    icon: "⚙️",
    image: "/services/outfittings.png",
  },
  {
    slug: "emniyet-ekipmanlari",
    title: "Emniyet Ekipmanları",
    excerpt: "SOLAS ve ilgili mevzuata uygun geniş ürün portföyü.",
    description: "Can yelekleri, can salları, yangın sistemleri, kişisel koruyucu donanımlar, IMO posterleri, periyodik bakım ve sertifikasyon.",
    content: `
      <h2>Emniyet Ekipmanları</h2>
      <p>Denizde can ve mal güvenliği en öncelikli konumuzdur. Sierra Marine, <strong>SOLAS, IMO, MED</strong> ve diğer uluslararası düzenlemelere tam uyumlu emniyet ekipmanlarını geminize ulaştırır. Ürünlerimiz düzenli olarak test edilir ve sertifikalandırılır.</p>
      
      <h3>Başlıca Emniyet Ürünlerimiz</h3>
      <ul>
        <li><strong>Can yelekleri:</strong> Yetişkin, çocuk ve bebek modelleri, işaret ışıklı ve reflektörlü tipler. 100N, 150N ve 275N kaldırma kuvveti seçenekleri. SOLAS ve ISO 12402 sertifikalı.</li>
        <li><strong>Can simitleri:</strong> 2.5 kg ve 4 kg, ışıklı (LED), yüzer halatlı (30m), braketli ve hızlı açılan modeller. IMO renk kodlarına uygun.</li>
        <li><strong>Can salları:</strong> 6, 10, 15, 20, 25 kişilik kapasitelerde, SOLAS A paket, otomatik şişme, hidrostatik salma tertibatlı.</li>
        <li><strong>Kimyasal koruyucu giysiler:</strong> Tip 1 (tam korumalı) tulumlar, kimyasallara dayanıklı eldiven ve çizmeler, acil duş üniteleri (portatif ve sabit).</li>
        <li><strong>Petrol sızıntı müdahale kitleri:</strong> Acil durumlarda kullanılmak üzere portatif kitler (20L, 50L), dispersanlar ve emici malzemeler (organik, hidrofobik).</li>
        <li><strong>Termal koruyucu giysiler (TPA):</strong> Hipotermiye karşı koruma, can salları ve can yelekleri ile birlikte kullanılır. ISO 15027 standardına uygun.</li>
        <li><strong>IMO güvenlik posterleri ve uyarı levhaları:</strong> Gemi içi ve dışı için yangın, acil durum, ilk yardım, yasaklama ve uyarı levhaları. Tüm posterler IMO kurallarına uygun olup çift dilde (TR/EN) mevcuttur. A4, A3 ve 50x70 cm boyutlarında.</li>
      </ul>
      
      <h3>Periyodik Bakım ve Sertifikasyon</h3>
      <p>Can salları, yangın tüpleri, EPIRB, SART ve diğer emniyet ekipmanlarının <strong>periyodik bakım, dolum ve sertifikasyon</strong> hizmetlerini yetkili servislerimizle gerçekleştiriyoruz. Tüm işlemlerinizi takip eden bir sistem kurarak, yenileme tarihlerini size hatırlatıyoruz. Böylece survey öncesi hazırlıksız yakalanmazsınız.</p>
      
      <img src="/services/safety.png" alt="Can Yelekleri ve Can Simitleri" class="w-full rounded-lg my-4" />
      <img src="/services/chemical.png" alt="Kimyasal Koruyucu Ekipmanlar" class="w-full rounded-lg my-4" />
      <img src="/services/posters.png" alt="Güvenlik Posterleri" class="w-full rounded-lg my-4" />
      <p><strong>Acil durum ekipmanlarınızın her zaman kullanıma hazır olması için bizi arayın.</strong></p>
    `,
    icon: "🦺",
    image: "/services/safety.png",
  },
  {
    slug: "basili-harita-seyir-yayinlari",
    title: "Basılı Harita ve Yayınlar",
    excerpt: "Resmi deniz haritaları, seyir talimatları, ITU yayınları ve Witherby's ürünleri.",
    description: "UKHO, ITU, IMO ve Witherby's resmi basılı materyalleri. Notice to Mariners düzeltme hizmeti, gemi kütüphanesi kurulumu.",
    content: `
      <h2>Basılı Haritalar ve Seyir Yayınları</h2>
      <p>Güvenli seyir için <strong>güncel ve doğru haritalar ile seyir yayınları</strong> şarttır. Sierra Marine, yetkili distribütörü olduğu kurumlar aracılığıyla geminizin ihtiyaç duyduğu tüm basılı materyalleri temin eder. Yayınların güncellenmesi için <strong>Notice to Mariners</strong> ve düzeltme hizmetleri de sunuyoruz.</p>
      
      <h3>Admiralty Basılı Ürünler</h3>
      <ul>
        <li><strong>Standart Nautical Charts (SNC):</strong> Dünya okyanuslarını ve denizlerini kapsayan resmi deniz haritaları. 3500'den fazla farklı harita.</li>
        <li><strong>Planlama Haritaları (Planning Charts):</strong> Rota planlaması için kullanılan küçük ölçekli haritalar (1:3.500.000 ve üzeri).</li>
        <li><strong>Liman Yaklaşım Kılavuzları (Port Approach Guides):</strong> Belirli limanlara giriş/çıkış için detaylı bilgiler, derinlikler, işaretler.</li>
        <li><strong>Admiralty Sailing Directions (Pilot Books):</strong> Dünyanın çeşitli bölgeleri için seyir talimatları, liman tanımları, akıntı ve gelgit bilgileri. 70'ten fazla cilt.</li>
        <li><strong>List of Lights and Fog Signals:</strong> Deniz fenerleri, şamandıralar, sis işaretleri ve diğer seyir yardımcılarının listesi (10 cilt).</li>
        <li><strong>List of Radio Signals:</strong> Radyo istasyonları, DSC, NAVTEX, GMDSS bilgileri (6 cilt).</li>
        <li><strong>Tide Tables (Gelgit Cetvelleri):</strong> Ana ve tali limanlar için gelgit yükseklikleri ve akıntı bilgileri (4 cilt).</li>
        <li><strong>Nautical Almanac:</strong> Gök cisimlerinin konumları, yıldız haritaları ve astronomik seyir için gerekli veriler.</li>
      </ul>
      
      <h3>Diğer Yayınlar</h3>
      <ul>
        <li><strong>Türk Notik Yayınları ve Haritaları:</strong> Seyir Hidrografi ve Oşinografi Dairesi tarafından yayınlanan Türk sularına ait haritalar, seyir kılavuzları, fener listeleri.</li>
        <li><strong>IMO Yayınları:</strong> SOLAS, MARPOL, STCW, COLREG, ISPS Code, FSS Code, IBC Code gibi temel sözleşmelerin güncel metinleri ve kılavuzları.</li>
        <li><strong>ITU Yayınları:</strong> Radyo düzenlemeleri, telsiz sözlüğü, uluslararası telekomünikasyon kuralları.</li>
        <li><strong>Witherby's Yayınları:</strong> Denizcilik eğitim materyalleri, el kitapları, kargo elleçleme kılavuzları, LNG/LPG rehberleri.</li>
      </ul>
      
      <h3>Gemi Kütüphanesi Kurulumu</h3>
      <p>Geminizde bulunması zorunlu yayınların tam listesini çıkarıyor, eksiksiz bir gemi kütüphanesi oluşturuyoruz. Düzenli <strong>Notice to Mariners</strong> takibi ile yayınlarınızın her zaman güncel kalmasını sağlıyoruz. Ayrıca, dijital kütüphane yönetimi için yazılım desteği de verebiliriz.</p>
      
      <img src="/services/printed-charts.png" alt="Admiralty Basılı Haritalar" class="w-full rounded-lg my-4" />
    `,
    icon: "🗺️",
    image: "/services/printed-charts.png",
  },
  {
    slug: "survey-hazirligi",
    title: "Survey Hazırlığı",
    excerpt: "Klas, bayrak ve liman devleti kontrolleri öncesi eksikliklerin tespiti ve tedarik desteği.",
    description: "Survey öncesi ihtiyaç listesi, hızlı tedarik, işaretleme, dokümantasyon desteği, akredite servis ağı.",
    content: `
      <h2>Survey Hazırlığı Hizmetlerimiz</h2>
      <p>Klas, bayrak devleti veya liman devleti kontrolleri (PSC) öncesinde geminizin <strong>eksiksiz ve mevzuata uygun</strong> olması için kapsamlı bir hazırlık süreci yürütüyoruz. Amacımız, sürpriz eksiklikler nedeniyle gecikme veya cezai durumlar yaşamanızı önlemektir.</p>
      
      <h3>Survey Hazırlık Adımları</h3>
      <ul>
        <li><strong>Eksiklik Tespiti (Gap Analysis):</strong> Uzman ekibimiz, geminizde mevcut durumu denetleyerek harita, yayın, emniyet ekipmanı, yangın sistemi, boru işaretlemeleri, ilk yardım malzemeleri gibi kalemlerdeki eksiklikleri liste halinde çıkarır.</li>
        <li><strong>İhtiyaç Listesi ve Teklif:</strong> Tespit edilen eksiklikler için <strong>acil tedarik edilmesi gereken ürünlerin listesi</strong> ve en uygun fiyatlı teklifler sunulur.</li>
        <li><strong>Hızlı Tedarik:</strong> Stoklarımızdan veya acil tedarik kanallarımızdan eksik malzemeleri en kısa sürede geminize ulaştırırız (Türkiye genelinde 24-48 saat).</li>
        <li><strong>Dokümantasyon Desteği:</strong> Survey için gerekli sertifikalar, bakım kayıtları, eğitim belgeleri ve güncel harita/yayın listelerini hazırlamanıza yardımcı oluruz.</li>
        <li><strong>İşaretleme ve Etiketleme:</strong> Boru hatları, havalandırma kanalları, yangın ekipmanları, acil durum ekipmanları için ISO ve IMO standartlarında işaretlemeler yaparız. (Renk kodları, akış okları, tehlike piktogramları).</li>
        <li><strong>Yangın ve emniyet ekipmanlarının periyodik bakımı:</strong> Yetkili servislerimizle can salları, yangın tüpleri, sabit yangın söndürme sistemleri, EPIRB, SART bakım ve sertifikasyonu.</li>
      </ul>
      
      <p>Survey sonrasında da takip ve yenileme hizmetlerimizle geminizin her zaman hazır olmasını sağlıyoruz. <strong>Planlı bakım ve yenileme yaklaşımıyla ani ve maliyetli sürprizlerin önüne geçiyoruz.</strong></p>
      
      <img src="/services/markings.png" alt="İşaretleme ve Etiketleme" class="w-full rounded-lg my-4" />
      <img src="/services/posters.png" alt="Uyarı Posterleri" class="w-full rounded-lg my-4" />
      <p><strong>Bir sonraki survey öncesi bize ulaşın, sizi eksiksiz ve belgeli bir şekilde denetime hazırlayalım.</strong></p>
    `,
    icon: "📋",
    image: "/services/markings.png",
  },
  {
    slug: "dijital-yayinlar",
    title: "Dijital Yayınlar & Haritalar",
    excerpt: "AVCS, ADP, ENP dijital seyir yayınları ve harita servisleri.",
    description: "Elcome LLC iş birliğiyle dünyanın en güncel dijital seyir ürünleri. ECDIS entegrasyonu, kullanıcı eğitimi, 7/24 teknik destek.",
    content: `
      <h2>Dijital Seyir Çözümleri</h2>
      <p>Kağıt harita ve yayınların yerini hızla alan dijital çözümler, <strong>güncellik, depolama kolaylığı ve maliyet avantajı</strong> sunar. Sierra Marine, <strong>Elcome LLC</strong> alt distribütörü olarak Admiralty ve diğer lider markaların dijital ürünlerini sunmaktadır.</p>
      
      <h3>Dijital Ürün Portföyümüz</h3>
      <ul>
        <li><strong>AVCS (Admiralty Vector Chart Service):</strong> ECDIS uyumlu, sürekli güncellenen vektör haritalar. Tüm dünya sularını kapsar. <strong>Haftalık güncellemeler</strong> ile en güncel veri. Dünyada 20.000'den fazla gemide kullanılıyor.</li>
        <li><strong>ADP (Admiralty Digital Publications):</strong> Dijital seyir yayınları (Sailing Directions, List of Lights, List of Radio Signals, Tide Tables, Nautical Almanac). Tek bir arayüzden tüm yayınlara erişim, anlık güncellemeler. Kağıt yayınlara göre %70'e varan maliyet tasarrufu.</li>
        <li><strong>ENP (Electronic Nautical Publications):</strong> IMO, ITU ve diğer kurumların elektronik yayınları. Kağıt israfını önler, arşivleme ve arama kolaylığı sağlar. Dijital imza ile resmi geçerlilik.</li>
        <li><strong>ARCS (Admiralty Raster Chart Service):</strong> Raster harita servisi, geleneksel harita görünümünü dijital ortama taşır. ECDIS ve ECS sistemlerle uyumlu.</li>
        <li><strong>IMO, ITU, Witherby's dijital yayınları:</strong> Uluslararası düzenlemelerin ve kılavuzların güncel elektronik versiyonları. PDF, ePub, XML formatları.</li>
      </ul>
      
      <h3>Avantajlarımız</h3>
      <ul>
        <li>7/24 güncel harita ve yayınlar – Manuel düzeltme zahmeti yok.</li>
        <li>Tek bir lisans ile filonuzdaki tüm gemilerde kullanım imkânı.</li>
        <li>Kullanıcı dostu arayüzler, hızlı arama ve filtreleme.</li>
        <li>Yedekleme ve kolay taşınabilirlik (USB, DVD veya bulut).</li>
        <li>ECDIS sistemlerinize tam entegrasyon – API desteği.</li>
      </ul>
      
      <h3>Eğitim ve Destek</h3>
      <p>Dijital seyir ürünlerinin kurulumu, kullanıcı eğitimi ve teknik desteğini de sağlıyoruz. ECDIS sistemlerinize entegrasyon konusunda uzman kadromuzla yanınızdayız. Uzaktan veya gemide eğitim seçenekleri mevcuttur.</p>
      
      <img src="/services/printed-charts.png" alt="Dijital Yayınlar" class="w-full rounded-lg my-4" />
      <p><strong>Dijital dönüşüme hazır mısınız? Size en uygun paketi oluşturmak için iletişime geçin.</strong></p>
    `,
    icon: "🌐",
    image: "/services/printed-charts.png",
  },
  {
    slug: "filo-yonetim",
    title: "Filo Yönetim Desteği",
    excerpt: "Gemilerin yayın ve ekipman durumlarının takibi, yenileme planlaması ve raporlama.",
    description: "Dijital takip sistemi, otomatik hatırlatmalar, özelleştirilmiş raporlar, tedarik sipariş yönetimi.",
    content: `
      <h2>Filo Yönetim Desteği</h2>
      <p>Filonuzun tüm belgelerini, ekipman periyotlarını ve survey tarihlerini dijital ortamda takip etmek artık çok kolay. Sierra Marine, size özel geliştirdiği <strong>web tabanlı yönetim sistemi</strong> ile operasyonel yükünüzü azaltır ve denetimlere her zaman hazır olmanızı sağlar.</p>
      
      <h3>Hizmetlerimiz</h3>
      <ul>
        <li><strong>Harita ve yayın listelerinin merkezi takibi:</strong> Her gemi için güncel harita ve yayın listelerini tutar, eksiklikleri ve güncelleme ihtiyacını otomatik raporlar. Notice to Mariners takibi entegredir.</li>
        <li><strong>Emniyet ekipmanları yenileme hatırlatma:</strong> Can salı, yangın tüpü, EPIRB, SART, acil durum pilleri, hidrostatik kilitler gibi ekipmanların periyodik bakım ve yenileme tarihlerini takip eder, süresi yaklaşanlar için e-posta ve SMS bildirimi gönderir.</li>
        <li><strong>Klas, bayrak ve PSC eksiklik raporlarının yönetimi:</strong> Survey sonuçlarını girin, düzeltme aksiyonlarını atayın, tamamlanma durumunu izleyin. Geçmiş eksikliklerin analizi.</li>
        <li><strong>Gemi özelinde ihtiyaç listeleri ve tedarik siparişleri:</strong> Her gemi için ayrı ayrı ihtiyaç listesi oluşturun, siparişlerinizi tek tuşla bize iletebilirsiniz. Sipariş durumu takibi.</li>
        <li><strong>Raporlama:</strong> Filonuzun genel durumu, uyumluluk oranları, yaklaşan survey tarihleri, en sık çıkan eksiklikler gibi konularda özelleştirilmiş raporlar (PDF, Excel, CSV).</li>
        <li><strong>Gemi kütüphanesi denetimi:</strong> Periyodik olarak gemilerinizdeki yayınların güncelliğini kontrol eder, eksikleri tespit eder ve tamamlanmasını sağlar.</li>
      </ul>
      
      <h3>Neden Filo Yönetim Desteği?</h3>
      <ul>
        <li><strong>Zaman ve iş gücü tasarrufu:</strong> Manuel takip zahmetinden kurtulun.</li>
        <li><strong>Denetimlerde başarısızlık riskinin minimize edilmesi:</strong> Her zaman hazır olun.</li>
        <li><strong>Operasyonel maliyetlerin düşürülmesi:</strong> Eksiklik kaynaklı gecikmeleri ve cezaları önleyin.</li>
        <li><strong>Merkezi kontrol:</strong> Tüm filonuzu tek bir panelden yönetin.</li>
      </ul>
      
      <img src="/services/office.png" alt="Ofis ve Yönetim" class="w-full rounded-lg my-4" />
      <p>Sistemimiz web tabanlıdır, her yerden erişilebilir ve ek bir yazılım kurulumu gerektirmez. <strong>Demo erişim talebi için bize ulaşın.</strong></p>
    `,
    icon: "⚓",
    image: "/services/office.png",
  },
];

// ---------- İNGİLİZCE HİZMETLER ----------
const enServices: Service[] = [
  {
    slug: "gemi-donatim",
    title: "Marine Outfitting",
    excerpt: "Safety, comfort and operationally focused outfitting solutions for newbuild and existing vessels.",
    description: "All types of equipment for engine, deck, bridge and accommodation. Certified products, fast supply, technical consultancy.",
    content: `
      <h2>Marine Outfitting Solutions</h2>
      <p>Sierra Marine provides comprehensive outfitting services for newbuilds and existing fleets, enhancing operational efficiency, safety and comfort.</p>
      
      <h3>Extensive Product Range</h3>
      <ul>
        <li><strong>Life-saving appliances:</strong> SOLAS-approved life rafts (6-25 persons), lifejackets (100N, 150N, 275N, infant/child), hydrostatic releases, line throwing apparatus, lifebuoys (2.5kg, 4kg with light), distress signals.</li>
        <li><strong>Fire-fighting systems:</strong> Fire hoses, nozzles, Storz, Makama, UK, US, Russian type couplings, fire cabinets, portable extinguishers (CO2, foam, dry chemical).</li>
        <li><strong>Pipe and ventilation markings:</strong> Flow arrows, hazard symbols, pipe labels, colour coding according to ISO 14726 (water, fuel, air, chemicals).</li>
        <li><strong>Pilot and embarkation equipment:</strong> Pilot ladders (UL 1044 standard), embarkation ladders, magnetic holders, emergency lighting (LED).</li>
        <li><strong>Bridge equipment:</strong> Navigation lights (COLREG compliant), signal lamps, fog horns, magnetic compasses, chart tables, navigation instruments.</li>
        <li><strong>Accommodation outfitting:</strong> Cabin furniture, lighting, ventilation, heating/cooling systems.</li>
      </ul>
      
      <h3>Why Sierra Marine?</h3>
      <p>All products are certified by major classification societies (DNV, Lloyd's Register, Bureau Veritas, Türk Loydu). Our extensive stock and fast logistics network ensure rapid delivery. We also provide technical consultancy and installation support for outfitting projects.</p>
      
      <img src="/services/outfittings.png" alt="Marine Outfitting" class="w-full rounded-lg my-4" />
      <img src="/services/fittings.png" alt="Fire Hose Couplings" class="w-full rounded-lg my-4" />
      <p><strong>Contact us for quotations and tailored solutions for your fleet.</strong></p>
    `,
    icon: "⚙️",
    image: "/services/outfittings.png",
  },
  {
    slug: "emniyet-ekipmanlari",
    title: "Safety Equipment",
    excerpt: "Wide range of SOLAS-compliant safety equipment for crew and vessel safety.",
    description: "Lifejackets, life rafts, fire systems, PPE, IMO posters, periodic maintenance and certification.",
    content: `
      <h2>Safety Equipment</h2>
      <p>Safety of life at sea is our top priority. Sierra Marine supplies SOLAS, IMO, MED and other international regulations compliant safety equipment, all regularly tested and certified.</p>
      
      <h3>Main Safety Products</h3>
      <ul>
        <li><strong>Lifejackets:</strong> Adult, child and infant models, with lights and reflectors, 100N, 150N, 275N buoyancy options. SOLAS and ISO 12402 certified.</li>
        <li><strong>Lifebuoys:</strong> 2.5kg and 4kg, with LED light, floating line (30m), bracket and quick release. IMO colour coding.</li>
        <li><strong>Life rafts:</strong> Capacities 6, 10, 15, 20, 25 persons, SOLAS A pack, automatic inflation, hydrostatic release.</li>
        <li><strong>Chemical protective suits:</strong> Type 1 fully encapsulated suits, chemical-resistant gloves and boots, emergency showers (portable and fixed).</li>
        <li><strong>Oil spill response kits:</strong> Portable kits (20L, 50L), dispersants, absorbent materials (organic, hydrophobic).</li>
        <li><strong>Thermal protective aids (TPA):</strong> Hypothermia protection, used with life rafts and lifejackets. ISO 15027 compliant.</li>
        <li><strong>IMO safety posters and warning signs:</strong> Fire, emergency, first aid, prohibition, warning signs for interior and exterior use. All posters comply with IMO regulations and are available in dual language (TR/EN). Sizes A4, A3, 50x70 cm.</li>
      </ul>
      
      <h3>Periodic Maintenance and Certification</h3>
      <p>We provide periodic maintenance, refilling and certification services for life rafts, fire extinguishers, EPIRB, SART and other safety equipment through our authorised service centres. Our tracking system reminds you of renewal dates, ensuring you are never caught unprepared before a survey.</p>
      
      <img src="/services/safety.png" alt="Lifejackets and Lifebuoys" class="w-full rounded-lg my-4" />
      <img src="/services/chemical.png" alt="Chemical Protective Suits" class="w-full rounded-lg my-4" />
      <img src="/services/posters.png" alt="Safety Posters" class="w-full rounded-lg my-4" />
      <p><strong>Call us to keep your emergency equipment always ready for use.</strong></p>
    `,
    icon: "🦺",
    image: "/services/safety.png",
  },
  {
    slug: "basili-harita-seyir-yayinlari",
    title: "Printed Charts & Publications",
    excerpt: "Official nautical charts, sailing directions, ITU publications and Witherby's products.",
    description: "Official printed materials from UKHO, ITU, IMO and Witherby's. Notice to Mariners correction service, ship library setup.",
    content: `
      <h2>Printed Charts and Nautical Publications</h2>
      <p>Safe navigation requires up‑to‑date and accurate charts and publications. As an authorised distributor, Sierra Marine supplies all printed materials your vessel needs. We also offer Notice to Mariners correction services.</p>
      
      <h3>Admiralty Printed Products</h3>
      <ul>
        <li><strong>Standard Nautical Charts (SNC):</strong> Official charts covering the world's oceans and seas. Over 3500 different charts.</li>
        <li><strong>Planning Charts:</strong> Small‑scale charts for route planning (1:3,500,000 and above).</li>
        <li><strong>Port Approach Guides:</strong> Detailed information for entering specific ports, depths, marks.</li>
        <li><strong>Admiralty Sailing Directions (Pilot Books):</strong> Navigation instructions, port descriptions, currents and tides for various regions. More than 70 volumes.</li>
        <li><strong>List of Lights and Fog Signals:</strong> Lighthouses, buoys, fog signals and other aids to navigation (10 volumes).</li>
        <li><strong>List of Radio Signals:</strong> Radio stations, DSC, NAVTEX, GMDSS information (6 volumes).</li>
        <li><strong>Tide Tables:</strong> Tidal heights and currents for primary and secondary ports (4 volumes).</li>
        <li><strong>Nautical Almanac:</strong> Celestial navigation data, star charts.</li>
      </ul>
      
      <h3>Other Publications</h3>
      <ul>
        <li><strong>Turkish charts and nautical publications:</strong> Official charts and guides for Turkish waters.</li>
        <li><strong>IMO publications:</strong> Current texts of SOLAS, MARPOL, STCW, COLREG, ISPS Code, FSS Code, IBC Code, etc.</li>
        <li><strong>ITU publications:</strong> Radio regulations, maritime vocabulary, international telecommunications rules.</li>
        <li><strong>Witherby's publications:</strong> Maritime training materials, handbooks, cargo handling guides, LNG/LPG manuals.</li>
      </ul>
      
      <h3>Ship Library Setup</h3>
      <p>We identify the complete list of mandatory publications for your vessel and create a comprehensive ship library. Regular Notice to Mariners tracking keeps your publications always current. We can also provide software support for digital library management.</p>
      
      <img src="/services/printed-charts.png" alt="Admiralty Printed Charts" class="w-full rounded-lg my-4" />
    `,
    icon: "🗺️",
    image: "/services/printed-charts.png",
  },
  {
    slug: "survey-hazirligi",
    title: "Survey Preparation",
    excerpt: "Identification and supply of missing items before class, flag or PSC inspections.",
    description: "Pre‑survey checklist, fast supply, marking, documentation support, accredited service network.",
    content: `
      <h2>Survey Preparation Services</h2>
      <p>Before class, flag state or port state control (PSC) inspections, we carry out a comprehensive preparation process to ensure your vessel is fully compliant. Avoid delays and penalties due to unexpected deficiencies.</p>
      
      <h3>Survey Preparation Steps</h3>
      <ul>
        <li><strong>Gap Analysis:</strong> Our experts inspect your vessel and list missing items: charts, publications, safety equipment, fire systems, pipe markings, first aid supplies, etc.</li>
        <li><strong>Needs List and Quotation:</strong> We provide a clear list of urgently needed products and offer competitive quotations.</li>
        <li><strong>Fast Supply:</strong> We deliver missing items from our stock or through our emergency supply channels (24-48 hours across Turkey).</li>
        <li><strong>Documentation Support:</strong> We help prepare certificates, maintenance records, training documents and up‑to‑date chart/publication lists.</li>
        <li><strong>Marking and Labelling:</strong> We apply ISO and IMO standard markings for pipes, ventilation ducts, fire equipment, emergency equipment (colour codes, flow arrows, hazard pictograms).</li>
        <li><strong>Fire and safety equipment periodic maintenance:</strong> Life rafts, fire extinguishers, fixed fire systems, EPIRB, SART servicing and certification through our authorised service centres.</li>
      </ul>
      
      <p>After the survey, our follow‑up and renewal services keep your vessel always ready. <strong>A planned maintenance and renewal approach prevents costly surprises.</strong></p>
      
      <img src="/services/markings.png" alt="Pipe Markings" class="w-full rounded-lg my-4" />
      <img src="/services/posters.png" alt="Warning Posters" class="w-full rounded-lg my-4" />
      <p><strong>Contact us before your next survey – we will make sure you are fully compliant and documented.</strong></p>
    `,
    icon: "📋",
    image: "/services/markings.png",
  },
  {
    slug: "dijital-yayinlar",
    title: "Digital Publications & Charts",
    excerpt: "AVCS, ADP, ENP digital navigation publications and chart services.",
    description: "In partnership with Elcome LLC, the world's most up‑to‑date digital navigation products. ECDIS integration, user training, 24/7 technical support.",
    content: `
      <h2>Digital Navigation Solutions</h2>
      <p>Digital solutions offer currency, storage convenience and cost savings. As a sub‑distributor of <strong>Elcome LLC</strong>, Sierra Marine provides Admiralty and other leading brands' digital products.</p>
      
      <h3>Our Digital Portfolio</h3>
      <ul>
        <li><strong>AVCS (Admiralty Vector Chart Service):</strong> ECDIS‑compatible, continuously updated vector charts covering all world waters. <strong>Weekly updates</strong>. Used on over 20,000 ships worldwide.</li>
        <li><strong>ADP (Admiralty Digital Publications):</strong> Digital navigation publications (Sailing Directions, List of Lights, List of Radio Signals, Tide Tables, Nautical Almanac). One interface, instant updates. Up to 70% cost savings compared to paper.</li>
        <li><strong>ENP (Electronic Nautical Publications):</strong> Electronic versions of IMO, ITU and other official publications. Digital signature for legal validity.</li>
        <li><strong>ARCS (Admiralty Raster Chart Service):</strong> Raster charts, bringing traditional chart appearance to digital environment. Compatible with ECDIS and ECS.</li>
        <li><strong>IMO, ITU, Witherby's digital publications:</strong> Current electronic versions of international regulations and guides (PDF, ePub, XML).</li>
      </ul>
      
      <h3>Advantages</h3>
      <ul>
        <li>24/7 up‑to‑date charts and publications – no manual corrections.</li>
        <li>Single license usable across your entire fleet.</li>
        <li>User‑friendly interfaces, fast search and filtering.</li>
        <li>Easy backup and portability (USB, DVD or cloud).</li>
        <li>Full ECDIS integration – API support.</li>
      </ul>
      
      <h3>Training and Support</h3>
      <p>We provide installation, user training and technical support for digital navigation products, including ECDIS integration. On‑site or remote training options available.</p>
      
      <img src="/services/printed-charts.png" alt="Digital Publications" class="w-full rounded-lg my-4" />
      <p><strong>Ready for digital transformation? Contact us to create the best package for you.</strong></p>
    `,
    icon: "🌐",
    image: "/services/printed-charts.png",
  },
  {
    slug: "filo-yonetim",
    title: "Fleet Management Support",
    excerpt: "Tracking vessel publications and equipment status, renewal planning and reporting.",
    description: "Digital tracking system, automatic reminders, custom reports, procurement order management.",
    content: `
      <h2>Fleet Management Support</h2>
      <p>Track your entire fleet's documentation, equipment cycles and survey dates digitally. Sierra Marine's custom web‑based management system reduces your operational burden and keeps you always ready for inspections.</p>
      
      <h3>Our Services</h3>
      <ul>
        <li><strong>Central tracking of chart and publication lists:</strong> Maintains current lists for each vessel, automatically reports missing items and updates needed. Integrated Notice to Mariners tracking.</li>
        <li><strong>Safety equipment renewal reminders:</strong> Tracks life rafts, fire extinguishers, EPIRB, SART, emergency batteries, hydrostatic releases, etc., sends email/SMS alerts before expiry.</li>
        <li><strong>Management of class, flag and PSC deficiency reports:</strong> Enter survey results, assign corrective actions, monitor completion status. Historical deficiency analysis.</li>
        <li><strong>Vessel‑specific requirement lists and procurement orders:</strong> Create needs lists per vessel, place orders with one click. Order status tracking.</li>
        <li><strong>Reporting:</strong> Customised reports (PDF, Excel, CSV) on fleet status, compliance rates, upcoming surveys, most common deficiencies.</li>
        <li><strong>Ship library audit:</strong> Periodically checks the currency of publications on your vessels, identifies missing items and ensures completion.</li>
      </ul>
      
      <h3>Why Fleet Management Support?</h3>
      <ul>
        <li><strong>Time and labour savings:</strong> Eliminate manual tracking.</li>
        <li><strong>Minimised risk of inspection failures:</strong> Always be ready.</li>
        <li><strong>Reduced operational costs:</strong> Prevent delays and penalties due to deficiencies.</li>
        <li><strong>Centralised control:</strong> Manage your entire fleet from one panel.</li>
      </ul>
      
      <img src="/services/office.png" alt="Office Management" class="w-full rounded-lg my-4" />
      <p>Our system is web‑based, accessible from anywhere, no additional software installation required. <strong>Request a demo – contact us today.</strong></p>
    `,
    icon: "⚓",
    image: "/services/office.png",
  },
];

export const services = {
  tr: trServices,
  en: enServices,
};
