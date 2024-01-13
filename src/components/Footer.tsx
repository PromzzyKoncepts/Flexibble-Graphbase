/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { footerLinks } from "../../constant";
import Link from "next/link";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

// this is a utility component for handling each column of footer links
const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="flex-1 flex flex-col gap-3 text-sm min-w-max">
    <h4 className="font-semibold ">{title}</h4>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flex justify-start items-center  flex-col lg:px-20 py-6 px-5 w-full gap-20 bg-slate-50">
      <div className="flex w-full flex-col gap-12">
        <div className="items-start flex flex-col">
          <Image
            src="/logo-purple.svg"
            width={115}
            height={43}
            alt="flexibble"
          />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            {" "}
            Flexibble is the world's leading community for developers to share,
            grow and get hired also.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[1].title}
              links={footerLinks[1].links}
            />
            <FooterColumn
              title={footerLinks[2].title}
              links={footerLinks[2].links}
            />
          </div>
            <FooterColumn
              title={footerLinks[3].title}
              links={footerLinks[3].links}
            />

          <div className="flex flex-1 flex-col gap-4">
            <FooterColumn
              title={footerLinks[5].title}
              links={footerLinks[5].links}
            />
            <FooterColumn
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center max-sm:flex-col w-full text-sm font-normal">
        <p>@ {new Date().getFullYear() } Flexibble All Rights Reserved</p>
        <p className="text-gray-600">
            <span className="text-black font-semibold ">15,312</span> projects uploaded
        </p>
      </div>
    </footer>
  );
};

export default Footer;
