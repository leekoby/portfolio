'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { motion } from 'framer-motion';
import Description from './description';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

const Experience = () => {
  const { ref } = useSectionInView('Experience');
  const { theme } = useTheme();
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='experience'
      className='scroll-mt-28 mb-28 sm:mb-40 sm:w-[50rem]'>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor=''>
        {[...experiencesData].reverse().map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgba(255, 255, 255, 0.5)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                fontSize: '1.5rem',
              }}>
              <h3 className='font-semibold'>{item.title}</h3>
              <p className='font-normal mt-0'>{item.Affiliation}</p>
              {/* 설명 */}
              {item.description.map((line, index) => (
                <Description
                  key={index}
                  className='!mt-1 !font-normal text-gray-700 dark:text-white/75'>
                  {line}
                </Description>
              ))}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
};

export default Experience;
