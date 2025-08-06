// server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json()); // To parse JSON request body

// POST endpoint to receive form data
app.post("/send-email", async (req, res) => {
  const { name, email, phone, location, message } = req.body;

  try {
    // Configure your SMTP server or Gmail credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "riteshlkh2018@gmail.com", // Your email
        pass: "ukru dwzs ausq jibd",   // Use app password if using Gmail
      },
    });

    const mailOptions = {
      from: email,
      to: "seexpert111@gmail.com", // Your receiving email
      subject: `New Enquiry for - ${location}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
