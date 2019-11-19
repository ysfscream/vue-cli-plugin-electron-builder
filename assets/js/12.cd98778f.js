(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{175:function(e,t,i){"use strict";i.r(t);var n=i(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),i("ol",[e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),i("li",[e._v("You may delete any electron-builderconfig options, they will not be used. By default, they are in "),i("code",[e._v("package.json")]),e._v(" under "),i("code",[e._v("build")]),e._v(". Any changes that you have made to these must be "),i("router-link",{attrs:{to:"./configuration.html#configuring-electron-builder"}},[e._v("moved to plugin options")]),e._v(".")],1),e._v(" "),i("li",[e._v("You may remove "),i("code",[e._v("webpackConfig")]),e._v(" and "),i("code",[e._v("webpackMainConfig")]),e._v(" from vue-cli-plugin-electron-builder's plugin options. Webpack config for the renderer process is your normal webpack config, and you can use the "),i("code",[e._v("chainWebpackMainProcess")]),e._v(" function to customize the main process webpack config. If you need to customize the renderer process, use the "),i("code",[e._v("chainWebackRendererProcess")]),e._v(" function ("),i("router-link",{attrs:{to:"./configuration.html#webpack-configuration"}},[e._v("guide")]),e._v(").")],1),e._v(" "),e._m(6)]),e._v(" "),e._m(7),e._v(" "),i("ul",[i("li",[e._v("Electron-webpack is no longer used. Instead, your app is built as normal (but with some slight configuration changes).")]),e._v(" "),i("li",[e._v("This means there is no need to change your config to work with stylus, sass, or any other special files.")]),e._v(" "),e._m(8),e._v(" "),i("li",[e._v("Typescript support is "),i("router-link",{attrs:{to:"./configuration.html#typescript-options"}},[e._v("automatic")]),e._v(" for both processes, just add the "),i("code",[e._v("@vue/typescript")]),e._v(" plugin.")],1),e._v(" "),e._m(9),e._v(" "),i("li",[e._v("The "),i("router-link",{attrs:{to:"./guide.html#folder-structure"}},[e._v("folder structure")]),e._v(" has changed dramatically.")],1),e._v(" "),i("li",[e._v("Electron-builder's "),i("router-link",{attrs:{to:"./configuration.html#configuring-electron-builder"}},[e._v("config")]),e._v(" is now taken from the "),i("code",[e._v("builderOptions")]),e._v(" key in vue-cli-plugin-electron-builder's plugin options.")],1),e._v(" "),i("li",[e._v("To learn more about the internals of this plugin, see "),i("router-link",{attrs:{to:"./guide.html#how-it-works"}},[e._v("how it works")]),e._v(".")],1)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"upgrading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upgrading","aria-hidden":"true"}},[this._v("#")]),this._v(" Upgrading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("Note")]),this._v(" "),t("p",[this._v("This guide is for upgrading from <=v0.3.2 to >=v1.0.0.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"steps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps","aria-hidden":"true"}},[this._v("#")]),this._v(" Steps")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Re-invoke the generator for vue-cli-plugin-electron-builder by running "),t("code",[this._v("vue invoke electron-builder")]),this._v(". Make sure to update the package before running.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("You may delete "),t("code",[this._v("src/main/index.js")]),this._v(". If you have modified it, those modifications must be moved to "),t("code",[this._v("src/background.js")]),this._v(" after re-invoking the generator.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("You may delete any electron-webpack config options, they will not be used. By default, they are in "),t("code",[this._v("package.json")]),this._v(" under "),t("code",[this._v("electronWebpack")]),this._v(". Instead, your regular app's config is extended.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[e._v("You may remove "),i("code",[e._v("electron-webpack")]),e._v(", "),i("code",[e._v("electron-builder")]),e._v(", and, if used, "),i("code",[e._v("electron-webpack-ts")]),e._v(" from your devDependencies. You may also remove "),i("code",[e._v("source-map-support")]),e._v(" from your dependencies.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"what-has-changed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-has-changed","aria-hidden":"true"}},[this._v("#")]),this._v(" What has changed")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("The commands have been renamed from "),t("code",[this._v("command:electron")]),this._v(" to "),t("code",[this._v("electron:command")]),this._v(" (since 1.0.0-rc.4)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Your normal build will not be overwritten by "),t("code",[this._v("electron:build")]),this._v(".")])}],!1,null,null,null);t.default=o.exports}}]);