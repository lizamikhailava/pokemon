import { CircularProgress } from "@mui/material";
import { IRequestStateManager } from "../../../interfaces";
import classes from "./RequestStateManager.module.scss";

export const RequestStateManager = ({ component, data, error, isLoading }: IRequestStateManager) => (
  <>
    {isLoading && !error && <CircularProgress className={classes.loader} />}
    {!isLoading && !error && !data?.length && (
      <p>No data</p>
    )}
    {!isLoading && error && (
      <p>
        Sorry, an error has occurred. <br /> Please, try again later
      </p>
    )}
    {!isLoading && !error && data && component}
  </>
);
