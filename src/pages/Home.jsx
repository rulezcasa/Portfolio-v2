import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import AffiliationGrid from '../components/Affiliations/affiliation';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';
import Button from '../components/reusable/Button';
import EndorsementGrid from '../components/endorsements/endorsement';
import AboutMeCustom from '../components/about/aboutcustom';

const Home = () => {
	return (
		<div className="container mx-auto">
			<AppBanner></AppBanner>
			<AboutMeCustom></AboutMeCustom>
			<AffiliationGrid></AffiliationGrid>
			<EndorsementGrid></EndorsementGrid>
		</div>
	);
};

export default Home;
