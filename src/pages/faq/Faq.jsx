import React from "react";
import SubHeader from "../../components/global/sub-header/SubHeader";
import FaqAccordion from "../../components/faq/faq-accordion/FaqAccordion";
import DownloadProspectusWidget from "../../components/widgets/download-prospectus-widget/DownloadProspectusWidget";

const Faq = () => {
  const faqs = [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida felis.",
      answer:
        "Nullam posuere purus in sem congue, sed tincidunt libero lacinia. Sed interdum leo quis augue consectetur.",
    },
    {
      question:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      answer:
        "Donec ullamcorper ante eu libero molestie, at feugiat justo pretium. Integer a sapien lacinia, commodo diam sit amet, venenatis nunc.",
    },
    {
      question:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
      answer:
        "Mauris ac ex et magna consequat feugiat. Suspendisse potenti. In lobortis, mi sit amet accumsan ultricies, leo justo tincidunt odio, eu tincidunt sapien quam ut turpis.",
    },
    {
      question:
        "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
      answer:
        "Suspendisse nec odio nec nibh lacinia mattis. Aenean suscipit enim in ante venenatis, quis ultricies diam sagittis. Fusce vitae enim sed mi suscipit vulputate.",
    },
  ];

  return (
    <div className="content container">
      <div className="page-wrapper">
        <SubHeader
          title={"Frequently Asked Questions"}
          path={[{ url: "/", label: "Home" }]}
          current={"Faq"}
        />
        <div className="page-content">
          <div className="row page-row">
            <div className="faq-wrapper col-lg-8 col-md-7 col-12">
              <div id="accordion" className="accordion">
                {faqs.map((fq, i) => (
                  <FaqAccordion
                    question={fq.question}
                    answer={fq.answer}
                    key={i}
                  />
                ))}
              </div>
            </div>
            <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
              <DownloadProspectusWidget />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
