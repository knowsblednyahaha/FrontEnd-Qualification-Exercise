import React, { Suspense } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Filters from "./Filters";

const TableContent = () => {
  return (
    <section className="w-full bg-[#0B1D26] table-auto border border-gray-500 rounded-xl">
      <Suspense>
        <Filters />
      </Suspense>
      <Table className="overflow-x-auto">
        <TableHeader className="overflow-x-auto">
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[150px] text-sm">Name</TableHead>
            <TableHead className="w-[160px]">Verification Status</TableHead>
            <TableHead className="w-[160px]">Balance</TableHead>
            <TableHead className="w-[170px]">Email Address</TableHead>
            <TableHead className="w-[170px]">Mobile Number</TableHead>
            <TableHead className="w-[170px]">Domain</TableHead>
            <TableHead className="w-[170px]">Date Registered</TableHead>
            <TableHead className="w-[170px]">Status</TableHead>
            <TableHead className="w-[300px]">
              Date and Time Last Active
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-x-auto">
          <TableRow className="hover:bg-transparent">
            <TableCell className="font-medium">Botmind23r23</TableCell>
            <TableCell>Verified</TableCell>
            <TableCell>39.00</TableCell>
            <TableCell>olivia@untitledui.com</TableCell>
            <TableCell>+63 (976) 003 517</TableCell>
            <TableCell>https://scaleforge.tech/</TableCell>
            <TableCell>2024 Apr 12</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>2024 Apr 12 08:30 PM</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Pagination className="p-5 justify-end">
        <PaginationContent className="!gap-0">
          <PaginationItem className="mr-5">
            <PaginationLink className="!w-full !p-3 border border-gray-500 ">
              10 Entries
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              className="border border-gray-500 rounded-r-none"
              href="#"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="border border-l-0 border-gray-500 rounded-l-none"
              href="#"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};

export default TableContent;
