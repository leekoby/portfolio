'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { ImBlog } from 'react-icons/im';
const Intro = () => {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}>
            <Image
              src='https://avatars.githubusercontent.com/u/118284808?v=4' //임시 사진
              alt='이호승'
              width='192'
              height='192'
              quality='95'
              priority={true}
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
            />
          </motion.div>
          <motion.span
            className='absolute bottom-0 right-0 text-4xl'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}>
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-lg font-medium !leading-[2] md:text-2xl '
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}>
        <span className='font-bold '>깊이 있게</span> 다져나가고자 하는 주니어 개발자입니다.
        <br />
        <span className='font-bold '>Typescript</span>로 개발하는 것을 좋아하고
        <br />
        최근에는 <span className='font-bold '>함수형 프로그래밍</span>과{' '}
        <span className='font-bold '>성능 최적화</span>에 관심을 가지고 <br />
        프로젝트에 적용하며 학습하고 있습니다.
        <br />
        수많은 도전과 경험을 통해 다양한 기술 스택을 쌓고 <br />
        적재적소에 알맞은 기술을 적용하여 <span className='font-bold'>최고의 UX</span>를 제공할 수
        있는 <br />
        <span className='font-bold '>개발자</span>가 되고 싶습니다.
      </motion.h1>
      <motion.div
        className='flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}>
        <Link
          href='#contact'
          className='flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none group px-7 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'>
          Contact
          <BsArrowRight className='transition opacity-70 group-hover:translate-x-1' />
        </Link>
        <a
          className='flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10'
          href='/resume.pdf'
          download>
          Resume <HiDownload className='transition opacity-60 group-hover:translate-y-1' />
        </a>

        <a
          className='flex items-center gap-2 py-3 transition bg-white rounded-full cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 dark:bg-white/10'
          href='https://github.com/leekoby'
          target='_blank'>
          <FaGithubSquare />
          GitHub
        </a>

        <a
          className='flex items-center gap-2 py-3 transition bg-white rounded-full outline-none cursor-pointer group px-7 focus:scale-110 hover:scale-110 active:scale-105 borderBlack dark:bg-white/10'
          href='https://leekoby.github.io'
          target='_blank'>
          <ImBlog />
          blog
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
