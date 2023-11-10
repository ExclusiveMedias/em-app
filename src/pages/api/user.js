// pages/api/user.js
import { getUserRecord } from "../../hooks/use-auth";

export default async function user(req, res) {
  if (req.method === "GET") {
    // Authentication and user validation logic would go here
    // For example, checking for a session or a valid JWT

    try {
      // Assuming you've verified the user's identity and have their uid:
      const uid = req.query.uid; // or from a session, JWT, etc.
      const userRecord = await getUserRecord(uid);

      if (!userRecord.exists) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      res.status(200).json({ user: userRecord.data() });
    } catch (error) {
      console.error("Error fetching user", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
