import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from "@vercel/postgres";

async function validateInvitation(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;
  const pname = (name as string).toLocaleLowerCase();
  const { rows } = await sql`SELECT * FROM wedding_guest WHERE name=${pname};`

  // note: make sure name_tokens in db are in lower case

  // invited
  if (rows[0]) {
    // already completed RSVP, to avoid duplicate
    if (rows[0].did_guest_confirmed) {
      res.status(200).json({
        guestName: name,
        isInvited: true,
        did_confirmed: true,
        message: `Hey ${name}, your invitation has been confirmed. We have reserved a seat for you. See you! 🥳`
      });
    }

    // unconfirm guest
    if (!rows[0].did_guest_confirmed) {
      res.status(200).json({
        guestName: name,
        isInvited: true,
        did_confirmed: false,
        guest_id: rows[0].id,
        message: `Hi ${name}, Yep you're on the guest list. Please complete your RSVP by sending in your email to receive updates. ❤️`
      });
    }
  } else {
    // not invited
    res.status(200).json({
      guestName: name,
      isInvited: false,
      did_confirmed: false,
      message: `🫣 It appears that you were not on the guest list, If you think this is a mistake kindly contact the bride and groom at me@jsonbarba.com.`
    });
  }
};

export default validateInvitation;