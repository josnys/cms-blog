import React from 'react';
import { Link } from '@inertiajs/react';
import classNames from 'classnames';

const PageLink = ({ active, label, url }) => {
     const className = classNames(
          [
               'mr-1 mb-1',
               'px-4 py-3',
               'border rounded',
               'text-sm',
               'hover:bg-gray-300',
               'focus:border-gray-700 focus:text-gray-700'
          ],
          {
               'bg-gray-300': active,
               'ml-auto': label === 'Next'
          }
     );
     return (
          <Link className={className} href={url}>
               {label}
          </Link>
     );
};

// Previous, if on first page
// Next, if on last page
// and dots, if exists (...)
const PageInactive = ({ label }) => {
     const className = classNames(
          'mr-1 mb-1 px-4 py-3 text-sm border rounded text-gray-400 bg-gray-200',
          {
               'ml-auto': label === 'Next'
          }
     );
     return <div className={className}>{label}</div>;
};

export default ({ links = [] }) => {
     // dont render, if there's only 1 page (previous, 1, next)
     if (links.length === 3) return null;
     return (
          <div className="flex w-full">
               {links.map(({ active, label, url }) => {
                    return url === null ? (
                         <PageInactive key={label} label={label} />
                    ) : (
                         <PageLink key={label} label={label} active={active} url={url} />
                    );
               })}
          </div>
     );
};
