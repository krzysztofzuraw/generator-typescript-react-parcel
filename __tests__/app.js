"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-typescript-react-parcel:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "fake", author: "Fake author" });
  });

  it("creates files", () => {
    assert.file([
      "tsconfig.json",
      "prettier.config.js",
      "package.json",
      "jest.stubs.js",
      "jest.config.js",
      "index.html",
      ".huskyrc.js",
      ".gitignore",
      ".eslintrc.js",
      ".editorconfig",
      ".dependabot/config.yml",
      "typings/",
      "src/"
    ]);
  });

  it("set up proper values from prompt in package.json", () => {
    assert.jsonFileContent("package.json", {
      author: "Fake author",
      name: "fake"
    });
  });
});
