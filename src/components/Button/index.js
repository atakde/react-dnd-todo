const Button = (props) => {
  const { children, className, disabled, onClick, type, ...rest } = props;

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
