workflow "Build and test on pull request" {
  on = "pull_request"
  resolves = ["Run test"]
}

action "Install dependencies" {
  uses = "actions/npm@master"
  args = "install"
}

action "Run lint" {
  uses = "actions/npm@master"
  needs = ["Install dependencies"]
  args = "run lint"
}

action "Run tsc" {
  uses = "actions/npm@master"
  needs = ["Install dependencies"]
  args = "run tsc"
}

action "Run test" {
  uses = "actions/npm@master"
  needs = ["Install dependencies"]
  args = "test"
}

