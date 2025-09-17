import { NavLinkModel } from '@/models/NavLink.model';
import MobileNav from '../MobileNav/MobileNav';

const Nav = () => {
  const navLinks: NavLinkModel[] = [
    { label: 'Home', location: '#home' },
    { label: 'Tech Stack', location: '#expertise' },
    { label: 'Projects', location: '#projects' },
    { label: 'About Me', location: '#about-me' },
  ];
  return (
    <>
      <MobileNav links={navLinks} />
    </>
  );
};

export default Nav;
