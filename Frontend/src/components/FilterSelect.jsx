import React from "react";

const FilterSelect = ({
    label,
    options,
}) => {

    return (

        <div className="flex flex-col gap-2">

            <label
                className="
                text-sm
                font-semibold
                text-[#041d63]
            "
            >

                {label}

            </label>

            <select
                className="
                h-12
                rounded-xl
                border
                border-gray-300
                px-4
                outline-none
                focus:border-[#041d63]
                transition
            "
            >

                {options.map((option, index) => (

                    <option
                        key={index}
                    >

                        {option}

                    </option>

                ))}

            </select>

        </div>

    )

}

export default FilterSelect;