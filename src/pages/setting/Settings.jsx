import React, { useState } from "react";
import SettingsTabs from "./components/SettingsTab";
import GeneralSettingsForm from "./components/GeneralSettingForm";
import UserPermissionsForm from "./components/UserPermissionForm";

const Settings = () => {
  const tabs = ["General Settings", "System Settings"];
  const [activeTab, setActiveTab] = useState("General Settings");

  const renderForm = () => {
    switch (activeTab) {
      case "General Settings":
        return <GeneralSettingsForm />;
      case "System Settings":
        return <UserPermissionsForm />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-[12px] border border-[#0000001A] p-5 w-full">
      <h1 className="text-[25px] font-bold text-black leading-[1]">Settings</h1>

      <div className="flex gap-3 items-center my-4 flex-wrap">
        {tabs.map((tab) => (
          <SettingsTabs
            key={tab}
            tabText={tab}
            selected={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      <div className="w-full">{renderForm()}</div>
    </div>
  );
};

export default Settings;
