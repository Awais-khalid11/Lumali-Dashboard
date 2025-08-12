const Input = ({
  label,
  type,
  value,
  id,
  placeholder,
  onChange,
  countryCodes = [],
}) => {
  const isTel = type === "tel";

  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-2 font-semibold text-gray-800">
        {label}
      </label>

      <div className="relative">
        {isTel && (
          <select
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-transparent border-none text-gray-700 text-sm"
            style={{ appearance: "none" }}
          >
            {countryCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        )}

        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`text-[#323232] border border-[#2525251A] py-3 px-4 rounded-[12px] 
            placeholder:text-[#252525] placeholder:opacity-50 w-full text-sm
            ${isTel ? "pl-[60px]" : ""}`}
        />
      </div>
    </div>
  );
};

export default Input;
