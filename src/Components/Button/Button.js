import PropTypes from "prop-types";
import s from "./Button.module.css";

export default function GoBackBtn({ backBtn }) {
  return (
    <button type="button" onClick={backBtn} className={s.btn}>
      Back to movies
    </button>
  );
}

GoBackBtn.propTypes = {
  backBtn: PropTypes.func,
};
