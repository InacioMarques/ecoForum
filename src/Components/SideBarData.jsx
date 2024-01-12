import {
  MdHome,
  MdContactSupport,
  MdLogin,
  MdAccountCircle,
} from "react-icons/md";

const SideBarData = () => [
  {
    title: "Home",
    path: "/",
    icon: <MdHome size={24} />,
    cName: "side-text",
  },
  {
    title: "Contact Us",
    path: "/contactus",
    icon: <MdContactSupport size={24} />,
    cName: "side-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <MdLogin size={24} />,
    cName: "side-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: <MdAccountCircle size={24} />,
    cName: "side-text",
  },
];

export default SideBarData;
