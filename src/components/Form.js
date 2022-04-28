import { useState } from "react";
import { UiButton } from "./ui/UiButton";
import { UiFile } from "./ui/UiFiles/UiFile";
import { UiGroupCheckbox } from "./ui/UiCheckbox/UiGroupCheckbox";
import { UiGRoupRadio } from "./ui/UiRadio/UiGroupRadio";
import { UiHeader } from "./ui/UiHeader";
import { UiInput } from "./ui/UiInput";
import { UiSelect } from "./ui/UiSelect";
import { UiTextArea } from "./ui/UiTextArea";

const selectValues = [
  { id: 1, name: "Italia" },
  { id: 2, name: "Francia", default: true },
  { id: 3, name: "Germania" },
  { id: 4, name: "Spagna" }
];

const uiGroupCheckBoxValues = [
  {
    id: "comments",
    label: "Comments",
    value: 1,
    description: "Get notified when someones posts a comment on a posting."
  },
  {
    id: "candidates",
    label: "Candidates",
    value: 2,
    description: "Get notified when a candidate applies for a job."
  },
  {
    id: "offers",
    label: "Offers",
    value: 3,
    description: "Get notified when a candidate accepts or rejects an offer."
  }
];

const uiGroupRadioValues = [
  {
    label: "Everything",
    id: "everything",
    value: 1,
    description: "Get notified when someones posts a comment on a posting."
  },
  {
    label: "Same as email",
    id: "same",
    value: 2,
    description: "Get notified when a candidate applies for a job."
  },
  {
    label: " No push notifications",
    id: "np-push",
    value: 3,
    description: "Get notified when a candidate accepts or rejects an offer."
  }
];

const Form = () => {
  const defaultValue = selectValues.find((item) => item.default)
    ? selectValues.find((item) => item.default).id
    : 0;

  const [formError, setFormError] = useState({
    firstName: false,
    lastName: false,
    description: false,
    country: false,
    notificationsType: false,
    notificationsPush: false,
    files: false
  });

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    description: "",
    country: defaultValue,
    notificationsType: [],
    notificationsPush: null,
    files: null
  });

  const handleValidForm = () => {
    setFormError({
      ...formError,
      firstName: form.firstName === "",
      lastName: form.lastName === ""
    });
  };

  return (
    <div>
      <h3 className="text-xl leading-6 font-medium text-gray-900 text-center mb-1">
        Form
      </h3>
      <form className="space-y-6">
        <div className="pt-5">
          <div className="flex justify-end">
            <UiButton title="Valid Form" onClick={handleValidForm} solid />
          </div>
        </div>
        <UiHeader
          title="Profilo"
          subtitle="Queste informazioni verranno visualizzate pubblicamente, quindi fai attenzione a ciò che condividi."
        />
        <div className="mt-4 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <UiInput
            id="firstname"
            label="Firstname"
            value={form.firstName}
            onChange={(event) => {
              const val = event.target.value;
              setForm({ ...form, firstName: val });
            }}
            error={formError.firstName}
          />
          <UiInput
            id="lastname"
            label="Lastname"
            value={form.lastName}
            onChange={(event) => {
              const val = event.target.value;
              setForm({ ...form, lastName: val });
            }}
            error={formError.lastName}
          />
          <UiTextArea
            id="description"
            label="Description"
            value={form.description}
            subtitle="Scrivi alcune frasi su di te..."
            onChange={(event) => {
              const val = event.target.value;
              setForm({ ...form, description: val });
            }}
          />

          <UiSelect
            id="country"
            label="Country"
            values={selectValues}
            defaultValue={defaultValue}
            onChange={(event) => {
              const val = event.target.value;
              setForm({ ...form, country: parseInt(val, 0) });
            }}
          />
        </div>

        <UiHeader
          title="Notifications"
          subtitle="Ti faremo sempre sapere di cambiamenti importanti, ma sei tu a scegliere cos'altro vuoi sentire."
        />

        <div className="mt-4 py-4">
          <UiGroupCheckbox
            title="By Email"
            values={uiGroupCheckBoxValues}
            onChange={(selected) => {
              setForm({ ...form, notificationsType: selected });
            }}
          />
          <UiGRoupRadio
            nameGroup="push-notifications"
            title="Push Notifications"
            values={uiGroupRadioValues}
            onChange={(event) => {
              const val = event.target.value;
              setForm({ ...form, notificationsPush: parseInt(val, 0) });
            }}
          />
          <UiFile
            id="myfile"
            label="Add Photo"
            onAddFile={(files) => {
              setForm({ ...form, files: files });
            }}
          />
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <UiButton
              title="Cancel"
              onClick={() => {
                alert("Cancel");
              }}
            />
            <UiButton
              title="Save"
              onClick={() => {
                alert("Save");
                setFormError(!formError);
              }}
              solid
            />
          </div>
        </div>
      </form>
      <div className="my-4 bg-blue-800 text-white font-bold text-sm p-4 rounded-md shadow-md">
        <pre>
          <code>{JSON.stringify(form, undefined, 2)}</code>
        </pre>
      </div>
    </div>
  );
};

export default Form