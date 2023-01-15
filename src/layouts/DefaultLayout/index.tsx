import { NavLink, Outlet } from "react-router-dom";
import styles from "./styles.module.css";

export function DefaultLayout() {
  return (
    <div className={styles.Container}>
      <nav className="nav">
        <NavLink to={"/"} title="Imagens">
          Imagens
        </NavLink>
        <NavLink to={"/ask"} title="Perguntas">
          Perguntas
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
