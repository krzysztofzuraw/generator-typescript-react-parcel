"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-typescript-react-parcel:component", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/component"))
      .withPrompts({ name: "Component" });
  });

  it("creates file", () => {
    assert.file(["src/components/Component.tsx"]);
  });
});
