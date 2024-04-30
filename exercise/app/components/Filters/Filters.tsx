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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export function NameFilters() {
  const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#171717] h-7 !border-[gray] !text-[gray]"
        >
          Name <ChevronDown size={18} />
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
          className="!text-[#FBBD2C]"
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          morbius
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="!text-[#FBBD2C]"
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Botmind88
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          className="!text-[#FBBD2C]"
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
        <Button
          variant="outline"
          className="bg-[#171717] h-7 !border-[gray] !text-[gray]"
        >
          Verification Status <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0A1117] w-52 text-white border-none">
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="top">Pending</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Verified</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">
            Unverified
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function EmailAddressFilters() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#171717] h-7 !border-[gray] !text-[gray]"
        >
          Email Address <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0A1117] w-60 text-white">
        <div className="flex items-center px-3 py-2">
          <Input
            type="email"
            placeholder="Search Email Address"
            className="bg-transparent !h-8 w-full placeholder:text-white"
          />
          <Search className="ml-[-25px]" size={18} />
        </div>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          morbius
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          Botmind88
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          KhemBot
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export function MobileNumberFilters() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#171717] h-7 !border-[gray] !text-[gray]"
        >
          Mobile Number <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0A1117] w-60 text-white">
        <div className="flex items-center px-3 py-2">
          <Input
            type="email"
            placeholder="Search Mobile Number"
            className="bg-transparent !h-8 w-full placeholder:text-white"
          />
          <Search className="ml-[-25px]" size={18} />
        </div>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          morbius
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          Botmind88
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          KhemBot
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DomainFilters() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#171717] h-7 !border-[gray] !text-[gray]"
        >
          Domain <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0A1117] w-54 text-white">
        <div className="flex items-center px-3 py-2">
          <Input
            type="email"
            placeholder="Search Domain"
            className="bg-transparent !h-8 w-full placeholder:text-white"
          />
          <Search className="ml-[-25px]" size={18} />
        </div>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          morbius
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          Botmind88
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem className="!text-[#FBBD2C]">
          KhemBot
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DataRegisteredFilters() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "bg-[#171717] h-7 !border-[gray] !text-[gray] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 bg-[#0A1117] w-54 text-white"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

export function StatusFilters() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="bg-[#171717] h-7 !border-[gray] !text-[gray]"
        >
          Status <ChevronDown size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0A1117] w-52 text-white border-none">
        <DropdownMenuRadioGroup>
          <DropdownMenuRadioItem value="top">Active</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">
            Blacklisted
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Disabled</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function DateandTimeLastActiveFilters({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "bg-[#171717] h-7 !border-[gray] !text-[gray] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-0 bg-[#0A1117] w-54 text-white"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
