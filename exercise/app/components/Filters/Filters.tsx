"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function NameFilters() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="bg-[#171717] h-7 !text-gray">
          Open <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0A1117] w-52 text-white">
        <div className="flex items-center px-3 py-2">
          <Input
            type="email"
            placeholder="Search Username"
            className="bg-transparent !h-8 w-full placeholder:text-white"
          />
          <Search className="ml-[-25px]" size={18} />
        </div>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          morbius
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Botmind88
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          KhemBot
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function VerificationStatusFilters() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function EmailAddressFilters() {
  return <div>Email Address Filters</div>;
}
export function MobileNumberFilters() {
  return <div>Mobile Number Filters</div>;
}

export function DomainFilters() {
  return <div>Domain Filters</div>;
}

export function DataRegisteredFilters() {
  return <div>Data Registered Filters</div>;
}

export function StatusFilters() {
  return <div>Status Filters</div>;
}

export function DateandTimeLastActiveFilters() {
  return <div>Date and Time Last Active Filters</div>;
}
