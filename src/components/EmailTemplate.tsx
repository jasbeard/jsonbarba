import {
  Body,
  Container,
  Head,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface CompletedRsvpNotificationProps {
  name: string;
}

export const direction = 'https://www.google.com/maps/place/LOLA+Cafe+-+Tomas+Morato/@14.6300832,121.0325572,17z/data=!3m1!4b1!4m6!3m5!1s0x3397b64c20211533:0x2b40bc33d4b591e!8m2!3d14.6300832!4d121.0325572!16s%2Fg%2F11h0llbfy?entry=ttu';

export const CompletedRsvpNotification = ({
  name,
}: CompletedRsvpNotificationProps) => {
  const greetName = name.split(' ').length > 1 ? name.split(' ')[0] : name;
  return (
    <Html>
      <Head />
      <Preview>
        RSVP confirmation
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={title}>
            Awesome, you have completed the RSVP!
          </Text>
  
          <Section style={section}>
            <Text style={text}>
              Hey {greetName},
            </Text>
            <Text style={text}>
              Thanks for confirming your invitation.
            </Text>
  
            <Text style={text}>
              Some reminders for the event. <br />
              <strong>When:</strong> October 13, 2024<br />
              <strong>Where:</strong> Lola Cafe - Tomas Morato QC <Link style={link} href={direction} target="_blank">{`(get directions)`}</Link><br />
              <strong>What:</strong> Jason & Josan Wedding day
            </Text>
  
            <Text style={text}>
              Regards, <br />
              Jason & Josan
            </Text>
  
            <Text style={links}>
              <Link style={link} href="/jasonandjosan/faq" target="_blank">FAQ</Link> ・{" "}
              <Link style={link} href="/jasonandjosan/gifts">Gifts</Link>
            </Text>
          </Section>
      
          <Text style={footer}>
            Jason & Josan ・ Lola Cafe - Tomas Morato QC ・ Oct. 13, 2024
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default CompletedRsvpNotification;

const main = {
  backgroundColor: "#FFFAF2",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 32px",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
};

const section = {
  padding: "24px",
  border: "solid 1px golden-amber",
  borderRadius: "6px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 10px 0",
  textAlign: "left" as const,
};

const button = {
  fontSize: "14px",
  backgroundColor: "#28a745",
  color: "#fff",
  lineHeight: 1.5,
  borderRadius: "0.5em",
  padding: "12px 24px",
};

const links = {
  textAlign: "center" as const,
};

const link = {
  color: "#0366d6",
  fontSize: "12px",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "24px",
};
