export default function Button({ children, textOnly, className, ...props }) {
  let cssCLasses = textOnly ? "text-button" : "button";
  cssCLasses += " " + className;
  return (
    <button {...props} className={cssCLasses}>
      {children}
    </button>
  );
}
