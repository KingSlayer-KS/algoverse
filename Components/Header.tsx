"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverGroup,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white py-3">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <img
              alt="Algoverse"
              src="./logo.png"
              className="h-24"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative"></Popover>
          <Link href="/" className="text-sm/6 font-semibold text-gray-900">
            Home
          </Link>
          <Link href="/serv" className="text-sm/6 font-semibold text-gray-900">
            Services
          </Link>
          <Link href="/about-us" className="text-sm/6 font-semibold text-gray-900">
            Company
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/contact-us" className="text-sm/6 font-semibold text-gray-900">
            Contact Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 space-y-2">
            <Link
              href="/"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            
            <Link
              href="/serv"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Services
            </Link>
            <Link
              href="/about-us"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              href="/contact-us"
              className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              Contact Us
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
