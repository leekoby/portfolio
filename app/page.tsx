import About from '@/components/about';
import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';

const Home = () => {
  return (
    <main className='flex flex-col items-center px-4'>
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
};
export default Home;
