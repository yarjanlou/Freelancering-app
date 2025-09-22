import { Field, Label, Switch } from "@headlessui/react";

function Toggle({ label, enabled, onChange }) {
  return (
    <Field>
      <div className="flex items-center gap-x-2">
        <Label className="cursor-pointer">{label}</Label>
        <Switch
          checked={enabled}
          onChange={onChange}
          className="group relative inline-flex h-5 w-10 items-center rounded-full bg-secondary-200 transition focus:outline-none data-[checked]:bg-primary-800"
        >
          <span className="inline-block h-3 w-3 -translate-x-1 transform rounded-full bg-secondary-0 transition group-data-[checked]:-translate-x-6" />
        </Switch>
      </div>
    </Field>
  );
}

export default Toggle;
