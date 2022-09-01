export const UiButton = ({ title, onClick, solid }) => {
  let classes = "py-2 px-4 border rounded-md text-sm font-medium";

  let noSolidClasses =
    "bg-white border-gray-300 shadow-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500";
  let solidClasses =
    "bg-indigo-600 hover:bg-indigo-700 ml-3 inline-flex justify-center border-transparent shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ";

  if (solid) {
    classes = `${classes} ${solidClasses}`;
  } else {
    classes = `${classes} ${noSolidClasses}`;
  }

  return (
    <div>
      <button type="button" onClick={onClick} className={classes}>
        {title}
      </button>
    </div>
  );
};
