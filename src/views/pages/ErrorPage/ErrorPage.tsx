import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import classes from "./ErrorPage.module.scss";
import { FullPageContainer } from "../../components/FullPageContainer/FullPageContainer";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <FullPageContainer>
      <div className={classes.errorPageContainer}>
        <p className={classes.errorCode}>404</p>
        <p className={classes.errorMessage}>
          Sorry, the content you’re looking for doesn’t exist. <br />
          Either it was removed, or you mistyped the link.
        </p>
        <Button
          className={classes.goToAction}
          onClick={() => navigate("/")}
          variant="contained"
        >
          Go to Main Page
        </Button>
      </div>
    </FullPageContainer>
  );
};
