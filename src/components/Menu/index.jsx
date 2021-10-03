import { Button, makeStyles, Menu, MenuItem, Grid } from "@material-ui/core";
import { useState } from "react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { Link } from "react-router-dom";
const Menupage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const useStyles = makeStyles((theme) => ({
    list: {
      margin: "0",
      justifyContent: "space-around",
      alignItems: "center",
      height: "100%",
      display: "flex",
      flexWrap: "wrap",

      listStyleType: "none",
    },
    items: {
      color: "blue",
      fontSize: "10px",
      borderRight: "1px solid blue",
      height: "100%",
      width: "32%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    itemsLast: {
      color: "blue",
      fontSize: "10px",

      height: "100%",
      width: "32%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    menu: {
      backgroundColor: "blue",
    },
    button: {
      color: "white",
      fontSize: "7.5px",
      padding: "4px",
    },
    link: {
      fontSize: "12px",
      textDecoration: "none",
      "&:visited": {
        color: "blue",
      },
      "&:hover": {
        textDecoration: "underline",
      },
    },
    menulist: {},
  }));
  const classe = useStyles();
  return (
    <>
      <Grid container direction="row">
        <Grid item xs={3}>
          <div className={classe.menu}>
            <Button
              startIcon={<GiHamburgerMenu />}
              className={classe.button}
              id="button-menu"
              onClick={handleClick}
            >
              Categorias
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 120 }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link className={classe.link} to="/celulares">
                  Celulares
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classe.link} to="/notebooks">
                  NoteBooks
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classe.link} to="/ipads">
                  Ipad
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link className={classe.link} to="/smartwatchs">
                  SmartWatchs
                </Link>
              </MenuItem>
            </Menu>
          </div>
        </Grid>
        <Grid item xs={9}>
          <Grid xs={12} className={classe.list}>
            <li className={classe.items}>
              <Link className={classe.link} to="/celulares">
                Celulares
              </Link>
            </li>
            <li className={classe.items}>
              <Link className={classe.link} to="/ipads">
                Ipad
              </Link>
            </li>
            <li className={classe.itemsLast}>
              <Link className={classe.link} to="/notebooks">
                NoteBooks
              </Link>
            </li>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Menupage;
