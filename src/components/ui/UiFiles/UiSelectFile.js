export const UiSelectFile = ({ id, handleFiles }) => {
  return (
    <div>
      <div className="flex text-sm text-gray-600">
        <label
          htmlFor={id}
          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
          <span>Upload a file</span>
          <input
            className="sr-only"
            type="file"
            id={id}
            name={id}
            onChange={handleFiles}
          />
        </label>
        <p className="pl-1">or drag and drop</p>
      </div>
      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
    </div>
  );
};
