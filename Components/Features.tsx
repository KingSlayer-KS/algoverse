import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { JSX } from 'react';

interface Feature {
  name: string;
  description: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const features: Feature[] = [
  {
    name: 'Customized IT Solutions',
    description:
      'We leverage cutting-edge technology to create customized IT solutions that enhance efficiency, scalability, and business growth for our clients.',
    icon: (props) => <CloudArrowUpIcon {...props} />,
  },
  {
    name: 'Expert Guidance',
    description: 'Our team of experienced professionals provides expert guidance and support to help you make informed decisions about your IT strategy.',
    icon: (props) => <LockClosedIcon {...props} />,
  },
  {
    name: 'Tailored Solutions',
    description: 'We prioritize understanding client needs, ensuring tailored solutions that drive success, optimize operations, and maximize return on investment.',
    icon: (props) => <ServerIcon {...props} />,
  },
];

export default function Example(): JSX.Element {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Algo Verse</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Why AlgoVerse?
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              At AlgoVerse, Our mission is to help businesses of all sizes reach their full potential through the use of technology.

              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
