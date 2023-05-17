import classes from "./FullPageContainer.module.scss";
import { IFullPageContainer } from "../../../interfaces";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const FullPageContainer = ({
  children,
  pageClassName
}: IFullPageContainer) => {
  return (
    <div className={pageClassName ? pageClassName : classes.fullPageContainer}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
