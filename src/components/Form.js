import { useState } from "react";
import { UiButton } from "./ui/UiButton";
import { UiFile } from "./ui/UiFiles/UiFile";
import { UiGroupCheckbox } from "./ui/UiCheckbox/UiGroupCheckbox";
import { UiGRoupRadio } from "./ui/UiRadio/UiGroupRadio";
import { UiHeader } from "./ui/UiHeader";
import { UiInput } from "./ui/UiInput";
import { UiSelect } from "./ui/UiSelect";
import { UiTextArea } from "./ui/UiTextArea";
import { useSearchParams } from "react-router-dom";

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

  let [searchParams, setSearchParams] = useSearchParams();

  const [form, setForm] = useState({
    search: searchParams.get("search") ?? "",
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

  const handleSearch = () => {
    setSearchParams({ search : form.search });
  };

  

  return (
    <div>
      <div className="flex w-48 flex-col fixed inset-y-0 right-0">
          <div className="flex-1 flex flex-col min-h-0 border-l border-gray-200 bg-white">
            <div className="bg-auto bg-blue-800 flex-1 flex flex-col p-4 overflow-auto">
              <div className="text-white text-xs font-bold">
                <pre>
                  <code>{JSON.stringify(form, undefined, 1)}</code>
                </pre>
              </div>
            </div>
          </div>
      </div>
      <h3 className="text-xl leading-6 font-medium text-gray-900 text-center mb-1">
        Form
      </h3>
      <form className="space-y-6">
        <UiHeader
          title="Cerca"
          subtitle="Cerca..."
        />
        <div className="mt-4 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <UiInput
            id="cerca"
            label="Cerca"
            value={form.search}
            onChange={(event) => {
              const val = event.target.value;
              setForm({ ...form, search: val });
            }}
          />
        </div>

        <div className="pt-5">
          <div className="flex justify-end gap-4">
            <UiButton title="Valid Form" onClick={handleValidForm} solid />
            <UiButton title="Cerca" onClick={handleSearch} />
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
    </div>
  );
};

export default Form