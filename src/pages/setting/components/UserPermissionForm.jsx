import React from "react";
import ToggleSetting from "./ToggleSetting";

const UserPermissionForm = () => {
  return (
    <div className="w-[70%]">
      <ToggleSetting
        title="Show Notifications"
        description="Allow to receive push notifications for user activities and logs count"
      />

      <ToggleSetting
        title="2 Factor Authentication"
        description="Allow to 2 Factor Authentication for user activities and logs count"
      />

      <ToggleSetting title="Offline Mode Enabled:" />
      <div className="mt-3">
        <h4 className="text-lg font-black text-black">Audio Settings</h4>
      </div>

      <ToggleSetting title="Background Music" />

      <ToggleSetting title="Reaction Clip" />
    </div>
  );
};

export default UserPermissionForm;
