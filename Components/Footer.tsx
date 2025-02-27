"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* Logo */}
          <div className="text-teal-600">
          <img
              alt="Algoverse"
              src="https://img1.wsimg.com/isteam/ip/657ee06e-b4e4-417f-acba-2cdfa0d91b41/algoverse-high-resolution-logo.png"
              className="h-24"
            />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            

            {/* Footer Links */}
            {[
              { title: "Services", links: ["1on1 Coaching", "Company Review", "Accounts Review", "HR Consulting", "SEO Optimization"] },
              { title: "Company", links: ["About", "Meet the Team", "Careers"] },
            ].map((section, index) => (
              <div key={index} className="col-span-2 sm:col-span-1">
                <p className="font-medium text-gray-900">{section.title}</p>
                <ul className="mt-6 space-y-4 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link href="/" className="text-gray-700 transition hover:opacity-75">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            
          </div>
        </div>

        {/* Copyright and Policies */}
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Algo Verse. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
