// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "list",
        name: "type",
        message: "What type of component is this?",
        // choices: ["Atom", "Molecule", "Organism", "Template", "Page"],
        choices: ["element", "module", "template", "Page"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{type}}s/{{pascalCase name}}/{{pascalCase name}}.module.css",
        templateFile: "plop-templates/styles.css.hbs",
      },
    ],
  });
};
