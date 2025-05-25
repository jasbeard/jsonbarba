import type { NextApiRequest, NextApiResponse } from 'next';
import { sql } from "@vercel/postgres";

async function getPhotos(req: NextApiRequest, res: NextApiResponse) {
  const { rows } = await sql`SELECT * FROM prenup_images;`;
  const imageList = rows.map((field) => field.url);
  
  res.status(200).json(imageList);
};

export default getPhotos;