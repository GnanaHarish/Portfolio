"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/components/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (FormData: FormData) => {
  console.log("Server Side");
  const senderEmail = FormData.get("senderEmail");
  const message = FormData.get("message");

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "gnanaharish03@gmail.com",
      subject: "! Mail From Portfolio",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data
  }
};
