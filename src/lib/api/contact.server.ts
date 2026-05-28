import nodemailer from "nodemailer";

type ContactData = {
  fullName: string;
  workEmail?: string;
  phoneNumber: string;
  projectDetails: string;
};

export async function sendContactEmail(data: ContactData) {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
  const destinationEmail = process.env.CONTACT_TO_EMAIL ?? "srendibsoftwaresolutions@gmail.com";

  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
    throw new Error(
      "Missing SMTP config. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM in your environment.",
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const subject = `New project inquiry${data.fullName ? ` from ${data.fullName}` : ""}`;
  const parts: string[] = [];
  parts.push(`Name: ${data.fullName}`);
  if (data.workEmail) parts.push(`Email: ${data.workEmail}`);
  parts.push(`Phone: ${data.phoneNumber}`);
  parts.push("");
  parts.push("Message:");
  parts.push(data.projectDetails);

  const text = parts.join("\n");

  const mailOptions: any = {
    from: smtpFrom,
    to: destinationEmail,
    subject,
    text,
  };

  if (data.workEmail) mailOptions.replyTo = data.workEmail;

  await transporter.sendMail(mailOptions);
}
