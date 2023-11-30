// https://<your-site.com>/api/revalidate?secret=<token>
// http://lcoalhost:3000/api/revalidate?path=/&secret=<token>

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalidate token' });
    }

    const path = req.query.path as string;

    await res.revalidate(path);

    return res.json({ revalidated: true });
}