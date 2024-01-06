// import "./Alert.module.css";
import css from "./Alert.module.css";
import clsx from "clsx";
// console.log(css)
// export const Alert = ({ children }) => {
//   return <p className="alert">{children}</p>;
// };

// export const Alert = ({ variant, children }) => {
//     const classNames = ["alert", variant];
  
//     return <p className={classNames.join(" ")}>{children}</p>;
//   };

export const Alert = ({ variant, children }) => {
    return <p className={css[variant]}>{children}</p>;
  };