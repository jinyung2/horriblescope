import { NextApiRequest, NextApiResponse } from "next";

const postZodiacToDb = (req: NextApiRequest, res: NextApiResponse) => {
  const { sign, horoscope } = req.body;
  res.end(`${sign} ${horoscope}`);
};

export default postZodiacToDb;
