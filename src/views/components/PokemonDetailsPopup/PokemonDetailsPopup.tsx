import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import classes from "./PokemonDetailsPopup.module.scss";
import { Close } from "./icons/Close";
import { modalDataSelector } from "../../../redux/selectors/modalDataSelector";
import { IModalData } from "../../../interfaces";
import { CLOSE_POPUP } from "../../../redux/actions";

export const PokemonDetailsPopup = () => {
  const dispatch = useDispatch();
  const modalData: IModalData = useSelector(modalDataSelector);
  const {
    pokemonDetails: {
      name,
      base_experience,
      height,
      order,
      weight,
      species,
      sprites
    },
    open
  } = modalData;

  const handleClose = () => {
    dispatch({
      type: CLOSE_POPUP
    });
  };

  return (
    <Dialog
      classes={{ paper: classes.modalContainer }}
      open={open}
      onClose={() => handleClose()}
    >
      <DialogTitle className={classes.modalTitle}>
        Pokemon Details
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => handleClose()}
          aria-label="close"
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.modalBody}>
        <img src={sprites?.front_default} alt={name} />
        <p>
          Name: <span>{name}</span>
        </p>
        <p>
          Species: <span>{species?.name}</span>
        </p>
        <p>
          Base experience: <span>{base_experience}</span>
        </p>
        <p>
          Height: <span>{height}</span>
        </p>
        <p>
          Weight: <span>{weight}</span>
        </p>
        <p>
          Order: <span>{order}</span>
        </p>
      </DialogContent>
    </Dialog>
  );
};
