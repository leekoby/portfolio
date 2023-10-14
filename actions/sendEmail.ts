'use server';

import React from 'react';
import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: '유효하지 않은 이메일',
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: '유효하지 않은 메세지',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: `Contact Form <onboarding@resend.dev>`,
      to: 'abc2752@naver.com',
      subject: 'Contact 연락이 왔습니다.',
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
    data,
  };
};
