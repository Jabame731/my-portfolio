import { NavLinkModel } from '@/models/NavLink.model';
import MobileNav from '../MobileNav/MobileNav';

const Nav = () => {
  const navLinks: NavLinkModel[] = [
    { label: 'home', location: '#home' },
    { label: 'expertise', location: '#expertise' },
    { label: 'projects', location: '#projects' },
    { label: 'about me', location: '#about-me' },
  ];
  return (
    <>
      <MobileNav links={navLinks} />
    </>
  );
};

export default Nav;
