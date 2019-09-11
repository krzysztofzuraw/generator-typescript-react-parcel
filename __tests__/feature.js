"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-typescript-react-parcel:feature", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/feature"))
      .withPrompts({ name: "Feature" });
  });

  it("creates file", () => {
    assert.file([
      "src/features/Feature/actions.ts",
      "src/features/Feature/epics.ts",
      "src/features/Feature/index.ts",
      "src/features/Feature/reducers.ts",
      "src/features/Feature/selectors.ts"
    ]);
  });
});
