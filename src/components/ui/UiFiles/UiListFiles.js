export const UiListFiles = ({ files, handleRemoveFile }) => {
  return (
    <div>
      {files && files.length > 0 && (
        <ul className="list-disc font-bold">
          {files.map((file, i) => (
            <li
              key={file.name}
              className="items-center text-xs align-middle inline-flex gap-4"
            >
              {file.name}
              <button
                className="p-1 bg-indigo-500 text-white rounded-md"
                onClick={() => handleRemoveFile(file.name)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
