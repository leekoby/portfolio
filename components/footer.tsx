import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 block text-xs'>&copy; {year} leekoby. All rights reserved.</small>
      <p className='text-xs'>
        <span className='font-semibold'>이 웹사이트 정보 :</span> React & Next.js(앱 라우터 및 서버
        액션), TypeScript, Tailwind CSS, Framer Motion, React 이메일 및 재전송, Vercel 호스팅으로
        구축되었습니다.
      </p>
    </footer>
  );
};
export default Footer;
