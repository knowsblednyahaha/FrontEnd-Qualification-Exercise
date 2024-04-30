import React from "react";
import {
  NameFilters,
  VerificationStatusFilters,
  EmailAddressFilters,
  MobileNumberFilters,
  DomainFilters,
  StatusFilters,
  DateandTimeLastActiveFilters,
  DataRegisteredFilters,
} from "./Filters/Filters";

const Filters = () => {
  return (
    <div className="w-full flex items-center gap-x-5 p-5 border-b border-gray-500">
      <h3>Filters</h3>

      <NameFilters />

      <VerificationStatusFilters />

      <EmailAddressFilters />

      <MobileNumberFilters />

      <DomainFilters />

      <DataRegisteredFilters />

      <StatusFilters />

      <DateandTimeLastActiveFilters />
    </div>
  );
};

export default Filters;
