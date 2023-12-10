const Button = (props) => {
  return (
    <button type={props.type} className="button--1">
      {props.children}
    </button>
  );
};

export default Button;
