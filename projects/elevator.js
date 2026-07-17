/* Мета-файл проекта — RU / EN. Загружается project.html?id=elevator.
   Структура ассетов: assets/Projects/ProjectElevator/1.jpg … 5.jpg
   Порядок картинок карусели «Детали» = массив gallery[]. */
(window.PROJECTS = window.PROJECTS || {})["elevator"] = window.PROJECT = {
  id: "elevator",
  fig: "FIG.08",
  image: "assets/Projects/ProjectElevator/1.jpg",
  orientation: "vertical",   // "vertical" | "horizontal" — высота карусели «Детали»
  gallery: [
    "assets/Projects/ProjectElevator/1.jpg",
    "assets/Projects/ProjectElevator/2.jpg",
    "assets/Projects/ProjectElevator/3.jpg",
    "assets/Projects/ProjectElevator/4.jpg",
    "assets/Projects/ProjectElevator/5.jpg"
  ],
  ru: {
    title: "Elevator",
    year: "2026",
    meta: "Серия образов · Персональный проект",
    tags: ["Генеративное", "Серия", "Атмосфера"],
    lead: "Серия из пяти кадров с единым светом и настроением.",
    // подписи к слайдам карусели — по порядку gallery[]
    captions: ["Кадр 01", "Кадр 02", "Кадр 03", "Кадр 04", "Кадр 05"],
    // текст справа от карусели — по одному на кадр (по порядку gallery[])
    notes: [
      "Общий план: героиня в лифте, тёплый металл и дерево.",
      "Смена ракурса — характер и взгляд крупнее.",
      "Деталь: фактура ткани и перчатки.",
      "Свет мягко ложится на костюм.",
      "Финальный кадр серии, сведённый по цвету."
    ],
    body: [
      "«Elevator» — серия из пяти согласованных кадров, объединённых общим светом, палитрой и характером.",
      "Работа велась итеративно: от общего настроения к точной композиции каждого кадра.",
      "Все изображения приведены к единому цвету и готовы к печати."
    ]
  },
  en: {
    title: "Elevator",
    year: "2026",
    meta: "Image series · Personal project",
    tags: ["Generative", "Series", "Atmosphere"],
    lead: "A series of five frames with unified light and mood.",
    captions: ["Frame 01", "Frame 02", "Frame 03", "Frame 04", "Frame 05"],
    notes: [
      "Wide shot: subject in the elevator, warm metal and wood.",
      "Angle change — character and gaze up close.",
      "Detail: fabric texture and glove.",
      "Soft light falls on the suit.",
      "Final frame of the series, color-matched."
    ],
    body: [
      "“Elevator” is a series of five consistent frames tied together by shared light, palette and character.",
      "The work was iterative: from overall mood to the precise composition of each frame.",
      "All images are color-matched and print-ready."
    ]
  }
};
