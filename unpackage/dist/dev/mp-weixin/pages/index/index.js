require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],[,,,,,,,,,,function(e,t,i){"use strict";var n=a(i(2)),s=a(i(11));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(s.default))},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(13),s=i.n(n),a=i(14),o=!1;var u=function(e){o||i(12)},r=i(0)(s.a,a.a,u,null,null);r.options.__file="F:\\新建文件夹 (2)\\unizhihu\\pages\\index\\index.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.default=r.exports},function(e,t){},function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{news:[]}},onLoad:function(){var t=this;e.showLoading({title:"加载中。。",mask:!1}),e.request({url:"https://news-at.zhihu.com/api/4/news/latest",method:"GET",data:{},success:function(i){t.news=i.data.stories,e.showLoading()},fail:function(){},complete:function(){}})},methods:{openinfo:function(t){var i=t.currentTarget.dataset.newsid;e.navigateTo({url:"../info/info?newsid="+i})}}}}).call(t,i(3).default)},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"content"},[i("view",{staticClass:"uni-list"},[i("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},e._l(e.news,function(t,n){return i("swiper-item",{key:n,attrs:{"data-newsid":t.id,eventid:"SPb-0-"+n,mpcomid:"bzf-0-"+n},on:{tap:e.openinfo}},[i("view",{staticClass:"swiper-item"},[i("image",{attrs:{src:t.images}})])])})),e._l(e.news,function(t,n){return i("view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover","data-newsid":t.id,eventid:"d4w-1-"+n},on:{tap:e.openinfo}},[i("view",{staticClass:"uni-media-list"},[i("image",{staticClass:"uni-media-list-logo",attrs:{src:t.images}}),i("view",{staticClass:"uni-media-list-body"},[i("view",{staticClass:"uni-media-list-text-top"},[e._v(e._s(t.title))])])])])})],2)])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};t.a=s}],[10]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map