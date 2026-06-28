import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://portofolio-ezrasatriabagas-self.vercel.app/",
    title: "Ezra Satria Bagas Airlangga",
    description:
      "Machine Learning Engineer & Telecom Regulation Researcher — S2 Teknik Elektro Telkom University. Portfolio of ML, RAG, computer vision, and IoT projects.",
    author: "Ezra Satria Bagas Airlangga",
    profile: "https://github.com/papapipopepo",
    ogImage: "default-og.jpg",
    lang: "id",
    timezone: "Asia/Jakarta",
    dir: "ltr",
  },
  posts: {
    perPage: 6,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/papapipopepo" },
    { name: "linkedin", url: "https://linkedin.com/in/ezrasatriabagas/" },
    { name: "mail",     url: "mailto:ezra.satria16@gmail.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "linkedin", url: "https://www.linkedin.com/sharing/share-offsite/?url=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
