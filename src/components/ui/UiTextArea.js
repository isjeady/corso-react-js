export const UiTextArea = ({ id, label, value, subtitle, onChange }) => {
  return (
    <div className="col-span-6">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <textarea
          id={id}
          name={id}
          type="text"
          rows={3}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};
