import { makeStyles } from "@material-ui/styles";
import { AiFillInstagram } from "@react-icons/all-files/ai/AiFillInstagram";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillFacebook } from "@react-icons/all-files/ai/AiFillFacebook";
import { RiCellphoneFill } from "@react-icons/all-files/ri/RiCellphoneFill";
import { AiFillMail } from "@react-icons/all-files/ai/AiFillMail";
import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { FaRegCopyright } from "@react-icons/all-files/fa/FaRegCopyright";
const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: "#1A56FF",
      height: "20vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      padding: "10px",
    },
    list: {
      listStyleType: "none",
      margin: "0px",
      padding: "0px",
      color: "white",
    },
    item: {
      display: "flex",
    },
    paragrafo: {
      margin: "0px",
      fontSize: "9.5px",
      padding: "0px",
    },
    txt: {
      display: "flex",
      alignItems: "center",
      gap: "5px",
      padding: "5px",
    },
  }));
  const classe = useStyles();
  return (
    <>
      <div className={classe.root}>
        <ul className={classe.list}>
          <li className={classe.item}>
            <AiFillInstagram />
            instagram
          </li>
          <li className={classe.item}>
            <AiFillFacebook />
            Facebook
          </li>
          <li className={classe.item}>
            <AiOutlineTwitter />
            Twitter
          </li>
        </ul>
        <h4 className={classe.txt}>
          <FaRegCopyright />
          <p className={classe.paragrafo}> direitos reversados</p>
        </h4>
        <ul className={classe.list}>
          <li className={classe.item}>
            <RiCellphoneFill />
            Telefone
          </li>
          <li className={classe.item}>
            <AiFillMail />
            Email
          </li>
          <li className={classe.item}>
            <AiFillHome />
            Endereço
          </li>
        </ul>
      </div>
    </>
  );
};
export default Footer;
