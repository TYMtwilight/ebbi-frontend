const ALL_NOTES = [
  {
    type: "folder",
    name: "frontend",
    children: [{ type: "file", id: 1, fileName: "eslint-vs-prettier-roles" }],
  },
  {
    type: "folder",
    name: "git",
    children: [{ type: "file", id: 2, fileName: "gitignore-basics" }],
  },
  {
    type: "folder",
    name: "java",
    children: [
      {
        type: "folder",
        name: "collections",
        children: [{ type: "file", id: 5, fileName: "list-vs-iterable" }],
      },
      { type: "file", id: 3, fileName: "functional-interface" },
      { type: "file", id: 4, fileName: "optional-orelsethrow-supplier" },
    ],
  },
  {
    type: "folder",
    name: "spring",
    children: [
      {
        type: "folder",
        name: "controller",
        children: [
          { type: "file", id: 6, fileName: "01_rest-annotations" },
          { type: "file", id: 7, fileName: "02_constructor-injection" },
          { type: "file", id: 8, fileName: "03_rest-controller-basic" },
        ],
      },
      {
        type: "folder",
        name: "data",
        children: [{ type: "file", id: 9, fileName: "01_jpa-entity-mapping" }],
      },
      {
        type: "folder",
        name: "test-reading",
        children: [{ type: "file", id: 10, fileName: "01_test-anatomy" }],
      },
    ],
  },
  {
    type: "folder",
    name: "web",
    children: [
      {
        type: "folder",
        name: "security",
        children: [
          { type: "file", id: 11, fileName: "iframe-sandbox-attribute" },
        ],
      },
    ],
  },
];

export { ALL_NOTES };
