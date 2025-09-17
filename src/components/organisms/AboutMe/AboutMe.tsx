const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="bg-base-100 flex flex-col justify-center items-center text-center py-20 px-6"
    >
      <div className="container max-w-5xl space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-base-content-300">
          Hi, I’m Justine 👋 a Frontend Developer specializing in building
          clean, scalable, and user-friendly web applications. I primarily work
          with modern frameworks like React and Angular, applying best practices
          such as Atomic Design, TDD, and Clean Architecture.
        </p>
        <p className="text-base-content-300">
          I graduated from <strong>AMA Computer College</strong> with a Bachelor
          of Science in Information Technology, where I was honored with the{' '}
          <strong>Best in Web Development</strong> award for my skills and
          contributions to web-based projects.
        </p>
        <p className="text-base-content-300">
          I also have hands-on experience with backend technologies like
          Express.js and MySQL, which allows me to collaborate effectively
          across the full stack when needed. My focus is always on creating
          intuitive digital experiences that bring value to users.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
