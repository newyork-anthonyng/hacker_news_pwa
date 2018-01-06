import { h } from "preact";
import { PropTypes } from "preact-compat";
import styles from "./styles";

const LinkItem = ({ index, main, footer }) => (
  <div style={styles.container}>
    <span style={styles.indexNumber}>{index}</span>

    <div>
      <div style={styles.main}>{main}</div>

      <div style={styles.footer}>{footer}</div>
    </div>
  </div>
);

LinkItem.propTypes = {
  index: PropTypes.number.isRequired,
  main: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired
};

export default LinkItem;
