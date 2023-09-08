"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown) => {
  if(!value || typeof value !== "string"){
    return false;
  }
  return true;
}

export  const sendEmail = async (FormData: FormData) => {
    console.log("Server Side");
    const senderEmail = FormData.get("senderEmail")
    const message = FormData.get("message")

    if(!validateString(senderEmail)) {
      return {
        error: "Invalid sender email"
      }
    }
    
    if(!validateString(message)) {
      return {
        error: "Invalid Message"
      }
    }
      
    resend.emails.send({
      from: "onboarding@resend.dev",
      to: "gnanaharish03@gmail.com",
      subject: "! Mail From Portfolio",
      reply_to: senderEmail,
      text: message
    });
  }