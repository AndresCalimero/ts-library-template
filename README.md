# ts-library-template

[![CI/CD](https://github.com/AndresCalimero/ts-library-template/workflows/CI/CD/badge.svg)](https://github.com/AndresCalimero/ts-library-template/actions)
[![Coverage Status](https://coveralls.io/repos/github/AndresCalimero/ts-library-template/badge.svg?branch=master)](https://coveralls.io/github/AndresCalimero/ts-library-template?branch=master)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![typedoc](https://img.shields.io/badge/docs-typedoc-green.svg)](https://typedoc.org/)
[![parcel](https://img.shields.io/badge/bundler-Parcel-green.svg)](https://parceljs.org/)
[![Depfu](https://badges.depfu.com/badges/a369f5479f5c2867b3f9532a82bebc4c/overview.svg)](https://depfu.com/github/AndresCalimero/ts-library-template?project_id=11434)

This is an example of scaffolding for a library using TypeScript and Parcel.

*IMPORTANT*: The placeholders must be replaced with their actual values, please change occurrences of:

* `AndresCalimero` (GitHub user) and `ts-library-template` (repo name) in **README.md**
* `ts-library-template` with the name of the library in **package.json**
* `@andrescalimero` with the GitHub username in lowercase in **package.json**
* `AndresCalimero` (GitHub user), `ts-library-template` (repo name), `Andres Calimero` (author name) and `andrescalimero@hotmail.es` (author email) in **package.json**
* `Andres Calimero` (author name) and `2020` (year) in **LICENSE**
* `AndresCalimero` (GitHub user) and `ts-library-template` (repo name) in **CONTRIBUTING.md**

## Configuration

### Auto publish

Due to limitations in GitHub Actions you have to provide a GitHub PAT (Personal Access Token) if you want to publish the library and the documentation automatically on every release, to provide the PAT you have to set the variable `ACCESS_TOKEN` in your repository's secrets with the token as the value. The token should have access to the `repo` scope.

### Publishing to NPM

If you want your library to be published to NPM automatically you must set the variable `NPM_TOKEN` in your repository's secrets. It should be a valid NPM personal token with the right permissions.
