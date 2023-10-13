'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}>
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 text-left'>
        오랜 기간 휴식 기간을 가진 저는 프로그래밍에 대한 열정을 추구하기로 결심하고 코딩 부트캠프에
        등록하여 <span className='font-medium'>프론트엔드 웹 개발</span> 을 배웠습니다.
        프로그래밍에서 제가 가장 좋아하는 부분은 <span className='font-medium'>문제 해결 측면</span>
        입니다. 여러 가지 시도 끝에 마침내 해결책을 찾아 문제를 해결했을 때의 쾌감을 좋아합니다.
        제가 주로 사용하는 핵심 스택은 <span className='font-medium'>React, Typescript</span>
        입니다. Nextjs, React-Query, Node, Express를 사용해본 경험이 있습니다. 저는 항상 새로운
        기술을 배우려고 노력하고 있습니다.
      </p>
    </motion.section>
  );
};

export default About;
