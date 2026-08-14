import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Prevent HTML entered by visitors from being injected into emails
function escapeHtml(value: string = "") {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject || "No subject");
    const safeMessage = escapeHtml(message);

    // ==========================================
    // 1. SEND ENQUIRY TO ARCHANA
    // ==========================================

    const { data: adminData, error: adminError } =
      await resend.emails.send({
        from: "Archana Portfolio <onboarding@resend.dev>",
        to: ["saha.archana765@gmail.com"],
        replyTo: email,
        subject: subject || `New Portfolio Message from ${name}`,

        html: `
          <div style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
          ">

            <h2 style="color: #0F766E;">
              New Portfolio Contact
            </h2>

            <p>
              <strong>Name:</strong> ${safeName}
            </p>

            <p>
              <strong>Email:</strong> ${safeEmail}
            </p>

            <p>
              <strong>Subject:</strong> ${safeSubject}
            </p>

            <hr style="border: 0; border-top: 1px solid #ddd;" />

            <p>
              <strong>Message:</strong>
            </p>

            <p style="white-space: pre-line;">
              ${safeMessage}
            </p>

          </div>
        `,
      });

    if (adminError) {
      console.error("Admin email error:", adminError);

      return Response.json(
        {
          success: false,
          message: "Unable to send email.",
        },
        { status: 500 }
      );
    }

    // ==========================================
    // 2. SEND THANK-YOU EMAIL TO VISITOR
    // ==========================================

    const { data: visitorData, error: visitorError } =
      await resend.emails.send({
        from: "Archana Portfolio <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting me",

        html: `
          <div style="
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
          ">

            <div style="
              background: #0F766E;
              padding: 20px;
              text-align: center;
            ">
              <h2 style="
                color: white;
                margin: 0;
              ">
                Thank You for Contacting Me
              </h2>
            </div>

            <div style="padding: 25px;">

              <p>
                Hi ${safeName},
              </p>

              <p>
                Thank you for reaching out through my portfolio.
                I have received your message successfully.
              </p>

              <p>
                I will review your enquiry and get back to you
                as soon as possible.
              </p>

              <div style="
                background: #F8F7F4;
                border: 1px solid #E5E5E5;
                padding: 15px;
                margin: 20px 0;
              ">
                <p style="margin: 0 0 8px;">
                  <strong>Your subject:</strong>
                  ${safeSubject}
                </p>

                <p style="margin: 0;">
                  <strong>Your message:</strong>
                </p>

                <p style="
                  margin-top: 8px;
                  white-space: pre-line;
                ">
                  ${safeMessage}
                </p>
              </div>

              <p>
                Best regards,<br />
                <strong>Archana Saha</strong><br />
                Senior Frontend & WordPress Developer
              </p>

            </div>

            <div style="
              border-top: 1px solid #E5E5E5;
              padding: 15px 25px;
              color: #777;
              font-size: 12px;
              text-align: center;
            ">
              Archana Saha | Senior Frontend & WordPress Developer
            </div>

          </div>
        `,
      });

    // The enquiry was successfully sent even if the acknowledgement
    // email could not be delivered.
    if (visitorError) {
      console.error("Visitor thank-you email error:", visitorError);

      return Response.json({
        success: true,
        message:
          "Message sent successfully, but the confirmation email could not be sent.",
        data: adminData,
      });
    }

    // ==========================================
    // SUCCESS
    // ==========================================

    return Response.json({
      success: true,
      message:
        "Message sent successfully. A confirmation email has been sent to you.",
      data: {
        admin: adminData,
        visitor: visitorData,
      },
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