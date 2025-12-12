import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const foods = [
    {
      name: "Bayam Hijau",
      category: "Sayuran",
      image_url:
        "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Bayam adalah sayuran hijau yang sangat bergizi dan kaya akan zat besi, vitamin, serta mineral penting lainnya. Sayuran ini sering diolah menjadi sup bening atau tumisan yang lezat dan sehat untuk dikonsumsi sehari-hari oleh keluarga.",
      food_detail_desc:
        "Bayam merupakan tanaman yang biasa ditanam untuk dikonsumsi daunnya sebagai sayuran hijau. Tumbuhan ini berasal dari Amerika tropik namun sekarang tersebar ke seluruh dunia. Bayam dikenal sebagai sumber zat besi yang penting untuk tubuh. Selain itu, bayam juga mengandung vitamin A, vitamin C, dan vitamin K yang tinggi. Mengonsumsi bayam secara rutin dapat membantu meningkatkan kesehatan mata, mengurangi stres oksidatif, dan membantu mencegah kanker. Daun bayam memiliki tekstur yang lembut dan rasa yang sedikit manis jika dimasak dengan benar, membuatnya menjadi favorit banyak orang untuk menu diet sehat.",
    },
    {
      name: "Daging Sapi Segar",
      category: "Daging",
      image_url:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Daging sapi adalah sumber protein hewani berkualitas tinggi yang sangat populer di seluruh dunia. Daging ini memiliki tekstur serat yang khas dan rasa gurih alami yang cocok diolah menjadi berbagai jenis masakan seperti rendang, steak, atau soto.",
      food_detail_desc:
        "Daging sapi diambil dari otot sapi yang telah dipotong. Daging ini merupakan komoditas pangan utama yang memiliki nilai gizi sangat tinggi, terutama protein dan zat besi heme yang mudah diserap tubuh. Selain itu, daging sapi mengandung vitamin B12, zinc, selenium, dan niasin yang vital untuk fungsi tubuh. Bagian-bagian daging sapi seperti sirloin, tenderloin, dan rib eye memiliki karakteristik tekstur dan lemak yang berbeda, menentukan cara memasaknya. Daging sapi berkualitas baik biasanya berwarna merah cerah dan memiliki marbling atau sebaran lemak yang memberikan rasa juicy saat dimasak.",
    },
    {
      name: "Beras Putih",
      category: "Karbohidrat",
      image_url:
        "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Beras putih adalah bahan makanan pokok bagi sebagian besar penduduk Asia. Setelah dimasak menjadi nasi, ia menjadi sumber energi utama karena kandungan karbohidratnya yang tinggi dan rasanya yang netral sehingga cocok dipadukan dengan segala lauk pauk.",
      food_detail_desc:
        "Nasi putih diperoleh dari proses penggilingan padi yang telah membuang kulit luar (sekam), dedak, dan benihnya, sehingga menghasilkan butiran berwarna putih bersih. Proses ini memperpanjang masa simpan beras tetapi menghilangkan sebagian serat dan nutrisinya dibandingkan beras merah. Meski demikian, nasi putih adalah sumber karbohidrat cepat serap yang memberikan energi instan bagi tubuh. Teksturnya yang pulen dan lembut membuatnya sangat mudah dicerna. Di Indonesia, nasi adalah elemen wajib dalam setiap jam makan. Nasi putih juga sering diperkaya atau difortifikasi dengan vitamin dan mineral tertentu untuk meningkatkan nilai gizinya agar lebih seimbang.",
    },
    {
      name: "Telur Ayam",
      category: "Protein",
      image_url:
        "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Telur ayam adalah salah satu sumber protein paling terjangkau dan serbaguna di dunia. Bahan makanan ini menjadi favorit karena mudah diolah, mulai dari digoreng, direbus, hingga menjadi bahan utama pembuatan kue yang lembut dan mengembang.",
      food_detail_desc:
        "Telur ayam mengandung nutrisi yang sangat padat dalam kemasan yang kecil. Bagian putih telur kaya akan protein albumin yang rendah lemak, sangat baik untuk pembentukan otot. Sementara itu, bagian kuning telur mengandung lemak sehat, vitamin A, D, E, dan K, serta kolin yang sangat penting untuk kesehatan otak dan fungsi saraf. Meskipun mengandung kolesterol, konsumsi telur dalam jumlah wajar terbukti aman bagi kesehatan jantung kebanyakan orang. Telur juga mengandung antioksidan lutein dan zeaxanthin yang bermanfaat untuk menjaga kesehatan mata dari degenerasi makula. Fleksibilitasnya dalam dunia kuliner menjadikan telur bahan wajib di setiap dapur.",
    },
    {
      name: "Wortel Import",
      category: "Sayuran",
      image_url:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Wortel adalah sayuran akar berwarna oranye cerah yang terkenal kaya akan vitamin A. Dengan tekstur yang renyah dan rasa manis alami, wortel sangat nikmat dimakan mentah sebagai camilan atau dimasak dalam sup dan tumisan sayur.",
      food_detail_desc:
        "Wortel adalah jenis sayuran umbi yang menyimpan cadangan makanannya di dalam akar. Warna oranye cerah pada wortel berasal dari kandungan beta-karoten yang sangat tinggi, yang di dalam tubuh akan diubah menjadi vitamin A. Vitamin ini sangat krusial untuk menjaga kesehatan penglihatan, sistem kekebalan tubuh, dan kesehatan kulit. Selain vitamin A, wortel juga mengandung serat, vitamin K1, dan potasium. Mengonsumsi wortel secara teratur dapat membantu menurunkan kadar kolesterol darah. Wortel bisa diolah dengan berbagai cara, mulai dari dijus, direbus, dipanggang, hingga diparut untuk campuran kue seperti carrot cake yang lezat.",
    },
    {
      name: "Dada Ayam Fillet",
      category: "Daging",
      image_url:
        "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Dada ayam adalah potongan daging unggas yang paling rendah lemak namun sangat tinggi protein. Bagian ini menjadi pilihan utama bagi pegiat kebugaran dan orang yang sedang menjalani program diet karena kalorinya yang rendah namun mengenyangkan.",
      food_detail_desc:
        "Dada ayam fillet adalah bagian daging ayam tanpa kulit dan tanpa tulang yang diambil dari bagian dada. Daging ini berwarna lebih putih dibandingkan bagian paha dan memiliki tekstur serat yang lebih padat. Keunggulan utamanya adalah kandungan lemak jenuh yang sangat minim, menjadikannya sumber protein 'lean' yang sangat baik untuk menjaga kesehatan jantung. Dada ayam sangat serbaguna dan mudah menyerap bumbu marinasi. Namun, karena rendah lemak, dada ayam bisa menjadi kering jika dimasak terlalu lama (overcooked). Teknik memasak yang tepat seperti menumis cepat, merebus, atau memanggang dengan suhu tepat diperlukan untuk menjaga kelembabannya.",
    },
    {
      name: "Ikan Salmon",
      category: "Seafood",
      image_url:
        "https://images.unsplash.com/photo-1599084993091-1e8015507bf0?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Ikan salmon adalah jenis ikan laut yang terkenal dengan dagingnya yang berwarna oranye kemerahan dan teksturnya yang lembut. Ikan ini digolongkan sebagai superfood karena kandungan asam lemak omega-3 yang sangat tinggi dan bermanfaat bagi tubuh.",
      food_detail_desc:
        "Salmon merupakan ikan berlemak (oily fish) yang hidup di perairan dingin. Kandungan utamanya yang paling dicari adalah asam lemak omega-3 (EPA dan DHA), yang terbukti secara ilmiah dapat menurunkan risiko penyakit jantung, mengurangi peradangan tubuh, dan meningkatkan fungsi otak serta memori. Selain itu, salmon juga kaya akan protein berkualitas tinggi, vitamin B kompleks (terutama B12), potasium, dan selenium. Daging salmon yang segar memiliki rasa manis alami dan tekstur yang 'buttery' atau meleleh di mulut. Ikan ini bisa dinikmati dalam keadaan mentah sebagai sashimi, dipanggang (pan-seared), atau diasap untuk memberikan aroma yang khas.",
    },
    {
      name: "Kentang Dieng",
      category: "Karbohidrat",
      image_url:
        "https://images.unsplash.com/photo-1518977676605-dcad0231704d?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Kentang adalah umbi-umbian yang menjadi sumber karbohidrat alternatif pengganti nasi yang sangat populer. Dengan rasa yang gurih dan tekstur empuk, kentang dapat diolah menjadi berbagai hidangan mulai dari perkedel, keripik, hingga mashed potato.",
      food_detail_desc:
        "Kentang adalah tanaman umbi batang yang berasal dari Amerika Selatan namun kini menjadi makanan pokok keempat terbesar di dunia. Umbi ini mengandung karbohidrat kompleks yang memberikan energi tahan lama. Menariknya, kulit kentang mengandung banyak serat dan nutrisi penting, sehingga disarankan untuk tidak mengupasnya jika memungkinkan. Kentang juga merupakan sumber potasium yang sangat baik, bahkan lebih tinggi daripada pisang, yang berguna untuk mengontrol tekanan darah. Selain itu, terdapat kandungan vitamin C dan B6 di dalamnya. Pati resisten dalam kentang yang telah didinginkan setelah dimasak juga baik untuk kesehatan pencernaan dan bakteri baik di usus.",
    },
    {
      name: "Brokoli Segar",
      category: "Sayuran",
      image_url:
        "https://images.unsplash.com/photo-1459411621453-7debff8f8432?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Brokoli adalah sayuran hijau berbentuk seperti pohon kecil yang termasuk dalam keluarga kubis-kubisan. Sayuran ini dikenal sebagai salah satu makanan paling sehat di dunia karena kandungan antioksidan dan seratnya yang sangat tinggi.",
      food_detail_desc:
        "Brokoli merupakan sayuran cruciferous yang berkerabat dekat dengan kembang kol dan kubis. Sayuran ini kaya akan sulforaphane, senyawa tanaman yang memiliki sifat antikanker yang kuat. Brokoli juga merupakan sumber vitamin C yang luar biasa; satu cangkir brokoli bisa memenuhi kebutuhan vitamin C harian lebih baik daripada jeruk. Selain itu, brokoli mengandung serat tinggi yang melancarkan pencernaan, vitamin K untuk kesehatan tulang, dan folat yang penting bagi ibu hamil. Untuk mempertahankan nutrisinya secara maksimal, brokoli sebaiknya dimasak dengan cara dikukus sebentar saja agar teksturnya tetap renyah dan warnanya tetap hijau cerah.",
    },
  ];

  for (const food of foods) {
    await prisma.food.create({
      data: food,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
