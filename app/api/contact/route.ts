import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Archana Portfolio <onboarding@resend.dev>",
      to: ["saha.archana765@gmail.com"],
      replyTo: email,
      subject: subject || `New Portfolio Message from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          
          <h2 style="color: #0F766E;">
            New Portfolio Contact
          </h2>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Subject:</strong> ${subject || "No subject"}
          </p>

          <hr />

          <p>
            <strong>Message:</strong>
          </p>

          <p>
            ${message}
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          success: false,
          message: "Unable to send email.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully.",
      data,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}