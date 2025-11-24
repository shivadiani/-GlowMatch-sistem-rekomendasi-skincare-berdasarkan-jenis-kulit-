const rekomendasi = {
  kering: {
    profil: "Kulit kering butuh hidrasi berlapis dan oklusi ringan.",
    bahan: ["Hyaluronic Acid", "Ceramide", "Squalane"],
    langkah: [
      {
        nama: "Cleanser Gentle",
        deskripsi: "Membersihkan tanpa mengangkat lipid alami kulit.",
        produk: "KraveBeauty Matcha Hemp Hydrating Cleanser",
      },
      {
        nama: "Hydrating Toner",
        deskripsi: "Toner lembap dengan HA dan panthenol.",
        produk: "Hada Labo Gokujyun Premium Lotion",
      },
      {
        nama: "Serum Barrier",
        deskripsi: "Serum ceramide + peptide untuk perbaikan skin barrier.",
        produk: "Skin1004 Probio-Cica Intensive Ampoule",
      },
      {
        nama: "Moisturizer Rich",
        deskripsi: "Krim kaya emolien yang mengunci kelembapan.",
        produk: "First Aid Beauty Ultra Repair Cream",
      },
      {
        nama: "Sunscreen SPF 50",
        deskripsi: "Filter UV spektrum luas tekstur creamy.",
        produk: "Axis-Y Complete No-Stress Physical Sunscreen",
      },
    ],
  },
  berminyak: {
    profil: "Kendalikan sebum berlebih tanpa membuat kulit dehidrasi.",
    bahan: ["Niacinamide", "BHA", "Green Tea"],
    langkah: [
      {
        nama: "Gel Cleanser",
        deskripsi: "Membersihkan minyak tanpa rasa kesat berlebih.",
        produk: "COSRX Low pH Good Morning Gel Cleanser",
      },
      {
        nama: "Exfoliating Toner",
        deskripsi: "Mengandung 2% BHA untuk menjaga pori bersih.",
        produk: "Paula's Choice 2% BHA Liquid Exfoliant",
      },
      {
        nama: "Serum Niacinamide",
        deskripsi: "Mengontrol minyak dan meratakan tekstur.",
        produk: "The Ordinary Niacinamide 10% + Zinc 1%",
      },
      {
        nama: "Gel Moisturizer",
        deskripsi: "Ringan, cepat menyerap, tidak menyumbat pori.",
        produk: "Benton Aloe Propolis Soothing Gel",
      },
      {
        nama: "Sunscreen Matte",
        deskripsi: "Perlindungan UV dengan hasil akhir soft matte.",
        produk: "Biore UV Aqua Rich Watery Essence SPF 50+",
      },
    ],
  },
  kombinasi: {
    profil: "Seimbangkan area T-zone berminyak dan U-zone kering.",
    bahan: ["PHA", "Panthenol", "Beta Glucan"],
    langkah: [
      {
        nama: "Dual Cleanser",
        deskripsi: "Tekstur creamy-gel yang cocok di seluruh wajah.",
        produk: "Laneige Cream Skin Milk Oil Cleanser",
      },
      {
        nama: "Balancing Toner",
        deskripsi: "Menghidrasi sekaligus mengontrol minyak ringan.",
        produk: "Dear Klairs Supple Preparation Unscented Toner",
      },
      {
        nama: "Serum Multi-Task",
        deskripsi: "Mengandung niacinamide 5% dan PHA halus.",
        produk: "Somethinc Glow Maker AHA BHA PHA Clarifying",
      },
      {
        nama: "Moisturizer Adaptive",
        deskripsi: "Krim gel yang melembapkan area kering, ringan di T-zone.",
        produk: "Clinique Moisture Surge 100H",
      },
      {
        nama: "Sunscreen Hybrid",
        deskripsi: "Komfortabel untuk semua zona wajah.",
        produk: "Skin Aqua UV Moisture Milk SPF 50",
      },
    ],
  },
  normal: {
    profil: "Fokus menjaga keseimbangan dan perlindungan sehari-hari.",
    bahan: ["Vitamin C", "Peptide", "Hyaluronic Acid"],
    langkah: [
      {
        nama: "Creamy Cleanser",
        deskripsi: "Menjaga kelembapan alami kulit.",
        produk: "Fresh Soy Face Cleanser",
      },
      {
        nama: "Essence Hidratasi",
        deskripsi: "Mengunci air di lapisan kulit.",
        produk: "Missha Time Revolution The First Essence",
      },
      {
        nama: "Serum Antioksidan",
        deskripsi: "Vitamin C ringan untuk glow harian.",
        produk: "Kiehl's Clearly Corrective Dark Spot Solution",
      },
      {
        nama: "Moisturizer Penyeimbang",
        deskripsi: "Memberi nutrisi tanpa terasa berat.",
        produk: "Belif The True Cream Aqua Bomb",
      },
      {
        nama: "Sunscreen Ringan",
        deskripsi: "Tekstur susu untuk pemakaian ulang mudah.",
        produk: "Shiseido Urban Environment Sun Dual Care",
      },
    ],
  },
  sensitif: {
    profil: "Prioritaskan formula minimalis dan menenangkan iritasi.",
    bahan: ["Centella", "Madecassoside", "Allantoin"],
    langkah: [
      {
        nama: "Low pH Cleanser",
        deskripsi: "Tanpa sulfat, aman untuk barrier rapuh.",
        produk: "Soon Jung pH 6.5 Whip Cleanser",
      },
      {
        nama: "Calming Mist",
        deskripsi: "Centella + beta glucan meredakan kemerahan.",
        produk: "Avène Thermal Spring Water Mist",
      },
      {
        nama: "Serum Soothing",
        deskripsi: "Mengandung azulen dan panthenol 10%.",
        produk: "Dr. Jart+ Cicapair Serum",
      },
      {
        nama: "Krim Barrier",
        deskripsi: "Ceramide + madecassoside untuk proteksi maksimal.",
        produk: "La Roche-Posay Cicaplast Baume B5+",
      },
      {
        nama: "Sunscreen Mineral",
        deskripsi: "Fisik, bebas alkohol, minim iritan.",
        produk: "Etude Sunprise Mild Airy Finish SPF 50+",
      },
    ],
  },
};

