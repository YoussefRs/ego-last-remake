import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SubHeader from "../../components/global/sub-header/SubHeader";
import ContactWidget from "../../components/widgets/contact-widget/ContactWidget";

const Privacy = () => {
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
              <div className="row page-row">
                {" "}
                <div className="privacy-wrapper col-lg-8 col-md-7 col-12">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis dolore voluptatibus possimus sed consequatur
                    recusandae quod earum deleniti dolores, nobis, voluptatum
                    consequuntur vero suscipit harum in, minima quidem sint
                    ducimus. Ad neque est unde incidunt omnis, repellat amet
                    similique ea distinctio? Qui similique deleniti omnis quia
                    ipsam esse tempora repudiandae aliquam a. Voluptates id
                    deserunt doloremque at exercitationem non officia nemo
                    nihil, eligendi et cumque mollitia iure asperiores
                    cupiditate consequuntur magnam magni doloribus tempore
                    quisquam. Quo laborum fugiat iste sapiente delectus ea optio
                    quaerat dolore animi hic necessitatibus velit blanditiis
                    praesentium sint, explicabo corrupti ullam odit eveniet
                    omnis sed ducimus, ut facere consectetur. Ut eos totam vitae
                    et illum quis tempora odio quas alias consequatur, deserunt
                    exercitationem corrupti eius impedit ullam distinctio
                    debitis perferendis magnam quisquam possimus laboriosam
                    dolores enim! Ea, porro! Eveniet obcaecati magnam aperiam
                    iusto doloribus animi veritatis vel unde perferendis aut
                    quos quo maiores porro, quae dolorum recusandae possimus
                    praesentium voluptas assumenda. Quis sequi explicabo error
                    pariatur deleniti amet est aspernatur omnis aperiam
                    recusandae quod incidunt, fugiat consequatur quo enim
                    similique exercitationem numquam esse possimus, laudantium
                    reprehenderit praesentium neque dolorem placeat. Odio,
                    accusamus consequuntur eum mollitia iure minus? Temporibus
                    sint optio sapiente iure quia, accusantium laboriosam fuga
                    ratione quaerat blanditiis doloribus officiis dolore
                    perferendis quisquam et adipisci ab! Voluptatibus aperiam
                    nihil expedita minima saepe, ipsa nulla possimus magnam
                    animi facere tenetur a ea. Praesentium et qui quas
                    laudantium quos nihil aperiam voluptates molestias fugiat
                    rerum maiores quo suscipit at aut necessitatibus, numquam
                    iusto! Amet, ipsa! Soluta doloremque error magnam nam,
                    natus, temporibus, quidem quos laudantium enim sapiente
                    accusamus architecto velit? Numquam nihil quibusdam dolor
                    dignissimos! Architecto doloribus odit consequuntur
                    explicabo officia eveniet, facere quisquam veritatis numquam
                    adipisci natus consectetur delectus, commodi atque, odio
                    obcaecati. Rem delectus perferendis, iure ipsam, nam quae
                    minus aut, sint ut illum id?
                  </p>
                </div>
                <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
                  <ContactWidget />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
