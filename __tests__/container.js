"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-typescript-react-parcel:container", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/container"))
      .withPrompts({ name: "Container" });
  });

  it("creates file", () => {
    assert.file(["src/containers/Container.tsx"]);
  });
});
