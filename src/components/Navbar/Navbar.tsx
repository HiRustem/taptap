import styles from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem/NavbarItem";
import { navbarList } from "./Navbar.data";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        {navbarList.map((item) => (
          <li key={item.url}>
            <NavbarItem item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
