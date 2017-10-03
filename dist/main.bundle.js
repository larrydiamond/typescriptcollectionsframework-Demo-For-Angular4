webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" (click)=\"ArrayList()\">ArrayList string</a>&nbsp;\n<a href=\"#\" (click)=\"LinkedList()\">LinkedList string</a>&nbsp;\n<a href=\"#\" (click)=\"HashSet()\">HashSet string</a>&nbsp;\n<a href=\"#\" (click)=\"TreeSet()\">TreeSet string</a>&nbsp;\n<a href=\"#\" (click)=\"ArrayListAllFields()\">ArrayList PetStoreProduct compare all fields</a>&nbsp;\n<a href=\"#\" (click)=\"LinkedListAllFields()\">LinkedList PetStoreProduct compare all fields</a>&nbsp;\n<a href=\"#\" (click)=\"HashSetAllFields()\">HashSet PetStoreProduct compare all fields</a>&nbsp;\n<br>\n\n<p *ngIf=\"active=='ArrayList'\">\n  ArrayList compare on a string:<br>\n  <li *ngFor=\"let str of alData\"><button (click)=\"removeArrayListEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #aladd type=text placeholder=\"add\">\n  <button (click)=\"addArrayList(aladd.value);aladd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  An ArrayList is a List backed by a resizeable array.   Items added to an ArrayList will be added at the end of the ArrayList.<br>\n  Click on an item to remove it from the ArrayList or enter a value and click Add to add it to the ArrayList.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_src_arraylist_.arraylist.html\">ArrayList Documentation</a><br><br>\n\n  alData:ArrayList&lt;string> = new ArrayList&lt;string>(new AllFieldCollectable&lt;string>());<br>\n  this.alData.add (\"Cat\");<br>\n  this.alData.add (\"Squirrel\");<br>\n  this.alData.add (\"Dog\");<br>\n  this.alData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.alData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over an Arraylist in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of alData\">&lt;button (click)=\"removeArrayListEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n\n</p>\n\n<p *ngIf=\"active=='LinkedList'\">\n  LinkedList compare on a string:<br>\n  <li *ngFor=\"let str of llData\"><button (click)=\"removeLinkedListEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #lladd type=text placeholder=\"add\">\n  <button (click)=\"addLinkedList(lladd.value);lladd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A LinkedList is a List backed by a Doubly-linked list.   Items added to a LinkedList will be added at the end of the LinkedList.<br>\n  Click on an item to remove it from the LinkedList or enter a value and click Add to add it to the LinkedList.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_src_linkedlist_.linkedlist.html\">LinkedList Documentation</a><br><br>\n\n  llData:LinkedList&lt;string> = new LinkedList&lt;string>(new AllFieldCollectable&lt;string>());<br>\n  this.llData.add (\"Cat\");<br>\n  this.llData.add (\"Squirrel\");<br>\n  this.llData.add (\"Dog\");<br>\n  this.llData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.llData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over a LinkedList in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of llData\">&lt;button (click)=\"removeLinkedListEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n</p>\n\n<p *ngIf=\"active=='HashSet'\">\n  HashSet compare on a string:<br>\n  <li *ngFor=\"let str of hsData\"><button (click)=\"removeHashSetEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #hsadd type=text placeholder=\"add\">\n  <button (click)=\"addHashSet(hsadd.value);hsadd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A HashSet is a Set backed by a HashMap.   Duplicates are not permitted.   There are no guarantees as to the iteration order of the set.   Set order is not guaranteed to remain constant over time.<br>\n  Click on an item to remove it from the HashSet or enter a value and click Add to add it to the HashSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_src_hashset_.hashset.html\">HashSet Documentation</a><br><br>\n\n  hsData:HashSet&lt;string> = new HashSet&lt;string>(new AllFieldHashable&lt;string>());<br>\n  this.hsData.add (\"Cat\");<br>\n  this.hsData.add (\"Squirrel\");<br>\n  this.hsData.add (\"Dog\");<br>\n  this.hsData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.hsData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over a HashSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of hsData\">&lt;button (click)=\"removeHashSetEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n</p>\n\n<p *ngIf=\"active=='TreeSet'\">\n  TreeSet compare using string Comparator<br>\n  <li *ngFor=\"let str of tsData\"><button (click)=\"removeTreeSetEntry(str);\">{{str}}</button></li>\n  <br>\n  <input #tsadd type=text placeholder=\"add\">\n  <button (click)=\"addTreeSet(tsadd.value);tsadd.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A TreeSet is a Set backed by a TreeMap.   Duplicates are not permitted.   The order of the elements is based on the Comparator provided to it at construction.<br>\n  Click on an item to remove it from the TreeSet or enter a value and click Add to add it to the TreeSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_src_treeset_.treeset.html\">TreeSet Documentation</a><br><br>\n\n  tsData:TreeSet&lt;string> = new TreeSet&lt;string>(Collections.getStringComparator());<br>\n  this.tsData.add (\"Cat\");<br>\n  this.tsData.add (\"Squirrel\");<br>\n  this.tsData.add (\"Dog\");<br>\n  this.tsData.remove (\"OtherElement\");<br>\n  for (let iter:JIterator&lt;string> = this.tsData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let ostr:string = iter.next();<br>\n    &nbsp;&nbsp;console.log (ostr);<br>\n  &#125;<br>\n  <br>\n  How to iterate over a TreeSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let str of tsData\">&lt;button (click)=\"removeTreeSetEntry(str);\">&#123;&#123;str&#125;&#125;&lt;/button>&lt;/li>\n\n</p>\n\n\n<p *ngIf=\"active=='ArrayListAllFields'\">\n  ArrayList compare on all fields:<br>\n  <li *ngFor=\"let psp of alAllData\"><button (click)=\"removeArrayListAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #alalladdsku type=text placeholder=\"sku\">\n  <input #alalladdname type=text placeholder=\"name\">\n  <button (click)=\"addArrayListAll(alalladdsku.value, alalladdname.value);alalladdsku.value='';alalladdname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  An ArrayList is a List backed by a resizeable array.   Items added to an ArrayList will be added at the end of the ArrayList.<br>\n  Click on an item to remove it from the ArrayList or enter a sku and a name and click Add to add it to the ArrayList.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_src_arraylist_.arraylist.html\">ArrayList Documentation</a><br><br>\n\n  alAllData:ArrayList&lt;PetStoreProduct> = new ArrayList&lt;PetStoreProduct>(new AllFieldCollectable&lt;PetStoreProduct>());<br>\n  this.alAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.alAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.alAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.alAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.alAllData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over an Arraylist in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of alAllData\">&lt;button (click)=\"removeArrayListAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n<br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n<br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n</p>\n\n\n<p *ngIf=\"active=='LinkedListAllFields'\">\n    LinkedList compare on all fields:<br>\n    <li *ngFor=\"let psp of llAllData\"><button (click)=\"removeLinkedListAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n    <br>\n    <input #llalladdsku type=text placeholder=\"sku\">\n    <input #llalladdname type=text placeholder=\"name\">\n    <button (click)=\"addLinkedListAll(llalladdsku.value, llalladdname.value);llalladdsku.value='';llalladdname.value=''\">Add</button>\n\n    <br>  <br>  <br>  <br>\n    A LinkedList is a List backed by a Doubly-linked list.   Items added to a LinkedList will be added at the end of the LinkedList.<br>\n    Click on an item to remove it from the LinkedList or enter a sku and a name and click Add to add it to the LinkedList.<br><br>\n    <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_src_linkedlist_.linkedlist.html\">LinkedList Documentation</a><br><br>\n\n    llAllData:LinkedList&lt;PetStoreProduct> = new LinkedList&lt;PetStoreProduct>(new AllFieldCollectable&lt;PetStoreProduct>());<br>\n    this.llAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n    this.llAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n    this.llAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n    this.llAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n    for (let iter:JIterator&lt;PetStoreProduct> = this.llAllData.iterator(); iter.hasNext(); ) &#123; <br>\n    &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n    &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n    &#125;<br>\n    <br>\n    How to iterate over an LinkedList in the HTML template for an Angular Component:<br>\n    &lt;li *ngFor=\"let pspa of llAllData\">&lt;button (click)=\"removeLinkedListAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n    <br>  <br>\n    export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n      &nbsp;&nbsp;private sku:string;<br>\n      &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n      &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n    <br>\n      &nbsp;&nbsp;private name:string;<br>\n      &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n      &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n    <br>\n      &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n      &nbsp;&nbsp;}<br>\n    }<br>\n</p>\n\n<p *ngIf=\"active=='HashSetAllFields'\">\n  HashSet compare on all fields:<br>\n  <li *ngFor=\"let psp of hsAllData\"><button (click)=\"removeHashSetAllEntry(psp);\">{{psp.getSku()}} - {{psp.getName()}}</button></li>\n  <br>\n  <input #hsalladdsku type=text placeholder=\"sku\">\n  <input #hsalladdname type=text placeholder=\"name\">\n  <button (click)=\"addHashSetAll(hsalladdsku.value, hsalladdname.value);hsalladdsku.value='';hsalladdname.value=''\">Add</button>\n\n  <br>  <br>  <br>  <br>\n  A HashSet is a Set backed by a HashMap.   Duplicates are not permitted.   There are no guarantees as to the iteration order of the set.   Set order is not guaranteed to remain constant over time.<br>\n  Click on an item to remove it from the HashSet or enter a sku and a name and and click Add to add it to the HashSet.<br><br>\n  <a href=\"https://larrydiamond.github.io/typescriptcollectionsframework/typedoc/classes/_src_hashset_.hashset.html\">HashSet Documentation</a><br><br>\n\n  hsAllData:HashSet&lt;PetStoreProduct> = new HashSet&lt;PetStoreProduct>(new AllFieldHashable&lt;PetStoreProduct>());<br>\n  this.hsAllData.add (new PetStoreProduct(\"ABCDE\", \"Bird Seed\"));<br>\n  this.hsAllData.add (new PetStoreProduct(\"FGHIJ\", \"Cat Food\"));<br>\n  this.hsAllData.add (new PetStoreProduct(\"KLMNO\", \"Dog Food\"));<br>\n  this.hsAllData.remove (new PetStoreProduct(\"ZZZZZ\", \"Not there anymore\"));<br>\n  for (let iter:JIterator&lt;PetStoreProduct> = this.hsAllData.iterator(); iter.hasNext(); ) &#123; <br>\n  &nbsp;&nbsp;let psp:PetStoreProduct = iter.next();<br>\n  &nbsp;&nbsp;console.log (psp.getSku() - psp.getName());<br>\n  &#125;<br>\n  <br>\n  How to iterate over an HashSet in the HTML template for an Angular Component:<br>\n  &lt;li *ngFor=\"let pspa of hsAllData\">&lt;button (click)=\"removeHashSetAllEntry(pspa);\">&#123;&#123;pspa.getSku() } } - &#123;&#123;pspa.getName() } } &lt;/button>&lt;/li>\n\n  <br>  <br>\n  export class PetStoreProduct &#123; // note no methods were added to this class for the framework to support it<br>\n    &nbsp;&nbsp;private sku:string;<br>\n    &nbsp;&nbsp;public getSku():string &#123; return this.sku; }<br>\n    &nbsp;&nbsp;public setSku(newsku:string) &#123; this.sku = newsku; }<br>\n  <br>\n    &nbsp;&nbsp;private name:string;<br>\n    &nbsp;&nbsp;public getName():string &#123; return this.name; }<br>\n    &nbsp;&nbsp;public setName(newname:string) &#123; this.name = newname; }<br>\n  <br>\n    &nbsp;&nbsp;constructor(isku:string, iname:string) &#123;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.sku = isku;<br>\n    &nbsp;&nbsp;&nbsp;&nbsp;  this.name = iname;<br>\n    &nbsp;&nbsp;}<br>\n  }<br>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export PetStoreProduct */
/* unused harmony export PetStoreProductHashable */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__ = __webpack_require__("../../../../typescriptcollectionsframework/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.active = "ArrayList";
        this.alData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["ArrayList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.llData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["LinkedList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.hsData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["HashSet"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldHashable"]());
        this.tsData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["TreeSet"](__WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["Collections"].getStringComparator());
        this.alAllData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["ArrayList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.llAllData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["LinkedList"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldCollectable"]());
        this.hsAllData = new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["HashSet"](new __WEBPACK_IMPORTED_MODULE_1_typescriptcollectionsframework__["AllFieldHashable"]());
        this.alData.add("Cat");
        this.alData.add("Squirrel");
        this.alData.add("Dog");
        this.llData.add("Cat");
        this.llData.add("Squirrel");
        this.llData.add("Dog");
        this.hsData.add("Cat");
        this.hsData.add("Squirrel");
        this.hsData.add("Dog");
        this.tsData.add("Cat");
        this.tsData.add("Squirrel");
        this.tsData.add("Dog");
        var psp1 = new PetStoreProduct("ABCDE", "Bird Seed");
        var psp2 = new PetStoreProduct("FGHIJ", "Cat Food");
        var psp3 = new PetStoreProduct("KLMNO", "Dog Food");
        this.alAllData.add(psp1);
        this.alAllData.add(psp2);
        this.alAllData.add(psp3);
        this.llAllData.add(psp1);
        this.llAllData.add(psp2);
        this.llAllData.add(psp3);
        this.hsAllData.add(psp1);
        this.hsAllData.add(psp2);
        this.hsAllData.add(psp3);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ArrayList = function () {
        this.active = "ArrayList";
    };
    AppComponent.prototype.LinkedList = function () {
        this.active = "LinkedList";
    };
    AppComponent.prototype.HashSet = function () {
        this.active = "HashSet";
    };
    AppComponent.prototype.TreeSet = function () {
        this.active = "TreeSet";
    };
    AppComponent.prototype.ArrayListAllFields = function () {
        this.active = "ArrayListAllFields";
    };
    AppComponent.prototype.LinkedListAllFields = function () {
        this.active = "LinkedListAllFields";
    };
    AppComponent.prototype.HashSetAllFields = function () {
        this.active = "HashSetAllFields";
    };
    AppComponent.prototype.addArrayList = function (newdata) {
        this.alData.add(newdata);
    };
    AppComponent.prototype.addLinkedList = function (newdata) {
        this.llData.add(newdata);
    };
    AppComponent.prototype.addHashSet = function (newdata) {
        this.hsData.add(newdata);
    };
    AppComponent.prototype.addTreeSet = function (newdata) {
        this.tsData.add(newdata);
    };
    AppComponent.prototype.addArrayListAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.alAllData.add(psp);
    };
    AppComponent.prototype.addLinkedListAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.llAllData.add(psp);
    };
    AppComponent.prototype.addHashSetAll = function (newsku, newvalue) {
        var psp = new PetStoreProduct(newsku, newvalue);
        this.hsAllData.add(psp);
    };
    AppComponent.prototype.removeArrayListEntry = function (olddata) {
        this.alData.remove(olddata);
    };
    AppComponent.prototype.removeLinkedListEntry = function (olddata) {
        this.llData.remove(olddata);
    };
    AppComponent.prototype.removeHashSetEntry = function (olddata) {
        this.hsData.remove(olddata);
    };
    AppComponent.prototype.removeTreeSetEntry = function (olddata) {
        this.tsData.remove(olddata);
    };
    AppComponent.prototype.removeArrayListAllEntry = function (oldpsp) {
        this.alAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeLinkedListAllEntry = function (oldpsp) {
        this.llAllData.remove(oldpsp);
    };
    AppComponent.prototype.removeHashSetAllEntry = function (oldpsp) {
        this.hsAllData.remove(oldpsp);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

var PetStoreProduct = (function () {
    function PetStoreProduct(isku, iname) {
        this.sku = isku;
        this.name = iname;
    }
    PetStoreProduct.prototype.getSku = function () { return this.sku; };
    PetStoreProduct.prototype.setSku = function (newsku) { this.sku = newsku; };
    PetStoreProduct.prototype.getName = function () { return this.name; };
    PetStoreProduct.prototype.setName = function (newname) { this.name = newname; };
    return PetStoreProduct;
}());

var PetStoreProductHashable = (function () {
    function PetStoreProductHashable() {
    }
    PetStoreProductHashable.prototype.equals = function (o1, o2) {
        if (o1 === undefined) {
            if (o2 === undefined) {
                return true;
            }
            else {
                return false;
            }
        }
        if (o1 === null) {
            if (o2 === null) {
                return true;
            }
            else {
                return false;
            }
        }
        if ((o2 === null) || (o2 === undefined)) {
            return false;
        }
        if (JSON.stringify(o1.getSku()) === JSON.stringify(o2.getSku()))
            return true;
        return false;
    };
    ;
    PetStoreProductHashable.prototype.hashCode = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = JSON.stringify(o);
        var hash = 0;
        for (var loop = 0; loop < tmp.length; loop++) {
            var n = tmp.charCodeAt(loop);
            hash = ((hash * 256) + n) % 1000000000;
        }
        return hash;
    };
    ;
    PetStoreProductHashable.prototype.getHashCodeForString = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = JSON.stringify(o);
        var hash = 0;
        for (var loop = 0; loop < tmp.length; loop++) {
            var n = tmp.charCodeAt(loop);
            hash = ((hash * 256) + n) % 1000000000;
        }
        return hash;
    };
    PetStoreProductHashable.prototype.getHashCodeForStringArray = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = 0;
        for (var loop = 0; loop < o.length; loop++) {
            var ostr = o[loop];
            tmp = ((tmp * 256) + this.getHashCodeForString(ostr)) % 1000000000;
        }
        return tmp;
    };
    PetStoreProductHashable.prototype.getHashCodeForStrings = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = 0;
        for (var iter = o.iterator(); iter.hasNext();) {
            var ostr = iter.next();
            tmp = ((tmp * 256) + this.getHashCodeForString(ostr)) % 1000000000;
        }
        return tmp;
    };
    PetStoreProductHashable.prototype.getHashCodeForNumber = function (o) {
        if (o === undefined) {
            return 0;
        }
        if (o === null) {
            return 0;
        }
        var tmp = o;
        while ((tmp < 1000000000) && (Math.floor(tmp) !== tmp)) {
            tmp = tmp * 10;
        }
        return tmp;
    };
    return PetStoreProductHashable;
}());

//# sourceMappingURL=/Volumes/USBRAID/git/typescriptcollectionsframework-Demo-For-Angular4/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Volumes/USBRAID/git/typescriptcollectionsframework-Demo-For-Angular4/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Volumes/USBRAID/git/typescriptcollectionsframework-Demo-For-Angular4/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Volumes/USBRAID/git/typescriptcollectionsframework-Demo-For-Angular4/src/main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__("../../../../core-js/es6/symbol.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__("../../../../core-js/es6/object.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__("../../../../core-js/es6/function.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__("../../../../core-js/es6/parse-int.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__("../../../../core-js/es6/parse-float.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__("../../../../core-js/es6/number.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__("../../../../core-js/es6/math.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__("../../../../core-js/es6/string.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__("../../../../core-js/es6/date.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__("../../../../core-js/es6/array.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__("../../../../core-js/es6/regexp.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__("../../../../core-js/es6/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__("../../../../core-js/es6/set.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Volumes/USBRAID/git/typescriptcollectionsframework-Demo-For-Angular4/src/polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map