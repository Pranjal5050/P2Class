import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <section className="bg-gray-50 border-b">

      <div className="max-w-7xl mx-auto px-4 py-5">

        <div className="flex items-center gap-2 text-sm">

          <Link
            to="/"
            className="text-gray-500 hover:text-[#041d63] transition"
          >
            Home
          </Link>

          <ChevronRight
            size={16}
            className="text-gray-400"
          />

          <span className="font-semibold text-[#041d63]">
            Courses
          </span>

        </div>

      </div>

    </section>
  );
};

export default Breadcrumb;