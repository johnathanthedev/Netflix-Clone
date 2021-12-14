import Browse from "../components/views/user/Browse";
import Homepage from "../components/views/Homepage";

export const routes = [
  {
    path: "/",
    component: <Homepage />,
  },
];

export const protectedRoutes = [
  {
    path: "/browse",
    component: <Browse />,
  },
];
