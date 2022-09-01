import { useEffect, useState } from "react";
import { UiListFiles } from "./UiListFiles";
import { UiSelectFile } from "./UiSelectFile";

export const UiFile = ({ id, label, onAddFile }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    onAddFile(files);
  }, [files]);

  const handleFiles = (event) => {
    const fileList = event.target.files;
    setFiles([...files, ...Array.from(fileList)]);
  };

  const handleRemoveFile = (name) => {
    const newFiles = files.filter((file) => file.name !== name);
    setFiles(newFiles);
  };

  const visibleSelectFile = () => {
    return files && files.length > 0;
  };

  return (
    <div>
      <div className="sm:col-span-6">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      </div>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
        <div className="space-y-1 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {!visibleSelectFile() && (
            <UiSelectFile id={id} handleFiles={handleFiles} />
          )}

          {visibleSelectFile() && (
            <UiListFiles files={files} handleRemoveFile={handleRemoveFile} />
          )}
        </div>
      </div>
    </div>
  );
};
