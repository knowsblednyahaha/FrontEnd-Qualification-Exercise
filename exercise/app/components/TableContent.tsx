import React, { Suspense } from "react";
import { GetServerSideProps } from "next";
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
        <TableHeader className="overflow-x-auto !border-b !border-[gray]">
          <TableRow className="hover:bg-transparent ">
            <TableHead className="w-[150px] text-sm">Name</TableHead>
            <TableHead className="w-[160px]">Verification Status</TableHead>
            <TableHead className="w-[160px]">Balance</TableHead>
            <TableHead className="w-[170px]">Email Address</TableHead>
            <TableHead className="w-[200px]">Mobile Number</TableHead>
            <TableHead className="w-[170px]">Domain</TableHead>
            <TableHead className="w-[170px]">Date Registered</TableHead>
            <TableHead className="w-[170px]">Status</TableHead>
            <TableHead className="w-[300px]">
              Date and Time Last Active
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-x-auto">
          <TableRow className="hover:bg-transparent border-b border-gray">
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

export const getServerSideProps: GetServerSideProps = async () => {
  const headers: { [key: string]: string } = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjakp0ZFdQaGhkUHlYU25SdSIsInJvbGUiOiJBRE1JTiIsImp0aSI6ImE4MjFlYjM1Y2NmZjI0NjAwNjI0ZGFjYSIsImlwQWRkcmVzcyI6IjE0My40NC4xOTIuMTA3IiwibG9jYXRpb24iOiJDYWdheWFuIGRlIE9ybywgUGhpbGlwcGluZXMiLCJwbGF0Zm9ybSI6IjEydXd1UkNjWXAxY1dpWHpQWSIsImlhcCI6IjIwMjQtMDQtMjRUMDA6MTc6MjAuMDI4KzAwOjAwIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTcxMzkxNzg3MCwiZXhwIjoxNzc2OTg5ODcwfQ.UfB36fjFrYvg8TV9VYEtNfG6CzRlz9pnjKnqfru-1Hc",
  };

  const graphql = JSON.stringify({
    query: `
      query GetMembers($first: Int, $after: Cursor, $filter: MemberFilterInput) {
        members(first: $first, after: $after, filter: $filter) {
          edges {
            node {
              id
              ... on Member {
                name
                verificationStatus
                emailAddress
                mobileNumber
                domain
                dateTimeCreated
                dateTimeLastActive
                status
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
    variables: {
      first: 10, // Example: Fetch the first 10 members
      // Other variables if needed
    },
  });

  try {
    const requestOptions = {
      method: "POST",
      headers: headers,
      body: graphql,
    };

    const response = await fetch(
      "https://report.development.opexa.io/graphql",
      requestOptions
    );
    const data = await response.json();

    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        data: null, // Pass null if there's an error
        error: "Failed to fetch data", // Optionally pass error message
      },
    };
  }
};
