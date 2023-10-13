import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: '경희대학교 졸업',
    Affiliation: '식물환경신소재공학과',
    description: [],
    icon: React.createElement(LuGraduationCap),
    date: '2009 - 2014',
  },
  {
    title: '경희대학교 대학원 졸업',
    Affiliation: '식물환경신소재공학과',
    description: [],
    icon: React.createElement(LuGraduationCap),
    date: '2014 - 2017',
  },
  {
    title: 'Frontend bootcamp',
    Affiliation: 'CodeStates',
    description: [
      'JavaScript와 React를 중심으로 한 프론트엔드 역량 학습',
      '네트워크, 운영체제, CPU 등의 컴퓨터 공학적 지식 습득',
      '페어 프로그램을 통한 지속적인 과제 수행 및 코드 리뷰 경험',
      '알고리즘 지식 습득 및 이를 이용한 문제 해결 경험',
      '팀 프로젝트를 통한 협업 경험 및 커뮤니케이션 역량 향상',
    ],
    icon: React.createElement(FaReact),
    date: '2022.12 - 2023.06',
  },
] as const;

export const projectsData = [
  {
    title: 'Creator Connect',
    period: '2023.05. - 2023.06.',
    role: '팀 프로젝트 FE 팀원 역할 ( FE 3, BE 4 ) | 기여도 : 30%',
    description: [
      '초보 유튜버들이 여러 정보를 공유할 수 있는 커뮤니티입니다.',
      'FE 팀원으로 각 메인 화면, 각 게시판 메인 화면, 공지사항 CRUD을 구현했습니다.',
      'API/인증 등에 대해 백엔드 개발자들과 협업하는 과정을 통해 많은 얘기를 나누고 각자의 상황을 이해하는데 도움이 되었습니다.',
      '피그마를 이용한 화면 정의서 구현 / 프로젝트 폴더 구조 및 초기 코드 세팅 / 피드백을 받고 코드를 수정하는 과정을 겪으면서 FE끼리 혹은 FE와 BE 간의 대한 협업에 대한 전반적인 과정에 대해 경험할 수 있었습니다.',
    ],
    tags: ['Next.js', 'TypeScript', 'React-Query', 'Tailwind', 'Zustand'],
    images: [
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/6e3839a8-1544-4c28-9210-10dad423d58c',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/f1307b87-01ef-4adb-ad63-fc16aca57a6f',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/aa69cf6e-8fa2-45ab-99ac-09f6d9d76a4e',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/1b723c0a-0c0e-4352-b754-2668ceeeeb52',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/cdd1f0fd-c44b-412a-b287-0cf3a97fc1a8',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/7e00030a-d328-45c7-8881-9227d4a878e2',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/60379f6a-b81b-473b-8aec-7022af2dc449',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/6a1ba5c4-7aff-4f7b-b105-9f2710fa8703',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/1c873a37-c4f5-4d64-8e05-11f6d526a6ec',
    ],
    deployLink: 'https://www.hard-coding.com/',
    gitHubRepo: 'https://github.com/codestates-seb/seb43_main_013/tree/fe-dev',
  },
  {
    title: 'Ticat',
    period: '2023.07. ~ ',
    role: '팀 프로젝트 FE 팀원 역할 ( FE 4, BE 3 ) | 기여도 : 25 %',
    description: [
      '다양한 축제 정보를 효과적으로 제공하여 사용자가 쉽고 빠르게 흥미로운 축제를 찾아 새로운 경험을 할 수 있도록 도와줍니다.',
    ],
    tags: ['React', 'TypeScript', 'React-Query', 'Styled-Components', 'Zustand'],
    images: [
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/e2c658f5-21be-4398-bf29-7f5b5e765ec8',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/83ba2d05-7bd4-4f11-9310-3f907124f577',
      'https://github.com/leekoby/leekoby.github.io/assets/118284808/68d9e2a2-86b5-4e1d-9d63-de72523a522a',
    ],
    deployLink: 'https://d99pqcn6hzkdg.cloudfront.net/',
    gitHubRepo: 'https://github.com/Butlers-Team/Ticat-client',
  },
] as const;

export const skillsData = [
  'TypeScript',
  'React',
  'Next.js',
  'React-Query',
  'Tailwind',
  'Styled Component',
  'Redux',
  'Zustand',
  'Node.js',
  'Express',
] as const;
