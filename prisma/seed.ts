import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  
  await prisma.question.deleteMany();
  await prisma.food.deleteMany();

  const foods = [
    {
      name: "Apel",
      category: "Buah",
      image_url:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=200&auto=format&fit=crop", 
      short_desc:
        "Apel adalah buah bulat berwarna merah, hijau, atau kuning, rasanya manis atau asam, dan kaya vitamin serta serat.",
      food_detail_desc:
        "Apel adalah buah yang sangat populer di seluruh dunia, dikenal dengan bentuk bulat serta warna kulit yang bervariasi, seperti merah, hijau, dan kuning. Daging buahnya renyah, berair, dan memiliki rasa manis hingga sedikit asam tergantung jenisnya. Apel kaya vitamin C, serat, serta antioksidan yang membantu menjaga kesehatan tubuh, meningkatkan daya tahan, dan memperlancar pencernaan. Buah ini sering dikonsumsi langsung, dijus, atau diolah menjadi berbagai hidangan seperti salad, kue, dan dessert.",
    },
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
      name: "Daging Sapi",
      category: "Daging",
      image_url:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Daging sapi adalah sumber protein hewani berkualitas tinggi yang sangat populer di seluruh dunia. Daging ini memiliki tekstur serat yang khas and rasa gurih alami yang cocok diolah menjadi berbagai jenis masakan seperti rendang, steak, atau soto.",
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
      name: "Wortel",
      category: "Sayuran",
      image_url:
        "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=1000&auto=format&fit=crop",
      short_desc:
        "Wortel adalah sayuran akar berwarna oranye cerah yang terkenal kaya akan vitamin A. Dengan tekstur yang renyah dan rasa manis alami, wortel sangat nikmat dimakan mentah sebagai camilan atau dimasak dalam sup dan tumisan sayur.",
      food_detail_desc:
        "Wortel adalah jenis sayuran umbi yang menyimpan cadangan makanannya di dalam akar. Warna oranye cerah pada wortel berasal dari kandungan beta-karoten yang sangat tinggi, yang di dalam tubuh akan diubah menjadi vitamin A. Vitamin ini sangat krusial untuk menjaga kesehatan penglihatan, sistem kekebalan tubuh, dan kesehatan kulit. Selain vitamin A, wortel juga mengandung serat, vitamin K1, dan potasium. Mengonsumsi wortel secara teratur dapat membantu menurunkan kadar kolesterol darah. Wortel bisa diolah dengan berbagai cara, mulai dari dijus, direbus, dipanggang, hingga diparut untuk campuran kue seperti carrot cake yang lezat.",
    },
    {
      name: "Ayam",
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
        "https://media.istockphoto.com/id/1468279469/photo/fresh-raw-salmon-and-ingredients-for-marinade-on-light-grey-table-closeup.jpg?s=612x612&w=0&k=20&c=U2qmWEAG4mdHzrUHqfPcO4YLcK3BsFGKffhIv68Rh4o=",
      short_desc:
        "Ikan salmon adalah jenis ikan laut yang terkenal dengan dagingnya yang berwarna oranye kemerahan dan teksturnya yang lembut. Ikan ini digolongkan sebagai superfood karena kandungan asam lemak omega-3 yang sangat tinggi dan bermanfaat bagi tubuh.",
      food_detail_desc:
        "Salmon merupakan ikan berlemak (oily fish) yang hidup di perairan dingin. Kandungan utamanya yang paling dicari adalah asam lemak omega-3 (EPA dan DHA), yang terbukti secara ilmiah dapat menurunkan risiko penyakit jantung, mengurangi peradangan tubuh, dan meningkatkan fungsi otak serta memori. Selain itu, salmon juga kaya akan protein berkualitas tinggi, vitamin B kompleks (terutama B12), potasium, dan selenium. Daging salmon yang segar memiliki rasa manis alami dan tekstur yang 'buttery' atau meleleh di mulut. Ikan ini bisa dinikmati dalam keadaan mentah sebagai sashimi, dipanggang (pan-seared), atau diasap untuk memberikan aroma yang khas.",
    },
    {
      name: "Kentang",
      category: "Karbohidrat",
      image_url:
        "https://media.istockphoto.com/id/506693913/id/foto/kentang-segar-maris-piper-stock-image.jpg?s=612x612&w=0&k=20&c=2d3D3qgtzx-GdSS99Ms_1hl_PVghCIHwJSk2WCxObcU=",
      short_desc:
        "Kentang adalah umbi-umbian yang menjadi sumber karbohidrat alternatif pengganti nasi yang sangat populer. Dengan rasa yang gurih dan tekstur empuk, kentang dapat diolah menjadi berbagai hidangan mulai dari perkedel, keripik, hingga mashed potato.",
      food_detail_desc:
        "Kentang adalah tanaman umbi batang yang berasal dari Amerika Selatan namun kini menjadi makanan pokok keempat terbesar di dunia. Umbi ini mengandung karbohidrat kompleks yang memberikan energi tahan lama. Menariknya, kulit kentang mengandung banyak serat dan nutrisi penting, sehingga disarankan untuk tidak mengupasnya jika memungkinkan. Kentang juga merupakan sumber potasium yang sangat baik, bahkan lebih tinggi daripada pisang, yang berguna untuk mengontrol tekanan darah. Selain itu, terdapat kandungan vitamin C dan B6 di dalamnya. Pati resisten dalam kentang yang telah didinginkan setelah dimasak juga baik untuk kesehatan pencernaan dan bakteri baik di usus.",
    },
    {
      name: "Brokoli",
      category: "Sayuran",
      image_url:
        "https://media.istockphoto.com/id/166754834/photo/fresh-sprig-of-broccoli-isolated.jpg?s=612x612&w=0&k=20&c=bS2q5Ana0bg3tN7mo9nAnGnzM9q1gRRGOWKZd985Vsc=",
      short_desc:
        "Brokoli adalah sayuran hijau berbentuk seperti pohon kecil yang termasuk dalam keluarga kubis-kubisan. Sayuran ini dikenal sebagai salah satu makanan paling sehat di dunia karena kandungan antioksidan dan seratnya yang sangat tinggi.",
      food_detail_desc:
        "Brokoli merupakan sayuran cruciferous yang berkerabat dekat dengan kembang kol dan kubis. Sayuran ini kaya akan sulforaphane, senyawa tanaman yang memiliki sifat antikanker yang kuat. Brokoli juga merupakan sumber vitamin C yang luar biasa; satu cangkir brokoli bisa memenuhi kebutuhan vitamin C harian lebih baik daripada jeruk. Selain itu, brokoli mengandung serat tinggi yang melancarkan pencernaan, vitamin K untuk kesehatan tulang, dan folat yang penting bagi ibu hamil. Untuk mempertahankan nutrisinya secara maksimal, brokoli sebaiknya dimasak dengan cara dikukus sebentar saja agar teksturnya tetap renyah dan warnanya tetap hijau cerah.",
    },
  ];

  const createdFoods: Record<string, number> = {};
  for (const food of foods) {
    const created = await prisma.food.create({
      data: food,
    });
    createdFoods[food.name.toLowerCase()] = created.id;
  }

  const quizQuestions = [
    {
      foodName: "Apel",
      question_text: "Kandungan vitamin apa yang sangat kaya pada buah apel untuk membantu meningkatkan daya tahan tubuh?",
      option_a: "Vitamin A",
      option_b: "Vitamin C",
      option_c: "Vitamin D",
      option_d: "Vitamin E",
      correct_answer: "b",
      explanation: "Apel kaya akan vitamin C, serat, serta antioksidan yang membantu menjaga kesehatan tubuh dan meningkatkan daya tahan tubuh."
    },
    {
      foodName: "Apel",
      question_text: "Mengapa buah apel disarankan untuk dikonsumsi bagi kesehatan pencernaan?",
      option_a: "Karena mengandung serat tinggi",
      option_b: "Karena mengandung kafein",
      option_c: "Karena mengandung gluten tinggi",
      option_d: "Karena mengandung lemak jenuh",
      correct_answer: "a",
      explanation: "Apel mengandung serat tinggi yang sangat baik untuk memperlancar dan menjaga kesehatan pencernaan."
    },
    {
      foodName: "Bayam Hijau",
      question_text: "Zat besi yang melimpah pada bayam hijau sangat penting bagi tubuh untuk mencegah penyakit apa?",
      option_a: "Osteoporosis",
      option_b: "Anemia",
      option_c: "Sariawan",
      option_d: "Rabun senja",
      correct_answer: "b",
      explanation: "Bayam dikenal sebagai sumber zat besi yang penting untuk mencegah anemia dan meningkatkan produksi sel darah merah."
    },
    {
      foodName: "Bayam Hijau",
      question_text: "Vitamin apa yang terkandung dalam bayam hijau yang sangat baik untuk menjaga kesehatan mata?",
      option_a: "Vitamin B12",
      option_b: "Vitamin D",
      option_c: "Vitamin A",
      option_d: "Vitamin E",
      correct_answer: "c",
      explanation: "Bayam mengandung vitamin A yang tinggi yang berfungsi menjaga kesehatan mata."
    },
    {
      foodName: "Daging Sapi",
      question_text: "Jenis zat besi apa yang terkandung dalam daging sapi dan dikenal sangat mudah diserap oleh tubuh manusia?",
      option_a: "Zat besi non-heme",
      option_b: "Zat besi heme",
      option_c: "Zat besi sintetis",
      option_d: "Kalsium besi",
      correct_answer: "b",
      explanation: "Daging sapi mengandung zat besi heme yang memiliki tingkat penyerapan lebih tinggi di dalam tubuh dibanding zat besi non-heme."
    },
    {
      foodName: "Daging Sapi",
      question_text: "Vitamin vital apa yang terkandung dalam daging sapi yang berfungsi untuk mendukung fungsi saraf dan sel darah merah?",
      option_a: "Vitamin B12",
      option_b: "Vitamin C",
      option_c: "Vitamin D",
      option_d: "Vitamin K",
      correct_answer: "a",
      explanation: "Daging sapi kaya akan Vitamin B12, zinc, dan selenium yang vital untuk fungsi otak, saraf, dan pembentukan sel darah merah."
    },
    {
      foodName: "Beras Putih",
      question_text: "Apa fungsi utama dari nasi putih yang dihasilkan dari beras putih bagi tubuh?",
      option_a: "Sebagai sumber lemak jenuh",
      option_b: "Sebagai sumber energi utama (karbohidrat cepat serap)",
      option_c: "Sebagai pembangun jaringan otot",
      option_d: "Sebagai pengatur suhu tubuh",
      correct_answer: "b",
      explanation: "Nasi putih adalah karbohidrat cepat serap yang memberikan energi instan dengan cepat bagi tubuh."
    },
    {
      foodName: "Beras Putih",
      question_text: "Bagian beras mana yang dibuang selama proses penggilingan beras putih sehingga mengurangi kandungan seratnya dibanding beras merah?",
      option_a: "Akar dan daun",
      option_b: "Air dan pati",
      option_c: "Sekam, dedak, dan benih",
      option_d: "Protein gluten",
      correct_answer: "c",
      explanation: "Proses penggilingan beras putih membuang kulit luar (sekam), dedak, dan benihnya sehingga mengurangi serat namun memperpanjang masa simpan."
    },
    {
      foodName: "Telur Ayam",
      question_text: "Bagian telur ayam manakah yang sangat kaya akan protein albumin dan rendah lemak?",
      option_a: "Kuning telur",
      option_b: "Putih telur",
      option_c: "Cangkang telur",
      option_d: "Selaput telur",
      correct_answer: "b",
      explanation: "Putih telur kaya akan protein albumin yang rendah lemak, sangat baik untuk pembentukan otot."
    },
    {
      foodName: "Telur Ayam",
      question_text: "Nutrisi penting apa yang terdapat pada kuning telur yang sangat krusial bagi perkembangan otak dan fungsi saraf?",
      option_a: "Kolin",
      option_b: "Glukosa",
      option_c: "Vitamin C",
      option_d: "Kalsium karbonat",
      correct_answer: "a",
      explanation: "Kuning telur mengandung kolin yang sangat penting untuk kesehatan otak, memori, dan fungsi saraf."
    },
    {
      foodName: "Wortel",
      question_text: "Senyawa apa yang memberikan warna oranye cerah pada wortel dan diubah menjadi vitamin A di dalam tubuh?",
      option_a: "Klorofil",
      option_b: "Beta-karoten",
      option_c: "Likopen",
      option_d: "Antosianin",
      correct_answer: "b",
      explanation: "Beta-karoten adalah pigmen oranye pada wortel yang akan diubah oleh tubuh menjadi vitamin A."
    },
    {
      foodName: "Wortel",
      question_text: "Selain menjaga kesehatan mata, mengonsumsi wortel secara teratur dapat membantu dalam hal apa?",
      option_a: "Menurunkan kadar kolesterol darah",
      option_b: "Meningkatkan kadar gula darah",
      option_c: "Membakar lemak secara instan",
      option_d: "Menghilangkan kantuk",
      correct_answer: "a",
      explanation: "Kandungan serat larut dalam wortel dapat membantu mengikat dan menurunkan kadar kolesterol dalam darah."
    },
    {
      foodName: "Ayam",
      question_text: "Mengapa dada ayam fillet menjadi pilihan utama bagi olahragawan atau orang yang sedang diet?",
      option_a: "Karena rasanya yang sangat manis",
      option_b: "Karena rendah lemak jenuh dan tinggi protein",
      option_c: "Karena mengandung banyak karbohidrat kompleks",
      option_d: "Karena tidak memerlukan proses memasak",
      correct_answer: "b",
      explanation: "Dada ayam fillet adalah bagian daging yang paling rendah lemak tetapi kaya protein berkualitas tinggi, sangat baik untuk pembentukan otot tanpa lemak berlebih."
    },
    {
      foodName: "Ayam",
      question_text: "Apa konsekuensi memasak dada ayam terlalu lama (overcooked) karena sifatnya yang rendah lemak?",
      option_a: "Menjadi sangat berair",
      option_b: "Menjadi keras dan kering",
      option_c: "Berubah warna menjadi hijau",
      option_d: "Menjadi lebih manis",
      correct_answer: "b",
      explanation: "Karena kadar lemaknya yang sangat rendah, dada ayam bisa menjadi keras dan kering jika dimasak terlalu lama."
    },
    {
      foodName: "Ikan Salmon",
      question_text: "Asam lemak esensial apa yang membuat ikan salmon digolongkan sebagai superfood bagi kesehatan jantung dan otak?",
      option_a: "Asam lemak trans",
      option_b: "Omega-3 (EPA dan DHA)",
      option_c: "Asam laurat",
      option_d: "Asam absisat",
      correct_answer: "b",
      explanation: "Salmon kaya akan asam lemak omega-3 (EPA dan DHA) yang membantu menjaga kesehatan jantung dan meningkatkan daya ingat."
    },
    {
      foodName: "Ikan Salmon",
      question_text: "Tekstur daging salmon yang meleleh di mulut sering digambarkan sebagai tekstur yang...",
      option_a: "Renyah (crispy)",
      option_b: "Buttery (lembut seperti mentega)",
      option_c: "Alot (chewy)",
      option_d: "Kering (dry)",
      correct_answer: "b",
      explanation: "Daging salmon memiliki rasa gurih manis alami dan tekstur yang 'buttery' (meleleh di mulut) karena kandungan lemak sehatnya."
    },
    {
      foodName: "Kentang",
      question_text: "Kandungan mineral apa dalam kentang yang jumlahnya lebih tinggi daripada pisang dan berguna untuk mengontrol tekanan darah?",
      option_a: "Kalsium",
      option_b: "Zat besi",
      option_c: "Potasium (Kalium)",
      option_d: "Natrium",
      correct_answer: "c",
      explanation: "Kentang merupakan sumber potasium yang sangat baik, bahkan lebih tinggi dibanding pisang, yang berguna untuk membantu mengontrol tekanan darah."
    },
    {
      foodName: "Kentang",
      question_text: "Mengapa disarankan untuk tidak mengupas kulit kentang saat memasaknya jika memungkinkan?",
      option_a: "Agar kentang tidak hancur saat direbus",
      option_b: "Karena kulit kentang mengandung banyak serat dan nutrisi penting",
      option_c: "Agar kentang terasa lebih manis",
      option_d: "Untuk mempercepat proses pematangan",
      correct_answer: "b",
      explanation: "Kulit kentang kaya akan serat dan mikronutrisi, sehingga mengonsumsinya bersama kulit memberikan manfaat gizi yang lebih maksimal."
    },
    {
      foodName: "Brokoli",
      question_text: "Senyawa tanaman kuat apa yang terkandung dalam brokoli dan memiliki sifat antikanker?",
      option_a: "Sulforaphane",
      option_b: "Kafein",
      option_c: "Gluten",
      option_d: "Solanin",
      correct_answer: "a",
      explanation: "Brokoli kaya akan senyawa sulforaphane, yang terbukti secara ilmiah memiliki efek anti-inflamasi dan antikanker yang kuat."
    },
    {
      foodName: "Brokoli",
      question_text: "Bagaimana cara memasak brokoli terbaik agar kandungan nutrisi (seperti vitamin C) di dalamnya tetap terjaga maksimal?",
      option_a: "Direbus dalam waktu yang sangat lama",
      option_b: "Dikukus sebentar saja",
      option_c: "Digoreng dengan minyak banyak (deep fry)",
      option_d: "Dibakar sampai gosong",
      correct_answer: "b",
      explanation: "Mengukus brokoli dalam waktu singkat adalah metode terbaik untuk mempertahankan warna hijau cerah serta kadar vitamin C dan sulforaphane di dalamnya."
    }
  ];

  for (const q of quizQuestions) {
    const ingredientId = createdFoods[q.foodName.toLowerCase()];
    if (ingredientId) {
      await prisma.question.create({
        data: {
          ingredient_id: ingredientId,
          question_text: q.question_text,
          option_a: q.option_a,
          option_b: q.option_b,
          option_c: q.option_c,
          option_d: q.option_d,
          correct_answer: q.correct_answer,
          explanation: q.explanation
        }
      });
    }
  }


  // seed some users for leaderboard testing
  const now = new Date();
  const oneDay = 24 * 60 * 60 * 1000;

  // hash passwords for sample users
  const bcrypt = await import('bcrypt');
  const p1 = await bcrypt.hash('password123', 10);
  const p2 = await bcrypt.hash('secret456', 10);
  const p3 = await bcrypt.hash('hunter2', 10);
  const p4 = await bcrypt.hash('demo123', 10);
  const p5 = await bcrypt.hash('test456', 10);
  const p6 = await bcrypt.hash('user789', 10);
  const p7 = await bcrypt.hash('pass123', 10);
  const p8 = await bcrypt.hash('quiz456', 10);
  const p9 = await bcrypt.hash('food789', 10);
  const p10 = await bcrypt.hash('sample123', 10);

  // upsert users (safe to re-run)
  await prisma.user.upsert({
    where: { username: "alice" },
    update: { password: p1, high_score: 80, last_played_at: new Date(now.getTime() - 2 * oneDay) },
    create: { username: "alice", password: p1, high_score: 80, last_played_at: new Date(now.getTime() - 2 * oneDay) },
  });

  await prisma.user.upsert({
    where: { username: "bob" },
    update: { password: p2, high_score: 80, last_played_at: new Date(now.getTime() - 1 * oneDay) },
    create: { username: "bob", password: p2, high_score: 80, last_played_at: new Date(now.getTime() - 1 * oneDay) },
  });

  await prisma.user.upsert({
    where: { username: "charlie" },
    update: { password: p3, high_score: 95, last_played_at: now },
    create: { username: "charlie", password: p3, high_score: 95, last_played_at: now },
  });

  await prisma.user.upsert({
    where: { username: "david" },
    update: { password: p4, high_score: 70, last_played_at: new Date(now.getTime() - 5 * oneDay) },
    create: { username: "david", password: p4, high_score: 70, last_played_at: new Date(now.getTime() - 5 * oneDay) },
  });

  await prisma.user.upsert({
    where: { username: "emma" },
    update: { password: p5, high_score: 90, last_played_at: new Date(now.getTime() - 3 * oneDay) },
    create: { username: "emma", password: p5, high_score: 90, last_played_at: new Date(now.getTime() - 3 * oneDay) },
  });

  await prisma.user.upsert({
    where: { username: "frank" },
    update: { password: p6, high_score: 85, last_played_at: new Date(now.getTime() - 4 * oneDay) },
    create: { username: "frank", password: p6, high_score: 85, last_played_at: new Date(now.getTime() - 4 * oneDay) },
  });

  await prisma.user.upsert({
    where: { username: "grace" },
    update: { password: p7, high_score: 75, last_played_at: new Date(now.getTime() - 6 * oneDay) },
    create: { username: "grace", password: p7, high_score: 75, last_played_at: new Date(now.getTime() - 6 * oneDay) },
  });

  await prisma.user.upsert({
    where: { username: "henry" },
    update: { password: p8, high_score: 88, last_played_at: new Date(now.getTime() - 7 * oneDay) },
    create: { username: "henry", password: p8, high_score: 88, last_played_at: new Date(now.getTime() - 7 * oneDay) },
  });

  await prisma.user.upsert({
    where: { username: "iris" },
    update: { password: p9, high_score: 92, last_played_at: new Date(now.getTime() - 8 * oneDay) },
    create: { username: "iris", password: p9, high_score: 92, last_played_at: new Date(now.getTime() - 8 * oneDay) },
  });

  await prisma.user.upsert({
    where: { username: "jack" },
    update: { password: p10, high_score: 78, last_played_at: new Date(now.getTime() - 9 * oneDay) },
    create: { username: "jack", password: p10, high_score: 78, last_played_at: new Date(now.getTime() - 9 * oneDay) },
  });
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
