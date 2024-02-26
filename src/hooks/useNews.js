import getRandomItems from "../utils";

import img1 from "../assets/images/news/news-thumb-1.jpg";
import img2 from "../assets/images/news/news-thumb-2.jpg";
import img3 from "../assets/images/news/news-thumb-3.jpg";
import img4 from "../assets/images/news/news-thumb-4.jpg";
import img5 from "../assets/images/news/news-thumb-5.jpg";
import img6 from "../assets/images/news/news-thumb-6.jpg";

const useNews = (req) => {
  const newsData = [
    {
      id: "aB3cD9fG",
      title: "Award Giving Ceremony in SEU",
      image: img1,
      articles: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus mauris at aliquet tincidunt. Ut ultricies odio id luctus consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tempor nibh vel magna mattis, non ultricies risus varius. Morbi id posuere nibh.",
        "Fusce at nisi sit amet lacus bibendum vulputate vitae vel mi. Sed id leo vel metus sollicitudin eleifend. Maecenas consequat tortor nec ligula semper, et fermentum purus tincidunt.",
        "Phasellus lacinia luctus magna non egestas. Ut tincidunt, purus id vehicula scelerisque, est nunc pretium lorem, vel auctor libero metus eget nulla. Vivamus eleifend erat sed velit venenatis, a malesuada lectus commodo.",
      ],
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "John Doe",
      postedDate: "26 Jan 2014",
      additionalLink: {
        url: "https://example.com",
        label: "Lorem ipsum dolor sit amet",
      },
    },
    {
      id: "hI2jK5lM",
      title: "Rag Day 2023 in Shyamoli Engineering University",
      image: img2,
      articles: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at magna vestibulum, tempor nunc vitae, vestibulum dui. Maecenas ac justo in sem rhoncus posuere. Fusce nec quam vitae nunc volutpat placerat.",
        "Cras luctus tristique nisl, id laoreet risus. Integer pretium fringilla orci, id dictum mi vestibulum a. Nam pretium sapien vel quam iaculis sollicitudin. Integer vitae sem sed nisi feugiat efficitur.",
        "Suspendisse quis libero vestibulum, venenatis tortor eget, mattis nisi. Nam aliquam quam eget urna congue, ac scelerisque ante vestibulum. Nam malesuada lacus quis nunc faucibus, ut faucibus lacus tempus.",
        "Phasellus consectetur dolor eget nunc consequat, in auctor sem ultricies. Aliquam erat volutpat. Suspendisse ut dictum turpis, eget lacinia ligula.",
      ],
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Jane Smith",
      postedDate: "18 Mar 2023",
      additionalLink: {
        url: "https://example.com",
        label: "Lorem ipsum dolor sit amet",
      },
    },
    {
      id: "nO7pQ4rS",
      title: "Tribute to Principal M.A. Sattar from Prime minister.",
      image: img3,
      articles: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu ligula sit amet nunc suscipit gravida. Proin sed dui leo. Morbi sagittis magna sit amet suscipit congue.",
        "Aliquam vehicula enim eget orci feugiat, id dictum quam vehicula. Sed tristique urna vitae interdum commodo. Nullam accumsan sit amet ante id facilisis. Nullam nec est in ipsum volutpat interdum.",
        "Fusce eget eros in libero consequat eleifend. Integer in quam at urna euismod fermentum. Mauris accumsan eros non eleifend tempus. Suspendisse ultrices diam non erat sagittis, vel eleifend quam molestie.",
        "Suspendisse potenti. Sed sodales, mauris nec tempus consectetur, sem odio pellentesque velit, sed efficitur dui purus ut elit. Nam in libero non dui cursus bibendum.",
      ],
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Michael Johnson",
      postedDate: "10 Dec 2022",
      additionalLink: {
        url: "https://example.com",
        label: "Lorem ipsum dolor sit amet",
      },
    },
    {
      id: "tU6vW8xY",
      title: "Principal M.A Sattar Biography.",
      image: img4,
      articles: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet nisl nec eros vehicula bibendum. Ut vitae arcu eleifend, ultrices velit sed, rutrum justo. Fusce volutpat velit sed nulla ultricies, id ullamcorper turpis placerat.",
        "Fusce nec eleifend turpis. Fusce ut ex nec ante condimentum posuere. Praesent non nunc nec est luctus tempor eu vitae quam. Nullam facilisis efficitur odio sed malesuada.",
        "Sed eget libero nec nisi dapibus dictum. Morbi vitae vestibulum velit. Duis id sapien fringilla, vestibulum tortor vel, vestibulum orci. Duis aliquet lorem vel leo malesuada, non auctor enim consectetur.",
        "Maecenas ullamcorper justo id purus fermentum ultrices. Integer vitae felis mi. Ut dignissim magna ac sapien tincidunt consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      ],
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      author: "Emily Brown",
      postedDate: "05 Feb 2023",
      additionalLink: {
        url: "https://example.com",
        label: "Lorem ipsum dolor sit amet",
      },
    },
    {
      id: "zZ1yX8wV",
      title: "New Campus Inauguration Ceremony",
      image: img5,
      articles: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros tristique, rhoncus lacus nec, congue enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        "Praesent porttitor eros non suscipit rutrum. Curabitur id diam auctor, aliquam ligula ac, ultrices nisi. Sed quis lectus libero. Suspendisse eget sollicitudin quam, vel dictum nunc. Vivamus sagittis, libero a placerat malesuada, eros lectus fermentum nisi, ac ullamcorper dolor lectus nec urna.",
        "Nulla lobortis purus vel aliquam vestibulum. Aenean bibendum, mauris et feugiat posuere, urna sem sollicitudin orci, et volutpat mauris ante a mauris. Duis sagittis tellus a nisl condimentum, vitae efficitur lorem scelerisque. Donec ullamcorper ut orci sit amet tempor. Fusce tempus consequat lorem.",
        "Nunc eu elit ac sem placerat consectetur vel non odio. Ut convallis mauris vitae nisi sollicitudin, id malesuada enim condimentum. Suspendisse potenti. Fusce volutpat urna non sapien mattis, id iaculis justo posuere. Duis consequat sapien vel tellus mattis tincidunt.",
      ],
      summary: "Inauguration ceremony for the new campus.",
      author: "David Johnson",
      postedDate: "02 Nov 2023",
      additionalLink: {
        url: "https://example.com",
        label: "Lorem ipsum dolor sit amet",
      },
    },
    {
      id: "qR9sE2tF",
      title: "Student Achievements Celebration",
      image: img6,
      articles: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada luctus ex, quis fermentum orci bibendum id. Proin lacinia bibendum sapien a sagittis. Suspendisse potenti.",
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam aliquam aliquet ex, et feugiat purus faucibus a. Duis a ante sit amet mauris dapibus pretium vel nec ante. Sed nec risus non libero pharetra mattis.",
        "Nullam dapibus turpis vel quam condimentum, id finibus metus tincidunt. Fusce porta varius metus vel tempor. Nam ultrices tincidunt felis a semper. Fusce hendrerit, dolor quis mattis congue, felis mi laoreet tortor, vitae fermentum sem dui id quam.",
        "Integer ac diam nec erat fringilla cursus. Duis nec metus et elit sagittis placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam tincidunt volutpat ligula, in rutrum neque efficitur at.",
      ],
      summary: "Celebration for the achievements of students.",
      author: "Sophia Williams",
      postedDate: "14 Sep 2023",
      additionalLink: {
        url: "https://example.com",
        label: "Lorem ipsum dolor sit amet",
      },
    },
    {
      id: "mN3bV7cX",
      title: "Community Outreach Program",
      image: img3,
      articles: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula massa ac ipsum vestibulum, non fringilla lacus aliquet. Nullam tristique risus id est congue, vel molestie lorem rutrum.",
        "Fusce interdum velit id nunc dictum lacinia. Nulla id purus quis dolor tempus lacinia. Praesent condimentum urna ut metus mattis auctor. Duis et aliquet nisi. Pellentesque pretium magna vel nulla consequat, quis auctor enim aliquam.",
        "Proin ultricies diam nec justo posuere, at gravida nunc mattis. Integer malesuada felis felis, ac laoreet ex tempus in. Proin sit amet sapien ultricies, efficitur tortor nec, mattis elit. In hac habitasse platea dictumst.",
        "Vivamus non magna convallis, vehicula mauris et, euismod enim. Phasellus vel ultricies orci. Nullam auctor massa ac lacus accumsan feugiat. Integer pharetra, dui et suscipit tempor, lorem eros rutrum arcu, nec aliquet turpis urna nec lectus.",
      ],
      summary: "Program aimed at community engagement and outreach.",
      author: "Emma Garcia",
      postedDate: "29 Aug 2023",
      additionalLink: {
        url: "https://example.com",
        label: "Lorem ipsum dolor sit amet",
      },
    },
    {
      id: "dF8gH2jK",
      title: "Faculty Development Workshop",
      image: img1,
      articles: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rhoncus feugiat augue, id venenatis velit dapibus in. Duis in lorem at eros vehicula iaculis. Nulla facilisi. Fusce ultrices mi sed libero pharetra volutpat.",
        "Integer vitae purus nec sem malesuada efficitur. Vestibulum mattis interdum arcu, vitae laoreet nisl dignissim quis. Mauris congue justo vel ex fringilla, id gravida ligula malesuada. Curabitur interdum felis non mi lacinia, nec lobortis nisi sodales.",
        "Sed auctor diam non nunc convallis, a iaculis lacus bibendum. Curabitur nec dui quis odio rutrum bibendum. Aliquam placerat, orci vel convallis efficitur, leo lacus dignissim est, ac lobortis metus mi nec sapien.",
        "Cras vestibulum libero vel odio pellentesque, id egestas dui vehicula. Curabitur laoreet lorem velit, et facilisis nisi posuere nec. Donec vitae magna sed eros feugiat malesuada vel a felis. In eget ex metus.",
      ],
      summary: "Workshop focusing on professional development for faculty.",
      author: "Daniel Martinez",
      postedDate: "07 Jul 2023",
      additionalLink: {
        url: "https://example.com",
        label: "Lorem ipsum dolor sit amet",
      },
    },
  ];

  function getLatestNews(newsData) {
    // Sort the news items by posted date in descending order
    const sortedNews = newsData.sort((a, b) => {
      const dateA = new Date(a.postedDate);
      const dateB = new Date(b.postedDate);
      return dateB - dateA;
    });

    // Return the first 4 news items
    return sortedNews.slice(0, 4);
  }

  const getItemById = (id) => {
    const gotItem = newsData.filter((item) => item.id === id);
    return gotItem[0];
  };

  if (req.type === "all") {
    return newsData;
  } else if (req.type === "random") {
    return getRandomItems(newsData, 4, req.param);
  } else if (req.type === "recent") {
    return getLatestNews(newsData);
  } else if (req.type === "byId") {
    return getItemById(req.param);
  } else {
    return null;
  }
};

export default useNews;
