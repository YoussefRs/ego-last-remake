import React from "react";
import withHelmet from "../../hoc/withHelmet.jsx";
import ContactSubHeader from "../../components/global/sub-header/SubHeader.jsx";
import ContactForm from "../../components/contact/contact-form/ContactForm.jsx";
import ContactProspectus from "../../components/widgets/download-prospectus-widget/DownloadProspectusWidget.jsx";
import ContactPostalAddress from "../../components/contact/contact-postal-address/ContactPostalAddress.jsx";
import ContactEnquiries from "../../components/contact/contact-enquiries/ContactEnquiries.jsx";
import ContactMap from "../../components/contact/contact-map/ContactMap.jsx";
import SubHeader from "../../components/global/sub-header/SubHeader.jsx";
import DownloadProspectusWidget from "../../components/widgets/download-prospectus-widget/DownloadProspectusWidget.jsx";

const Contact = () => {
  return (
    <div className="home-page">
      <div className="wrapper">
        <div className="content container">
          <div className="page-wrapper">
            <SubHeader
              title={"Contact"}
              path={[{ url: "/", label: "Home" }]}
              current={"Contact"}
            />
            <div className="page-content">
              <div className="row">
                <ContactForm />
                <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
                  <DownloadProspectusWidget />
                  <ContactPostalAddress />
                  <ContactEnquiries />
                </aside>
              </div>
              <div className="page-row">
                <ContactMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withHelmet(Contact);
// export default Contact;
