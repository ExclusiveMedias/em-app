const { SecretManagerServiceClient } = require("@google-cloud/secret-manager");

// Instantiates a client
const client = new SecretManagerServiceClient();

async function getSecret() {
  try {
    const [version] = await client.accessSecretVersion({
      name: "projects/514401272783/secrets/SENDGRID_API_KEY/versions/latest",
    });

    return version.payload.data.toString("utf8");
  } catch (error) {
    console.error("Error fetching secret:", error.message);
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const apiKey = await getSecret();

      const { first_name, last_name, email } = req.body;

      const data = {
        list_ids: ["cd5ffe1d-548c-4d25-9eac-7d2951f0b647"],
        contacts: [
          {
            first_name: first_name,
            last_name: last_name,
            email: email,
          },
        ],
      };

      const response = await fetch(
        "https://api.sendgrid.com/v3/marketing/contacts",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${apiKey}`, // Use the retrieved API key here
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const responseData = await response.json();
      console.log("Success:", responseData);
      return res.status(200).json({ message: "Success" });
    } catch (error) {
      console.error("Error:", error.message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
