import IconButton from "../../components/user/IconButton";
import TopImageContainer from "../../components/user/TopImageContainer";
import { Company, Menu } from "../../constants";

const Home = () => {
  return (
    <div className="space-y-4">
      <TopImageContainer image={Company.banner} />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 ">
        <IconButton
          title={Menu[0].title}
          key={Menu[0].index}
          icon={Menu[0].icon}
          subtitle={Menu[0].subtitle}
          active={true}
          badge={false}
          badgeText={Menu[0].badge}
          badgeColor={Menu[0].badgeColor}
          link={Menu[0].link}
        />
        {Menu.slice(1, 6).map((item, index) => (
          <IconButton
            title={item.title}
            key={index}
            icon={item.icon}
            subtitle={item.subtitle}
            active={false}
            badge={item.badge}
            badgeColor={item.badgeColor}
            badgeText={item.badge}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
