# WebdriverIO TypeScript BDD Cucumber Framework

### Requirements:

[![NodeJs](https://img.shields.io/badge/-NodeJS%20v18%20OR%20later-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![Java](https://img.shields.io/badge/-Java%20JDK-%23007396?logo=java&logoColor=black&)](https://www.oracle.com/java/technologies/downloads/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

### Install the dependencies:

```
yarn install
```

### Run tests:

```
Acceptance test:
  - yarn acceptance-test
  - yarn acceptance-test --headless (run in headless mode)

API test:
 - yarn api-test (api test default run in headless mode)

Run with specific tag:
 - yarn acceptance-test --cucumberOpts.tagExpression=@test1
 - yarn api-test --cucumberOpts.tagExpression=@test8

```

### Generate html report

```
yarn report
```

### Key Features

    - Cucumber BDD framework
    - Page Object Design pattern
    - Axios API Integration
    - Allure Report
    - File/Folder utilities
