"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the ${chalk.red(
          "generator-typescript-react-parcel:feature"
        )} generator!`
      )
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your feature name",
        default: this.appname
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath("src/features"),
      {
        featureName: this.answers.name
      },
      null,
      { globOptions: { dot: true } }
    );
  }
};
