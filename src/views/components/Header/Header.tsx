import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          alt="logo"
          src={
            "https://www.freeiconspng.com/uploads/pikachu-png-transparent-0.png"
          }
        />
      </Link>
      <h1>Find your pokemon</h1>
    </header>
  );
};
