import { motion } from 'framer-motion';

const ProjectSingle = ({ title, category, image, externalLink, area }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
      className="flex flex-col" // ensure the motion div stretches full height
    >
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Single Project"
        className="flex flex-col h-full"
      >
        <div className="flex flex-col h-full rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          {/* Image Container with fixed aspect ratio */}
          <div className="w-full aspect-video overflow-hidden rounded-t-xl">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt="Single Project"
            />
          </div>
          {/* Text Content */}
          <div className="text-center px-4 py-6 mt-auto">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
            <br />
            <span className="text-sm text-ternary-dark dark:text-ternary-light">
              Learning Areas: {area}
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectSingle;
