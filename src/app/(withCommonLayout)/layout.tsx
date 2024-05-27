import Navbar from "@/Components/CommonSection/Navbar";
import Footer from "@/Components/Pages/Footer";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: "100%",
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default CommonLayout;
