import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "./src",
  outDir: "./dist",
  // base: "/openscd-org-website/", // Uncomment this line if deploying to your own personal GitHub Page
  title: "A GENESYS Sci-Fi Campaign Setting",
  description:
    "There's always room for hope. It's the crack that lets the Light in.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      { link: "/", text: "Home" },
      { link: "Chapter1RadianceandRuin", text: "1 Radiance and Ruin" },
      {
        link: "Chapter2Beneathanewseaofstars",
        text: "2 Beneath a new sea of stars",
      },
      { link: "Chapter3TheEnclave", text: "3 The Enclave" },
      { link: "Chapter4TheFactions", text: "4 The Factions" },
      {
        link: "Chapter5WherethereisLight,therewillbeshadow",
        text: "5 Where there is Light, there will be shadow",
      },
      {
        link: "Chapter6Ofweirddiceandnonumbers",
        text: "6 Of weird dice and no numbers",
      },
      { link: "Chapter7Skills", text: "7 Skills" },
      { link: "Chapter8OfMightandMagic", text: "8 Of Might and Magic" },
      { link: "Chapter9CraftingyourDestiny", text: "9 Crafting your Destiny" },
      {
        link: "Chapter10WeaponsandEquipment",
        text: "10 Weapons and Equipment",
      },
    ],

    //
    logo: "alternate-destiny.png",
    outline: [2, 3],
    footer: {
      message: "September 4, 2025",
      copyright: "Copyright © 2025 Me",
    },
    docFooter: {
      prev: false,
      next: false,
    },
  },
});
