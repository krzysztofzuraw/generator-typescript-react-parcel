"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the supreme ${chalk.red(
          "generator-typescript-react-parcel"
        )} generator!`
      )
    );

    this.answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
        default: this.appname
      },
      {
        type: "input",
        name: "author",
        message: "Your name",
        default: ""
      }
    ]);
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      {
        appname: this.answers.name,
        author: this.answers.author
      },
      null,
      { globOptions: { dot: true } }
    );
  }

  install() {
    const dependencies = [
      "react",
      "react-dom",
      "react-redux",
      "redux",
      "redux-observable",
      "reselect",
      "rxjs",
      "typesafe-actions"
    ];
    const devDependencies = [
      "typescript",
      "rimraf",
      "pretty-quick",
      "jest",
      "eslint",
      "eslint-config-prettier",
      "@typescript-eslint/parser",
      "@typescript-eslint/eslint-plugin",
      "@types/jest",
      "prettier",
      "ts-jest",
      "parcel-bundler",
      "typescript-tslint-plugin",
      "@types/react",
      "@types/react-dom",
      "concurrently",
      "husky",
      "@types/react-redux"
    ];
    this.npmInstall(dependencies, {
      save: true
    });
    this.npmInstall(devDependencies, {
      save: true
    });
    // this.installDependencies({ npm: true, bower: false });
  }
};
