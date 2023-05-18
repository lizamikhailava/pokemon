import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../../../utils/menu";

export const Header = () => {
  return (
    <header data-testid="header">
      <div>
        <Link to="/" data-testid="img">
          <img alt="logo" src={"https://www.freeiconspng.com/uploads/pikachu-png-transparent-0.png"} />
        </Link>
        <h1>Find your pokemon</h1>
      </div>
      <nav>
        {MENU_ITEMS.map(({ id, label, url }) => (
          <Link key={id} to={url} data-testid={id}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
