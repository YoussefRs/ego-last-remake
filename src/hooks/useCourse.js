import cse from "../assets/images/courses/course-1.jpg";
import thumb1 from "../assets/images/courses/course-thumb-1.jpg";
import thumb2 from "../assets/images/courses/course-thumb-2.jpg";
import thumb3 from "../assets/images/courses/course-thumb-3.jpg";
import thumb4 from "../assets/images/courses/course-thumb-4.jpg";

const useCourse = (req) => {
  const coursesData = [
    {
      id: "aB3cD4eF",
      name: "Master of Science in Java Programming",
      startDate: "01 Jan 2023",
      duration: "2 years",
      location: "In Campus",
      media: {
        type: "image",
        source:
          "https://t4.ftcdn.net/jpg/06/87/83/03/360_F_687830359_0gDt5GdOpAE51LqpgxgrNGhlH9Jb2TBm.jpg",
      },
      career : ["Java Programmer", "Software Engineer", "IT/Java Programme Manager"],
      description:
        "The aim of the course is to allow students to deal with the entire software development cycle, from the analysis of customer needs to the structuring of the database, from the design of the user interface to the construction of the back end using Object Oriented programming model and the Java language.",
      slogan:
        "Master the Art of Software Development with our Comprehensive Java Programming Master's Program.",
      promo: null,
      thumb:
        "https://dce0qyjkutl4h.cloudfront.net/wp-content/webp-express/webp-images/uploads/2023/08/Java-enterprise-solutions.jpg.webp",
      degree: "Master Degree",
      institute: "Ego",
    },
    {
      id: "tU1vW2xY",
      name: "Master of Science in Information Security",
      startDate: "05 Jun 2023",
      duration: "2 years",
      location: "In Campus",
      media: {
        type: "image",
        source:
          "https://www.tees.ac.uk/Images/CommonImages/prospectus/PG/course_images/Cybersecurity.jpg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      slogan:
        "Secure Your Future with Expertise: Master the Science of Information Security, Safeguarding Tomorrow's Digital Landscape.",
      promo: null,
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWLWva0-DKp5IxK-HF9ZoqeT5YRas0sbZ8w&usqp=CAU",
      degree: "Master Degree",
      institute: "Ego",
    },
    {
      id: "gH5iJ6kL",
      name: "Business Administration",
      startDate: "15 Feb 2023",
      duration: "3 years",
      location: "Online",
      media: {
        type: "image",
        source:
          "https://losalamos.unm.edu/degrees-certificates/certificates/business-banner--website-1.png",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      slogan:
        "Lead with Knowledge: Master the Science of Business Administration, Shaping Tomorrow's Business Landscape.",
      promo: null,
      thumb: "https://ibu.ca/wp-content/uploads/2024/01/m29.webp",
      degree: "Bachelor Degree",
      institute: "Pegaso",
    },
    {
      id: "gH5iJ6km",
      name: "Civil Engineering",
      startDate: "18 Feb 2023",
      duration: "3 years",
      location: "Online",
      media: {
        type: "image",
        source:
          "https://images.ctfassets.net/8bbwomjfix8m/3khjUHELqiZJVgdkpXSAZf/17faf9504845ad605296527fa90d8993/civil.jpg?fit=fill&w=1366&h=446&fm=jpg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      slogan:
        "Build the Future: Master the Science of Civil Engineering, Creating Sustainable Infrastructure for Generations.",
      promo: null,
      thumb:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsZPGmlllWI0tQ5LTlqqOeNO_8QsLSjegqUg&usqp=CAU",
      degree: "Bachelor Degree",
      institute: "Pegaso",
    },
    {
      id: "mN7oP8qR",
      name: "Informatics",
      startDate: "10 Mar 2023",
      duration: "2 years",
      location: "Online",
      media: {
        type: "image",
        source:
          "https://uwm.edu/publichealth/wp-content/uploads/sites/571/2023/01/banner-certificate-health-care-informatics.jpg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      slogan:
        "Transforming Data into Insights: Mastering Informatics for the Digital Age.",
      promo: { value: "20%", requirement: "Online application" },
      thumb: thumb1,
      degree: "Master Degree",
      institute: "Pegaso",
    },
    {
      id: "uX3yZ4aB",
      name: "Sport Science",
      startDate: "12 Aug 2023",
      duration: "3 years",
      location: "Online",
      media: {
        type: "image",
        source:
          "https://www.gicafd.ua.es/imageresizer.php?src=https://www.gicafd.ua.es/plantillas/gicafd/imagen/carousel/dp131956166.jpg&w=1024&h=512&mode=stretch",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      slogan:
        "Pushing Boundaries, Achieving Excellence: The Science of Sports Mastery.",
      promo: null,
      thumb:
        "https://acpe.edu.au/uploads/2023/05/ACPE-Careers-in-Sport-thumbnail.jpg",
      degree: "Bachelor Degree",
      institute: "Pegaso",
    },
    {
      id: "gH7iJ8kL",
      name: "Educational Science",
      startDate: "18 Oct 2023",
      duration: "1 year",
      location: "Online",
      media: {
        type: "image",
        source:
          "https://cognizant.scene7.com/is/image/cognizant/gmp-manufacturing-hero-banner",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      slogan:
        "Fostering Minds, Shaping Futures: A Journey in Educational Science.",
      promo: null,
      thumb:
        "https://plus.unsplash.com/premium_photo-1682124416359-d48d59ad6916?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      degree: "Bachelor Degree",
      institute: "Pegaso",
    },
  ];

  const getCourseById = (id) => {
    const gotCourse = coursesData.filter((course) => course.id === id);
    return gotCourse[0];
  };

  function filterProperties(arrayOfObjects, propertiesArray) {
    return arrayOfObjects.map((obj) => {
      const newObj = {};
      propertiesArray.forEach((prop) => {
        if (obj.hasOwnProperty(prop)) {
          newObj[prop] = obj[prop];
        }
      });
      return newObj;
    });
  }

  if (req.type === "all") {
    return coursesData;
  } else if (req.type === "byId") {
    return getCourseById(req.param);
  } else if (req.type === "byProperties") {
    return filterProperties(coursesData, req.param);
  } else {
    return null;
  }
};

export default useCourse;
