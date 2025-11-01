import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const initScrollRevealRandomWords = (selector) => {
  document.querySelectorAll(selector).forEach((title) => {
    // Разделение текста на слова.
    const split = new SplitText(title, { type: "words" });
    const words = split.words;

    // Для корректного рендера слово должно быть блочным элементом.
    words.forEach((word) => {
      word.style.display = "inline-block";
      word.style.transform = "translateZ(0)";
      word.style.backfaceVisibility = "hidden";
      word.style.willChange = "transform, opacity";
    });

     // Перемешивание слов для случайного появления.
    const shuffledWords = gsap.utils.shuffle([...words]);

    gsap.from(shuffledWords, {
      y: 50, // Смещение снизу.
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
      stagger: {
        each: 0.2,
        from: "random", // Случайный порядок появления.
      },
      scrollTrigger: {
        trigger: title,
        start: "top bottom",
        once: true // Анимация срабатывает только один раз.
      }
    });
  });
};

// Запуск
initScrollRevealRandomWords('.wave-text');
