import React, { JSX } from 'react';

interface Stat {
    id: number;
    name: string;
    value: string;
  }
  
  const stats: Stat[] = [
    { id: 1, name: 'Client Satisfaction', value: '100 %' },
    { id: 2, name: 'Years of Experience', value: '9+' },
    { id: 3, name: 'Projects Completed', value: '300+' },
  ];
  
  export default function Example(): JSX.Element {
    return (
      <div className="bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    );
  }