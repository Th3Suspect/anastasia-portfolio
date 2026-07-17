/* Мета-файл проекта — RU / EN.
   Меняйте текст здесь. Загружается страницей project.html?id=w5.
   Массив body[] — абзацы описания. Массив gallery[] — доп. изображения (пути к assets). */
(window.PROJECTS = window.PROJECTS || {})["w5"] = window.PROJECT = {
  id: "w5",
  fig: "FIG.01",
  image: "assets/Projects/Solar/1.png",
  orientation: "vertical",   // "vertical" | "horizontal" — высота карусели «Детали»
  // Пути к картинкам карусели «Детали» (общие для RU/EN). Замените на реальные визуалы.
  gallery: ["assets/Projects/Solar/1.png", "assets/Projects/Pearls/1.png", "assets/Projects/Rose/1.png", "assets/Projects/Ivory/1.png"],
  ru: {
    title: "Solar",
    year: "2026",
    meta: "Серия образов · Издательский проект",
    tags: ["Генеративное", "Портрет", "Тёплый свет"],
    lead: "Портретная серия о свете как о характере кадра.",
    // подписи к слайдам карусели — по порядку gallery[]
    captions: ["Кадр 01 — золотой час", "Кадр 02 — деталь", "Кадр 03 — вариация", "Кадр 04 — финал"],
    // текст справа от карусели — по одному на кадр (по порядку gallery[])
    notes: [
      "Тёплый рассеянный свет задаёт настроение серии.",
      "Крупный план: кожа, будто прогретая солнцем.",
      "Вариация позы и композиции того же образа.",
      "Финальный кадр после ретуши и цвета."
    ],
    body: [
      "«Solar» — серия, выстроенная вокруг золотого часа: тёплый рассеянный свет, мягкие тени и кожа, будто прогретая солнцем.",
      "Итеративная работа с моделью: от общего настроения и палитры к точной композиции, направлению света и характеру героини.",
      "Финальные кадры отретушированы, апскейлены и приведены к единому цвету — серия, готовая к печати."
    ]
  },
  en: {
    title: "Solar",
    year: "2026",
    meta: "Image series · Editorial project",
    tags: ["Generative", "Portrait", "Warm light"],
    lead: "A portrait series about light as the character of the frame.",
    captions: ["Frame 01 — golden hour", "Frame 02 — detail", "Frame 03 — variation", "Frame 04 — final"],
    notes: [
      "Warm diffused light sets the mood of the series.",
      "Close-up: skin as if warmed by the sun.",
      "A variation of pose and composition of the same look.",
      "Final frame after retouch and color."
    ],
    body: [
      "“Solar” is a series built around the golden hour: warm diffused light, soft shadows and skin that feels sun-warmed.",
      "Iterative work with the model: from overall mood and palette to precise composition, light direction and the character of the subject.",
      "Final frames are retouched, upscaled and color-matched — a print-ready series."
    ]
  }
};
