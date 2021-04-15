# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.8.2](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.8.1...v0.8.2) (2021-04-15)

### [0.8.1](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.8.0...v0.8.1) (2021-04-13)


### Features

* **selector styling:** added styling to theme and language selectors ([7905d79](https://github.com/RedFoxFinn/RedFoxFinn.github.io/commit/7905d79be8afa38542b51a6a7f7dd450d67841cf))

## [0.8.0](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.16...v0.8.0) (2021-04-12)


### ⚠ BREAKING CHANGES

* **global state:** due removal of major libraries, old version differs quite a lot: new version relies
on react context api instead of old redux, react-redux & redux-saga -combination-

### Features

* **global state:** removed redux, react-redux & redux-saga, global state using react context api ([50658ab](https://github.com/RedFoxFinn/RedFoxFinn.github.io/commit/50658abfe097a209766885b3b2001411d0591002))

### [0.7.16](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.15...v0.7.16) (2021-04-12)

### [0.7.15](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.14...v0.7.15) (2021-04-09)


### Features

* **global state:** added Redux/Redux-Saga/React-Redux global state to application ([b83bf6f](https://github.com/RedFoxFinn/RedFoxFinn.github.io/commit/b83bf6fe17a9e840051d865ce36fcad770a513cd))

### [0.7.14](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.13...v0.7.14) (2021-04-08)

### [0.7.13](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.12...v0.7.13) (2021-04-08)


### Bug Fixes

* **theming:** fixed setAppBody issue: wasn't called ([53b6b67](https://github.com/RedFoxFinn/RedFoxFinn.github.io/commit/53b6b67ad1a773889b5e20eb7e1491ce62e46e26))

### [0.7.12](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.11...v0.7.12) (2021-04-08)


### Bug Fixes

* **theme:** application background setting function within root component, not in styles ([b3129b5](https://github.com/RedFoxFinn/RedFoxFinn.github.io/commit/b3129b5d888ffdbd1427511d5b94206b56f899d9))

### [0.7.11](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.10...v0.7.11) (2021-04-08)


### Features

* **theme:** root component now triggers theme setting ([8d63d07](https://github.com/RedFoxFinn/RedFoxFinn.github.io/commit/8d63d07710908f0622324ec0797ee2a0610000a0))

### [0.7.10](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.9...v0.7.10) (2021-04-08)

### [0.7.9](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.8...v0.7.9) (2021-04-08)

### [0.7.8](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.7...v0.7.8) (2021-04-08)

### [0.7.7](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.6...v0.7.7) (2021-04-08)

### [0.7.6](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.5...v0.7.6) (2021-04-08)

### [0.7.5](https://github.com/RedFoxFinn/RedFoxFinn.github.io/compare/v0.7.4...v0.7.5) (2021-04-08)

### [0.7.4](///compare/v0.7.3...v0.7.4) (2021-04-08)


### Features

* **new tool: wraptextdev:** added new tool: wrapTextDev; styling; c90d489

### [0.7.3](///compare/v0.7.2...v0.7.3) (2021-04-07)

### [0.7.2](///compare/v0.7.1...v0.7.2) (2021-04-06)

### [0.7.1](///compare/v0.7.0...v0.7.1) (2021-04-06)

## [0.7.0](///compare/v0.6.0...v0.7.0) (2021-04-06)


### ⚠ BREAKING CHANGES

* **internal dependecies:** internal dependecies on Text.jsx added

* **internal dependecies:** links.jsx & cv.jsx now rely on Text.HeaderText on page headers 5c413b8

## [0.6.0](///compare/v0.5.1...v0.6.0) (2021-04-06)


### ⚠ BREAKING CHANGES

* new functionalities and components replacing & complimenting existing ones

### Features

* about.jsx content generators added, home.jsx content generator added, etc 3b34a3f

### [0.5.1](///compare/v0.5.0...v0.5.1) (2021-04-06)

## [0.5.0](///compare/v0.4.3...v0.5.0) (2021-04-06)


### ⚠ BREAKING CHANGES

* changed how text renders on home page

### Features

* added helper function to home.jsx; refactored text.jsx and text.js; fixed tests c46ea30

### [0.4.3](///compare/v0.4.2...v0.4.3) (2021-04-06)


### Features

* **component links draft:** component 'Links' drafted, various comments added for documenting code f2a6df2

### [0.4.2](///compare/v0.4.1...v0.4.2) (2021-04-04)


### Features

* refactoring idGen, text.jsx 32bd6b1

### [0.4.1](///compare/v0.4.0...v0.4.1) (2021-04-04)

## [0.4.0](///compare/v0.3.0...v0.4.0) (2021-04-04)


### ⚠ BREAKING CHANGES

* tool dependent functionalities

### Features

* added new tool: checker, refactoring and extending text, tests 47eb436

## [0.3.0](///compare/v0.2.3...v0.3.0) (2021-04-01)


### ⚠ BREAKING CHANGES

* **idgen, text:** new idGen is required in most components and old id's won't work. various
refactoring done.

### Features

* **idgen, text:** new tool: idGen, new functions: text, tests, new components a0fac2c

### [0.2.3](///compare/v0.2.2...v0.2.3) (2021-03-30)

### [0.2.2](///compare/v0.2.1...v0.2.2) (2021-03-25)


### Features

* **text tool:** tests for text tool b47ef72

### [0.2.1](///compare/v0.2.0...v0.2.1) (2021-03-25)


### Features

* **language tool:** language tool finalized, unit tested a8c4161

## 0.2.0 (2021-03-24)


### ⚠ BREAKING CHANGES

* **rffio:** new components added, old modified, new tools and old tools modified

### Features

* **rffio:** started actual development by adding tests, components, tools f843adb
