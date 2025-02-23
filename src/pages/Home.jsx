import AppBanner from '../components/shared/AppBanner';
import AffiliationGrid from '../components/Affiliations/affiliation';
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
