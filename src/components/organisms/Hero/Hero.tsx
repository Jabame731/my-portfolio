import MyImage from '@/components/atoms/MyImage/MyImage';
import CtxButtons from '@/components/molecules/CtxButtons/CtxButtons';

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-[75vh] flex items-center justify-center bg-linear-to-br from-[var(--color-base-100)] to-[var(--color-base-300)]"
    >
      <div className="container w-full pb-20 pt-20 lg:pt-36 px-4">
        <div className="flex flex-col gap-8 lg:flex-row relative">
          <div className="flex flex-col space-y-4 justify-center">
            <h1 className="text-sm uppercase tracking-widest">
              Justine Taglucop
            </h1>
            <p className="text-base-content-300 text-2xl font-lighter">
              Hi, I’m Justine 👋 a Frontend Developer specializing in React,
              Angular, and scalable UI design. I craft clean, user-friendly, and
              maintainable web experiences. I also have hands-on experience with
              Express.js for building APIs, which helps me collaborate
              effectively across the full stack when needed.
            </p>
            <div className="flex gap-4">
              <CtxButtons />
            </div>
          </div>
          <div className="max-w-md lg:px-12">
            <MyImage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
