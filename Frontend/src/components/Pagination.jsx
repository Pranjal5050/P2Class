import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Pagination = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 5;

  return (

    <div className="flex justify-center items-center gap-3 py-16 flex-wrap">

      {/* Previous */}

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-xl
          border
          border-gray-300
          disabled:opacity-40
          hover:bg-[#041d63]
          hover:text-white
          transition
        "
      >

        <ChevronLeft size={18} />

        Previous

      </button>

      {/* Page Numbers */}

      {[...Array(totalPages)].map((_, index) => (

        <button
          key={index}

          onClick={() => setCurrentPage(index + 1)}

          className={`
            w-11
            h-11
            rounded-xl
            font-semibold
            transition
            ${currentPage === index + 1
              ? "bg-[#041d63] text-white"
              : "bg-white border border-gray-300 hover:bg-[#041d63] hover:text-white"}
          `}
        >

          {index + 1}

        </button>

      ))}

      {/* Next */}

      <button
        disabled={currentPage === totalPages}

        onClick={() => setCurrentPage(currentPage + 1)}

        className="
          flex
          items-center
          gap-2
          px-4
          py-2
          rounded-xl
          border
          border-gray-300
          disabled:opacity-40
          hover:bg-[#041d63]
          hover:text-white
          transition
        "
      >

        Next

        <ChevronRight size={18} />

      </button>

    </div>

  );

};

export default Pagination;