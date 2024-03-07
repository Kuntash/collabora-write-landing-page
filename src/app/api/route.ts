import { Resend } from "resend";

export async function POST(request: Request) {
  const res = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const response = await resend.contacts.create({
      unsubscribed: false,
      email: res?.email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
    return new Response(`An error happened`, {
      status: 400,
    });
  }

  return new Response("Success!", {
    status: 200,
  });
}
