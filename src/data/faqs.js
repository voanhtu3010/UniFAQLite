import { useMemo } from "react";

export const FAQ_DATA = [
  { question: "How to reset my university password?", answer: "Go to the IT Helpdesk page and click 'Reset Password'." },
  { question: "Where can I find my timetable?", answer: "Your timetable is available in the Student Portal under 'Schedule'." },
  { question: "How do I register for a new course?", answer: "You can register via the Academic Registration System before the deadline." },
  { question: "Who do I contact for tuition fee issues?", answer: "Please contact the Finance Department through the university website." },
  { question: "How to access online learning materials?", answer: "Visit the eLearning platform and log in with your student account." },
];

export default function useFaqSearch() {
  const searchFaq = (keyword) => {
    const lowerKeyword = keyword.toLowerCase();

    // Tìm câu trả lời chính xác
    const found = FAQ_DATA.find((faq) =>
      faq.question.toLowerCase().includes(lowerKeyword)
    );

    // Lấy 3 câu hỏi liên quan
    const related = FAQ_DATA
      .filter((faq) =>
        faq.question.toLowerCase().includes(lowerKeyword)
      )
      .slice(0, 3);

    return {
      answer: found ? found.answer : null,
      related,
    };
  };

  return useMemo(() => ({ searchFaq }), []);
}