import Image from 'next/image';
import * as motion from 'motion/react-client';

const MyImage = () => {
  return (
    <div className="relative overflow-hidden pr-12 pb-12">
      <Image
        className="relative z-1 rounden-lg"
        src="/guypc.jpg"
        alt="me"
        width={600}
        height={600}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <motion.div
        className="rounded-lg bg-primary absolute top-0 right-12 bottom-12 left-0 opacity-50"
        animate={{ x: 20, y: 20 }}
      ></motion.div>
    </div>
  );
};

export default MyImage;
