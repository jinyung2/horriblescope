import { NextApiRequest, NextApiResponse } from "next";
import { starSignList } from "../../utils/constants";

const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const SiteMapFunc = async (req: NextApiRequest, res: NextApiResponse) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    ...starSignList.map(({ sign }) => ({
      url: `/${sign.toLowerCase()}`,
      changefreq: "daily",
      priority: 0.7,
    })),
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: any) => data.toString());

  res.end(xmlString);
};

export default SiteMapFunc;
