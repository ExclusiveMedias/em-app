// pages/api/sendUser.js
export default async (req, res) => {
  if (req.method !== "PUT") {
    return res
      .status(405)
      .send({ error: "Method Not Allowed", allowedMethods: ["PUT"] });
  }

  const { listId, contacts } = req.body;

  if (!listId || !contacts) {
    return res.status(400).send({ error: "Missing required fields" });
  }

  try {
    const response = await fetch(
      "https://api.sendgrid.com/v3/marketing/contacts",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${process.env.SENDGRID_SIMPLEFORM_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          list_ids: [listId],
          contacts,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).send(errorData);
    }

    return res.status(200).send({ success: true });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};
