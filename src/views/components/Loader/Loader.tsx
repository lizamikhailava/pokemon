import { CircularProgress } from "@mui/material";
import { ILoader } from "../../../interfaces";
import classes from "./Loader.module.scss";

export const Loader = ({ component, data, error, isLoading }: ILoader) => (
  <>
    {isLoading && !error && <CircularProgress />}
    {!isLoading && !error && !data?.length && (
      <p className={classes.noDataMessage}>No data</p>
    )}
    {!isLoading && error && (
      <p className={classes.noDataMessage}>
        Sorry, an error has occurred. <br /> Please, try again later
      </p>
    )}
    {!isLoading && !error && data && component}
  </>
);
