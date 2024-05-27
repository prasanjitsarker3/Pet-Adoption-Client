import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";

export const adminRoutes = (role: any) => {
  return [
    {
      title: "Dashboard",
      path: `${role}`,
      icon: DashboardIcon,
    },
    {
      title: "Pet Management",
      path: `${role}/pets`,
      icon: PetsIcon,
    },
    {
      title: "User Management",
      path: `${role}/users`,
      icon: PersonIcon,
    },
    {
      title: "Request Pet",
      path: `${role}/request`,
      icon: PetsIcon,
    },
  ];
};
