import { useState } from "react";

function FooterAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sections = [
    {
      title: "Company",
      links: ["About", "Career", "Mobile"],
    },
    {
      title: "Contact Us",
      links: ["Why Travlog?", "Partner with us", "FAQ’s", "Blog"],
    },
    {
      title: "Meet Us",
      links: [
        "+00 92 1234 56789",
        "info@travlog.com",
        "205. R Street, New York",
        "BD23200",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col md:hidden">

      {sections.map((section, index) => (
        <div
          key={section.title}
          className="border-b border-[#1918251A] py-7"
        >
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full flex items-center justify-between text-[#191825] font-bold text-base"
          >
            {section.title}

            <span
              className={`border border-[#191825] rounded-full w-4 h-4 flex items-center justify-center text-[10px] transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              <img src="arrow-circle-down.svg" alt="arrow-circle-down" />
            </span>
          </button>

          <ul
            className={`grid transition-all duration-300 ${
              openIndex === index
                ? "grid-rows-[1fr] mt-6"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              {section.links.map((link) => (
                <li key={link} className="text-sm text-[#191825]/75 mb-5">
                  {link}
                </li>
              ))}
            </div>
          </ul>
        </div>
      ))}

    </div>
  );
}

export default FooterAccordion;