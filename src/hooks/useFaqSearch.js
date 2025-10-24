import { FAQ_DATA } from "../data/faqs";

export default function useFaqSearch() {
  const searchFaq = (keyword) => {
    const lowerKeyword = keyword.toLowerCase();

    // Tìm câu hỏi khớp
    const found = FAQ_DATA.find((faq) =>
      faq.question.toLowerCase().includes(lowerKeyword)
    );

    // Nếu có kết quả → gợi ý 3 câu khác (không trùng)
    let related = FAQ_DATA.filter((faq) => faq.question !== found?.question).slice(0, 3);

    // Nếu không có kết quả → vẫn gợi ý 3 câu bất kỳ
    if (!found) {
      related = FAQ_DATA.slice(0, 3);
    }

    return {
      answer: found ? found.answer : null,
      related,
    };
  };

  const getInitialFaqs = () => FAQ_DATA.slice(0, 3);

  return { searchFaq, getInitialFaqs };
}