const form = document.getElementById("skin-form");
const resultList = document.getElementById("result-list");
const exportBtn = document.getElementById("export-btn");
const jenisSelect = document.querySelector('select[name="jenis"]');
const fokusSelect = document.querySelector('select[name="fokus"]');
const focusHint = document.getElementById("focus-hint");
const chatToggle = document.getElementById("chat-toggle");
const chatPanel = document.getElementById("chat-panel");
const chatClose = document.getElementById("chat-close");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatMessages = document.getElementById("chat-messages");

const highlightDictionary = {
  mencerahkan: "Fokus pada bahan antioksidan seperti Vitamin C dan Alpha Arbutin.",
  "anti-aging": "Utamakan peptide, retinoid ringan, serta sunscreen disiplin.",
  "anti-jerawat": "Gunakan BHA, niacinamide, dan spot treatment berbasis sulfur.",
  menenangkan: "Centella, oat, dan licorice root bantu redakan kemerahan.",
  hidrasi: "Lapisi humektan + emolien untuk menjaga kelembapan sepanjang hari.",
};

const focusRecommendation = {
  kering: "hidrasi",
  berminyak: "anti-jerawat",
  kombinasi: "mencerahkan",
  normal: "anti-aging",
  sensitif: "menenangkan",
};

jenisSelect.addEventListener("change", (event) => {
  const jenis = event.target.value;
  if (!jenis) {
    updateFocusHint();
    fokusSelect.value = "";
    return;
  }

  const rekomendasiFokus = focusRecommendation[jenis];
  fokusSelect.value = rekomendasiFokus ?? "";
  updateFocusHint(false);
});

