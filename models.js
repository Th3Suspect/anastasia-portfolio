/* Модели (музы) — RU / EN. Загружается models.html.
   Порядок в массиве = порядок секций на странице и «летающих» имён.
   Ассеты: assets/Models/<Name>/1.jpg */
window.MODELS = [
  {
    id: "claudia",
    name: "Claudia",
    image: "assets/Models/Claudia/1.png",
    palette: ["#c9cbcf", "#b3b6bc", "#d7d5d2", "#a6aab1"],  // графит · серый · строгость
    ru: {
      role: "Скульптурный фарфор",
      meta: "Муза · серии «Solar», «Ivory»",
      tags: ["Холодный свет", "Editorial", "Скульптурность"],
      body: [
        "Клаудия — повторяющийся образ в моих сериях: холодная фарфоровая кожа, чёткая геометрия лица и сдержанная пластика.",
        "Её характер — про тишину и контроль. Идеальна для editorial-кадров, где важна форма и свет, а не эмоция напоказ.",
        "Появлялась в проектах «Solar» и «Ivory»."
      ]
    },
    en: {
      role: "Sculptural porcelain",
      meta: "Muse · series “Solar”, “Ivory”",
      tags: ["Cool light", "Editorial", "Sculptural"],
      body: [
        "Claudia is a recurring image across my series: cool porcelain skin, precise facial geometry and restrained poise.",
        "Her character is about silence and control. Perfect for editorial frames where form and light matter more than overt emotion.",
        "Featured in the “Solar” and “Ivory” projects."
      ]
    }
  },
  {
    id: "mila",
    name: "Mila",
    image: "assets/Models/Mila/1.png",
    palette: ["#f4e2ac", "#f8ecc2", "#eeda96", "#f6e6b6"],  // тёплые жёлтые
    ru: {
      role: "Тёплый живой свет",
      meta: "Муза · серии «Rosé», «Marrakech»",
      tags: ["Тёплый свет", "Естественность", "Движение"],
      body: [
        "Мила — про тепло и жизнь в кадре. Мягкая мимика, естественная пластика, ощущение случайного момента.",
        "С ней работают тёплые палитры и дневной свет — образы получаются близкими и человечными.",
        "Появлялась в «Rosé» и «Marrakech»."
      ]
    },
    en: {
      role: "Warm living light",
      meta: "Muse · series “Rosé”, “Marrakech”",
      tags: ["Warm light", "Naturalness", "Movement"],
      body: [
        "Mila is about warmth and life in the frame. Soft expressions, natural poise, the feeling of a caught moment.",
        "Warm palettes and daylight suit her — the images come out close and human.",
        "Featured in “Rosé” and “Marrakech”."
      ]
    }
  },
  {
    id: "naomi",
    name: "Naomi",
    image: "assets/Models/Naomi/1.png",
    palette: ["#a9caea", "#8bb4e0", "#c0d9ef", "#77a6d8"],  // синий океан · необъятность
    ru: {
      role: "Графика и контраст",
      meta: "Муза · серии «Studio», «Wool»",
      tags: ["Контраст", "Графичность", "Характер"],
      body: [
        "Наоми — сильный графичный образ: выразительные черты, жёсткий контраст, уверенный характер.",
        "Идеальна для смелых, почти плакатных кадров, где важен силуэт и драма света.",
        "Появлялась в «Studio» и «Wool»."
      ]
    },
    en: {
      role: "Graphic & contrast",
      meta: "Muse · series “Studio”, “Wool”",
      tags: ["Contrast", "Graphic", "Character"],
      body: [
        "Naomi is a strong graphic image: expressive features, hard contrast, a confident character.",
        "Perfect for bold, almost poster-like frames where silhouette and the drama of light matter.",
        "Featured in “Studio” and “Wool”."
      ]
    }
  }
];
