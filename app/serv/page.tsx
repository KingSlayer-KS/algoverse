import Header from "@/Components/Header";
import 'animate.css';


export default function Example(){
    return (
      <> 
      <Header />
      <div className="bg-gray-50 py-24 sm:py-32 animate__animated animate__fadeIn">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base font-semibold text-indigo-600">Deploy faster</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-3">
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">Custom Software Development</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Our team of software developers can create custom solutions to meet your unique business needs.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pb-2">
                <img className="w-full max-w-sm" src="./images/custom.png" alt="Custom Software Development" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">IT Infrastructure Management</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Optimize technology investments with our IT infrastructure management services.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pb-2">
                  <img className="w-full max-w-sm" src="./images/infra.png" alt="IT Infrastructure Management" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">Data Analytics & Business Intelligence</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Make informed decisions with our data analytics and business intelligence services.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pb-2">
                  <img className="w-full max-w-sm" src="./images/data.png" alt="Data Analytics" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">Mobile App Development</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Reach customers on the go with our native and hybrid app development services.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pb-2">
                  <img className="w-full max-w-sm" src="./images/mobDev.png" alt="Mobile App Development" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">IT Consulting & Advisory</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Expert guidance on technology strategy, vendor selection, and project management.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pb-2">
                  <img className="w-full max-w-sm" src="./images/consult.png" alt="IT Consulting & Advisory" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">Cybersecurity & Risk Management</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Protect your business with our cybersecurity and risk management services.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 sm:px-10 pb-2">
                  <img className="w-full max-w-sm" src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png" alt="Cybersecurity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
  