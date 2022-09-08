export const UiInput = ({ id, label, value, onChange, error }) => {
  let classes =
    "w-full text-sm rounded-md h-10 p-2 focus:ring-indigo-500 focus:border-indigo-500";

  let errorColor = "border-2 border-red-500 ";
  let defultColor = "border border-gray-300 ";

  if (error) {
    classes = `${classes} ${errorColor}`;
  } else {
    classes = `${classes} ${defultColor}`;
  }

  return (
    <div className="col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        className={classes}
      />
    </div>
  );
};
