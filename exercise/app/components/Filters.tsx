import React from "react";
import { Select } from "@chakra-ui/react";

const Filters = () => {
  return (
    <div className="w-full flex items-center gap-x-5 p-5 border-b border-gray-500">
      <div>Filters</div>
      <div>
        <Select
          placeholder="Name"
          size="sm"
          bg="#171717"
          color="gray"
          borderColor="gray"
          borderRadius="md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div>
        <Select
          placeholder="Verification Status"
          size="sm"
          bg="#171717"
          color="gray"
          borderColor="gray"
          borderRadius="md"
        >
          <option value="option1">Pending</option>
          <option value="option2">Verified</option>
          <option value="option3">Unverified</option>
        </Select>
      </div>
      <div>
        <Select
          placeholder="Email Address"
          size="sm"
          bg="#171717"
          color="gray"
          borderColor="gray"
          borderRadius="md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div>
        <Select
          placeholder="Mobile Number"
          size="sm"
          bg="#171717"
          color="gray"
          borderColor="gray"
          borderRadius="md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div>
        <Select
          placeholder="Domain"
          size="sm"
          bg="#171717"
          color="gray"
          borderColor="gray"
          borderRadius="md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div>
        <Select
          placeholder="Date Registered"
          size="sm"
          bg="#171717"
          color="gray"
          borderColor="gray"
          borderRadius="md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div>
        <Select
          placeholder="Status"
          size="sm"
          bg="#171717"
          color="gray"
          borderColor="gray"
          borderRadius="md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
      <div>
        <Select
          placeholder="Date and Time Last Active"
          size="sm"
          bg="#171717"
          color="gray"
          borderColor="gray"
          borderRadius="md"
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
