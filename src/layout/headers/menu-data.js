const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    has_children: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    has_children: true,
    title: "About",
    link: "#",
    sub_menus: [
      {
        link: "/about",
        title: "About",
      },
      {
        link: "/team",
        title: "Team Members",
      },
      {
        link: "/faq",
        title: "FAQ",
      },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    has_children: true,
    link: "#",
    title: "Service",
    sub_menus: [
      { link: "/email", title: "Email Services" },
      { link: "/integration", title: "Engineering Services" },
      { link: "/support", title: "Support" },
      { link: "/plans", title: "Plans" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    has_children: false,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: true,
    has_children: true,
    title: "Training",
    link: "/training",
    sub_menus: [
      { link: "/email", title: "Email Marketing" },
      { link: "/social-media", title: "Social Media" },
      { link: "/ai", title: "AI and ML" },
    ],
  },
];
export default menu_data;
