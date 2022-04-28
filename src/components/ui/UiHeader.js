export const UiHeader = ({ title, subtitle }) => {
  return (
    <div className="space-y-8 py-2 border-b border-gray-300">
      <div>
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};
