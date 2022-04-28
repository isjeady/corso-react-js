export const UiSelect = ({ id, label, values, onChange, defaultValue }) => {
  return (
    <div className="col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <select
          id={id}
          name={id}
          defaultValue={defaultValue}
          onChange={onChange}
        >
          {values.map((val, idx) => {
            return (
              <option key={idx} value={val.id}>
                {val.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
