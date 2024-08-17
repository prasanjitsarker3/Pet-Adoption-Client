import AboutHome from "@/Components/Pages/AboutHome";
import Banner from "@/Components/Pages/Banner";
import ContactBanner from "@/Components/Pages/ContactBanner";
import PetAbout from "@/Components/Pages/PetAbout";
import PetInfo from "@/Components/Pages/PetInfo";
import PetTips from "@/Components/Pages/PetTips";
import SuccessStory from "@/Components/Pages/SuccessStory";
import BannerNew from "@/Components/Pages/UpdatePage/BannerNew";
import Discount from "@/Components/Pages/UpdatePage/Discount";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      {/* <Banner /> */}
      <BannerNew />
      {/* <AboutHome /> */}
      <PetInfo />
      <PetTips />
      <Discount />
      <PetAbout />
      <SuccessStory />
      <ContactBanner />
    </div>
  );
};

export default HomePage;
