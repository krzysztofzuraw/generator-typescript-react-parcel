"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-typescript-react-parcel:model", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/model"))
      .withPrompts({ name: "Model" });
  });

  it("creates file", () => {
    assert.file(["src/models/Model.tsx"]);
  });
});
