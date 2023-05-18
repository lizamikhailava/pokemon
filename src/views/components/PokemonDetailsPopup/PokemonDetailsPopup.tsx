import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import classes from "./PokemonDetailsPopup.module.scss";
import { Close } from "../../../assets/icons/Close";
import { IModalData } from "../../../interfaces";

export const PokemonDetailsPopup = ({
  handleClose,
  open,
  pokemonDetails
}: IModalData) => {
  const {
    name,
    abilities,
    base_experience,
    is_default,
    forms,
    height,
    order,
    weight,
    species,
    sprites
  } = pokemonDetails || {};

  return (
    <Dialog
      classes={{ paper: classes.modalContainer }}
      open={open}
      onClose={handleClose}
    >
      <DialogTitle className={classes.modalTitle}>
        Pokemon Details
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent className={classes.modalBody}>
        <div className={classes.detailsColumn}>
          <img src={sprites?.front_default} alt={name} />
          <p>
            Name: <span>{name}</span>
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
        </div>
        <div className={classes.detailsColumn}>
          <p>
            Order: <span>{order}</span>
          </p>
          <p>
            Species: <span>{species?.name}</span>
          </p>
          <p>
            Default for this species: <span>{is_default ? "Yes" : "No"}</span>
          </p>
          <div>
            <p>Abilities:</p>
            <ul>
              {abilities?.map(item => (
                <li key={item?.ability?.url}>{item?.ability?.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <p>Forms:</p>
            <ul>
              {forms?.map(form => (
                  <li key={form?.url}>{form?.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
