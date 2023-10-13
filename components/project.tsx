'use client';

import { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiHome } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import Description from './description';

type ProjectProps = (typeof projectsData)[number];

const Project: React.FC<ProjectProps> = ({
  title,
  role,
  description,
  tags,
  imageUrl,
  deployLink,
  gitHubRepo,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='mb-3 group sm:mb-8 last:mb-0'>
      <section className='bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-full hover:bg-gray-200 transition'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  flex flex-col h-full'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p>{role}</p>
          {/* 설명 */}
          {description.map((line, index) => (
            <Description key={index}>{line}</Description>
          ))}

          <div className='flex text-sm space-y-1'>
            <a
              className='flex items-center gap-2 py-3 transition bg-white rounded-full cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10'
              href={deployLink}
              target='_blank'>
              <HiHome />
              Deploy
            </a>
            <a
              className='flex items-center gap-2 py-3 transition bg-white rounded-full cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10'
              href={gitHubRepo}
              target='_blank'>
              <FaGithubSquare />
              GitHub
            </a>
          </div>
          {/* 태그 */}
          <ul className='flex flex-wrap gap-2 mt-4 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full'
                key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </motion.div>
  );
};

export default Project;
