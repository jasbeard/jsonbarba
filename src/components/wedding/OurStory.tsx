const Paragraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="leading-relaxed antialiased">{children}</p>;
};

const OurStory = () => {
  const message = {
    introduction: `
      In the digital age of swipes and matches, two hearts found each other on a Yellow App 🐝. 
      and it’s safe to say that our lives have never been the same since. 
      What started as a simple swipe turned into an incredible adventure, full of love, laughter, and unforgettable moments.
    `,
    body: `
      As the months went by, we found ourselves falling deeper for each other. We bonded over hiking, travelled to different places, took countless food trips, supported each other through life’s ups and downs, and created countless memories that we cherish dearly.
    `,
    conclusion: `
      Today, as we stand here ready to begin the next chapter of our lives, we are filled with gratitude for the journey that brought us to this moment. To our family and friends, thank you for being part of our story and for supporting us along the way. We are excited to continue writing our love story, with each of you by our side.
    `,
    exit: `
      Here’s to the many more adventures ahead and to the incredible story that began with a simple swipe.
    `,
  };
  return (
    <div className="mt-6">
      <Paragraph>{message.introduction}</Paragraph>
      <br />
      <Paragraph>{message.body}</Paragraph>
      <br />
      <Paragraph>{message.conclusion}</Paragraph>
      <br />
      <Paragraph>{message.exit}</Paragraph>
    </div>
  );
};

export default OurStory;