import { Button, Grid, InputAdornment, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
import Homeicon from "../../assets/logo-kenzie-shop-100.png";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtersearch } from "../../store/modules/search/action";
import Cart from "../cart";
const Header = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#353AF5",
      height: "15vh",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      padding: "20px",
    },
    button: {
      height: "10px",
      textTransform: "none",
      padding: "10px",
      marginTop: "5px",
    },

    form: {
      display: "flex",
      flexDirection: "row",
      gap: "2px",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "500px",
      padding: "10px",
    },
    text: {
      backgroundColor: "white",
    },
    iconSearch: {
      backgroundColor: "rgb(53,58,245,0.5)",
      height: "35px",
      borderRadius: "0px",
      minWidth: "0px",
      display: "flex",
      alignItems: "center",
    },
    iconCart: {
      height: "30px",
    },
  }));
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const handleClick = () => {
    dispatch(filtersearch(name));
  };

  const classe = useStyles();
  return (
    <>
      <Grid className={classe.root} container>
        <Grid item>
          <Link to="/">
            <img className={classe.iconCart} src={Homeicon} alt="" />
          </Link>
        </Grid>
        <Grid className={classe.form} item>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              endAdornment: (
                <Button
                  onClick={() => handleClick()}
                  className={classe.iconSearch}
                >
                  <InputAdornment position="end">
                    <BsSearch />
                  </InputAdornment>
                </Button>
              ),
            }}
            fullWidth
            className={classe.text}
            color="secondary"
            type="text"
          />
        </Grid>
        <Grid>
          <Cart />
        </Grid>
      </Grid>
    </>
  );
};
export default Header;
