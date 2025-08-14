import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, location, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Create a unique token for this lead (timestamp + random)
  const ts = new Date().toISOString().replace(/[:.]/g, "-");
  const token = `${ts}-${Math.random().toString(36).slice(2, 8)}`;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "rameshdeshmukh9@gmail.com",
      // Make subject unique so Gmail won’t thread it
      subject: `📮🌊📮 Coconut Beach Farm Enquiry 📮🌊📮• ${name || "Lead"} • ${token}`,
      text: `Details of the person who contacted you are as follows:

Name: ${name || "-"}
Email: ${email || "-"}
Mobile: ${phone || "-"}
Location: ${location || "-"}
Message: ${message || "-"}

Lead-ID: ${token}`,
      // Add a unique header just in case (Gmail generally ignores custom threading headers,
      // but this helps with other clients and future-proofing)
      headers: {
        "X-Entity-Ref-ID": token,
      },
      // Do NOT set 'inReplyTo' or 'references' — leaving them out avoids threading
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: error.message });
  }
}
