import React from "react";
import Hero from "../../components/home/hero/Hero";
import HomeHeading from "../../components/home/home-heading/HomeHeading";
import NewsSection from "../../components/home/home-news/NewsSection";
import HomeEvents from "../../components/home/home-events/HomeEvents";
import HomeCourseFinder from "../../components/home/home-course-finder/HomeCourseFinder";
import HomeDocumentary from "../../components/home/home-documentary/HomeDocumentary";
import HomeQuickLinks from "../../components/home/home-quick-links/HomeQuickLinks";
import HomeTestimonials from "../../components/home/home-testimonials/HomeTestimonials";
import HomeInstitutes from "../../components/home/home-institutes/HomeInstitutes";

export default function Home() {
  return (
    <main className="home-page">
      <div className="content container">
        <Hero />
        <HomeHeading />
        <NewsSection />
        <div className="row cols-wrapper">
          {/* <HomeEvents /> */}
          <div className="col-lg-9 col-12">
            <HomeCourseFinder />
            <HomeDocumentary />
          </div>
          <div className="col-lg-3 col-12">
            <HomeQuickLinks />
            <HomeTestimonials />
          </div>
        </div>
        <HomeInstitutes />
      </div>
    </main>
  );
}
