import { memo } from "react";

import { NavbarDataItem } from "../Navbar.type";

import styles from "./NavbarItem.module.scss";
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router";

interface NavbarItemProps {
  item: NavbarDataItem;
}

const NavbarItem = ({ item }: NavbarItemProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = `/${item.url}` === location.pathname;

  return (
    <article
      className={clsx(styles.item, {
        [styles.active]: isActive,
      })}
      onClick={() => navigate(item.url)}
    >
      <div className={styles.icon}>{item.icon}</div>

      <p className={styles.title}>{item.title}</p>
    </article>
  );
};

export default memo(NavbarItem);
