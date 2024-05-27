import SideBarDashboard from "@/Components/SideBardDashboard/SideBarDashboard";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <SideBarDashboard>{children}</SideBarDashboard>;
};

export default DashboardLayout;
