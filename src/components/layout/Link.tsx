interface LinkProps {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children }: LinkProps) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors"
    >
      {children}
    </a>
  );
}