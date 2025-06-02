import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    "hover:cursor-pointer flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary && !outline,
      "border-gray-500 bg-gray-500 text-white": secondary && !outline,
      "border-green-500 bg-green-500 text-white": success && !outline,
      "border-yellow-500 bg-yellow-500 text-white": warning && !outline,
      "border-red-500 bg-red-500 text-white": danger && !outline,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-900": outline && success,
      "text-yellow-400": outline && warning,
      "text-red-900": outline && danger,
    },
    rest.className
  );

  return (
    <>
      <button {...rest} className={classes}>
        {children}
      </button>
    </>
  );
}

export default Button;

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true!"
      );
    }
  },
};
