'use client';

import { useRef, useState } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiHome } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import Description from './description';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
type ProjectProps = (typeof projectsData)[number];

const Project: React.FC<ProjectProps> = ({
  title,
  period,
  role,
  description,
  tags,
  images,
  deployLink,
  gitHubRepo,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
      }}
      className='mb-3 group sm:mb-8 last:mb-0'>
      <section className='bg-gray-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-full hover:bg-gray-200 transition'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10  flex flex-col h-full'>
          <div className='relative w-full h-[35vh] max-h-[40vh] mb-5'>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevImage}
              className='absolute top-1/2 bg-gray-200 bg-opacity-50 left-3 z-50 p-1 rounded-full shadow-lg transition-colors text-gray-700 hover:text-black hover:bg-opacity-100'>
              <BsChevronLeft size={24} />
            </motion.button>

            <Image
              src={images[currentImageIndex]}
              style={{ objectFit: 'cover' }}
              fill
              alt={`${title} image ${currentImageIndex}`}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=='
              className='object-contain border-[4px] p-1 border-gray-500 rounded-lg hover:border-gray-900'
            />

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleNextImage}
              className='absolute top-1/2 bg-gray-200 bg-opacity-50 right-3 z-50 p-1 rounded-full shadow-lg transition-colors text-gray-700 hover:text-black hover:bg-opacity-100'>
              <BsChevronRight size={20} />
            </motion.button>
          </div>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p>{period}</p>
          <p>{role}</p>
          {/* 설명 */}
          {description.map((line, index) => (
            <Description key={index} className='mt-2 leading-relaxed text-gray-700'>
              {line}
            </Description>
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
