export default [
  {
    name: "Blog Title",
    desc: "Buat judul blog kamu dengan bantuan AI super canggih",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2800/2800205.png",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. You only can give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format. Write it in Indonesian language only.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Masukkan blog niche disini",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Masukkan blog outline disini",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "AI super canggih yang bakal bantu kamu bikin konten untuk blog kamu jadi viral dan menarik!",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. Generate Blog Content based on topic and outline in rich text editor format. Write it in Indonesian language only.",
    form: [
      {
        label: "Masukkan topik blog disini",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Masukkan outline blog disini (opsional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "Buntu gk nemuin topik? AI ini bakalan bantu kamu banget.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format. Write it in Indonesian language only.",
    form: [
      {
        label: "Masukkan niche disini",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "Pake AI ini bakalan bikin konten Youtube kamu jadi yang nomor satu!",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Consider yourself the best SEO writer, content writer and copywriter in the world. Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format. Write it in Indonesian language only.",
    form: [
      {
        label: "Masukkan kata kunci video kamu disini",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Masukkan deskripsi video kamu disini (opsional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "Bingung bikin deskripsi? Yuk pake AI ini",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Consider yourself the best SEO writer, content writer and copywriter in the world. Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format. Write it in Indonesian language only.",
    form: [
      {
        label: "Masukkan judul disini",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Masukkan outlinenya disini (opsional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "Males bikin tag? AI ini udah pinter loh",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Consider yourself the best SEO writer, content writer and copywriter in the world. Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format. Write it in Indonesian language only.",

    form: [
      {
        label: "Masukkan judul video disini",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Masukkan outline videonya disini (opsional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Instagram Post Generator",
    desc: "Bikin konten IG itu gampang. Pake AI ini aja",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. Generate 3 Instagram post depends on a given keywords and give output in rich text editor format. Write it in Indonesian language only.",
    form: [
      {
        label: "Masukkan kata kunci disini",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hashtag Generator",
    desc: "Pake AI ini aja daripada bingung bikin tag konten IG kamu",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. Generate 15 Instagram hash tag depends on a given keywords and give output in rich text editor format. Write it in Indonesian or English language.",
    form: [
      {
        label: "Masukkan kata kunci disini",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "Bikin post atau reel viral pake AI ini",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. Generate 5-10 Instagram idea depends on niche with latest trend and give output in rich text editor format. Write it in Indonesian or English language.",
    form: [
      {
        label: "Masukkan kata kunci disini",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Bikin tagline brand kamu disini",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output in rich text editor format. Write it in Indonesian language",
    form: [
      {
        label: "Masukkan nama brand/product disini",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Jelasin apa yang kamu jual disini",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "Bikin deskripsi produk? AI ini jagonya",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. Depends on user productName and description generate small description for product for e-commer business give output in rich text editor format. Write it in Indonesian language",
    form: [
      {
        label: "Masukkan nama produk disini",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Masukkan detail produknya disini",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Tiktok Hashtag Generator",
    desc: "Gausah pusing, AI ini bakalan bikinin kamu tag yang viral",
    icon: "https://cdn-icons-png.flaticon.com/128/3046/3046121.png",
    category: "Marketing",
    slug: "tiktok-hash-tag-generator",
    aiPrompt:
      "Consider yourself the best content writer and copywriter in the world. Generate 15 Tiktok hash tag depends on a given keywords and give output in rich text editor format. Write it in Indonesian or English language.",
    form: [
      {
        label: "Masukkan kata kunci disini",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
];
// {
//   name: "English Grammer Check",
//   desc: "Cek grammar kamu pake AI ini",
//   icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
//   category: "english",

//   slug: "english-grammer-checker",
//   aiPrompt:
//     "Consider yourself the best copywriter in the world. Rewrite the input text by correcting the grammer and give output in rich text editor format",
//   form: [
//     {
//       label: "Masukkan teks disini",
//       field: "input",
//       name: "inputText",
//       required: true,
//     },
//   ],
// },
// {
//   name: "Write Code",
//   desc: "Bikin source code cepet dan gampang disini",
//   icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
//   category: "Coding",

//   slug: "write-code",
//   aiPrompt:
//     "Consider yourself the best programmer in the world. Depends on user codeDescription write a code and give output in rich text editor format in code block",
//   form: [
//     {
//       label: "Masukkan deskripsi yang mau kamu bikin dan bahasanya disini",
//       field: "textarea",
//       name: "codeDesscripton",
//       required: true,
//     },
//   ],
// },
// {
//   name: "Explain Code",
//   desc: "Gausah bingung. AI ini bisa jelasin semua kode kamu",
//   icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
//   category: "Coding",

//   slug: "explain-code",
//   aiPrompt:
//     "Consider yourself the best programmer in the world. Depends on user codeDescription explain code line by line and give output in rich text editor format in code block. Explain it in Indonesian language",
//   form: [
//     {
//       label: "Masukkan kodenya disini",
//       field: "textarea",
//       name: "codeDesscripton",
//       required: true,
//     },
//   ],
// },
// {
//   name: "Code Bug Detector",
//   desc: "AI ini bakal ngasi tau error dan bug terus kasi kamu solusinya",
//   icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
//   category: "code-bug-detector",

//   slug: "code-bug-detector",
//   aiPrompt:
//     "Consider yourself the best programmer in the world. Depends on user codeInput find bug in code and give solution and give output in rich text editor format in code block. Explain it in Indonesian language",
//   form: [
//     {
//       label: "Masukkan kode disini",
//       field: "textarea",
//       name: "codeInput",
//       required: true,
//     },
//   ],
// },

// {
//   name: "Rewrite Article (Plagiarism Free)",
//   desc: "Atasi plagiarisme disini. GRATIS!",
//   icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
//   category: "Rewriting Tool",
//   slug: "rewrite-article",
//   aiPrompt:
//     "Consider yourself the best copywriter in the world. Rewrite give article without any Plagiarism in rich text editor format. Accordance with good and correct Indonesian writing.",
//   form: [
//     {
//       label: "Masukkan artikel disini",
//       field: "textarea",
//       name: "article",
//       required: true,
//     },
//   ],
// },
// {
//   name: "Text Improver",
//   desc: "Tulisanmu kurang rapi? Kurang enak dibaca? AI ini bisa bantu kamu.",
//   icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
//   category: "Writing Assistant",
//   slug: "text-improver",
//   aiPrompt:
//     "Consider yourself the best copywriter in the world. Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format. Accordance with good and correct Indonesian writing.",
//   form: [
//     {
//       label: "Masukkan tulisanmu disini",
//       field: "textarea",
//       name: "textToImprove",
//     },
//   ],
// },
// {
//   name: "Add Emojis to Text",
//   desc: "Tulisan kamu bakalan menarik kalo ditambah emoji. AI ini bisa bantu loh",
//   icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
//   category: "blog",
//   slug: "add-emoji-to-text",
//   aiPrompt:
//     "Add Emoji to outline text depends on outline and rewrite it in rich text editor format and keep it with good and correct Indonesian writing.",
//   form: [
//     {
//       label: "Masukan teks disini",
//       field: "textarea",
//       name: "outline",
//       required: true,
//     },
//   ],
// },
