import type { NextApiRequest, NextApiResponse } from "next";

import prisma from "lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { body } = req;
      const build = await prisma.build.create({ data: JSON.parse(body) });

      return res.status(200).json(build);
    } catch (error) {
      return res.status(422).json(error);
    }
  } else if (req.method === "GET") {
    try {
      const builds = await prisma.build.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
        ],
      });

      return res.status(200).json(builds);
    } catch (error) {
      return res.status(422).json(error);
    }
  }

  res.end();
};
