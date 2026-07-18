/* Мета-файл проекта — RU / EN. Загружается project.html?id=catalogue.
   Структура ассетов: assets/Projects/Catalogue/1.jpg … 5.jpg
   Порядок картинок карусели «Детали» = массив gallery[]. */
(window.PROJECTS = window.PROJECTS || {})["catalogue"] = window.PROJECT = {
  id: "catalogue",
  fig: "FIG.09",
  image: "assets/Projects/Catalogue/1.jpg",
  orientation: "vertical",   // "vertical" | "horizontal" — высота карусели «Детали»
  // исходный продукт (до/после). Фото — assets/Projects/Catalogue/reference.jpg (берётся автоматически из папки)
  source: {
    ru: { name: "BERTA LINE · Чулки", note: "Каталожное фото изделия — точка старта серии." },
    en: { name: "BERTA LINE · Tights", note: "Catalogue product shot — the starting point of the series." }
  },
  gallery: [
    "assets/Projects/Catalogue/1.jpg",
    "assets/Projects/Catalogue/2.jpg",
    "assets/Projects/Catalogue/3.jpg",
    "assets/Projects/Catalogue/4.jpg",
    "assets/Projects/Catalogue/5.jpg"
  ],
  ru: {
    title: "Catalogue",
    year: "2026",
    meta: "Серия образов · Персональный проект",
    tags: ["Генеративное", "Серия", "Мода"],
    lead: "Каталог образов: пять кадров с единым светом и характером.",
    // подписи к слайдам карусели — по порядку gallery[]
    captions: ["Кадр 01", "Кадр 02", "Кадр 03", "Кадр 04", "Кадр 05"],
    // текст справа от карусели — по одному на кадр (по порядку gallery[])
    notes: [
      "Открывающий кадр серии — образ и общая палитра.",
      "Смена ракурса, акцент на позе и силуэте.",
      "Деталь: фактура ткани и посадка костюма.",
      "Мягкий свет ложится на образ.",
      "Финальный кадр серии, сведённый по цвету."
    ],
    body: [
      "«Catalogue» — серия из пяти согласованных кадров, собранных как каталог образов: единый свет, палитра и характер.",
      "Работа велась итеративно: от общего настроения к точной композиции каждого кадра.",
      "Все изображения приведены к единому цвету и готовы к печати."
    ]
  },
  en: {
    title: "Catalogue",
    year: "2026",
    meta: "Image series · Personal project",
    tags: ["Generative", "Series", "Fashion"],
    lead: "A catalogue of looks: five frames with unified light and character.",
    captions: ["Frame 01", "Frame 02", "Frame 03", "Frame 04", "Frame 05"],
    notes: [
      "Opening frame of the series — the look and overall palette.",
      "Angle change, accent on pose and silhouette.",
      "Detail: fabric texture and the fit of the outfit.",
      "Soft light falls across the look.",
      "Final frame of the series, color-matched."
    ],
    body: [
      "“Catalogue” is a series of five consistent frames assembled as a catalogue of looks: shared light, palette and character.",
      "The work was iterative: from overall mood to the precise composition of each frame.",
      "All images are color-matched and print-ready."
    ]
  }
};
