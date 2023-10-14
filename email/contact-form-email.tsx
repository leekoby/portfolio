import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({ message, senderEmail }) => {
  return (
    <Html>
      <Head />
      <Preview>포트폴리오 사이트에서 보낸 새 메일</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>
                포트폴리오 사이트에서 다음과 같은 메시지를 받았습니다.
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>발신자 : {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
