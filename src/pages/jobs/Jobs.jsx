import React from "react";
import SubHeader from "../../components/global/sub-header/SubHeader";
import JobCard from "../../components/jobs/jobs-card/JobsCard";
import ContactWidget from "../../components/widgets/contact-widget/ContactWidget";
import useJobs from "../../hooks/useJobs";

const Jobs = () => {
  const jobsData = useJobs({ type: "all" });

  return (
    <div className="content container">
      <div className="page-wrapper">
        <SubHeader
          title={"Jobs"}
          path={[{ url: "/", label: "Home" }]}
          current={"Jobs"}
        />
        <div className="page-content">
          <div className="row page-row">
            <div className="jobs-wrapper col-lg-8 col-md-7 col-12">
              {jobsData.map((job) => (
                <JobCard
                  key={job.id}
                  jobTitle={job.jobTitle}
                  jobType={job.jobType}
                  jobSummary={job.jobSummary}
                  department={job.department}
                  location={job.location}
                  salary={job.salary}
                  postedTime={job.postedTime}
                  id={job.id}
                />
              ))}
            </div>
            <aside className="page-sidebar  col-lg-3 offset-lg-1 col-md-4 offset-md-1">
              <ContactWidget />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
