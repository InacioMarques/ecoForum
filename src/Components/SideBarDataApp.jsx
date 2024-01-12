import {
  MdClose,
  MdBookmarkBorder,
  MdLocalGroceryStore,
  MdAccountCircle,
} from "react-icons/md";

const SideBarDataApp = () => [
  {
     title: "Profile",
    path: "/ecoforum/profile",
    icon: <MdAccountCircle size={24} />,
    cName: "side-text",
    func: "profile",
  },
  {
    title: "Guardado",
    path: "/ecoforum/save",
    icon: <MdBookmarkBorder size={24} />,
    cName: "side-text",
    func: "guardado",
  },
  {
    title: "Loja",
    path: "/ecoforum/store",
    icon: <MdLocalGroceryStore size={24} />,
    cName: "side-text",
    func: "loja",
  },
];

export default SideBarDataApp;