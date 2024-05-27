import { adminRoutes } from "../DashboardRoutes/admin.routes";
import { managerRoutes } from "../DashboardRoutes/manager.routes";
import { userRoutes } from "../DashboardRoutes/user.routes";
import { DrawerItem, USER_ROLE, UserRole } from "../Types/dashboard";
import HomeIcon from "@mui/icons-material/Home";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(...adminRoutes(role));
      break;
    case USER_ROLE.MANEGER:
      roleMenus.push(...managerRoutes(role));
      break;
    case USER_ROLE.USER:
      roleMenus.push(...userRoutes(role));
      break;

    default:
      break;
  }
  return [...roleMenus];
};
