# `ctr` Stylus Install Examples

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ctr-lang/install-examples-Less/blob/master/LICENSE.txt)
[![wercker status](https://app.wercker.com/status/8f4ed4fde5b3de4071aa279b8a0ed791/s/master "wercker status")](https://app.wercker.com/project/byKey/8f4ed4fde5b3de4071aa279b8a0ed791)


## Description

Half the battle in web development when adopting a new tool into your workflow is getting the damn thing set up with your current workflow. I've spent far to much time doing the install/setup song and dance in my short career, so I decided I would spend the time for you since it is my song and I want you to [dance](https://www.youtube.com/watch?v=N4d7Wp9kKjA). All the build examples use the Stylus flavor of `ctr` not the JavaScript flavor. If you're interested in using the JavaScript flavor of `ctr` head on over to the [ctr-loader docs](https://docs.ctr-lang.com/javascript/ctr-loader/).

All the build examples are bare-bone setups intended to get you rockin' and rollin' as fast as possible or to act as a template to help you plug `ctr` in your personal build tool. Having said that, the build examples are not configured for production, although, you could easily configure them for production purposes. In addition, each build example has a README in which I give a little description, list the commands, and list the tech it employs.



## Configuration

The configuration of `ctr` for any build tool is dead simple as long as the build tool has a Stylus plugin, loader, or adapter given that `ctr` is a Stylus plugin. The following process is universal among all build tools.

1. Install and set up Stylus with the build tool.
    + Grunt: [grunt-contrib-stylus](https://www.npmjs.com/package/grunt-contrib-stylus)
    + Brunch: [stylus-brunch](https://www.npmjs.com/package/stylus-brunch)
    + Gulp: [gulp-stylus](https://www.npmjs.com/package/gulp-stylus)
    + Webpack: [stylus-loader](https://www.npmjs.com/package/stylus-loader)
2. Install [`ctr`](https://www.npmjs.com/package/ctr).
4. `require` `ctr`, and use the `stylus` property to get the `ctr` plugin Function for Stylus. If you want you can pass the resulting `ctr` plugin Function an option Object, although, I recommend you use the [`.ctrrc`](https://docs.ctr-lang.com/helpers/dot-ctrrc/).
```js
const ctr = require('ctr').stylus;
// plugin ctr in the "plugin" location for buildtool
// ex. plugnis: [ctr()]
```
4. Plug-in the `ctr` plugin Function.
4. Profit.



## Commands

__Prerequisites__

+ Make sure you have [yarn](https://yarnpkg.com) [installed](https://yarnpkg.com/en/docs/install).
    * Why `yarn`, and not why `npm`? There's a slew of reasons, but for me it's consistency.
    * Technically, if you want, you _should_ be able to replace `npm` with `yarn` and everything will work as expected

__Install__

+ `yarn install`

__Install All Examples__

+ `yarn run install:all`

__Scripts__

+ `yarn run script:build`
    * Builds all the examples
+ `yarn run script:clean`
    * Cleans out all the `/build` directories of examples
    * `yarn run script:clean-all` -> removes `/build` and `/node_modules`
+ `yarn run script:update-check`
    * Checks for any `package.json` updates
+ `yarn run script:update`
    * Updates all `package.json` files

__Test__

+ `yarn test`
   * Installs, builds, and tests all the examples

---

Best, te
