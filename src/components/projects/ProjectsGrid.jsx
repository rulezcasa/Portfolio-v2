import ProjectSingle from './ProjectSingle';
import cross_lingual from '../../images/cross-lingual.png';
import rs from '../../images/RS.png';
import dqn from '../../images/DQN.png';
import ros from '../../images/ROS.png';
import mas from '../../images/mass_attendance.png';
import erp from '../../images/erp.png';
import cs from '../../images/color_sort.png';
import travel from '../../images/travellio_home.png';
import chat from '../../images/chatbot.png';
import yolo_vit from '../../images/yolo_vit.png';
import brats from '../../images/brats.png';
import gelo from '../../images/gelocation.png';
import tis from '../../images/TIS.png';
import librosa from '../../images/librosa.png';
import homeaut from '../../images/homeaut.png';

const dummyProjects = [
	{
		id: 1,
		title: 'AT-DQN : Attention Based Exploration in Deep RL',
		category: 'Research @ CSIR 4PI',
		image: dqn,
		url:'https://github.com/rulezcasa/AT-DQN',
		area : 'Deep RL'
	},
	{
		id: 2,
		title: '3D Graph Attention Networks for High-Fidelity Pediatric Glioma Segmentation',
		category: 'Research @ Vellore Institute of Technology',
		image: brats,
		url:'https://arxiv.org/abs/2412.06743',
		area : 'Deep RL'
	},
	{
		id: 3,
		title: 'Cross Lingual Transfer Analysis of Low Resource African Languages',
		category: 'Research @ DSSG Lab, University of Pretoria',
		image: cross_lingual,
		url:'https://arxiv.org/abs/2409.10965',
		area: 'Low Resource NLP, ML'
	},
	{
		id: 4,
		title: 'Hybrid Recommendation System for Academic Collaboration',
		category: 'Research @ Vellore Institute of Technology',
		image: rs,
		url: 'https://github.com/rulezcasa/Recommendation_academia',
		area: 'Socio-NLP, MERN Stack'
	},
	{
		id: 5,
		title: 'ROS Gazebo Based Gesture Controlled Robotic Arm',
		category: 'Development @ Vellore Institute of Technology',
		image: ros,
		url:'https://github.com/rulezcasa/Gesture-Robot-ROS',
		area : 'ROS, Gazbo Simulation'
	},
	{
		id: 5,
		title: 'Face Recognition Based Mass Attendance System',
		category: 'Development @ Liquid Neurons Private Limited',
		image: mas,
		url:'',
		area : 'Computer Vision, Full-Stack'
	},
	{
		id: 6,
		title: 'Enterprise Resource Planning System for Schools',
		category: 'Development @ Liquid Neurons Private Limited',
		image: erp,
		url:'',
		area : 'SQL, MERN Stack, Configuring Linux'
	},
	{
		id: 7,
		title: 'Yolo-HSV based Color Sorting Robotic Arm',
		category: 'Research @ Vellore Institute of Technology ',
		image: cs,
		url:'https://github.com/rulezcasa/color-sorting-bot',
		area : 'Computer Vision, Webot Simulation'
	},
	{
		id: 8,
		title: 'Building a Startup - Travellio',
		category: 'Founding Member @ Vialux Nomadic Travellio Solutions Pvt. Ltd ',
		image: travel,
		url:'https://travellio.world/',
		area : 'Scrum planning, Management and Hiring'
	},
	{
		id: 9,
		title: 'VITBOT : Conversational Chatbot for VIT University support',
		category: 'Development @ Vellore Institute of Technology ',
		image: chat,
		url:'https://github.com/rulezcasa/VITBOT',
		area : 'NLP, ML, LoRA tuning'
	},
	{
		id: 10,
		title: 'ParkTag : YOLO- Vision Transformer Integrated UAV Parking Detection.',
		category: 'Research @ Vellore Institute of Technology ',
		image: yolo_vit,
		url:'',
		area : 'Computer Vision, Matlab UAV Simulation'
	},
	{
		id: 11,
		title: 'Gelocation and Face Based Police Personnel Tracker',
		category: 'Development @ Kavach National Level Cybersecurity Hackathon',
		image: gelo,
		url:'https://github.com/rulezcasa/Suraksha',
		area : 'Computer Vision, MERN'
	},
	{
		id: 12,
		title: 'TIS : Customer Support and Ticketing System',
		category: 'Development @ Ethnus Private Limited',
		image: tis,
		url:'https://github.com/rulezcasa/MERN_TICKETS',
		area : 'MERN, UI/UX'
	},
	{
		id: 13,
		title: 'GenreTag : Librosa Frequency enabled Audio Genre Classification',
		category: 'Personal Project',
		image: librosa,
		url:'https://github.com/rulezcasa/Genre_classification',
		area : 'DL, ML'
	},
	{
		id: 14,
		title: 'Gesuter Controlled Home Automation Tool',
		category: 'Research @ Vellore Institute of Technology',
		image: homeaut,
		url:'https://github.com/rulezcasa/Gesture-based-home-automation',
		area : 'IoT, Computer Vision'
	},
	// Add more dummy projects as needed
];

const ProjectsGrid = () => {
  const handleClick = (url) => {
    if (url) {
      alert("Proprietary code");
      // No navigation or any other action after alert
    }
  };

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects and Publications
        </p>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {dummyProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleClick(project.url)}
            style={{ cursor: project.url ? "pointer" : "default" }}
          >
            <ProjectSingle
              title={project.title}
              category={project.category}
              image={project.image}
              externalLink={project.url}
              area={project.area}
            />
          </div>
        ))}
      </div>
    </section>
  );
};


export default ProjectsGrid;
