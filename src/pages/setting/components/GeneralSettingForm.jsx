import React, { useState } from "react";
import Input from "../../../components/Input";

const GeneralSettingForm = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full">
      <form>
        {/* Business Name */}
        <div className="mb-5">
          <Input
            label="Business Name"
            type="text"
            placeholder="e.g., Glow Beauty Salon"
            id="business-name"
          />
        </div>

        {/* Owner Name */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="w-full sm:w-[48%]">
            <Input
              label="Owner's First Name"
              type="text"
              placeholder="Enter first name"
              id="owner-first-name"
            />
          </div>
          <div className="w-full sm:w-[48%]">
            <Input
              label="Owner's Last Name"
              type="text"
              placeholder="Enter last name"
              id="owner-last-name"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="w-full sm:w-[48%]">
            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              id="email"
            />
          </div>
          <div className="w-full sm:w-[48%]">
            <Input
              label="Phone Number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="XX-XXX-XXXX"
              countryCodes={["+1", "+44", "+92"]}
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-wrap gap-3 mb-5">
          <div className="w-full sm:w-[48%]">
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              id="password"
            />
          </div>
          <div className="w-full sm:w-[48%]">
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              id="confirm-password"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full sm:w-auto sm:min-w-[200px] bg-[#EBA91D] shadow-[inset_0px_4px_4px_0px_#FFFFFF40]
              text-white px-6 py-3 rounded-[50px] text-sm font-extrabold
              hover:bg-[#d99a1a] transition-colors"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralSettingForm;