fokusSelect.addEventListener("change", () => {
  updateFocusHint(true);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const jenis = data.get("jenis");
  const fokus = data.get("fokus");
  const intensitas = data.get("intensitas");

  if (!jenis || !fokus) {
    return;
  }

  const paket = rekomendasi[jenis];
  const isiLangkah =
    intensitas === "dasar" ? paket.langkah.slice(0, 3) : paket.langkah;

  const cards = [
    createIntroCard(paket, fokus),
    ...isiLangkah.map(createStepCard),
  ];

  resultList.innerHTML = "";
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 70}ms`;
    resultList.appendChild(card);
    requestAnimationFrame(() => {
      card.classList.add("fade-in-active");
    });
  });

  document
    .getElementById("rekomendasi")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

chatToggle?.addEventListener("click", toggleChat);
chatClose?.addEventListener("click", toggleChat);

function toggleChat() {
  if (!chatPanel) return;
  const isOpen = chatPanel.classList.toggle("is-open");
  chatToggle?.setAttribute("aria-expanded", String(isOpen));
  chatPanel.setAttribute("aria-hidden", String(!isOpen));
  if (isOpen) {
    chatInput?.focus();
  }
}

chatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!chatInput) return;
  const message = chatInput.value.trim();
  if (!message) return;
  addChatBubble(message, "user");
  chatInput.value = "";

  setTimeout(() => {
    const reply = buildChatResponse(message);
    addChatBubble(reply, "bot");
  }, 400);
});

exportBtn.addEventListener("click", async () => {
  if (!resultList.children.length) {
    alert("Buat rekomendasi terlebih dahulu.");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("GlowMatch - Rekomendasi Skincare", 14, 20);
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");

  let offset = 30;
  [...resultList.children].forEach((card) => {
    const title = card.querySelector("h3")?.textContent ?? "Langkah";
    const body = card.querySelector("p")?.textContent ?? "";
    const listItems = [...card.querySelectorAll("li")].map(
      (li) => `• ${li.textContent}`
    );

    doc.setFont("helvetica", "bold");
    doc.text(title, 14, offset);
    offset += 7;
    doc.setFont("helvetica", "normal");

    const wrapped = doc.splitTextToSize(body, 180);
    doc.text(wrapped, 14, offset);
    offset += wrapped.length * 6 + 2;

    listItems.forEach((text) => {
      const lines = doc.splitTextToSize(text, 180);
      doc.text(lines, 20, offset);
      offset += lines.length * 6;
    });

    offset += 6;
    if (offset > 270) {
      doc.addPage();
      offset = 20;
    }
  });

  doc.save("glowmatch-rekomendasi.pdf");
});

function createIntroCard(paket, fokus) {
  const card = document.createElement("article");
  card.className = "result__card";
  card.innerHTML = `
    <h3>Profil Kulit & Strategi</h3>
    <p>${paket.profil}</p>
    <ul>
      <li>Bahan kunci: ${paket.bahan.join(", ")}</li>
      <li>Fokus perawatan: ${highlightDictionary[fokus]}</li>
    </ul>
  `;
  return card;
}

function createStepCard(item, index) {
  const card = document.createElement("article");
  card.className = "result__card";
  card.innerHTML = `
    <h3>Langkah ${index + 1}: ${item.nama}</h3>
    <p>${item.deskripsi}</p>
    <span class="step__product">Rekomendasi produk: ${item.produk}</span>
  `;
  return card;
}

function updateFocusHint(manual = false) {
  const jenis = jenisSelect.value;
  const fokus = fokusSelect.value;
  const rekomendasi = jenis ? focusRecommendation[jenis] : null;
  const fokusText =
    fokusSelect.options[fokusSelect.selectedIndex]?.textContent ?? "—";
  const rekomendasiText = rekomendasi
    ? fokusSelect.querySelector(`option[value="${rekomendasi}"]`)?.textContent
    : null;

  if (!jenis) {
    focusHint.textContent =
      "Pilih jenis kulit terlebih dahulu untuk rekomendasi fokus otomatis.";
    return;
  }

  if (!rekomendasi) {
    focusHint.textContent =
      "Silakan pilih fokus perawatan yang paling sesuai.";
    return;
  }

  if (manual && fokus && fokus !== rekomendasi) {
    focusHint.textContent = `Kamu memilih ${fokusText}. Rekomendasi GlowMatch untuk kulit ${jenis} adalah ${rekomendasiText}.`;
    return;
  }

  focusHint.textContent = `Fokus disarankan: ${rekomendasiText} untuk kulit ${jenis}.`;
}

function addChatBubble(text, role) {
  if (!chatMessages) return;
  const bubble = document.createElement("div");
  bubble.className = `chatbot__bubble chatbot__bubble--${role}`;
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTo({
    top: chatMessages.scrollHeight,
    behavior: "smooth",
  });
}

function buildChatResponse(message) {
  const text = message.toLowerCase();
  const matchedJenis = Object.keys(rekomendasi).find((jenis) =>
    text.includes(jenis)
  );

  if (matchedJenis) {
    const paket = rekomendasi[matchedJenis];
    const fokus = focusRecommendation[matchedJenis];
    const langkah = paket.langkah[0];
    return [
      `Untuk kulit ${matchedJenis}, fokuskan pada ${highlightDictionary[fokus]}`,
      `Coba ${langkah.nama} seperti ${langkah.produk} lalu lanjutkan hidrasi dengan ${paket.langkah[1].produk}.`,
    ].join(" ");
  }

  if (text.includes("halo") || text.includes("hai")) {
    return "Hai! Sebutkan jenis kulitmu (kering, berminyak, kombinasi, normal, atau sensitif) atau keluhan spesifik supaya bisa kuberi rekomendasi.";
  }

  if (text.includes("produk")) {
    return "Sebutkan jenis kulitmu supaya aku bisa menyarankan rangkaian produk yang sesuai dari GlowMatch.";
  }

  return "Aku belum mengerti pertanyaannya. Coba sebutkan jenis kulit atau tujuan perawatan seperti hidrasi, anti-jerawat, atau menenangkan.";
}

