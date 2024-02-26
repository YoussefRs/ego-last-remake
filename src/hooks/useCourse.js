import cse from "../assets/images/courses/course-1.jpg";
import thumb1 from "../assets/images/courses/course-thumb-1.jpg";
import thumb2 from "../assets/images/courses/course-thumb-2.jpg";
import thumb3 from "../assets/images/courses/course-thumb-3.jpg";
import thumb4 from "../assets/images/courses/course-thumb-4.jpg";

const useCourse = (req) => {
  const coursesData = [
    {
      id: "aB3cD4eF",
      name: "Civil Engineering",
      startDate: "01 Jan 2023",
      duration: "4 years",
      location: "In Campus",
      media: {
        type: "video",
        source: "https://images.ctfassets.net/8bbwomjfix8m/3khjUHELqiZJVgdkpXSAZf/17faf9504845ad605296527fa90d8993/civil.jpg?fit=fill&w=1366&h=446&fm=jpg",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      promo: null,
      thumb: thumb3,
    },
    {
      id: "gH5iJ6kL",
      name: "Textile Engineering",
      startDate: "15 Feb 2023",
      duration: "3 years",
      location: "Online",
      media: {
        type: "video",
        source: "https://www.youtube.com/embed/h9KXaahESas",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      promo: null,
      thumb: thumb4,
    },
    {
      id: "mN7oP8qR",
      name: "Computer Science & Engineering",
      startDate: "10 Mar 2023",
      duration: "2 years",
      location: "Hybrid",
      media: {
        type: "image",
        source: cse,
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      promo: { value: "20%", requirement: "Online application" },
      thumb: thumb1,
    },
    {
      id: "sT9uV0wX",
      name: "Electrical & Electronics Engineering",
      startDate: "20 Apr 2023",
      duration: "1 year",
      location: "Remote",
      media: {
        type: "video",
        source: "https://www.youtube.com/embed/RTlrGncbd8Y",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum pellentesque urna. Phasellus adipiscing et massa et aliquam. Ut odio magna, interdum quis dolor non, tristique vestibulum nisi. Nam accumsan convallis venenatis. Nullam posuere risus odio, in interdum felis venenatis sagittis. Integer malesuada porta fermentum. Sed luctus nibh sed mi auctor imperdiet. Cras et sapien rhoncus, pulvinar dolor sed, tincidunt massa. Nullam fringilla mauris non risus ultricies viverra. Donec a turpis non lorem pulvinar posuere.",
      promo: null,
      thumb: thumb2,
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
