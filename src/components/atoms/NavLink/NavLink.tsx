'use client';

import { NavLinkModel } from '@/models/NavLink.model';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavLink = ({
  navLink,
  onClick,
}: {
  navLink: NavLinkModel;
  onClick: () => void;
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
    router.push(e.currentTarget.getAttribute('href') || '');
  };
  return (
    <Link href={navLink.location} onClick={handleClick}>
      {navLink.label}
    </Link>
  );
};

export default NavLink;
