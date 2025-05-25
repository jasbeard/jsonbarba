import { direction } from "../EmailTemplate";

const FaqItem = ({
  question,
  answer,
  isAnswerHref
}: {
  question: string;
  answer: string;
  isAnswerHref: boolean;
}) => {
  return (
    <div className="flex flex-col gap-2 my-2 p-2 rounded">
      <div className="font-medium">Q: {question}</div>
      {isAnswerHref ? (
        <div className="inline">
          <span>A: </span>
          <a href={answer} target="_blank" className="underline underline-offset-4 decoration-sky-500">Get Direction</a>
        </div>
      ) : (
        <p>A: {answer}</p>
      )}
    </div>
  );
};

const Faq = () => {
  const list = [
    {
      question: "Is there a specific color or dress code for the wedding?",
      answer: "Yes, please wear white (smart casual - formal)",
      isAnswerHref: false,
    },
    {
      question: "What time will the ceremony begin?",
      answer: "The whole celebrationn duratrion is 3 hours (11am - 2pm)",
      isAnswerHref: false,
    },
    {
      question: "Would there be a parking available?",
      answer: "LOLA CAFE provides parking spaces",
      isAnswerHref: false,
    },
    {
      question: "How to get to the venue?",
      answer: direction,
      isAnswerHref: true,
    },
  ];
  return (
    <div className="flex flex-col">
      {list.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isAnswerHref={item.isAnswerHref}
        />
      ))}
      <div className="ml-2 mt-4 font-medium">If you have other questions kindly contact the bride and groom.</div>
    </div>
  );
}

export default Faq;