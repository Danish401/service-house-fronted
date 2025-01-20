import React from "react";
import BusinessList from "./BusinessList";

function BusinessListPage() {
  return (
    <div className="min-h-screen bg-[#1f2937] py-12"> {/* Add padding to the top and bottom */}
      {/* Show all employees */}
      <BusinessList className="mt-12 md:mt-16" showAll={true} />
    </div>
  );
}

export default BusinessListPage;
