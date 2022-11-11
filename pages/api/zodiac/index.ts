import { NextApiRequest, NextApiResponse } from "next";

const postZodiacToDb = (req: NextApiRequest, res: NextApiResponse) => {
  // you can use req.method to restrict the call to ie. GET or POST
  const { sign, horoscope } = req.body;
  res.end(`${sign} ${horoscope}`);
};

export default postZodiacToDb;
