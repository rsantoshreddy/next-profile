import { homeModel } from '../../static/content/modelData';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import Panel from '../../components/Panel/Panel';
import Testimonial from '../../components/Testimonial/Testimonial';
import Achivements from '../../components/Achivements/Achivements';
const Home = () => {
  const { heroBanner, panel, testimonial, achivements } = homeModel;
  return (
    <div>
      <HeroBanner {...heroBanner}></HeroBanner>
      <Panel {...panel}></Panel>
      <Testimonial {...testimonial}></Testimonial>
      <Achivements {...achivements}></Achivements>
    </div>
  );
};
export default Home;
