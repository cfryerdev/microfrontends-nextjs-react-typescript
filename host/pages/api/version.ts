const { version } = require('../../package.json');

import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  version: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res
    .status(200)
    .json({ version: version })
}
