# RedFoxFinn.github.io

Portfolio page for github pages built with React, React Router and inline styles (provided by the self built tool).

![Page version](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/RedFoxFinn/RedFoxFinn.github.io/dev/package.json&query=version&color=008080&label=version)
![Test Status](https://github.com/RedFoxFinn/RedFoxFinn.github.io/workflows/tests/badge.svg?branch=dev)
[![codecov](https://codecov.io/gh/RedFoxFinn/RedFoxFinn.github.io/branch/dev/graph/badge.svg?token=ANPWB48VL4)](https://codecov.io/gh/RedFoxFinn/RedFoxFinn.github.io)

### Features

Page was built mainly with JS, ReactJS and React Router.

Testing is done with Jest & React Testing Library.

Tests are run with command `yarn test` triggering React Scripts command `test` with some CLI options.

On GitHub Actions tests are run with command `yarn ci` triggering React Scripts command `test` but with altered CLI options (ie. CI=true).

GitHub Actions runs tests, uploads coverage reports to [Codecov](https://codecov.io) and README.md gets updated coverage status badge. Status badge `tests` gets updated on every workflow run: tests either get status `passing` or `failing`.

If the tests are passing, GH Actions workflow then creates production build and deploys that build to `gh-pages` branch as production ready page.

On every push to GH branch dev status badge labeled `version` gets updated to new version number.

### New tools
- language (check & set)
- styles (get inline styles for components)
- text (provides texts for components with language options)
- theme (theme switcher)
