import Link from 'next/link';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Fil d'ariane"
      className="bg-pink-custom-2 mt-[-15px] rounded-b-2xl px-5 pt-4 pb-2 text-xs"
    >
      <ol className="flex items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-0.5">
              {index > 0 && (
                <span className="text-gray-400" aria-hidden="true">
                  {'>'}
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="hover:text-primary font-medium text-gray-700 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-400">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
