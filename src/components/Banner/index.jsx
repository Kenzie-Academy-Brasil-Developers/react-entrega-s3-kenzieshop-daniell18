import { makeStyles } from "@material-ui/styles";

const Banner = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "black",
      height: "20vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: "100%",
      height: "100%",
    },
  }));
  const classe = useStyles();
  return (
    <>
      <div className={classe.root}>
        <img
          className={classe.img}
          src="https://cdn.discordapp.com/attachments/382951786333470721/894296514631983154/banner-primeira-compra-2.png"
          alt=""
        />
      </div>
    </>
  );
};
export default Banner;
