import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Filters from "./Filters";

const TableContent = () => {
  return (
    <TableContainer
      className="w-full bg-[#0B1D26] table-auto border border-gray-500"
      overflowY="hidden"
      overflowX="auto"
      display="block"
      maxWidth="100%"
      whiteSpace="nowrap"
    >
      <Table variant="simple" className="w-full flex flex-col" size="md">
        <Filters />
        <Thead className="w-full">
          <Tr>
            <Th>Name</Th>
            <Th>Verification Status</Th>
            <Th>Balance</Th>
            <Th>Email Address</Th>
            <Th>Mobile Number</Th>
            <Th>Domain</Th>
            <Th>Date Registered</Th>
            <Th>Status</Th>
            <Th>Date and Time Last Active</Th>
          </Tr>
        </Thead>
        <Tbody className="w-full">
          <Tr>
            <Td>Botmind23r23</Td>
            <Td>Verified</Td>
            <Td>39.00</Td>
            <Td>olivia@untitledui.com</Td>
            <Td>+63 (976) 003 517</Td>
            <Td>https://scaleforge.tech/</Td>
            <Td>2024 Apr 12</Td>
            <Td>Active</Td>
            <Td>2024 Apr 12 08:30 PM</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr display="flex" alignItems="center" justifyContent="flex-end">
            <Th>
              {" "}
              <div>
                <Select
                  placeholder="10 Entries"
                  size="sm"
                  bg="#0B1D26"
                  color="white"
                  borderColor="white"
                  borderRadius="md"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </div>
            </Th>
            <Th>
              <ButtonGroup spacing={4}>
                <Button
                  colorScheme="#0B1D26"
                  variant="outline"
                  leftIcon={<ArrowLeft />}
                  size="sm"
                  color="white"
                >
                  Previous
                </Button>
                <Button
                  colorScheme="#0B1D26"
                  variant="outline"
                  rightIcon={<ArrowRight />}
                  size="sm"
                  color="white"
                >
                  Next
                </Button>
              </ButtonGroup>
            </Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableContent;
