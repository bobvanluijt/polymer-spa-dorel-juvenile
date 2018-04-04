/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/app-config.js","d5ece0b556bcb0eb3350dd50d93ac24e"],["/assets/fonts/maxicosi/12fde5f3-8ba8-48f8-8463-4a5675b8fcbb.svg","2bcac3e37af2a5e357d66737edf68509"],["/assets/fonts/maxicosi/160da3b6-713f-4df7-8737-6aface936d75.svg","05f729491c9989b6bac94c6897607380"],["/assets/fonts/maxicosi/1f9dc61c-c806-497b-8550-eaaf95c967d5.woff","604c91dbc06f546df3131123c95fa19e"],["/assets/fonts/maxicosi/2a249aea-019a-4d72-b78e-2f218623feb4.svg","2d1c791e100155fd988f5800ca051eae"],["/assets/fonts/maxicosi/2dbdfa91-1504-4ab4-9072-465cb956eecb.eot","279ae30e9ddebbc4da1478bdb9e07d6e"],["/assets/fonts/maxicosi/327a16d0-37d7-4efe-89cc-5f66f6be6cad.svg","74c8e9556db85ece9f16b9108ff5de1a"],["/assets/fonts/maxicosi/3aa77b29-0d11-48fa-a1e3-2577d0255c15.ttf","5ffc680cd1aeb5e1ae77c61866f338e6"],["/assets/fonts/maxicosi/40ccbf52-e521-420a-a0ee-88a0d21e0562.woff","bc900cfa9ab1dda6ca00def4bb7551e3"],["/assets/fonts/maxicosi/5e5f3fc7-82ed-4789-b456-6545eac2431c.woff","5d4928c2911f478f2593cd7cc0112f31"],["/assets/fonts/maxicosi/6bdf4c02-6ecc-4c32-947a-40a54a4afee9.woff","7b2b5c0c325d2ec5617421160cdd81a7"],["/assets/fonts/maxicosi/6ce46d72-38d7-4e71-aad4-77ea074def44.eot","ba7eea89cc4153205abf93c4fda0d49d"],["/assets/fonts/maxicosi/866c34d8-22cd-48e2-ac53-15772f1e7be9.ttf","40d283f4299a436d73764119a64956a2"],["/assets/fonts/maxicosi/997684f7-b4d9-4d1e-ad63-875309908209.svg","0b3e93d54d2a9bd8d26d368b37ec1fea"],["/assets/fonts/maxicosi/9e56dad8-dc3d-435d-8dae-55e3e6a0d373.eot","ce8146cefed8114470bff518b96d7c1d"],["/assets/fonts/maxicosi/a982b06c-39e5-4ff5-b598-f28892654d48.woff","cfe52a10ba99b7e592a6d264c098e606"],["/assets/fonts/maxicosi/b4904756-335e-47ac-a4be-9c117bb4a051.svg","d26215a348c4a0d6f4febd986d107248"],["/assets/fonts/maxicosi/b920a103-1d04-45cb-ba06-68ad285b1d6b.ttf","5bd001552e3534157bb5b1037a655d30"],["/assets/fonts/maxicosi/ca73a641-3f48-4adf-97cd-df8e72317714.eot","cf34d396f95a8d7fea231425d74a16dd"],["/assets/fonts/maxicosi/d285ea7b-98b7-41d3-965f-fcaa780ee1c8.ttf","1a05e39405b8ceb635931d22cb98b7b5"],["/assets/fonts/maxicosi/d749a250-9511-4c3f-b328-b3e8dcb0c101.eot","fd5be650629088870c325c4814954e8b"],["/assets/fonts/maxicosi/da1396a8-496c-4ef0-ad98-6a8a56946fd0.ttf","39bef3d2460be7dc2840a29fae91c188"],["/assets/fonts/maxicosi/e8869c52-5d75-4830-b70f-216b701a3953.woff","ffc759df31860a8af49d19882212a5d5"],["/assets/fonts/maxicosi/f059657c-b355-48e1-a08f-ead7f6c8e423.eot","6c5a0fa9c5daa7cc2c9526100e784202"],["/assets/fonts/maxicosi/fe772678-ca98-4472-82e6-108012fd9375.ttf","659ce9b166631807708a2c3084611101"],["/assets/images/360viewer/01.jpg","1d0de54f57d6c5c27f9348c400df59ad"],["/assets/images/360viewer/02.jpg","218caa57ecbef7c45aa026766f45a084"],["/assets/images/360viewer/03.jpg","225817aebfd77996d5b892e120440a35"],["/assets/images/360viewer/04.jpg","e6e6694b93a7712618a999325a9b3501"],["/assets/images/360viewer/05.jpg","c27fd52cd06bd334b0129dfccf2c9d97"],["/assets/images/360viewer/06.jpg","794b185d3ea482e4c31d85f565079a94"],["/assets/images/360viewer/07.jpg","0f5200473d369e595d880eac679dc182"],["/assets/images/360viewer/08.jpg","cd60ff928c31e35dd15e43b36d615c38"],["/assets/images/360viewer/09.jpg","cd95411879c4bdef084a8e3d0cd23690"],["/assets/images/360viewer/10.jpg","203fc5d4064ba613d3fb073b6aafe1c5"],["/assets/images/360viewer/11.jpg","ee02da27979b37ae37c0dfc55ba07822"],["/assets/images/360viewer/12.jpg","f2d36f3f3afed2ef5eebd959695045e2"],["/assets/images/360viewer/13.jpg","a9710144aedd8836bab1aefcebb82c8b"],["/assets/images/360viewer/14.jpg","d6000f79b937cf37ba451aa87f7ec3fe"],["/assets/images/360viewer/15.jpg","a205132fcb1a54ac5db5d280bb1b9614"],["/assets/images/360viewer/16.jpg","50c66e0823c78ba80424ef15a6fdeeab"],["/assets/images/360viewer/17.jpg","8de799887971ecd5ab12c57233acbf24"],["/assets/images/360viewer/18.jpg","f5b8b2b15040d22f7ac156c478b48287"],["/assets/images/360viewer/19.jpg","c63245d5f772d4ea6c9c18108310dda1"],["/assets/images/360viewer/20.jpg","ff7ddd23931468fa793145ad4562828d"],["/assets/images/360viewer/21.jpg","d344470ebbad84eab163f7ea8bf52a2e"],["/assets/images/360viewer/22.jpg","7fd8cab94dfce7e0d24e2fcb13c00076"],["/assets/images/360viewer/23.jpg","1d45b3b6e47094f8081c8fbb4db0f153"],["/assets/images/_OLD/branded-example-image.jpg","0744e114e2bfbbc377d55eaf39ff9f51"],["/assets/images/_OLD/child-father-boat.jpg","23f8c544fea7e6194de8005dc3af3d36"],["/assets/images/_OLD/child-father-fly.jpg","96f63e63fb9a432a25b9fb3b2c8bd3a1"],["/assets/images/_OLD/child-superhero.jpg","bd152482cbd38b898a3a7c99e693f1b1"],["/assets/images/_OLD/office-space-2.jpg","eddf9f71a62847c658b13eab54e86fa5"],["/assets/images/_OLD/office-space-4.jpg","3adb74e46159f69e78b104e99d0ea510"],["/assets/images/_OLD/office-space-6.jpg","df6e575e9b3e48147a47650280015f05"],["/assets/images/_OLD/office-space.jpg","df981fce6ac9b9099981b85552b24f2e"],["/assets/images/_OLD/temp_maxicosi_mura-plus-transparent.png","d290831a0551436c8880208d3b678a5e"],["/assets/images/branded-example-image.jpg","e5a61b585948902162a7b9b2f9d14f6e"],["/assets/images/child-father-boat.jpg","e88b948b0139be3ba39f86e3ab87b344"],["/assets/images/child-father-fly.jpg","81054971694270615bb50c9fe4813f7b"],["/assets/images/child-pilot.jpg","225bd16506c1b4a508dabe0cf0bc45b3"],["/assets/images/child-superhero.jpg","c2ed079e4f89390854f028b97fe62035"],["/assets/images/dorel.svg","c0839a4229c0de9ae3c5352d3fe883b1"],["/assets/images/favicons/android-chrome-192x192.png","4b1d07087e7d1254578fda314eda9fd0"],["/assets/images/favicons/android-chrome-512x512.png","a90acc6c46e1d0afa7fbc9d6959a61c6"],["/assets/images/favicons/apple-touch-icon.png","004818a7519f2cf43a137e6a8cfab751"],["/assets/images/favicons/favicon-16x16.png","927e81cd5c5f6795615101f215fe03ef"],["/assets/images/favicons/favicon-32x32.png","0d657548fbe9231863179f2feac37697"],["/assets/images/favicons/mstile-144x144.png","419a34ca80be18ffa35f0c23a7d8253d"],["/assets/images/favicons/mstile-150x150.png","01840ef2669cdd0ce8b9c83d3d5d7c8e"],["/assets/images/favicons/mstile-310x150.png","0b3ba587c147e1b9e738af4383fc41fe"],["/assets/images/favicons/mstile-310x310.png","9c097c016a30c9fcd35d8abd707c65c1"],["/assets/images/favicons/mstile-70x70.png","d094d059453e5244e9b202722f12abc1"],["/assets/images/favicons/safari-pinned-tab.svg","3bf5914c2f23538e7b3280006ca5320d"],["/assets/images/logos/logo-dorel.svg","539ce648f8aed5accabe0405b560e46c"],["/assets/images/logos/logo-maxi-cosi.svg","73026673e2f1e8430b0a83ddd6f71c58"],["/assets/images/markers/home-marker.png","d560e9d4a69ff635330ee7fd485868fc"],["/assets/images/markers/shop-marker.png","8eeebe0ebef1f36ac87d8369f21aaf01"],["/assets/images/markers/vip-marker.png","775731cbf1ba15b5155c664cb7f3f0b6"],["/assets/images/office-space-2.jpg","bd40c838acd744c53ebc8f0d45d67fb7"],["/assets/images/office-space-4.jpg","3067b7deb18dd00ba493809d35a68b58"],["/assets/images/office-space-6.jpg","3e308da781191ed6b3a143c4b2a03d55"],["/assets/images/office-space.jpg","fd3c114b7242f1dd0f13b155a6d4af3b"],["/assets/images/placeholders/cta/placeholder.jpg","827b556d016a16e317cb2c3143ce0a5c"],["/assets/images/placeholders/hero/placeholder.jpg","827b556d016a16e317cb2c3143ce0a5c"],["/assets/images/placeholders/image-wrap/placeholder.jpg","827b556d016a16e317cb2c3143ce0a5c"],["/assets/images/placeholders/indigo/placeholder-hero.jpg","ec9183757b550db340b5262dcc1b6cab"],["/assets/images/placeholders/indigo/placeholder.jpg","827b556d016a16e317cb2c3143ce0a5c"],["/assets/images/placeholders/related/placeholder.jpg","827b556d016a16e317cb2c3143ce0a5c"],["/assets/images/placeholders/showcase/placeholder.jpg","827b556d016a16e317cb2c3143ce0a5c"],["/assets/images/placeholders/slideshow/placeholder.jpg","827b556d016a16e317cb2c3143ce0a5c"],["/assets/images/temp-stroller-red.png","680f580cdba72c52afc375c111aad9b7"],["/assets/images/temp_maxicosi_mura-plus-transparent.jpg","c6ab3b57cfa658f672a5eeb4027d1bfb"],["/assets/images/temp_maxicosi_mura-plus-transparent.png","d368dfbd6f98c646436a1b38af996360"],["/assets/js/polymer-global-variables.js","a8e26230b58f6a851cd8831b2e74f4c7"],["/bower_components/app-layout/app-drawer/app-drawer.html","e9076e309f6194958ac1dd3894a3e371"],["/bower_components/app-route/app-location.html","0c082f44abb664591f5b99e57a3855e6"],["/bower_components/app-route/app-route-converter-behavior.html","3b85a02b434cbccdcb87396be3554258"],["/bower_components/app-route/app-route.html","f3550c2eff5c339841d95e47c26dfba6"],["/bower_components/font-roboto/roboto.html","cc5ab0db2b4afcd6b3490af9ba55bb98"],["/bower_components/google-apis/google-maps-api.html","ffc39026137fb50797ebfc9c7c8cf562"],["/bower_components/google-apis/google-youtube-api.html","95c7667f30f21ec613a3ffd1f716832e"],["/bower_components/google-map/google-map-marker.html","d4432d8c2b75325d455c0f975d76107a"],["/bower_components/google-map/google-map.html","d32876f5453062104afe0a84983cc606"],["/bower_components/google-tag-manager/google-tag-manager.html","b91c73395be6e2c10cdfe83844397046"],["/bower_components/google-youtube/google-youtube.html","e720c153f701d453dcd9f07b9af5eb80"],["/bower_components/iron-a11y-announcer/iron-a11y-announcer.html","a3bd031e39dde38cb8e619f670ee50f7"],["/bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","9b51ca6689770fc9c7efb27129b7c5d7"],["/bower_components/iron-a11y-keys/iron-a11y-keys.html","fd2760ee5676b7615aaa24d695c5295d"],["/bower_components/iron-ajax/iron-ajax.html","6fe26e77115b2757c9db65a71153509c"],["/bower_components/iron-ajax/iron-request.html","1881ad6ae9bf637ce49ad766bb17701a"],["/bower_components/iron-behaviors/iron-button-state.html","19d308128b6a339b7125c28e142dd04b"],["/bower_components/iron-behaviors/iron-control-state.html","1c12ee539b1dbbd0957ae26b3549cc13"],["/bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","6fd1055c2c04382401dc910a0db569c6"],["/bower_components/iron-collapse/iron-collapse.html","30ca05c987397312c698967a9bbe6499"],["/bower_components/iron-fit-behavior/iron-fit-behavior.html","e048e061e5752630ff76e4597db84d22"],["/bower_components/iron-flex-layout/iron-flex-layout-classes.html","324bc9cab816a57fc0476eaf08f88a4c"],["/bower_components/iron-flex-layout/iron-flex-layout.html","b1d94b670ee41624168cb8161233ca73"],["/bower_components/iron-form-element-behavior/iron-form-element-behavior.html","a64177311979fc6a6aae454cb85ea2be"],["/bower_components/iron-icon/iron-icon.html","f2a0dfd0b79864b4f4efb578417a3fef"],["/bower_components/iron-iconset-svg/iron-iconset-svg.html","8d0d7213b8c3325ca7e5a658ca9aaf17"],["/bower_components/iron-image/iron-image.html","72175f3ce2bc8e6bf3436ab8749b470e"],["/bower_components/iron-input/iron-input.html","67f0e89aedb2f7c742d17d3bf83d5eb5"],["/bower_components/iron-jsonp-library/iron-jsonp-library.html","03056d5faf12fc51861e6d1fc6d983b4"],["/bower_components/iron-localstorage/iron-localstorage.html","acb3df7483568a40df937ed2eb161c3c"],["/bower_components/iron-location/iron-location.html","8a4f71232319aed73115b2e356c19fde"],["/bower_components/iron-location/iron-query-params.html","32a96be5536aea89a925d16146cb7015"],["/bower_components/iron-media-query/iron-media-query.html","7436f9608ebd2d31e4b346921651f84b"],["/bower_components/iron-menu-behavior/iron-menu-behavior.html","094bb8b9546dcf49b5a3e5d2572c1b53"],["/bower_components/iron-meta/iron-meta.html","dd4ef14e09c5771e70292d70963f6718"],["/bower_components/iron-overlay-behavior/iron-focusables-helper.html","6f9ea0b495a22d3c4c51773a1b94e19e"],["/bower_components/iron-overlay-behavior/iron-overlay-backdrop.html","35013b4b97041ed6b63cf95dbb9fbcb4"],["/bower_components/iron-overlay-behavior/iron-overlay-behavior.html","b0f11806f873e049d1a79fd2ed8ba4cd"],["/bower_components/iron-overlay-behavior/iron-overlay-manager.html","ba435264a6aaeda615475a29ee5965fc"],["/bower_components/iron-pages/iron-pages.html","5872a2ad58225c94b14ddea747f67cbd"],["/bower_components/iron-resizable-behavior/iron-resizable-behavior.html","0ba4675c3ec856c26912022dd5b05036"],["/bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","d0eb39331820f58f3cdcebaa0eed0209"],["/bower_components/iron-selector/iron-multi-selectable.html","91eeea310058c0a1b837b685922c03a5"],["/bower_components/iron-selector/iron-selectable.html","65b04f3f5f1b551d91a82b36f916f6b6"],["/bower_components/iron-selector/iron-selection.html","83545b7d1eae4020594969e6b9790b65"],["/bower_components/iron-selector/iron-selector.html","4d2657550768bec0788eba5190cddc66"],["/bower_components/iron-validatable-behavior/iron-validatable-behavior.html","02bf0434cc1a0d09e18413dea91dcea1"],["/bower_components/jquery/dist/jquery.slim.min.js","1f6105bf517f430f4b6b20d4cc7f4e6b"],["/bower_components/l2t-paper-slider/l2t-paper-slider.html","b447d1dbf11f520a4a0a341f1a6a2227"],["/bower_components/neon-animation/neon-animatable-behavior.html","270f52231303cae4cb8e3fadb5a805c1"],["/bower_components/neon-animation/neon-animation-runner-behavior.html","782cac67e6cb5661d36fb32d9129ff03"],["/bower_components/paper-behaviors/paper-checked-element-behavior.html","59702db25efd385b161ad862b8027819"],["/bower_components/paper-behaviors/paper-inky-focus-behavior.html","51a1c5ccd2aae4c1a0258680dcb3e1ea"],["/bower_components/paper-behaviors/paper-ripple-behavior.html","b6ee8dd59ffb46ca57e81311abd2eca0"],["/bower_components/paper-dialog-behavior/paper-dialog-behavior.html","e63bccc76eb65fd4fc3e739da6a9f7dd"],["/bower_components/paper-dialog-behavior/paper-dialog-shared-styles.html","998dc5e0817c31afdefbfd5428dd2e57"],["/bower_components/paper-dialog/paper-dialog.html","97e8a3547b9ec7dac7c786870d941487"],["/bower_components/paper-item/paper-item-behavior.html","82636a7562fd8b0be5b15646ee461588"],["/bower_components/paper-item/paper-item-shared-styles.html","31466267014182098267f1b9303f656e"],["/bower_components/paper-item/paper-item.html","e614731572c425b144aa8a9da24ee3ea"],["/bower_components/paper-menu/paper-menu-shared-styles.html","1fff92162885260ee76267ee9a647772"],["/bower_components/paper-menu/paper-menu.html","b9eac6d0446b0c94e4c45b7d32138a6f"],["/bower_components/paper-menu/paper-submenu.html","2f44558faf3e9fc47ce97fecbe4eb247"],["/bower_components/paper-ripple/paper-ripple.html","417d76dccb679ca1000ac8ca18be4968"],["/bower_components/paper-styles/color.html","430305db311431da78c0a6e1236f9ebe"],["/bower_components/paper-styles/default-theme.html","c910188e898624eb890898418de20ee0"],["/bower_components/paper-styles/shadow.html","fc449492f51292636b499bc5d7b9b036"],["/bower_components/paper-styles/typography.html","bdd7f31bb85f116ce97061c4135b74c9"],["/bower_components/paper-toggle-button/paper-toggle-button.html","702fe14489d6fff69b003b3540964e11"],["/bower_components/polymer-global-variables/dist/polymer-global-variables.min.js","f14fbb2dfe0c2fe420f5bf791f2fea86"],["/bower_components/polymer/polymer-micro.html","aa99c1fac9924ffa08305605b1bab529"],["/bower_components/polymer/polymer-mini.html","73a0cdb103a3b261353eeffec8053cc9"],["/bower_components/polymer/polymer.html","8d7882424c269e7e48b2407466f66482"],["/bower_components/promise-polyfill/Promise.js","543d053e97b2f3bf434212aa4db1fb2a"],["/bower_components/promise-polyfill/promise-polyfill-lite.html","06470312beff013fc54695e0bdda2cb3"],["/bower_components/webcomponentsjs/webcomponents-lite.min.js","aa09f9774d69281033593d2a5cf13e9d"],["/index.html","3c779fa8cdb7e328e3aa60f187c8c8a2"],["/src/atoms/dorel-back-to-top.html","0467d8d74076b10127df260f750c5061"],["/src/atoms/dorel-checkbox.html","c9e26c9158319a51ee9cbc5650be9c20"],["/src/atoms/dorel-color-switcher.html","72df4877de63b4b3cab0bdb190521346"],["/src/atoms/dorel-content-wrap.html","b6b5602467bc923075d4225a5a74c70e"],["/src/atoms/dorel-cta.html","1392dda6f6c8ba18c03e678d1cad5d98"],["/src/atoms/dorel-grid-overlay.html","f72ef44f31b39a02bd092a8a08857ba9"],["/src/atoms/dorel-gtm-events.html","956ba0e65574c4c1024ca5334d6930a3"],["/src/atoms/dorel-hubspot.html","46bd341dcd85be9a5c9ae664bcdee7c7"],["/src/atoms/dorel-icons-cta-section.html","79709411d387a4e59759d7a174e95e4f"],["/src/atoms/dorel-icons-social.html","e00e418a095133fc928e8a335dac1304"],["/src/atoms/dorel-icons.html","1760afe9e154fd8323b2cfbb9ddcf800"],["/src/atoms/dorel-input-error.html","4b0583b6ece0e50545889c23f1434350"],["/src/atoms/dorel-input-select.html","3e9a31ab8628f843dba9df461ae58f22"],["/src/atoms/dorel-input-textarea.html","f2dd9c0135d4b5837773aa951d3a8412"],["/src/atoms/dorel-input.html","f50ca4a448ca5b99074cc6c0e0eef930"],["/src/atoms/dorel-loader.html","c15e1958d301d6e993742c0d17839ab4"],["/src/atoms/dorel-media-query.html","31c787f3009aba2c2075c5b976c232ac"],["/src/atoms/dorel-safe-html.html","422f43c2bc8c2c15bb69e1c8f0747dc4"],["/src/atoms/dorel-tabs-overlay.html","7108e3d8e626d150a0836143a7627bd2"],["/src/atoms/dorel-video-wrap.html","ae45e92a416f003b11883e3e1ab42785"],["/src/atoms/dorel-zendesk.html","f95fecb243e9bfe4fb9dca456129773d"],["/src/dorel-app-resources.html","b589e0846ead4ac8c0fb236a4a2f5264"],["/src/dorel-app.html","28212e73bac94211f6297f95d7deaaab"],["/src/molecules/dorel-360-product.html","355b317b074641d22cf45bde832328dc"],["/src/molecules/dorel-card.html","cdb0cd29204bc3f934009d931124afab"],["/src/molecules/dorel-category-listing-item.html","5af398e27aba54b7ca9f4b81dff1e298"],["/src/molecules/dorel-expandable-content.html","518ad47c3dbabda55cfe4993650be369"],["/src/molecules/dorel-hero-video.html","6f66c41acdc088a86fa5649fba33739a"],["/src/molecules/dorel-logo.html","20c62f864620231bac7f30619f403034"],["/src/molecules/dorel-navigation-main.html","8cc9f43d7ac50183c2c53a10e49d8eba"],["/src/molecules/dorel-navigation-sub.html","0e12a89dde1e03f652a3f478f7647433"],["/src/molecules/dorel-product-accessory-lightbox.html","698adaf3c008c0e6a18e088a6e2e82de"],["/src/molecules/dorel-product-accessory.html","ba3620dd693e878f4c40b014679716fc"],["/src/molecules/dorel-product-feature.html","af54a24a98a29f73d4964a77236d860f"],["/src/molecules/dorel-tab.html","fac46d6b3e7d0ffb6c81d2fa1af8260c"],["/src/molecules/dorel-tabs.html","ea06b24f5e3f82e7ee3ae9b464b6541f"],["/src/molecules/dorel-third-party.html","b6b0870736667df076494637bca9b239"],["/src/organisms/dorel-category-listing.html","5bdbedf78f4fef381394324f82d1ea7a"],["/src/organisms/dorel-footer.html","f3cd9fb0d152bee8c061d5ee92ca5229"],["/src/organisms/dorel-header.html","958883ec08b013de4b874ba17f3d35d1"],["/src/organisms/dorel-page-builder.html","3c37f6341b00b4b18f9f3974997f2b44"],["/src/organisms/dorel-section-cards.html","5087479cba7aa02a3fda8d2bf26f9603"],["/src/organisms/dorel-section-category-header.html","044d1ac84c841bdaf2283e7243b78c6c"],["/src/organisms/dorel-section-category-sidebar.html","56ba0804109ddb4f047bd3f331f3f6df"],["/src/organisms/dorel-section-content-wrap.html","b9225adaad559f4b13993b38fdd4462a"],["/src/organisms/dorel-section-cta.html","240b870e2a4a222cf9fd74a8600845b2"],["/src/organisms/dorel-section-header.html","7b086f14bec1581bab870aae1bf2b83c"],["/src/organisms/dorel-section-hero-header.html","317595aec60fd52aca552aee60a82560"],["/src/organisms/dorel-section-heroes.html","cad6654af5535659d7c8589ca9c60426"],["/src/organisms/dorel-section-product-accessories.html","f92aebb3e34c6d402b0da581f7906964"],["/src/organisms/dorel-section-product-accordions.html","00d866be264c64ffdc164d56453c66f1"],["/src/organisms/dorel-section-product-features.html","39fce978b7b82dcdadb28c8938d100d1"],["/src/organisms/dorel-section-product-showcase.html","b21f1244e6170885726079efef26e05d"],["/src/organisms/dorel-section-product-usps.html","2fa00767bd428f3da1cedfa0a09cb717"],["/src/organisms/dorel-section-product-video.html","b5550bd9c892bfe7a19eeddb30b82feb"],["/src/organisms/dorel-section-slideshow.html","27d4b765af67f03adf5bb254d650a367"],["/src/organisms/dorel-section-store-locator-result.html","30958f99aaf9ea2b065aca2c0efdfc52"],["/src/organisms/dorel-section-store-locator-results.html","cb8b8cca8110d259c1caa1479be4acd7"],["/src/organisms/dorel-section-store-locator.html","fd09763ed8303f7259812b9231c3e950"],["/src/templates/component-guide/dorel-component-guide-breakpoints.html","396846975809df41aa9ddab20880fa44"],["/src/templates/component-guide/dorel-component-guide-buttons.html","e7dd4a4c6182bdc32cce15a75bf6a349"],["/src/templates/component-guide/dorel-component-guide-colors.html","2fc4fd0debf0e4dcb056c0b3a9aac70e"],["/src/templates/component-guide/dorel-component-guide-forms.html","3e4039afee36804ffa3491c56d4668bd"],["/src/templates/component-guide/dorel-component-guide-home.html","257c73cbb034b88fce149e671e6807e0"],["/src/templates/component-guide/dorel-component-guide-introduction.html","be6a32e26d9c2c15e9f992257ad68173"],["/src/templates/component-guide/dorel-component-guide-layout.html","60f5078ae4f4107fc3c8a2fcb0762b91"],["/src/templates/component-guide/dorel-component-guide-product-widgets.html","e2873fdb2167dd4c11800b7ab88ebd25"],["/src/templates/component-guide/dorel-component-guide-shared-styles.html","985022ee244c69cfbf89c47180f63c92"],["/src/templates/component-guide/dorel-component-guide-typography.html","7dc9800abcd91ea6bcde26e1e7a30319"],["/src/templates/component-guide/dorel-component-toolbar.html","c99b465c0e3f0a4fd281ed111583dd06"],["/src/templates/dorel-template-404.html","81f3b0ef5813057fcee9633a964e0a05"],["/src/templates/dorel-template-component-guide.html","8a0e8ca6639ee7d98d5acfd9b153f8ae"],["/src/templates/dorel-template-home.html","fbb5d8a2c485581537940ab968b9d0e9"],["/src/templates/dorel-template-info.html","811cc3df59b29d0b4882e47e88b4bc9f"],["/src/templates/dorel-template-marketing.html","4a21264b504442597f9a1915565688ca"],["/src/templates/dorel-template-product-category.html","8e2254d59112b43d79251895f3b38e3c"],["/src/templates/dorel-template-products.html","0e7e0e1a2bc8ae7e6e551c551cf524ce"],["/src/templates/dorel-template-store-locator.html","507aab529c95205b8de89d1875cd9272"],["/src/themes/theme-dorel-shared-styles.html","7856090e9064eebcb2124f55c20c3ac0"],["/src/themes/theme-maxi-cosi-shared-styles.html","6c903e13d8f95e1e6f325ddaa0a04535"],["/src/utils/dorel-global-variables.html","17002d189563766648908372ec1cbecc"],["/src/utils/dorel-meta-manager.html","c89b87acd81d9e5ce0f3e666f7d1e927"],["/src/utils/dorel-wp-collect-categories.html","717a775a4a7d37a4b8fa718491b8c422"],["/src/utils/dorel-wp-collect-menu-locations.html","0ff9a0b1c7b97ae0d93aaeae7d0ab244"],["/src/utils/dorel-wp-collect-menu.html","94863b9ed73dccf1b46561a0601dbd44"],["/src/utils/dorel-wp-collect-menus.html","f8699113178f3e1ec32cd0cc33b2196b"],["/src/utils/dorel-wp-collect-options.html","722305a967d05c33c46fae6bc160a45b"],["/src/utils/dorel-wp-collect-page.html","62fe9778fc6555386c3b22354274cad2"],["/src/utils/dorel-wp-collect-pages.html","c145be96867884dfdee9be49d8672cf0"],["/src/utils/dorel-wp-collect-widgets.html","313672d8e216bc9521530c37db0618bb"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {
                credentials: 'same-origin',
                redirect: 'follow'
              }));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







