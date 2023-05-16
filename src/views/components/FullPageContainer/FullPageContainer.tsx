import { IFullPageContainer } from "../../../interfaces";
import classes from "./FullPageContainer.module.scss";

export const FullPageContainer = ({
  children,
  pageClassName
}: IFullPageContainer) => {
  return (
    <div className={pageClassName ? pageClassName : classes.fullPageContainer}>
      {children}
    </div>
  );
};
