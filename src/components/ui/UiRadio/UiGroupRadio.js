import { UiRadio } from "./UiRadio";

export const UiGRoupRadio = ({ values, onChange, title, nameGroup }) => {
  return (
    <div className="mb-4">
      <fieldset>
        <legend className="text-base font-medium text-gray-900">{title}</legend>
        <div className="mt-4 space-y-4">
          {values.map((radio) => {
            return (
              <UiRadio
                id={radio.id}
                label={radio.label}
                description={radio.description}
                value={radio.value}
                name={nameGroup}
                onChange={onChange}
              />
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};
