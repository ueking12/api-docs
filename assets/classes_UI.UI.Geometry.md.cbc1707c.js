import{_ as e,c as t,o,a}from"./app.f26a2801.js";const f=JSON.parse('{"title":"Class: Geometry","description":"","frontmatter":{},"headers":[{"level":2,"title":"Table of contents","slug":"table-of-contents","link":"#table-of-contents","children":[{"level":3,"title":"Constructors","slug":"constructors","link":"#constructors","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"Constructors","slug":"constructors-1","link":"#constructors-1","children":[{"level":3,"title":"constructor","slug":"constructor","link":"#constructor","children":[]}]},{"level":2,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[{"level":3,"title":"getAbsolutePosition","slug":"getabsoluteposition","link":"#getabsoluteposition","children":[]},{"level":3,"title":"getAbsolutePositionAtCoordinates","slug":"getabsolutepositionatcoordinates","link":"#getabsolutepositionatcoordinates","children":[]},{"level":3,"title":"getAbsoluteSize","slug":"getabsolutesize","link":"#getabsolutesize","children":[]},{"level":3,"title":"getLocalPositionAtCoordinates","slug":"getlocalpositionatcoordinates","link":"#getlocalpositionatcoordinates","children":[]},{"level":3,"title":"getLocalSize","slug":"getlocalsize","link":"#getlocalsize","children":[]},{"level":3,"title":"isUnderLocation","slug":"isunderlocation","link":"#isunderlocation","children":[]}]}],"relativePath":"classes/UI.UI.Geometry.md"}'),r={name:"classes/UI.UI.Geometry.md"},i=a('<p><a href="./../README.html">auto-mwapi-lib</a> / <a href="./../modules.html">Exports</a> / <a href="./../modules/UI.html">UI</a> / <a href="./../modules/UI.UI.html">UI</a> / Geometry</p><h1 id="class-geometry" tabindex="-1">Class: Geometry <a class="header-anchor" href="#class-geometry" aria-hidden="true">#</a></h1><p><a href="./../modules/UI.html">UI</a>.<a href="./../modules/UI.UI.html">UI</a>.Geometry</p><p><strong><code>Author</code></strong></p><p>jie.wu</p><p><strong><code>Description</code></strong></p><p>几何坐标信息</p><p><strong><code>Network Status</code></strong></p><p>usage:客户端</p><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-hidden="true">#</a></h3><ul><li><a href="./UI.UI.Geometry.html#constructor">constructor</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><ul><li><a href="./UI.UI.Geometry.html#getabsoluteposition">getAbsolutePosition</a></li><li><a href="./UI.UI.Geometry.html#getabsolutepositionatcoordinates">getAbsolutePositionAtCoordinates</a></li><li><a href="./UI.UI.Geometry.html#getabsolutesize">getAbsoluteSize</a></li><li><a href="./UI.UI.Geometry.html#getlocalpositionatcoordinates">getLocalPositionAtCoordinates</a></li><li><a href="./UI.UI.Geometry.html#getlocalsize">getLocalSize</a></li><li><a href="./UI.UI.Geometry.html#isunderlocation">isUnderLocation</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-hidden="true">#</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-hidden="true">#</a></h3><p>• <code>Private</code> <strong>new Geometry</strong>()</p><p><strong><code>Description</code></strong></p><p>默认构造</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-hidden="true">#</a></h4><p>UI/index.d.ts:4030</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h2><h3 id="getabsoluteposition" tabindex="-1">getAbsolutePosition <a class="header-anchor" href="#getabsoluteposition" aria-hidden="true">#</a></h3><p>▸ <strong>getAbsolutePosition</strong>(): <a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p><strong><code>Description</code></strong></p><p>获取绝对坐标</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-hidden="true">#</a></h4><p><a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p>返回绝对坐标</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a></h4><p>UI/index.d.ts:4050</p><hr><h3 id="getabsolutepositionatcoordinates" tabindex="-1">getAbsolutePositionAtCoordinates <a class="header-anchor" href="#getabsolutepositionatcoordinates" aria-hidden="true">#</a></h3><p>▸ <strong>getAbsolutePositionAtCoordinates</strong>(<code>Coordinate</code>): <a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p><strong><code>Description</code></strong></p><p>获取基于 Coordinate 的绝对坐标</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Coordinate</code></td><td style="text-align:left;"><a href="./Type.Type.Vector2.html"><code>Vector2</code></a></td><td style="text-align:left;">usage:绝对基础点</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-hidden="true">#</a></h4><p><a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p>返回 Coordinate 的绝对坐标</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a></h4><p>UI/index.d.ts:4044</p><hr><h3 id="getabsolutesize" tabindex="-1">getAbsoluteSize <a class="header-anchor" href="#getabsolutesize" aria-hidden="true">#</a></h3><p>▸ <strong>getAbsoluteSize</strong>(): <a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p><strong><code>Description</code></strong></p><p>获取绝对大小</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-hidden="true">#</a></h4><p><a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p>返回绝对大小</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a></h4><p>UI/index.d.ts:4062</p><hr><h3 id="getlocalpositionatcoordinates" tabindex="-1">getLocalPositionAtCoordinates <a class="header-anchor" href="#getlocalpositionatcoordinates" aria-hidden="true">#</a></h3><p>▸ <strong>getLocalPositionAtCoordinates</strong>(<code>Coordinate</code>): <a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p><strong><code>Description</code></strong></p><p>获取基于 Coordinate 的相对坐标</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>Coordinate</code></td><td style="text-align:left;"><a href="./Type.Type.Vector2.html"><code>Vector2</code></a></td><td style="text-align:left;">usage:相对基础点</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-hidden="true">#</a></h4><p><a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p>返回 Coordinate 的相对坐标</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a></h4><p>UI/index.d.ts:4037</p><hr><h3 id="getlocalsize" tabindex="-1">getLocalSize <a class="header-anchor" href="#getlocalsize" aria-hidden="true">#</a></h3><p>▸ <strong>getLocalSize</strong>(): <a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p><strong><code>Description</code></strong></p><p>获取相对大小</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-hidden="true">#</a></h4><p><a href="./Type.Type.Vector2.html"><code>Vector2</code></a></p><p>返回相对大小</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a></h4><p>UI/index.d.ts:4056</p><hr><h3 id="isunderlocation" tabindex="-1">isUnderLocation <a class="header-anchor" href="#isunderlocation" aria-hidden="true">#</a></h3><p>▸ <strong>isUnderLocation</strong>(<code>AbsoluteCoordinate</code>): <code>boolean</code></p><p><strong><code>Description</code></strong></p><p>判断该 Geometry 是否在 AbsoluteCoordinate 坐标下</p><p><strong><code>Effect</code></strong></p><p>只在客户端调用生效</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>AbsoluteCoordinate</code></td><td style="text-align:left;"><a href="./Type.Type.Vector2.html"><code>Vector2</code></a></td><td style="text-align:left;">usage:坐标</td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-hidden="true">#</a></h4><p><code>boolean</code></p><p>返回是否在 AbsoluteCoordinate 坐标下</p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a></h4><p>UI/index.d.ts:4069</p>',99),n=[i];function d(s,l,c,h,p,u){return o(),t("div",null,n)}const b=e(r,[["render",d]]);export{f as __pageData,b as default};