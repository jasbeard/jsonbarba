const FaqItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="flex flex-col gap-2 my-2 p-2 rounded">
      <div className="font-medium">Q: {question}</div>
      <p>A: {answer}</p>
    </div>
  );
};

const Faq = () => {
  const list = [
    {
      question: "Is there a specific color or dress code for the wedding?",
      answer: "Yes, please wear white",
    },
    {
      question: "What time will the ceremony begins?",
      answer: "10am - 2pm",
    },
    {
      question: "Would there be a parking available?",
      answer: "LOLA CAFE provides parking spaces",
    },
    {
      question: "Question 4?",
      answer: "Loren Ipsum Answer 4.",
    },
  ];
  return (
    <div className="flex flex-col">
      {list.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default Faq;