import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from "@vercel/postgres";

async function validateInvitation(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.query;

  const query = `SELECT * FROM wedding_guest WHERE name_tokens && $1::text[];`;
  const { rows } = await db.query(query, [(name as string).toLocaleLowerCase().split(' ')])

  // note: make sure name_tokens in db are in lower case

  // invited
  if (rows[0]) {
    // already completed RSVP, to avoid duplicate
    if (rows[0].did_guest_confirmed) {
      res.status(200).json({
        guestName: name,
        isInvited: true,
        did_confirmed: true,
        message: `Hey ${name}, you already confirmed your invitation, see you!`
      });
    }

    // unconfirm guest
    if (!rows[0].did_guest_confirmed) {
      res.status(200).json({
        guestName: name,
        isInvited: true,
        did_confirmed: false,
        guest_id: rows[0].id,
        message: `Hi ${name}, Yep you're on the guest list. Please complete your RSVP by sending in your email to receive updates.`
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