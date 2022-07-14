import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import Garfish from "garfish";
import routes from "../routes";

const externalRoutes = routes.map((r) => r.menuItem);
const internalRoutes: MenuProps["items"] = [
  {
    label: "Linking",
    key: "/linking",
  },
  {
    label: "Transfer",
    key: "/transfer",
  },
];

const items = internalRoutes.concat(externalRoutes);

const Navigation = () => {
  const navigate = useNavigate();

  const onSelect = ({ key }: { key: string }) => {
    if (externalRoutes.some((r) => r?.key === key)) {
      Garfish.router.push({ path: key });
    } else {
      navigate(key);
    }
  };

  return <Menu mode="horizontal" items={items} onSelect={onSelect} />;
};

export default Navigation;
