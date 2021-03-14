import styles from '../styles/TecsTextLayout.module.scss'

const TecsTextLayout = (props) => (
  <div className={"container " + styles.tecstext}>
    {props.children}
  </div>
);

export default TecsTextLayout;