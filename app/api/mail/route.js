import transport from "../../../mailer"; // Path to your mailer.js file
import { NextResponse } from "next/server";

export async function POST(request) {
  if (request.method === "POST") {
    const formData = await request.formData();
    const subject = formData.get("subject");
    const email = formData.get("email");
    const message = formData.get("message");

    if (email === "" || subject === "" || message === "") {
      return new Response("Please provide all required fields", {
        status: 400,
      });
    }

    // Email content
    const mailOptions = {     
      to: "sales@stecome.com", // Recipient's email address
      subject: subject + ' | ' + email, // Subject line
      text: message, // Plain text body
    };

    try {
      // Send email using the transporter object
      const info = await transport.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      return new Response(true, {
        status: 200,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(false, {
        status: 500,
      });
    }
  } else {
    return new Response().setHeader("Allow", ["POST"]);
  }
}
