const useEvents = (req) => {
  const eventsData = [
    {
      id: "aB3cD9fG",
      month: "FEB",
      date: "18",
      title: "Open Day",
      time: "10:00am - 18:00pm",
      location: "East Campus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus mauris at aliquet tincidunt. Ut ultricies odio id luctus consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam sed dolor in purus feugiat viverra.",
    },
    {
      id: "hI2jK5lM",
      month: "SEP",
      date: "06",
      title: "E-learning at SEU",
      time: "10:00am - 16:00pm",
      location: "Learning Center",
      description:
        "Fusce tempus odio sed velit tempor, vitae eleifend libero tincidunt. Phasellus non libero vel metus aliquam dapibus. Integer eget mi vitae nisi vestibulum venenatis. Nullam sit amet magna eget nibh accumsan luctus. Sed vel gravida libero. Donec euismod magna ut eros suscipit, ac vehicula dui dapibus.",
    },
    {
      id: "nO7pQ4rS",
      month: "JUN",
      date: "23",
      title: "Career Fair",
      time: "09:45am - 16:00pm",
      location: "Library",
      description:
        "Duis nec dolor vitae metus volutpat euismod. Sed tincidunt neque et dolor pellentesque, vel dictum libero lobortis. Vivamus quis eros vitae magna varius tristique. Maecenas tempor eros et est congue posuere. Cras condimentum nulla in leo fermentum, a varius lorem scelerisque.",
    },
    {
      id: "tU6vW8xY",
      month: "MAY",
      date: "17",
      title: "Science Seminar",
      time: "14:00pm - 18:00pm",
      location: "Library",
      description:
        "Sed convallis nisi sit amet odio tincidunt, sit amet eleifend tortor molestie. Integer fermentum est at augue sodales, quis fermentum metus finibus. Ut condimentum orci at finibus iaculis. Sed consectetur nisi non odio fermentum, sit amet consequat lacus facilisis. Sed nec ipsum risus.",
    },
    // Additional events
    {
      id: "zZ9xY7cQ",
      month: "OCT",
      date: "12",
      title: "Guest Lecture Series",
      time: "09:00am - 12:00pm",
      location: "Seminar Hall",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum tincidunt risus, eu efficitur nisi gravida at. Aliquam erat volutpat. Phasellus at nisi non purus tristique tincidunt.",
    },
    {
      id: "mN3bD5eT",
      month: "AUG",
      date: "29",
      title: "Workshop on Robotics",
      time: "13:30pm - 17:30pm",
      location: "Engineering Building",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam nec justo a risus volutpat tempus. Aliquam erat volutpat. Curabitur nec leo non nisi tincidunt gravida.",
    },
    {
      id: "qR6wE2fG",
      month: "DEC",
      date: "05",
      title: "Annual Sports Meet",
      time: "08:00am - 17:00pm",
      location: "Sports Complex",
      description:
        "Proin eget lacus vel sapien rhoncus convallis eget sit amet odio. Fusce semper risus id scelerisque commodo. Nulla facilisi. Phasellus molestie ex at odio rhoncus posuere. Cras nec justo ac lacus sodales mattis.",
    },
    {
      id: "vT4yU9pQ",
      month: "NOV",
      date: "14",
      title: "Seminar on Environmental Sustainability",
      time: "10:30am - 14:30pm",
      location: "Auditorium",
      description:
        "Ut convallis ligula nec mi fermentum, a ultrices ex pharetra. Sed non malesuada purus, vel scelerisque turpis. Fusce commodo, felis nec pharetra elementum, eros elit accumsan tortor, id sodales quam eros eu est.",
    },
  ];

  function getMostRecentEvents(events, length) {
    // Sort events by date in descending order (most recent first)
    const sortedEvents = events.sort((a, b) => {
      const dateA = new Date(a.month + " " + a.date + ", 2024");
      const dateB = new Date(b.month + " " + b.date + ", 2024");
      return dateB - dateA;
    });

    // Return the first 4 events
    return sortedEvents.slice(0, length);
  }

  if (req.type === "all") {
    return eventsData;
  } else if (req.type === "recent") {
    return getMostRecentEvents(eventsData, req.param);
  } else {
    return null;
  }
};

export default useEvents;
