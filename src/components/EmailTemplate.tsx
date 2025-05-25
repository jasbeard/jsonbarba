interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => {
  const greetName = name.split(' ').length > 1 ? name.split(' ')[0] : name;
  return (
    <div>
      Hello {greetName},
      
      Thanks for confirming on attending to our wedding day! 🥳

      Regards,

      Jason and Josan
    </div>
  );
}