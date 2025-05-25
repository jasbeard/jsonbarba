import type { NextApiRequest, NextApiResponse } from 'next';
import { CompletedRsvpNotification } from '@/components/EmailTemplate';
import { Resend } from 'resend';
import { sql } from "@vercel/postgres";

const resend = new Resend(process.env.RESEND_API_KEY);

async function send(req: NextApiRequest, res: NextApiResponse) {
  const { email, name, gi } = req.query;
  
  /*  TODO: update entry on db based on name
      update the ff:'
      - did_guest_confirmed
      - did_email_confirmation_sent
      - updated_date 
  */  
  const { data, error } = await resend.emails.send({
    from: 'Jason & Josan <me@jsonbarba.com>',
    to: [email as string],
    subject: 'Jason & Josan Wedding RSVP',
    react: CompletedRsvpNotification({ name: name as string }),
  });

  
  if (!error) {
    // update db
    const { rows } = await sql`
      UPDATE wedding_guest
      SET 
        did_guest_confirmed = true,
        did_email_confirmation_sent = true,
        email = ${email as string},
        updated_date = NOW()
      WHERE id = ${gi as string};
    `;

    return res.status(200).json({
      emailSentData: data,
      message: `Thanks for completing your RSVP, we have sent reminders to your email at ${email as string} ❤️`
    });
  }

  if (error) {
    return res.status(400).json(error);
  }
};


export default send;