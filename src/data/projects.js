// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
  {
    id: 1,
    title: "健康管理平台",
    category: "网站开发",
    img: require("@/assets/images/web-project-2.jpg"),
  },
  {
    id: 2,
    title: "文件管理",
    category: "手机应用",
    img: require("@/assets/images/mobile-project-2.jpg"),
  },
  {
    id: 3,
    title: "项目UI设计",
    category: "UI/UX设计",
    img: require("@/assets/images/ui-project-1.jpg"),
  },
  {
    id: 4,
    title: "云存储平台",
    category: "UI/UX设计",
    img: require("@/assets/images/ui-project-2.jpg"),
  },
  {
    id: 5,
    title: "社交APP",
    category: "手机应用",
    img: require("@/assets/images/mobile-project-1.jpg"),
  },
  {
    id: 6,
    title: "设计系统",
    category: "网站开发",
    img: require("@/assets/images/web-project-1.jpg"),
  },
];

export default projects;
