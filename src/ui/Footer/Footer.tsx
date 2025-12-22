import Section from "../Section";
import LinksColumn from "./components/LinksColumn";
import { footerLinks } from "./helpers/footerLinks";
import fobsLogo from '/fobs.svg';

function Footer() {
  return (
    <Section bg="black">
      <div className='pt-16 pb-10 grid grid-cols-1 md:grid-cols-4 md:gap-20 lg:gap-36'>        
        <div className="flex justify-center w-full mb-8 md:hidden">
          <img src={fobsLogo} alt="fobs-logo" className="w-24" />
        </div>
        <LinksColumn title="FOBS" links={footerLinks.fobs} />
        <LinksColumn title="Account" links={footerLinks.account} hideOnMobile />
        <LinksColumn title="Support" links={footerLinks.support} hideOnMobile />
        <LinksColumn title="Socials" links={footerLinks.social} hideOnMobile />
      </div>
      <p className="text-center font-semibold py-7 lg:py-5">
        © 2025 FOBS. All rights reserved.
      </p>
    </Section>    
  );
}

export default Footer;