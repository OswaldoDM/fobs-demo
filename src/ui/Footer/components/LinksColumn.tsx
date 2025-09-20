import { Link } from "react-router";

interface FooterLink {
  path: string;
  title: string;
}

interface Props {
  title: string;
  links: FooterLink[];
  hideOnMobile?: boolean;
}

function LinksColumn({ title, links, hideOnMobile = false }:Props) {
  return (
    <div className={`flex flex-col items-center md:items-start gap-8 ${hideOnMobile ? 'hidden md:flex' : ''}`}>
      <h5 className={`font-bold ${ title === 'FOBS' ? 'hidden md:block' : ''}`}>
        {title}
      </h5>
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="font-semibold"
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default LinksColumn;