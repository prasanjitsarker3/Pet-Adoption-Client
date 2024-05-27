import Banner from "@/Components/Pages/Banner";
import PetAbout from "@/Components/Pages/PetAbout";
import PetInfo from "@/Components/Pages/PetInfo";
import PetTips from "@/Components/Pages/PetTips";
import SuccessStory from "@/Components/Pages/SuccessStory";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <PetInfo />
      <PetTips />
      <PetAbout />
      <SuccessStory />
    </div>
  );
};

export default HomePage;
