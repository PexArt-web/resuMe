import SectionOne from "./components/sectionOne/SectionOne";
import SectionTwo from "./components/sectionTwo/SectionTwo";

const Profile = () => {
  return (
    <div className="bg-black md:flex">
      <SectionOne />
      <div className="h-auto w-2 bg-gray-500 mx-3 self-stretch hidden md:block"></div>
      <hr className="border-t border-gray-300 my-2 md:hidden" />
      
      <SectionTwo />
    </div>
  );
};

export default Profile;
