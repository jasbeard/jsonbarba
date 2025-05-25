const QandaItem = ({
  question,
  answer
}: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="font-medium">{question}</div>
      <p className="my-4">{answer}</p>
    </div>
  );
};

const QandaContent = () => {
  const list = [
    {
      question: "Question 1?",
      answer: "Loren Ipsum Answer 1.",
    },
    {
      question: "Question 2?",
      answer: "Loren Ipsum Answer 2.",
    },
    {
      question: "Question 3?",
      answer: "Loren Ipsum Answer 3.",
    },
    {
      question: "Question 4?",
      answer: "Loren Ipsum Answer 4.",
    },
  ];
  return (
    <div className="flex flex-col">
      {list.map((item, index) => (
        <QandaItem
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}

export default QandaContent;