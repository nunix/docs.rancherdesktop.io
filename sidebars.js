/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        "getting-started/introduction", 
        "getting-started/installation", 
        "getting-started/features",
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        "tutorials/working-with-images", 
        "tutorials/working-with-containers",
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'How-to Guides',
      items: [
        "how-to-guides/hello-world-example",
        "how-to-guides/vs-code-docker", 
        "how-to-guides/vs-code-remote-containers", 
        "how-to-guides/rancher-on-rancher-desktop",
        "how-to-guides/skaffold-and-rancher-desktop",
        "how-to-guides/windows-provisioning-scripts",
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'References',
      items: ["references/architecture"],
      collapsed: true,
    },
    "faq"
  ],   
};

module.exports = sidebars;
