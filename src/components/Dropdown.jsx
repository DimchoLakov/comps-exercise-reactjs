import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divElRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divElRef.current) {
        return;
      }

      if (!divElRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderredOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer"
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div ref={divElRef} className="w-48 relative">
        <Panel
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          {value?.label || "Select..."}
          <GoChevronDown className="text-lg" />
        </Panel>
        {isOpen && (
          <Panel className="absolute top-full">{renderredOptions}</Panel>
        )}
      </div>
    </>
  );
}

export default Dropdown;
