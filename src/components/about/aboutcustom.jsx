import profileImage from '../../images/bioimage.png';

const AboutMeCustom = () => {
  // Dummy content replacing context/props
  const aboutMe = [
    {
      id: 1,
      bio: "A Computer Science undergraduate focused on AI/ML research. I work on NLP, Computer Vision and Reinforcement Learning paradigms and I am looking to collaborate with leading labs in these domains. Apart from R&D, I am building a startup - Travellio (Vialux Nomadic Travellio Solutions Pvt. Ltd)."
    },
    {
      id: 2,
      bio: "A serious car enthusiast. I also do photography, fitness and travelling as a routine. Have you got something interesting for me? Let's get in touch."
    }
  ];

  return (
    <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
      <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
        <img src={profileImage} className="rounded-lg w-96" alt="Profile" />
      </div>
      <div className="font-general-regular w-full sm:w-3/4 text-left">
        {aboutMe.map((bio) => (
          <p
            className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            key={bio.id}
          >
            {bio.bio}
          </p>
        ))}
      </div>
      
    </div>
  );
};

export default AboutMeCustom;

