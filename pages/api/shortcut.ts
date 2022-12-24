import { NextApiRequest } from "next";
import { NextApiResponse } from "next/types";

interface EnpointResponse {}
function endpoint(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") return res.json({});
  return res.json({});
}
