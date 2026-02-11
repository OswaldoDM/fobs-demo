import Section from "../Section";
import LinksColumn from "./components/LinksColumn";
import { footerLinks } from "./helpers/footerLinks";

function Footer() {
  return (
    <Section bg="black">
      <div className='pt-16 pb-10 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20 lg:grid-cols-4 xl:gap-36'>        
        <LinksColumn title="FOBS" links={footerLinks.fobs} />
        <LinksColumn title="Account" links={footerLinks.account}  />
        <LinksColumn title="Support" links={footerLinks.support}  />
        <LinksColumn title="Socials" links={footerLinks.social}  />
      </div>
      <p className="text-center font-semibold py-7 lg:py-5">
        © 2025 FOBS. All rights reserved.
      </p>
    </Section>    
  );
}

export default Footer;