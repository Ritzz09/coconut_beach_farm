import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, phone, location, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Change this if using another email provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "rameshdeshmukh9@gmail.com", // Change to dentist's email
      subject: "📮🌊📮𝐂𝐨𝐜𝐨𝐧𝐮𝐭 𝐁𝐞𝐚𝐜𝐡 𝐅𝐚𝐫𝐦 𝐄𝐧𝐪𝐮𝐢𝐫𝐲 📮🌊📮",
      text: `Details of the person contacted you are as follows:
      
      Name: ${name}
      Email: ${email}
      Mobile: ${phone}
      Location: ${location}
      Message: ${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending failed:", error);
    return res.status(500).json({ error: error.message });
  }

}
