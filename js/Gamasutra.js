(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkBSIg7hRIA1hJIgWAAIAAgJIA8AAIAAAJIgTAAIgtA9IA+BTIAMAAIAAAKgAhNBSIAAgKIATAAIAAiPIgTgBIAAgJIBGAAIAAAJIgTAAIAACQIATAAIAAAKg");
	this.shape.setTransform(97.7,81.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbBQQgNgEgJgHQgIgIgFgKQgFgLAAgNIAAhkIgTAAIAAgKIBGAAIAAAKIgTAAIAABcIABARQABAHACAFQACAFADAEIAJAGQAJAFAKAAQAMAAAIgDQAJgEAGgGQANgMAAgYIAAhcIgVAAIAAgKIA6AAIAAAKIgVAAIAABdQAAAVgIAOQgDAHgGAFQgGAFgIAEQgIAEgJACQgKACgIAAQgPAAgMgEg");
	this.shape_1.setTransform(79.2,81.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgTA3QgLgEgHgIQgHgIgEgKQgEgLAAgOQAAgMAEgLQAEgMAIgHQAHgIALgFQAKgEAMAAQALAAAJADQAJAEAGAFQAHAGADAJQADAIAAAKIAAAKIhJAAQAAAXAKANQAEAHAHADQAGADAIAAIAHAAIAGgCIAJgEIAMgHIAFALIgPAIIgNAFIgKADIgMABQgMAAgKgFgAgMgoQgEAEgCAGQgCAGgBAHIAqAAIAAgGQAAgLgEgHQgFgHgIAAQgJAAgHAIg");
	this.shape_2.setTransform(57.3,84.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAJBcIAAgKIAOAAIAAhGQAAgMgCgDQgEgEgHAAIgHABIgFACIgHAFIgLAJIAABIIAPAAIAAAKIg7AAIAAgKIAPAAIAAicIgSAAIAAgIIAkgJIALAAIAABZIAMgLIAIgGIAKgDIAKgBQAIAAAGABQAGACAFAFQAHAIAAAOIAABLIAPAAIAAAKg");
	this.shape_3.setTransform(44.2,80.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDBJQgFgCgDgEQgEgDgCgFQgBgEAAgGIAAhLIgRAAIAAgIIARgEIAAgkIAbAAIAAAkIAaAAIAAAMIgaAAIAABGIAAAHQAAADACACQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAHgBIAIgEIAFAJQgJAHgHADQgGAEgHAAQgGAAgEgCg");
	this.shape_4.setTransform(33.6,82.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAIA6IAAgKIAPAAIAAhFQAAgMgDgEQgCgEgJAAIgGABIgFACIgHAGIgLAJIAABHIAPAAIAAAKIg7AAIAAgKIAPAAIAAhXIgRAAIAAgIIAkgJIAKAAIABAUIAKgLIAJgGIAJgDIALgBQAIAAAGABQAGACAEAFQAJAIAAAPIAABKIAPAAIAAAKg");
	this.shape_5.setTransform(16.4,84);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBYIAAgKIAPAAIAAhXIgQAAIAAgIIAjgJIAKAAIAABoIAOAAIAAAKgAgMg5QgFgFAAgHQAAgIAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_6.setTransform(5.6,80.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBIIAJgGIAHgFIAFgFIAFgGIAFgGIADgHIAEgHIADgJIgohiIgJAAIAAgLIA0AAIAAALIgMAAIAXA9IAYg9IgQAAIAAgLIAmAAIAAALIgKAAIgqBrQgDANgHAMQgGAMgGAIIgEAGIgGAIg");
	this.shape_7.setTransform(215.3,64.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDBJQgFgCgDgEQgEgDgCgFQgBgEAAgGIAAhLIgRAAIAAgIIARgEIAAgkIAbAAIAAAkIAaAAIAAAMIgaAAIAABGIAAAHQAAADACACQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAHgBIAIgEIAFAJQgJAHgHADQgGAEgHAAQgGAAgEgCg");
	this.shape_8.setTransform(206.2,59.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcBYIAAgKIAPAAIAAhXIgQAAIAAgIIAjgJIAKAAIAABoIAOAAIAAAKgAgMg5QgFgFAAgHQAAgIAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_9.setTransform(198.9,57.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAyIAAAJIgMAAIAAgjIANAAIAAAHQAAADACAEQADADAEACQAEADAFACQAGACAEAAQAKAAAFgFQAFgDAAgGIgBgHQgBgDgEgCIgJgGIgPgGQgRgHgJgHQgGgJgBgNQAAgIADgHQADgFAGgFQAEgFAIgDQAHgBAKAAQAIgBAGACQAHACAFAFIABgJIAOAAIgGAkIgOAAIACgFIAAgDQAAgEgCgDQgCgDgDgCIgIgEIgIgBQgJAAgFADQgEAEAAAHIAAAGIAEAFIAKAFIAPAGIAPAIQAGAEAEAEQAEAEACAFQABAFABAHQgBAIgCAHQgDAGgEAFQgGAEgHADQgIACgJAAQgUAAgLgKg");
	this.shape_10.setTransform(190.1,61.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA6IAAgLIAOAAIAAhWIgRAAIAAgIIAkgKIAJAAIAAATIAGgGQAHgHAFgDQAFgDAFAAQAGAAADACIAHAHIgQAWIgHgFIgFgCQgEAAgDADIgJAJIAABEIASAAIAAALg");
	this.shape_11.setTransform(180.5,61);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTA3QgLgEgHgIQgHgIgEgKQgEgLAAgOQAAgMAEgLQAEgMAIgHQAHgIALgFQAKgEAMAAQALAAAJADQAJAEAGAFQAHAGADAJQADAIAAAKIAAAKIhJAAQAAAXAKANQAEAHAHADQAGADAIAAIAHAAIAGgCIAJgEIAMgHIAFALIgPAIIgNAFIgKADIgMABQgMAAgKgFgAgMgoQgEAEgCAGQgCAGgBAHIAqAAIAAgGQAAgLgEgHQgFgHgIAAQgJAAgHAIg");
	this.shape_12.setTransform(169.7,61.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFA7IgrhqIgGAAIAAgKIAwAAIAAAKIgLAAIAZA+IAYg+IgPAAIAAgKIAmAAIAAAKIgLAAIgoBqg");
	this.shape_13.setTransform(158.4,61.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcBYIAAgKIAPAAIAAhXIgQAAIAAgIIAjgJIAKAAIAABoIAOAAIAAAKgAgMg5QgFgFAAgHQAAgIAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_14.setTransform(149.4,57.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAIA6IAAgLIAPAAIAAhEQAAgMgCgDQgDgFgIAAIgHAAIgFADIgIAFIgKAKIAABGIAPAAIAAALIg7AAIAAgLIAPAAIAAhWIgSAAIAAgIIAkgKIALAAIAAAVIALgLIAJgGIAKgDIAKgBQAIAAAGABQAGADAEADQAIAJAAAPIAABJIAPAAIAAALg");
	this.shape_15.setTransform(138.6,61);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcBQQgMgEgIgHQgKgIgEgKQgFgLAAgNIAAhkIgTAAIAAgKIBGAAIAAAKIgTAAIAABcIABARQABAHACAFQACAFADAEIAIAGQAKAFALAAQAKAAAKgDQAIgEAGgGQANgMAAgYIAAhcIgVAAIAAgKIA6AAIAAAKIgVAAIAABdQAAAVgHAOQgEAHgGAFQgGAFgIAEQgIAEgKACQgIACgJAAQgPAAgNgEg");
	this.shape_16.setTransform(121.8,58.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcAyIAAAJIgNAAIAAgjIAPAAIAAAHQAAADABAEQADADAEACQAEADAGACQAFACAEAAQAKAAAFgFQAFgDAAgGIgBgHQgCgDgDgCIgJgGIgOgGQgSgHgIgHQgIgJAAgNQABgIACgHQADgFAFgFQAGgFAHgDQAIgBAJAAQAHgBAHACQAHACAGAFIABgJIANAAIgGAkIgOAAIACgFIAAgDQAAgEgCgDQgCgDgDgCIgIgEIgIgBQgIAAgGADQgEAEAAAHIABAGIADAFIAKAFIAPAGIAQAIQAGAEAEAEQADAEACAFQACAFAAAHQAAAIgDAHQgCAGgFAFQgGAEgHADQgIACgJAAQgUAAgLgKg");
	this.shape_17.setTransform(100.3,61.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgDBJQgFgCgDgEQgEgDgCgFQgBgEAAgGIAAhLIgRAAIAAgIIARgEIAAgkIAbAAIAAAkIAaAAIAAAMIgaAAIAABGIAAAHQAAADACACQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAHgBIAIgEIAFAJQgJAHgHADQgGAEgHAAQgGAAgEgCg");
	this.shape_18.setTransform(91.4,59.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpA6IAAgLIAOAAIAAhWIgRAAIAAgIIAkgKIAJAAIAAATIAGgGQAHgHAFgDQAFgDAFAAQAGAAADACIAHAHIgQAWIgHgFIgFgCQgEAAgDADIgJAJIAABEIASAAIAAALg");
	this.shape_19.setTransform(83.3,61);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXBVIAAgKIASAAIgQgpIg8AAIgQApIAUAAIAAAKIg0AAIAAgKIAQAAIBAifIAOAAIA+CfIALAAIAAAKgAATATIgXg+IgZA+IAwAAg");
	this.shape_20.setTransform(69.8,58.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiA6IAAgLIAUAAIAAhdIgUAAIAAgKIBFAAIAAAKIgUAAIAABdIAUAAIAAALg");
	this.shape_21.setTransform(50.4,61);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_22.setTransform(36.1,65.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgWA3QgLgEgHgJQgIgHgFgLQgEgLAAgNQAAgMAEgLQAFgLAIgIQAHgIALgEQALgFALAAQAMAAALAFQALAEAIAIQAHAIAEALQAFALAAAMQAAANgFALQgEALgHAHQgIAJgLAEQgLAFgMAAQgLAAgLgFgAgKgrQgEADgEAHQgDAGgCAIQgCAJAAAKQAAAKACAJQACAJADAGQAEAGAEAEQAFADAFAAQAFAAAFgDQAFgEAEgGQADgHACgIQACgJAAgKQAAgKgCgJQgCgIgDgGQgEgHgFgDQgFgEgFAAQgFAAgFAEg");
	this.shape_23.setTransform(26.7,61.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAtBUIhWh6IAABsIAUAAIAAALIg5AAIAAgLIAVAAIAAiCIgIgNIgSAAIAAgKIAyAAIBQByIAAhoIgUAAIAAgKIA5AAIAAAKIgVAAIAACdg");
	this.shape_24.setTransform(11.2,58.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTA3QgLgEgHgIQgHgIgEgKQgEgLAAgOQAAgMAEgLQAEgMAIgHQAHgIALgFQAKgEAMAAQALAAAJADQAJAEAGAFQAHAGADAJQADAIAAAKIAAAKIhJAAQAAAXAKANQAEAHAHADQAGADAIAAIAHAAIAGgCIAJgEIAMgHIAFALIgPAIIgNAFIgKADIgMABQgMAAgKgFgAgMgoQgEAEgCAGQgCAGgBAHIAqAAIAAgGQAAgLgEgHQgFgHgIAAQgJAAgHAIg");
	this.shape_25.setTransform(155.1,38.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAJBcIAAgLIAOAAIAAhFQAAgMgDgCQgDgFgHAAIgHABIgFACIgHAEIgKAKIAABHIAOAAIAAALIg6AAIAAgLIAOAAIAAibIgSAAIAAgIIAkgJIAMAAIAABZIALgKIAIgHIAKgDIAKgBQAIAAAGACQAGABAFAFQAHAIABAOIAABKIAOAAIAAALg");
	this.shape_26.setTransform(142.1,34.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDBJQgFgCgDgEQgEgDgCgFQgBgEAAgGIAAhLIgRAAIAAgIIARgEIAAgkIAbAAIAAAkIAaAAIAAAMIgaAAIAABGIAAAHQAAADACACQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAHgBIAIgEIAFAJQgJAHgHADQgGAEgHAAQgGAAgEgCg");
	this.shape_27.setTransform(131.5,36.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAJBcIAAgLIAOAAIAAhFQAAgMgDgCQgDgFgHAAIgHABIgFACIgHAEIgKAKIAABHIAOAAIAAALIg6AAIAAgLIAOAAIAAibIgSAAIAAgIIAkgJIAMAAIAABZIALgKIAIgHIAKgDIAKgBQAIAAAGACQAGABAFAFQAHAIABAOIAABKIAOAAIAAALg");
	this.shape_28.setTransform(114.2,34.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDBJQgFgCgDgEQgEgDgCgFQgBgEAAgGIAAhLIgRAAIAAgIIARgEIAAgkIAbAAIAAAkIAaAAIAAAMIgaAAIAABGIAAAHQAAADACACQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAHgBIAIgEIAFAJQgJAHgHADQgGAEgHAAQgGAAgEgCg");
	this.shape_29.setTransform(103.6,36.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgcBYIAAgKIAPAAIAAhXIgQAAIAAgIIAjgJIAKAAIAABoIAOAAIAAAKgAgMg5QgFgFAAgHQAAgIAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_30.setTransform(96.3,34.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAdA6IgdhKIgdBKIgJAAIgrhpIgGAAIAAgLIAvAAIAAALIgKAAIAaA9IASguIgHgPIgMAAIAAgLIAzAAIAAALIgLAAIAaA+IAYg+IgPAAIAAgLIAnAAIAAALIgMAAIgoBpg");
	this.shape_31.setTransform(83.9,38.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgTA3QgLgEgHgIQgHgIgEgKQgEgLAAgOQAAgMAEgLQAEgMAIgHQAHgIALgFQAKgEAMAAQALAAAJADQAJAEAGAFQAHAGADAJQADAIAAAKIAAAKIhJAAQAAAXAKANQAEAHAHADQAGADAIAAIAHAAIAGgCIAJgEIAMgHIAFALIgPAIIgNAFIgKADIgMABQgMAAgKgFgAgMgoQgEAEgCAGQgCAGgBAHIAqAAIAAgGQAAgLgEgHQgFgHgIAAQgJAAgHAIg");
	this.shape_32.setTransform(63.1,38.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAIA6IAAgLIAPAAIAAhEQAAgMgDgDQgCgFgJAAIgGABIgFACIgIAFIgKAKIAABGIAPAAIAAALIg7AAIAAgLIAPAAIAAhWIgRAAIAAgIIAkgJIAKAAIABAUIAKgKIAJgHIAJgDIALgBQAIAAAGACQAGABAEAFQAJAIgBAPIAABJIAQAAIAAALg");
	this.shape_33.setTransform(50.1,38);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgcBYIAAgKIAPAAIAAhXIgQAAIAAgIIAjgJIAKAAIAABoIAOAAIAAAKgAgMg5QgFgFAAgHQAAgIAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_34.setTransform(39.3,34.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgbBcIAAgLIAPAAIAAibIgRAAIAAgIIAjgJIAKAAIAACsIAOAAIAAALg");
	this.shape_35.setTransform(32.3,34.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAJA6IAAgLIAOAAIAAhEQAAgMgDgDQgDgFgHAAIgHABIgFACIgHAFIgLAKIAABGIAPAAIAAALIg6AAIAAgLIAOAAIAAhWIgSAAIAAgIIAkgJIALAAIABAUIALgKIAIgHIAKgDIAKgBQAIAAAGACQAGABAFAFQAHAIABAPIAABJIAOAAIAAALg");
	this.shape_36.setTransform(21.9,38);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgWA3QgKgEgJgJQgHgHgEgLQgFgLAAgNQAAgMAFgLQAEgLAHgIQAJgIAKgEQAKgFAMAAQAMAAALAFQALAEAHAIQAIAIAFALQAEALAAAMQAAANgEALQgFALgIAHQgHAJgLAEQgLAFgMAAQgMAAgKgFgAgJgrQgGADgDAHQgDAGgCAIQgCAJAAAKQAAAKACAJQACAJADAGQADAGAGAEQAFADAEAAQAGAAAFgDQAEgEAEgGQADgHACgIQACgJAAgKQAAgKgCgJQgCgIgDgGQgEgHgEgDQgFgEgGAAQgEAAgFAEg");
	this.shape_37.setTransform(8.3,38.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AghBZQgJgEgGgIQgGgIgEgKQgEgKAAgNQAAgNAFgLQAFgMAIgHQAIgIALgFQALgFANAAIAIABIAJACIAAg1IgQAAIAAgIIAjgKIALAAIAACoIARAAIAAAIIgkAKIgLAAIAAgPIgIAIIgHAEIgGADIgJABQgKAAgJgFgAgJgKQgHAEgEAGQgFAGgCAIQgDAJAAAKQAAAJACAIQACAIAEAGQAEAFAEAEQAFADAGAAQADAAAGgCQAFgDAFgGIAAg8QAAgJgDgFQgDgEgHAAQgGAAgGADg");
	this.shape_38.setTransform(182.4,11.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAJA6IAAgKIAOAAIAAhFQAAgLgCgFQgEgEgHAAIgHABIgFACIgIAGIgKAJIAABHIAPAAIAAAKIg7AAIAAgKIAPAAIAAhXIgSAAIAAgIIAkgKIALAAIAAAVIAMgLIAIgGIAKgDIAKgBQAIAAAGABQAGACAFAEQAHAJAAAPIAABKIAPAAIAAAKg");
	this.shape_39.setTransform(168.4,15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgiA6QgFgCgFgEQgDgEgCgFQgDgGAAgHQABgLAFgHQAGgIANgDIAjgHIAAgaQAAgKgCgEQgDgDgGAAIgGAAIgHADIAAAMIgdAHIgBgDIAAgEQAAgLALgHQAHgEAIgBQAHgCAKAAQAJAAAIACQAIABAEAEQALAHAAAOIAABKIAPAAIAAAIIgRAGQgFABgGAAQgOAAgBgNQgHAIgFADQgHAEgKAAQgHAAgHgCgAgYAOIAAAOQABAHAEAFQADAEAGAAQAEAAAFgCIAJgIIAAgcg");
	this.shape_40.setTransform(155.4,15.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AguBIIAJgGIAHgFIAFgFIAFgGIAFgGIADgHIAEgHIADgJIgohiIgJAAIAAgLIA0AAIAAALIgMAAIAXA9IAYg9IgQAAIAAgLIAmAAIAAALIgKAAIgqBrQgDANgHAMQgGAMgGAIIgEAGIgGAIg");
	this.shape_41.setTransform(137.9,18.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgbBcIAAgKIAPAAIAAibIgRAAIAAgIIAjgKIAKAAIAACtIAOAAIAAAKg");
	this.shape_42.setTransform(129,11.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgMBdIgIgBIgKgBIgOgDIAAijIgRAAIAAgIIAkgKIAKAAIAACsIAHACIAFABQAGAAAHgEQAGgDAFgHQAEgHADgJQADgJAAgLQAAgUgHgMQgEgGgFgCQgFgEgGAAIgJAAIAAgKIAKgCIAKgBQAKAAAJAEQAJAEAGAHQAHAHADAIQADAKAAAMQAAANgEANQgEAMgHAJQgJAKgMAFQgTAFgLAAg");
	this.shape_43.setTransform(118.9,11.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgcBYIAAgKIAPAAIAAhXIgQAAIAAgIIAjgJIAKAAIAABoIAOAAIAAAKgAgMg5QgFgFAAgHQAAgIAFgFQAFgFAHAAQAHAAAFAFQAFAFAAAIQAAAHgFAFQgFAFgHAAQgHAAgFgFg");
	this.shape_44.setTransform(109.1,11.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AADA5IAAgLIAJAAIgRgeIgXAeIANAAIAAALIgnAAIAAgLIALAAIAfgpIgegyIgJAAIAAgLIAzAAIAAALIgJAAIAPAbIAVgbIgKAAIAAgLIAkAAIAAALIgLAAIgdAmIAgA1IAKAAIAAALg");
	this.shape_45.setTransform(100.1,15.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTA3QgLgEgHgIQgHgIgEgKQgEgLAAgOQAAgMAEgLQAEgMAIgHQAHgIALgFQAKgEAMAAQALAAAJADQAJAEAGAFQAHAGADAJQADAIAAAKIAAAKIhJAAQAAAXAKANQAEAHAHADQAGADAIAAIAHAAIAGgCIAJgEIAMgHIAFALIgPAIIgNAFIgKADIgMABQgMAAgKgFgAgMgoQgEAEgCAGQgCAGgBAHIAqAAIAAgGQAAgLgEgHQgFgHgIAAQgJAAgHAIg");
	this.shape_46.setTransform(89,15.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgbBcIAAgKIAPAAIAAibIgRAAIAAgIIAjgKIAKAAIAACtIAOAAIAAAKg");
	this.shape_47.setTransform(79.7,11.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag0BcIAAgKIAPAAIAAhXIgRAAIAAgIIARgFIAAgVQAAgPAFgJQACgFAEgFIAKgIQAIgFAIgDQAIgCAKAAQALAAAJACQAIACAJAFIgRAVIgHgGIgFgFIgGgDIgIgFIgLAEQgDACgCAFQgCAFgBAIIAAAWIAAARIAYAAIAAAMIgYAAIAABXIATAAIAAAKg");
	this.shape_48.setTransform(74.3,11.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AguBIIAJgGIAHgFIAFgFIAFgGIAFgGIADgHIAEgHIADgJIgohiIgJAAIAAgLIA0AAIAAALIgMAAIAXA9IAYg9IgQAAIAAgLIAmAAIAAALIgKAAIgqBrQgDANgHAMQgGAMgGAIIgEAGIgGAIg");
	this.shape_49.setTransform(56.6,18.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AghBZQgJgEgGgIQgGgIgEgKQgEgKAAgNQAAgNAFgLQAFgMAIgHQAIgIALgFQALgFANAAIAIABIAJACIAAg1IgQAAIAAgIIAjgKIALAAIAACoIARAAIAAAIIgkAKIgLAAIAAgPIgIAIIgHAEIgGADIgJABQgKAAgJgFgAgJgKQgHAEgEAGQgFAGgCAIQgDAJAAAKQAAAJACAIQACAIAEAGQAEAFAEAEQAFADAGAAQADAAAGgCQAFgDAFgGIAAg8QAAgJgDgFQgDgEgHAAQgGAAgGADg");
	this.shape_50.setTransform(44.5,11.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgqAzQgIgIAAgQIAAhEIgSAAIAAgIIAkgKIALAAIAABRQAAALADAEQAFAFAHABIAGgCIAGgCIAIgGIAIgIIAAhCIgMAAIAAgJIAggJIAJAAIAABjIASAAIAAAJIgkAJIgLAAIAAgVIgLALIgJAHIgJADIgLABQgPABgJgJg");
	this.shape_51.setTransform(30.6,15.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDBJQgFgCgDgEQgEgDgCgFQgBgEAAgGIAAhLIgRAAIAAgIIARgEIAAgkIAbAAIAAAkIAaAAIAAAMIgaAAIAABGIAAAHQAAADACACQABAAAAAAQABABAAAAQABAAABAAQAAAAABAAIAHgBIAIgEIAFAJQgJAHgHADQgGAEgHAAQgGAAgEgCg");
	this.shape_52.setTransform(19.9,13.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgSBUQgIgCgJgFIAAAIIgOAAIAAgsIAOAAIAAASQAJAHAHACQAHADAJAAQALAAAIgGQAHgGAAgKIgBgIQgCgEgDgEIgKgIIgOgKIgOgKIgJgFIgGgFIgEgFQgFgFgDgHQgCgIAAgIQAAgKAEgJQADgIAHgGQAHgGAJgEQAJgDALAAIANACIAOAEIAAgIIANAAIAAArIgNAAIAAgRQgIgFgGgCQgGgDgHAAQgIAAgHAHQgHAGAAAJIACAHQABADADADIAJAIIAOAKIAOAJIAHAFQAKAFAGAKQADAGACAGQACAHAAAHQAAALgEAJQgEAJgGAGQgHAGgJAEQgJAEgLAAQgKAAgJgDg");
	this.shape_53.setTransform(9.1,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229.4,96);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBdQgHgCgEgFQgFgDgCgHQgCgGAAgGIAAhhIgVAAIAAgKIAVgGIAAguIAjAAIAAAuIAhAAIAAAQIghAAIAABaIAAAJQAAADADADQADACADAAIAJgBIALgHIAGAMQgMAKgIAEQgJADgJAAQgIAAgEgCg");
	this.shape.setTransform(241.5,45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALBKIAAgNIATAAIAAhYQAAgPgEgFQgDgGgKAAIgJABIgHADIgJAHIgNAMIAABbIASAAIAAANIhLAAIAAgNIATAAIAAhvIgWAAIAAgKIAugNIAOAAIAAAaIAOgNIALgIIAMgEIAOgBQAKAAAIACQAIADAFAFQAKAKAAAUIAABeIATAAIAAANg");
	this.shape_1.setTransform(227.3,47);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZBHQgNgFgJgKQgKgKgFgOQgFgOAAgRQAAgRAFgOQAGgOAJgKQAKgKANgGQAOgFAPAAQAOAAAMAEQALAEAIAHQAIAIAFALQAEALAAANIAAAMIhfAAQAAAdANARQAGAJAJAEQAHAEALAAIAIAAIAJgDIAKgFIAQgJIAHAOIgUALIgQAGIgNAEIgQAAQgPAAgNgFgAgQgzQgFAGgCAHQgDAHgBAJIA2AAIAAgHQAAgPgGgJQgGgJgKAAQgMAAgJALg");
	this.shape_2.setTransform(210.7,47.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA8BKIAAgNIASAAIAAhYQAAgOgEgGQgEgFgJAAIgJABIgJAEIgKAIIgMANIAABXIARAAIAAANIhHAAIAAgNIARAAIAAhYQAAgOgEgFQgEgGgKAAQgKAAgJAFQgIAFgMANIAABaIASAAIAAANIhLAAIAAgNIATAAIAAhvIgWAAIAAgKIAugNIAOAAIAAAZIAOgMIAMgIIAMgEIANgBQASAAAJAHQAKAHAEAQQAOgRAMgHQAMgGAQAAQAKAAAHACQAIADAGAFQAMALAAASIAABfIASAAIAAANg");
	this.shape_3.setTransform(189.1,47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKBxIAAgNIASAAIAAi/IgWAAIAAgJIAugMIAOAAIAAAOQAJgIAJgDQAJgDANAAQANAAAKAFQALAFAHAJQAIAJAEANQAEANAAAQQAAASgGAPQgFAPgKAKQgLALgOAGQgOAGgSAAIgJAAIgKgDIAABAIAUAAIAAANgAgEhaQgGACgIAGIAABSIAAANIADAIQACADADABIAIABQAJAAAHgFQAIgFAEgIQAGgIADgMQADgMAAgPQAAgMgCgJQgCgKgFgHQgJgPgOAAQgGAAgEACg");
	this.shape_4.setTransform(166.3,50.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBHQgNgGgKgKQgKgLgGgNQgFgOAAgRQAAgQAFgOQAGgOAKgKQAKgKANgGQAOgFAPAAQAQAAAOAFQANAGAKAKQAKAKAFAOQAGAOAAAQQAAARgGAOQgFANgKALQgKAKgNAGQgOAFgQAAQgPAAgOgFgAgNg3QgGAEgEAIQgFAIgCALQgCALAAANQAAANACALQACAMAFAIQAEAHAGAFQAHAEAGAAQAHAAAGgEQAGgFAFgHQAEgJADgLQACgLAAgNQAAgNgCgLQgDgLgEgIQgFgIgGgEQgGgFgHAAQgGAAgHAFg");
	this.shape_5.setTransform(149.7,47.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkB2IAAgOIATAAIAAjGIgVAAIAAgKIAtgNIANAAIAADdIATAAIAAAOg");
	this.shape_6.setTransform(137.3,42.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZBHQgNgFgJgKQgKgKgFgOQgFgOAAgRQAAgRAFgOQAGgOAJgKQAKgKANgGQAOgFAPAAQAOAAAMAEQALAEAIAHQAIAIAFALQAEALAAANIAAAMIhfAAQAAAdANARQAGAJAJAEQAHAEALAAIAIAAIAJgDIAKgFIAQgJIAHAOIgUALIgQAGIgNAEIgQAAQgPAAgNgFgAgQgzQgFAGgCAHQgDAHgBAJIA2AAIAAgHQAAgPgGgJQgGgJgKAAQgMAAgJALg");
	this.shape_7.setTransform(125.9,47.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGBKIg3iGIgJAAIAAgNIA+AAIAAANIgNAAIAfBOIAfhOIgUAAIAAgNIAyAAIAAANIgOAAIg0CGg");
	this.shape_8.setTransform(111.4,47.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBHQgNgFgJgKQgKgKgFgOQgFgOAAgRQAAgRAFgOQAGgOAJgKQAKgKANgGQAOgFAPAAQAOAAAMAEQALAEAIAHQAIAIAFALQAEALAAANIAAAMIhfAAQAAAdANARQAGAJAJAEQAHAEALAAIAIAAIAJgDIAKgFIAQgJIAHAOIgUALIgQAGIgNAEIgQAAQgPAAgNgFgAgQgzQgFAGgCAHQgDAHgBAJIA2AAIAAgHQAAgPgGgJQgGgJgKAAQgMAAgJALg");
	this.shape_9.setTransform(97,47.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhnBqIAAgOIAZAAIAAi4IgZAAIAAgMIBkAAQAWAAAUAHQATAJAPAOIAMAPQAGAIAEAKIAHAUQACAKAAALQAAAKgCALQgDAKgEALQgJATgQARIgQAMQgIAGgJADQgSAGgWABgAglBYIAaAAQAOAAANgHQANgHAJgMQAKgLAFgRQAGgPAAgTQAAgRgGgQQgGgQgJgMQgKgLgMgIQgNgHgNAAIgbAAg");
	this.shape_10.setTransform(77.9,43.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhKBxIAAgNIATAAIAAi/IgXAAIAAgJIAugMIAOAAIAAAOQAJgIAJgDQAJgDANAAQANAAAKAFQALAFAHAJQAIAJAEANQAEANAAAQQAAASgGAPQgFAPgKAKQgLALgOAGQgOAGgSAAIgJAAIgKgDIAABAIAUAAIAAANgAgEhaQgGACgIAGIAABSIAAANIADAIQACADADABIAIABQAJAAAHgFQAIgFAEgIQAGgIADgMQADgMAAgPQAAgMgCgJQgCgKgFgHQgJgPgOAAQgGAAgEACg");
	this.shape_11.setTransform(49.2,50.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhKBxIAAgNIATAAIAAi/IgXAAIAAgJIAugMIAOAAIAAAOQAJgIAJgDQAIgDANAAQANAAALAFQALAFAHAJQAIAJAEANQAEANAAAQQAAASgGAPQgFAPgLAKQgKALgOAGQgPAGgRAAIgJAAIgKgDIAABAIAUAAIAAANgAgFhaQgFACgIAGIAABSIAAANIADAIQACADADABIAIABQAJAAAHgFQAIgFAEgIQAGgIADgMQADgMAAgPQAAgMgCgJQgCgKgFgHQgJgPgOAAQgGAAgFACg");
	this.shape_12.setTransform(32,50.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdBtIAAgOIAXAAIgUg0IhNAAIgVA0IAaAAIAAAOIhCAAIAAgOIAUAAIBSjLIATAAIBPDLIANAAIAAAOgAAZAYIgehPIggBPIA+AAg");
	this.shape_13.setTransform(12.7,43.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZBHQgNgFgJgKQgKgKgFgOQgFgOAAgRQAAgRAFgOQAGgOAJgKQAKgKANgGQAOgFAPAAQAOAAAMAEQALAEAIAHQAIAIAFALQAEALAAANIAAAMIhfAAQAAAdANARQAGAJAJAEQAHAEALAAIAIAAIAJgDIAKgFIAQgJIAHAOIgUALIgQAGIgNAEIgQAAQgPAAgNgFgAgQgzQgFAGgCAHQgDAHgBAJIA2AAIAAgHQAAgPgGgJQgGgJgKAAQgMAAgJALg");
	this.shape_14.setTransform(163.1,18.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBKIg3iGIgJAAIAAgNIA+AAIAAANIgNAAIAfBOIAfhOIgUAAIAAgNIAyAAIAAANIgOAAIg0CGg");
	this.shape_15.setTransform(148.6,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkBxIAAgNIATAAIAAhwIgVAAIAAgKIAtgMIANAAIAACGIATAAIAAANgAgPhJQgHgGAAgKQAAgJAHgHQAGgHAJAAQAJAAAHAHQAGAHAAAJQAAAKgGAGQgHAHgJgBQgJABgGgHg");
	this.shape_16.setTransform(137.1,14.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgEBdQgHgCgEgFQgFgDgCgHQgCgGAAgGIAAhhIgVAAIAAgKIAVgGIAAguIAjAAIAAAuIAhAAIAAAQIghAAIAABaIAAAJQAAADADADQADACADAAIAJgBIALgHIAGAMQgMAKgIAEQgJAEgJgBQgIAAgEgCg");
	this.shape_17.setTransform(127.9,16.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrBKQgHgDgFgFQgGgFgDgGQgCgHAAgJQAAgOAIgKQAIgJAPgEIAtgJIAAgiQAAgMgDgFQgEgFgHAAIgHAAIgJAEIAAAQIglAJIgCgFIAAgEQAAgPAPgJQAIgEAKgCQAKgCAMAAQAMAAAKACQAKACAGAEQAOAJAAASIAABgIATAAIAAAKIgVAHQgHACgIAAQgRAAgDgRQgIAKgHAEQgJAEgNAAQgJAAgIgCgAgeASIAAASQAAAJAFAGQAEAGAIAAQAFAAAGgDQAEgDAIgIIAAgjg");
	this.shape_18.setTransform(115.7,18.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgZBHQgNgFgJgKQgKgKgFgOQgFgOAAgRQAAgRAFgOQAGgOAJgKQAKgKANgGQAOgFAPAAQAOAAAMAEQALAEAIAHQAIAIAFALQAEALAAANIAAAMIhfAAQAAAdANARQAGAJAJAEQAHAEALAAIAIAAIAJgDIAKgFIAQgJIAHAOIgUALIgQAGIgNAEIgQAAQgPAAgNgFgAgQgzQgFAGgCAHQgDAHgBAJIA2AAIAAgHQAAgPgGgJQgGgJgKAAQgMAAgJALg");
	this.shape_19.setTransform(101.1,18.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag2BKIAAgNIATAAIAAhvIgWAAIAAgKIAugNIANAAIAAAZIAHgIQAJgKAGgEQAHgDAGAAQAIAAADADIAKAIIgUAcIgKgGIgGgCQgFAAgEADIgLAMIAABYIAWAAIAAANg");
	this.shape_20.setTransform(88.1,18.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWBnQgLgEgJgGQgJgGgIgHQgHgHgGgJQgGgIgFgKQgEgKgCgLQgCgLAAgMQAAgXAIgUQAJgUAPgPQAPgPAVgIQAUgIAYAAQAPAAAMACQAMACAOAHIAAgOIASAAIAAA5IgSAAIAAgUIgMgIIgLgFIgLgCIgLgBQgRAAgNAGQgOAHgKAMQgKAMgGAQQgFARAAATQAAATAGARQAGARALANQAKAMAOAHQAOAHAQAAQAMAAALgDQAJgDALgHIAAgYIASAAIAAArIgSAGIgRAEIgRACIgRABQgYAAgVgIg");
	this.shape_21.setTransform(70.9,15.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAdBtIAAgNIAXAAIgUg1IhNAAIgVA1IAaAAIAAANIhCAAIAAgNIAUAAIBSjMIATAAIBPDMIANAAIAAANgAAZAYIgehPIggBPIA+AAg");
	this.shape_22.setTransform(41.5,15.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhTgrIAACGIAbAAIAAANIhKAAIAAgNIAbAAIAAi4IgbAAIAAgNIA5AAIBKCTIBDiTIBAAAIAAANIgbAAIAAC4IAbAAIAAANIhgAAIAAgNIAbAAIAAiJIhFCZg");
	this.shape_23.setTransform(16.4,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,248.3,90.4);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1D1C").s().p("AgqBFIAAiJIBTAAIAAAXIg5AAIAAAiIAuAAIAAAVIguAAIAAAlIA7AAIAAAWg");
	this.shape.setTransform(169.9,17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1C").s().p("AAVBFIgeg3IgNAAIAAA3IgbAAIAAiJIAuAAIAMABIAKACIAIADIAGAFQAGAFADAHQADAIAAAJQAAAQgIAKIgEAEIgEADIgGADIgHACIAiA7gAgWgHIARAAQAFAAAFgCQAEgBADgCQAGgFAAgKQAAgFgCgDQgBgEgDgCQgFgEgMAAIgRAAg");
	this.shape_1.setTransform(158.4,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1D1C").s().p("AgOBGIgOgEIgNgHIgKgIQgKgJgFgNQgDgHgBgHIgCgPQAAgHACgHQABgIADgGQAFgNAJgJQAKgKANgFIAPgEIAOgBIAQABIAOAEQANAFAKAKQAFAEADAGQAEAGADAGIAEAOIABAOQAAAQgFANIgHAMIgJAKQgEAFgGADIgMAHQgOAFgQAAIgOgBgAgRgsQgIAEgGAGQgGAHgDAIQgEAKAAAJQAAAKAEAJQADAJAGAGQAGAHAIADQAIAFAJAAQAKAAAIgFQAIgDAGgHQAGgGAEgJQADgJAAgKQAAgJgDgKQgEgIgGgHQgGgGgIgEQgIgDgKgBQgJABgIADg");
	this.shape_2.setTransform(143.7,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1D1C").s().p("AAuBFIAAhkIAAAFIgBADIgBAFIgDAHIgfBQIgXAAIgchPIgCgFIgBgFIgBgFIgCgHIAABlIgXAAIAAiJIAfAAIAlBhIABAFIABAGIAAgGIACgFIAmhhIAfAAIAACJg");
	this.shape_3.setTransform(126.6,17.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1D1C").s().p("AgMBFIAAhyIgpAAIAAgXIBrAAIAAAXIgpAAIAAByg");
	this.shape_4.setTransform(106.7,17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1D1C").s().p("AgVBEQgJgDgIgFQgFgEgEgEIgGgKQgCgEgBgIIgBgQIAAhTIAaAAIAABUQAAAfAgAAQAPAAAIgIQAHgIAAgPIAAhUIAbAAIAABTIgBAQQgBAIgCAEIgGAKQgEAEgFAEQgIAFgJADQgJACgNAAQgMAAgJgCg");
	this.shape_5.setTransform(93.8,17.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1D1C").s().p("AgOBGIgOgEIgNgHIgKgIQgKgJgFgNQgDgHgBgHIgCgPQAAgHACgHQABgIADgGQAFgNAJgJQAKgKANgFIAPgEIAOgBIAQABIAOAEQANAFAKAKQAFAEADAGQAEAGADAGIAEAOIABAOQAAAQgFANIgHAMIgJAKQgEAFgGADIgMAHQgOAFgQAAIgOgBgAgRgsQgIAEgGAGQgGAHgDAIQgEAKAAAJQAAAKAEAJQADAJAGAGQAGAHAIADQAIAFAJAAQAKAAAIgFQAIgDAGgHQAGgGAEgJQADgJAAgKQAAgJgDgKQgEgIgGgHQgGgGgIgEQgIgDgKgBQgJABgIADg");
	this.shape_6.setTransform(78.6,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1D1C").s().p("Ag+BFIAAiJIAzAAQATAAANAFQAHACAFAEQAGAEAFAGQAJAJAFANQAFAMgBANIgBANIgDANQgFANgJAKQgTAUgkAAgAgiAuIAVAAQAWAAANgMQAMgMAAgWQAAgLgEgKQgEgKgIgFQgFgEgIgCQgHgCgLAAIgVAAg");
	this.shape_7.setTransform(58.8,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1D1C").s().p("AAfBFIg5hXIgFgJIgBgCIgBgCIAABjIgZAAIAAiIIAeAAIA3BWIAEAIIADAHIAAhlIAZAAIAACJg");
	this.shape_8.setTransform(42.9,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1D1C").s().p("AgMBFIAAiJIAZAAIAACJg");
	this.shape_9.setTransform(31.9,17.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1D1C").s().p("AgqBFIAAiJIBVAAIAAAXIg6AAIAAAjIAvAAIAAAVIgvAAIAAA6g");
	this.shape_10.setTransform(24.1,17.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1D1C").s().p("AuJA4QgrgTAFg4IAAgpQACAVAGASQAUA3BAgBIa7gBIAKgBQANgEALgHQAjgYADg7IAAA+QABAOgIAPQgRAfgqABQguACjYgBI3FADIgHAAQgTAAgSgIg");
	this.shape_11.setTransform(96.4,29.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AtyCwQgZgBgSgRQgSgTAAgZIAAjjQAAgaASgRQASgSAZAAIbkAAQAaAAASASQASARAAAaIAADjQAAAZgSATQgSARgaABg");
	this.shape_12.setTransform(96.4,17.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,192.9,35.6);


// stage content:
(lib.Gamasutra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Frame 2
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(132.5,67.3,1,1,0,0,0,114.7,48);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:111.7,regY:46.2,x:129.5,y:65.5,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(91).to({alpha:0.933},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.067},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(239));

	// Frame 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(146,64.4,1,1,0,0,0,123.9,45.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).wait(1).to({regX:124,regY:32.8,x:146.1,y:52.1,alpha:0.067},0).wait(1).to({alpha:0.133},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.267},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.467},0).wait(1).to({alpha:0.533},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.733},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.867},0).wait(1).to({alpha:0.933},0).wait(1).to({alpha:1},0).wait(91).to({alpha:0.929},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.786},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.643},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.357},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.214},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(120));

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNCqICNlTIAOAAIiNFTg");
	this.shape.setTransform(173.4,218.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjAzQgVgTAAgfQAAgcASgTQAUgWAfAAQAaAAASAKIgFANQgRgLgXAAQgZgBgPATQgOAQAAAWQAAAaAQAPQAQAQAbAAQANAAANgDIAAgrIgdAAIAAgLIArAAIAAA/QgYAGgTAAQgdAAgUgSg");
	this.shape_1.setTransform(277.6,229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AApBCIhRhuIAABuIgNAAIAAiDIANAAIBRBwIAAhwIANAAIAACDg");
	this.shape_2.setTransform(263.3,229);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_3.setTransform(253.2,229);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApBCIhRhuIAABuIgNAAIAAiDIANAAIBSBwIAAhwIAMAAIAACDg");
	this.shape_4.setTransform(243.1,229);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeBCIgng5IgWAAIAAA5IgOAAIAAiDIAhAAQAXAAAMALQAKAJAAAOQABAZgeAMIApA8gAgfgBIAXAAQAJgBAIgGQAKgJAAgMQAAgLgHgGQgKgJgRABIgQAAg");
	this.shape_5.setTransform(230.7,229);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBDIgRgrIg2AAIgQArIgOAAIA0iFIALAAIA0CFgAgXAMIAuAAIgXg8g");
	this.shape_6.setTransform(218,228.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBCIAAiDIBLAAIAAALIg+AAIAAAwIAxAAIAAAKIgxAAIAAAzIA9AAIAAALg");
	this.shape_7.setTransform(206.5,229);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmBCIAAiDIANAAIAAB4IBAAAIAAALg");
	this.shape_8.setTransform(196.4,229);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguBKIAAiTIBcAAIAAAYIhAAAIAAAlIAyAAIAAAXIgyAAIAAAnIBBAAIAAAYg");
	this.shape_9.setTransform(278.4,209);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBKIAAiTIAdAAIAAB7IBCAAIAAAYg");
	this.shape_10.setTransform(266.7,209);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag0BKIAAiTIAxAAQAZAAANAMQALAJAAAPQAAASgRAOQAYAKAAAaQAAATgOAMQgOAMgWAAgAgYAyIAYAAQAXAAAAgUQAAgUgXAAIgYAAgAgYgMIAdAAQALgGAAgNQAAgSgWAAIgSAAg");
	this.shape_11.setTransform(253.7,209);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOBKIAAiTIAcAAIAACTg");
	this.shape_12.setTransform(243.2,209);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAgBKIgggzIgfAzIgiAAIAxhJIgxhKIAiAAIAgAzIAggzIAhAAIgxBJIAxBKg");
	this.shape_13.setTransform(233.1,209);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguBKIAAiTIBcAAIAAAYIhAAAIAAAlIAyAAIAAAXIgyAAIAAAnIBBAAIAAAYg");
	this.shape_14.setTransform(220.1,209);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgvBKIAAiTIAdAAIAAB7IBCAAIAAAYg");
	this.shape_15.setTransform(208.5,209);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBKIAAiTIBbAAIAAAYIg/AAIAAAmIAyAAIAAAXIgyAAIAAA+g");
	this.shape_16.setTransform(196.9,209);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAoBeIAAi7IAoAAIAAC7gAhPBeIAAi7IAoAAIAABIIBJAAIgOAlIg7AAIAABOg");
	this.shape_17.setTransform(151,211);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgWBeIAAiWIg0AAIAAglICVAAIgNAlIgtAAIAACWg");
	this.shape_18.setTransform(133.9,211);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag2BLQgZgYAAguIAAhjIAoAAIAABkQAAAeAPANQAKAIAOAAQAPAAAKgIQAPgNAAgeIAAhkIAoAAIAABjQAAAugZAYQgWAUghAAQggAAgWgUg");
	this.shape_19.setTransform(116.6,211.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhIBDQgcgdAAgmQAAglAcgdQAdgfArABQAsgBAdAfQAcAdAAAlQAAAmgcAdQgdAfgsgBQgrABgdgfgAgpgpQgRAQAAAZQAAAZARASQARARAYAAQAZAAARgRQAQgSAAgZQAAgZgQgQQgRgSgZAAQgYAAgRASg");
	this.shape_20.setTransform(95.7,211);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABABeIAAh1Ig3BGIg2hGIAAB1IgoAAIAAijIgSgYIA4AAIA4BKIA5hKIAmAAIAAC7g");
	this.shape_21.setTransform(72,211);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag3BeIAAi7IAoAAIAACVIBHAAIgOAmg");
	this.shape_22.setTransform(55.9,211);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAwBeIgwiGIgWA+IAoAAIgNAjIgnAAIgOAlIgrAAIBAijIgHgYIA1AAIBJC7g");
	this.shape_23.setTransform(38.5,211);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhCBeIAAi7ICGAAIgOAlIhQAAIAAAoIBCAAIgOAkIg0AAIAABKg");
	this.shape_24.setTransform(24.5,211);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAvIAAgnIgig2IAPAAIAXArIAYgrIAPAAIghA2IAAAng");
	this.shape_25.setTransform(102,231);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAvIAAhSIgfAAIAAgLIBGAAIgDALIgZAAIAABSg");
	this.shape_26.setTransform(93.7,231.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_27.setTransform(86.5,231.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfAbIAAgBIAKgGIABAAQAHASAPAAQAHAAAGgEQAFgFAAgHQAAgGgHgFQgEgDgJgFQgNgEgEgEQgIgHAAgKQAAgLAIgHQAHgIALAAQASAAALAPIAAABIgJAHIgBgBQgGgKgMAAQgOAAAAANQAAAFAFAEIAMAHQANAFAFAEQAJAHAAAMQAAAMgJAIQgJAIgLAAQgXAAgLgWg");
	this.shape_28.setTransform(78.7,231);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAVAvIgcgqIgPAAIAAAqIgMAAIAAhdIAbAAQAOAAAIAJQAGAIAAAJQAAAQgRAGIgBAAIAgAtgAgWgFIANAAQARAAAAgPQAAgPgSAAIgMAAg");
	this.shape_29.setTransform(70.3,231.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgbAvIAAhdIA1AAIgDALIgmAAIAAAcIAdAAIgDAKIgaAAIAAAhIArAAIgEALg");
	this.shape_30.setTransform(60.8,231.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHAvIghhdIAOAAIAaBQIAbhQIANAAIgTAzIgOAqg");
	this.shape_31.setTransform(50.8,231.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFAvIAAhdIALAAIAABdg");
	this.shape_32.setTransform(42.8,231.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAdAvIgzhJIAABJIgMAAIAAhUIgHgJIATAAIA0BKIAAhKIAMAAIAABdg");
	this.shape_33.setTransform(33,231.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAnQgMgMAAgVIAAg1IAMAAIAAA1QAAAfAYAAQAZAAAAgfIAAg1IAMAAIAAA1QAAAVgMAMQgKAJgPAAQgPAAgJgJg");
	this.shape_34.setTransform(21.5,231.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(360));

	// Find out more
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150.5,159.5,1,1,0,0,0,96.4,17.8);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(241).to({scaleX:1.02,scaleY:1.02,y:155.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:152},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:148.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,y:144.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,y:140.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:137.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:133.4},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:129.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,y:125.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:122.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,y:118.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:114.7},0).wait(1).to({scaleX:1.29,scaleY:1.29,y:110.9},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:107.2},0).wait(1).to({scaleX:1.33,scaleY:1.33,y:103.5},0).wait(105));

	// Background
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["rgba(225,16,33,0)","#E11021"],[0.533,1],0,-125,0,125).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_35.setTransform(150,125);

	this.instance_3 = new lib.Image();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_35}]}).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Image.jpg", id:"Image"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;