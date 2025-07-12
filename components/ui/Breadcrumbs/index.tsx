import Link from 'next/link';

type Breadcrumb = {
  label: string; 
  href?: string; 
};

type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[]; 
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null; 
  }

  return (
    <nav className="text-sm text-gray-700 my-4" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">

            {index !== 0 && (
              <svg
                className="w-4 h-4 mx-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            {breadcrumb.href ? (
              <Link href={breadcrumb.href}>
                <a className="text-blue-600 hover:underline">{breadcrumb.label}</a>
              </Link>
            ) : (
              <span className="text-gray-500">{breadcrumb.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
