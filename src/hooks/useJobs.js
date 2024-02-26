import getRandomItems from "../utils";

const useJobs = (req) => {
  const jobsData = [
    {
      id: "R7gk9p3F",
      jobTitle: "Learning Support Assistant",
      jobType: "Full Time",
      jobSummary:
        "Job summary, consectetur adipiscing elit. Sed facilisis magna fermentum mauris posuere convallis. Sed fermentum cursus lacinia. Phasellus ac tortor massa. Mauris eget nisi blandit.",
      department: "Computer Science",
      location: "Shyamoli Engineering University(SEU)",
      salary: "৳19,000 - ৳21,000",
      postedTime: "3 days",
      closingDate: "28 Feb 2024", // Added closing date
      jobRef: "LSA01234", // Added job reference
      jobApplicationForm: "https://example.com/LSA01234", // Added job application form URL
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec libero id libero faucibus fermentum. Proin auctor tincidunt justo id iaculis. Vestibulum lacinia, ligula ac consectetur gravida, odio nisi ullamcorper purus, sed dapibus leo risus et enim. Sed in ex vel dui rhoncus dignissim. Ut vitae nisi vel ex lobortis rhoncus. Vivamus bibendum vitae odio at interdum. Suspendisse potenti. Integer varius, libero non efficitur consectetur, magna velit fringilla nunc, eu pulvinar libero eros id justo. In id velit non turpis convallis vehicula. Maecenas suscipit turpis sit amet velit tincidunt consequat. Curabitur nec tortor non sapien hendrerit malesuada. Sed vehicula dignissim odio a faucibus. Vivamus vehicula justo a libero faucibus, et placerat ante imperdiet. In convallis nisi sit amet ex aliquet ullamcorper. Sed eu purus mi.", // Added description
      howToApply: "To apply, please submit your resume and cover letter...", // Added how to apply information
      highlights: [
        "Opportunity to support students in their learning journey",
        "Full-time position with competitive salary",
        "Located at Shyamoli Engineering University(SEU)",
      ],
      hours: 9,
    },
    {
      id: "E4sT6nW2",
      jobTitle: "Lecturer - EEE Department",
      jobType: "Full Time",
      jobSummary:
        "Sed ullamcorper erat non libero porta, vehicula luctus felis porta. Integer lobortis et erat nec feugiat. Vestibulum sapien turpis, consectetur at placerat eget, tristique pellentesque ipsum. Proin non pretium turpis.",
      department: "EEE",
      location: "Shyamoli Engineering University(SEU)",
      salary: "৳35,000 - ৳45,000 pro rata to hours worked",
      postedTime: "1 week",
      closingDate: "28 Feb 2024",
      jobRef: "EEE04567",
      jobApplicationForm: "https://example.com/EEE04567",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec libero id libero faucibus fermentum. Proin auctor tincidunt justo id iaculis. Vestibulum lacinia, ligula ac consectetur gravida, odio nisi ullamcorper purus, sed dapibus leo risus et enim. Sed in ex vel dui rhoncus dignissim. Ut vitae nisi vel ex lobortis rhoncus. Vivamus bibendum vitae odio at interdum. Suspendisse potenti. Integer varius, libero non efficitur consectetur, magna velit fringilla nunc, eu pulvinar libero eros id justo. In id velit non turpis convallis vehicula. Maecenas suscipit turpis sit amet velit tincidunt consequat. Curabitur nec tortor non sapien hendrerit malesuada. Sed vehicula dignissim odio a faucibus. Vivamus vehicula justo a libero faucibus, et placerat ante imperdiet. In convallis nisi sit amet ex aliquet ullamcorper. Sed eu purus mi.",
      howToApply: "To apply, please submit your resume and cover letter...",
      highlights: [
        "Teach courses in the Electrical and Electronic Engineering department",
        "Full-time position with competitive salary",
        "Located at Shyamoli Engineering University(SEU)",
      ],
      hours: 8,
    },
    {
      id: "jP8a5cQ9",
      jobTitle: "Lecturer - CSE Department",
      jobType: "Full Time",
      jobSummary:
        "Sed ullamcorper erat non libero porta, vehicula luctus felis porta. Integer lobortis et erat nec feugiat. Vestibulum sapien turpis, consectetur at placerat eget, tristique pellentesque ipsum. Proin non pretium turpis.",
      department: "Computer Science",
      location: "Shyamoli Engineering University(SEU)",
      salary: "৳35,000 - ৳45,000",
      postedTime: "2 days",
      closingDate: "28 Feb 2024",
      jobRef: "CSE07890",
      jobApplicationForm: "https://example.com/CSE07890",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec libero id libero faucibus fermentum. Proin auctor tincidunt justo id iaculis. Vestibulum lacinia, ligula ac consectetur gravida, odio nisi ullamcorper purus, sed dapibus leo risus et enim. Sed in ex vel dui rhoncus dignissim. Ut vitae nisi vel ex lobortis rhoncus. Vivamus bibendum vitae odio at interdum. Suspendisse potenti. Integer varius, libero non efficitur consectetur, magna velit fringilla nunc, eu pulvinar libero eros id justo. In id velit non turpis convallis vehicula. Maecenas suscipit turpis sit amet velit tincidunt consequat. Curabitur nec tortor non sapien hendrerit malesuada. Sed vehicula dignissim odio a faucibus. Vivamus vehicula justo a libero faucibus, et placerat ante imperdiet. In convallis nisi sit amet ex aliquet ullamcorper. Sed eu purus mi.",
      howToApply: "To apply, please submit your resume and cover letter...",
      highlights: [
        "Teach courses in the Computer Science department",
        "Full-time position with competitive salary",
        "Located at Shyamoli Engineering University(SEU)",
      ],
      hours: 7,
    },
    {
      id: "L2dF6mN5",
      jobTitle: "Administrative Assistants",
      jobType: "Part time",
      jobSummary:
        "Sed ullamcorper erat non libero porta, vehicula luctus felis porta. Integer lobortis et erat nec feugiat. Vestibulum sapien turpis, consectetur at placerat eget, tristique pellentesque ipsum. Proin non pretium turpis.",
      department: "Computer Science",
      location: "Shyamoli Engineering University(SEU)",
      salary: "৳17,500 - ৳18,500 pro rata to hours worked",
      postedTime: "1 week",
      closingDate: "28 Feb 2024",
      jobRef: "AA12345",
      jobApplicationForm: "https://example.com/AA12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec libero id libero faucibus fermentum. Proin auctor tincidunt justo id iaculis. Vestibulum lacinia, ligula ac consectetur gravida, odio nisi ullamcorper purus, sed dapibus leo risus et enim. Sed in ex vel dui rhoncus dignissim. Ut vitae nisi vel ex lobortis rhoncus. Vivamus bibendum vitae odio at interdum. Suspendisse potenti. Integer varius, libero non efficitur consectetur, magna velit fringilla nunc, eu pulvinar libero eros id justo. In id velit non turpis convallis vehicula. Maecenas suscipit turpis sit amet velit tincidunt consequat. Curabitur nec tortor non sapien hendrerit malesuada. Sed vehicula dignissim odio a faucibus. Vivamus vehicula justo a libero faucibus, et placerat ante imperdiet. In convallis nisi sit amet ex aliquet ullamcorper. Sed eu purus mi.",
      howToApply: "To apply, please submit your resume and cover letter...",
      highlights: [
        "Provide administrative support to the Computer Science department",
        "Part-time position with competitive salary",
        "Located at Shyamoli Engineering University(SEU)",
      ],
      hours: 4,
    },
  ];

  if (req.type === "all") {
    return jobsData;
  } else if (req.type === "random") {
    return getRandomItems(jobsData, 3, req.param);
  } else {
    return null;
  }
};

export default useJobs;
