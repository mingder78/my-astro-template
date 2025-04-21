import { useState } from 'react';
import { Switch } from '@headlessui/react';

export default function Form() {
  const [enabled, setEnabled] = useState(true);

  return (
    <form action="/notification-settings" method="post">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        name="notifications"
        className={`${
          enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <button className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">Submit</button>
    </form>
  );
}