import { Link } from "react-router";

interface FooterLink {
  path: string;
  title: string;
}

interface Props {
  title: string;
  links: FooterLink[];  
}

function LinksColumn({ title, links }:Props) {
  return (
    <div className='flex flex-col items-center md:items-start gap-8'>
      <h5 className='font-bold text-[28px]'>
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
      {title === 'Account' ? (
        <div className="flex flex-col gap-8">
          <div className="flex gap-2 pl-4 pr-9 py-2 rounded-lg border border-white">
            <svg width="32" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="white" d="M25.2742 34.56C23.3142 36.46 21.1742 36.16 19.1142 35.26C16.9342 34.34 14.9342 34.3 12.6342 35.26C9.75416 36.5 8.23416 36.14 6.51416 34.56C-3.24584 24.5 -1.80584 9.18 9.27416 8.62C11.9742 8.76 13.8542 10.1 15.4342 10.22C17.7942 9.74 20.0542 8.36 22.5742 8.54C25.5942 8.78 27.8742 9.98 29.3742 12.14C23.1342 15.88 24.6142 24.1 30.3342 26.4C29.1942 29.4 27.7142 32.38 25.2542 34.58L25.2742 34.56ZM15.2342 8.5C14.9342 4.04 18.5542 0.36 22.7142 0C23.2942 5.16 18.0342 9 15.2342 8.5Z" />
            </svg>
            <div>
              <p className="text-xs">Download on</p>
              <p className="font-bold"> Apple Store</p>
            </div>
          </div>
          <div className="flex gap-2 pl-4 pr-9 py-2 rounded-lg border border-white">
            <svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.908 17.2041L23.822 11.2901L4.72 0.55407C3.454 -0.12993 2.268 -0.22593 1.228 0.52207L17.908 17.2041ZM24.83 24.1281L30.978 20.6701C32.178 19.9981 32.836 19.0461 32.836 17.9901C32.836 16.9361 32.178 15.9821 30.98 15.3101L25.414 12.1841L19.148 18.4481L24.83 24.1281ZM0.2 1.97607C0.0719998 2.37007 0 2.81007 0 3.29207V32.7021C0 33.4641 0.168 34.1201 0.472 34.6421L16.666 18.4461L0.2 1.97607ZM17.908 19.6861L1.804 35.7921C2.11333 35.9121 2.44333 35.9721 2.794 35.9721C3.42067 35.9721 4.066 35.7881 4.73 35.4201L23.24 25.0261L17.908 19.6861Z" fill="white"/>
            </svg>
            <div>
              <p className="text-xs">Download on</p>
              <p className="font-bold">Play Store</p>
            </div>
          </div>
        </div>
      ) : ''} 
    </div>
  );
}

export default LinksColumn;