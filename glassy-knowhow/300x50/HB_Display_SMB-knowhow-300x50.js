(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Heritage_HorzStack_Rvsai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Heritage_HorzStack_Rvs.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An/H/IAAv9IP/AAIAAP9gAA9A2IgEADQgFACgCAGIgHAOIgFALIgNBPQgBAHACAFIAMApIADALIAGBwIALBjIEUAbICJAAIAAnHIgCgDQgEgFgFABIgHACQgEABgFgDIgHgDIgDgBQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAFADAEIAHAGQADAEgEACIgGACQgFACACAGIABABIAFAVIACAEQACAFgFAAIgKgDQgEAAgFgEIgCgDQgEgEgFABIgnAJQgFABgDAFIgLARQgCAFgGAAIgLABQgFABAAgGIAAgEQAAgGgFABIgWAFQgFABAAAGIABANQAAAFgFABIgMADQgGABgBAFIgGANQgCAGgFgDIgJgGQgEgDABgFIABgDQABgFgCgFIgFgLQgDgFgEACIgJADQgGACgEgBIgFgBQgGgCACgFIAAgPQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAIgDACQgGABgDAEIgDAEQgDAEACAFIANAQQACAFgFAAIgHAAQgGAAgDAEIgDADQgCAFgGAAIgKABQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIABgEIABgCQADgGgCgCQgBgDgFAAIgMABQgFABgFgDIgDgCQgEgDACgFIADgHQADgFgFgBIgTgDQgFAAgBAFIgBAHQgBAGgFABIgDAAQgFABAAgGIAAgQQAAgGgDAEIgFAGQgDAEgEgBQgDgBgBgHIAAgVQgBgEgCAAIgCABgAnWHXIChAAIDngfIAJgQIADgLIAPhFQACgEAAgHIgBhbIgMguQgDgIAAgEIgBgIQAAgFgEgEIgcgeQgEgEgCgGIgLgbQgCgGgEgEIgOgSQgDgFgFgBIgXgDQgGgBgDgEIgMgMQgDgDgGgBIgngCQgFAAgEAEIgGAIQgDAEgGABIgPAAIgSgCQgGAAgEACIgHAEQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIAGAFQADAEAAAGIAAAGQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAIgRgBQgEgBgFAEIgJAKQgEADgFAAIgogBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAIAAgBQAAgGgEgDQgJgEgDAAQgBAAgEAHIgEAGQgCAGgFgBIgWgFQgEgBAAgGIAAgHQgBgFgEgBIgNgCIgBAAgAhyAwIARAOQAEADACAGIADALIAIAQQADAGADADIAUATQACADAGAEIATAJQAEACACgGIAchGQACgFAAgGIAAAAQAAgGgEgFIgpgvIgIgHIgFgEIgxgsQgEgDgFAAIgEAAQgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIAAAGQAAAGgCAAQgEAAgDgFIgEgGQgEgFgEACIgNAEQgEACAAAGIAAAFQAAAGgGACIgEABQgGABgDgEIgDgBQgEgEgEAEIgDACIgRARQgDAEgCAGIgBACQgCAGgEAAIgFAAQgFAAgBgEQgEgJgDAAQgBAAgDAFIgDAEQgDAEADAFIAFAJQACAEAGABIAjADQAEAAAGADIAFADIAIAHIABACQAFAEAEAAIAWAEIAKABIADgBQAEAAAFADgACZAhIAJAGIABABIAIAFQADADADgFIAHgNIABgEQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgNgBQgEAAgDgFIgFgMQgCgFgEgCQgGgCgDABIgNACQgEABgBgFIgDgOQgBgGgDgEIgIgKQgEgEgEADIgDAFQgDADgFgBIgIgEQgEgCgFABQgEABgCAGIgDAYQAAAHgCADIgHAQQgCAFABAGQABAFAEgCIAGgDQAEgDAGAAIAMABIAKgBIACAAIAmgFQADAAANAJgAhOhZIgHAMQgDAFADAFIADAEQADAFADABQAFABAHAFIAcAYQAFAFAEAAIACABQAGACACAEIAHANQADAEAEADIAMAKQAEAEAFAAIAGABQAFABACgFIAFgLQADgFAAgFIACgLQABgGgBgGIgDgXQgBgIgCgDIgDgEQgDgFgEgDQgGgDgGABIgOACIgKABIgEAAQgFAAgEAEIgDADQgFADgEAAIgKgBIgKgFIgIgHIAAAAQgFgGgBgEIAAgCQgBgGgCAAQgCAAgDAFgAmuguIABAFQACAGAEgCIALgFQAEgBgCgGQgCgEACgFIAIgOQADgGgEgDQgDgFAEgDIAJgJQAEgFgCgFIAAgDQgCgGADgFIAEgGQACgGgFAAIgDAAQgGAAgEACIgLAFQgFACgDgFIgCgEQgDgFgEAFIgDAEQgDAFgFgCQgEgGgCgDQgCgBACgFIACgGQAAAAAAgBQAAAAAAAAQgBgBgBAAQAAgBgBAAIgHgDIgFgHQgDgDgFAAIgCAAIAAB8IAVgHIAOgEIACAAQADAAAAAFgAGXisIAFADIAJADIAOACQAFABACAGIACAMQACAGAFgBIARgBIADAAIAAlJIutAAIAADkIADgBIALgDQAEgBAFACIANAHQAEACAFgDIAMgIQAEgDAEACQAEADAEgEIADgDQAEgDAFAAIAGAAQAFAAABgFIABgEQABgGAEgCQAFgCAFACIAKAEQAFACAEgEIAKgMQAEgEAEACIALAFQAFADAEgCIAMgFQAEgCgFgBIgUgHQgFgBAAgGIgBgMQgBgGAFgBIAOgCQAFgBAAgGIAAgFQAAgGAFgBQAEgBAGACIAQAFIAKAEIAJAHQAEADADgGIABgCQADgGgGgDIgBAAQgFgDgBgFIgEgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAIACAAIAiAFQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIgJgMQgEgEADgFIACgDQADgFAFgBIAXgEQAFgBgEgEIgNgLQgEgEADgFIACgDQADgEAFABIAQAHQAEACAFgCIAEgCQAGgDADAAIAWgDQAGgBAEABIAHACQAFABAAAFQAAAFAEAEQAQALADgCIAEgEQAEgDADADQADAEAFACIAQAGQAFACADgFQADgFAFAAIAGAAQAFAAADAFIACAEQADAFAFAAIAIABQAHABACADIAdAYQAEAEAFAAIAEAAQAEAAABgGIABgGQABgGgFgCIgHgDQgEgDgDgEIgCgDQgCgFAFgBIAegGQAEgBAFADIALAJQADAEgBAFIgCATQgBAFAFADIADABQAFACAEgDIAIgEQAEgCgCgGIgGgKQgDgFAEgFIADgEQADgEAEADIANAJQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgFQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAIAZAGQAFABAEgBIALgDQAKgBADAJQABAAAAABQABABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAABABIACABQADADgBACIAAADQAAABABAAQAAABAAAAQABABAAAAQABAAABABIACAAQAEABAAACQABABAAAEIgCAGIAHAHQAGAFgEAGIgCACIAAABIgBAFQgBADgEgBQgGgBgCABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIABACQAAADAEABIADABQACABACADIADAEQABADAEgBIADgBQADgCADACQADACABAEIABAHIABABIAHgGIADgEQAEgEgEgEIgLgQQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAJAAQAFAAADgEIACgEQADgEAFgBIAKAAQAFAAgDAFIgBACQgDAFACADQACAEAFgBIALgBQAHAAADACIAEACQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABIgEAHQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAAAABAAIATADQAFABABgGIABgHQABgGAEgBIAEgBQAFAAAAAGIAAAQQAAAGAEgFIAEgFQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAIAEAAQADACAAAFIABAWQAAAFAFgCIACgBQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAGALgRAKIgJAEQgDABgCADQgCACgBADIAAACQAAABAAAAQAAABAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAKgBQAEAAAFgCIAKgFIAKgCIAYABQAGAAgCAHIgCAWQgBAGgEgCIgKgFQgEgCgDAFIAAABQgCAFgGABIgNABQgEAAABAGIACAGQACAGAFgBIAJgBQAGAAADACg");
	this.shape.setTransform(51.15,52.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAlQgPgPAAgWQAAgVAPgPQAPgPAVAAQAWAAAPAPQAPAQAAAUQAAAWgPAPQgPAPgWAAQgVAAgPgPg");
	this.shape_1.setTransform(277.975,5.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABKDMQgMgMgJgaQgjAXgRAJQglARghABQg5AAghgkQgfghAAgxQAAgjAQgZQAUgeAqgMIBkgfQA0gSAOgPIAAgeQAAhVhJgBQgbABgTAQQgWATgNAsQgGAZgXAAQgPABgOgLQgRgMAAgRQAAglAugdQAwgeBGAAQBUAAAjAmQAYAbAAAxIAADJQAABBAdAGQARADANgCIAAAXQgQAIgWAGQgXAFgWABQgVgBgNgLgAgoAIQgiANgPARQgOATAAAdQAAAmATAWQAVAXAkABQAeAAAWgRQAdgVAAgtIAAh3QgSAMhMAcg");
	this.shape_2.setTransform(339.675,38.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaDSIAAgVQAkgDAIgHQAHgIABgdIAAkMQgBgWgFgHQgFgGgQgDIgZgDIAAgUICEgXIAAFgQAAAdAHAHQAHAIAjADIAAAVg");
	this.shape_3.setTransform(277.9,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbD2QgjgYAAg3IAAkgIg7AAIAAgkIA/AAIA4hpIAVAAIAABpIBoAAIAAAkIhoAAIAAECQAAApAQAWQAOATAYAAQAbAAAXgJIAAAYQgyAdgqAAQgiAAgYgRg");
	this.shape_4.setTransform(303.55,33.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPDSIAAgWQAjgDAIgHQAIgHAAgeIAAkLQAAgWgFgIQgFgGgQgCIgZgDIAAgVIB6gVIAKBFQArgoAUgNQAZgQAVAAQAXAAAMANQALAMAAAQQAAAUgMAQQgMAQgQAAQgLAAgHgFQgdgVgUAAQgSAAgOATQgQAYAAArIAADFQAAAcAIAIQAIAIAkADIAAAWg");
	this.shape_5.setTransform(249.225,38.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiJCfQgsg1AAhnQAAhiAwg5QAzg/BeABQBjgBArBCQAcArAAA9QAAAigjAAIjuAAQgCBNAYAuQAeA7BGAAQAtAAAegaQAYgTAUgqIAaAOQgoB2h8AAQhlAAgwg5gAhJiAQgRAkAAAvICaAAQARAAAGgIQAGgFAAgOQAAgogOgdQgWgrgxAAQg3AAgaA4g");
	this.shape_6.setTransform(425.275,38.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiOEcQg2giAAg9QAAgnAjgZQAVgQApgNIAAgCQgegDgVgUQgVgUAAgYQAAgvBKgbIAAgCQgjgKgWgZQgdgiAAg3QAAg5AmglQAuguBaAAQAcAAAeAHQAgAHARAMIBjgVIAAA3IhGAAQAMALAHAWQAIAXAAAZQAABHg2AkQgtAdhGAAQgXAAgXgDQgmANAAAYQAAAjBEAAIBMAAQCXAAAAB6QAAAogVAiQgSAfgfATQgeATgiAIQggAIgrAAQhPAAgygegAg8BrQgVAFgNAKQgcAVAAAnQAAAtAlAcQAkAcA3AAIAAAAQAxAAAggYQAkgbAAguQAAgtgggUQgegShAAAQgkAAgVAEgAhHkCQgaAdAAA5QAAAzAZAcQAWAaAlAAQAlAAAWgaQAYgcAAgzQAAg4gagdQgWgZghAAIgBAAQgkAAgXAYg");
	this.shape_7.setTransform(382.425,48.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiICfQgtg1AAhnQAAhiAwg5QAzg/BeABQBkgBAqBCQAcArAAA9QAAAigjAAIjuAAQgCBMAYAvQAfA7BFAAQAtAAAegaQAYgTAUgqIAbAOQgpB2h8AAQhkAAgwg5gAhJiAQgRAkAAAvICbAAQAQAAAGgIQAGgFAAgOQAAgogOgdQgWgrgxAAQg3AAgaA4g");
	this.shape_8.setTransform(212.075,38.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABTEiIAAgWQAmgEAJgIQAHgIAAghIAAjTIkPAAIAADTQAAAhAHAIQAJAIAnAEIAAAWIjFAAIAAgWQAlgEAJgJQAHgHAAghIAAmuQAAghgHgHQgJgJglgDIAAgWIDFAAIAAAWQgnADgIAJQgIAIAAAgIAAC6IEPAAIAAi6QAAghgHgIQgJgIgmgDIAAgWIDCAAIAAAWQgjADgJAJQgHAIAAAgIAAGuQAAAgAHAIQAJAJAjADIAAAXg");
	this.shape_9.setTransform(161.9,30.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAsB4Ihoh4IgBAAIAAB4IgqAAIAAjvIAqAAIAABoIABAAIBjhoIA6AAIhvBvIB2CAg");
	this.shape_10.setTransform(226.075,91.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAzB4Ihwi4IgBAAIAAC4IgqAAIAAjvIA4AAIBuCzIABAAIAAizIAqAAIAADvg");
	this.shape_11.setTransform(197.825,91.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABJB4IgWg3IhnAAIgVA3IgwAAIBojvIAkAAIBnDvgAglAdIBJAAIgkhhg");
	this.shape_12.setTransform(170.725,91.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhXB4IAAjvIBcAAQANAAAOADQANAEAKAHQALAIAGALQAGALAAARQAAAUgLANQgMANgSAGIAAABQAWACAPAOQAOAPAAAYQAAAUgHANQgIANgNAJQgNAIgQADQgPAEgRAAgAgtBUIAnAAIAQgBQALgCAHgEQAIgDAFgHQAFgHAAgMQAAgTgNgHQgMgIgaAAIgoAAgAgtgVIAmAAQAVAAALgJQALgIAAgQQAAgQgMgGQgLgIgXAAIgjAAg");
	this.shape_13.setTransform(146.375,91.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,443.5,103.7);


(lib.HEAD1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGARIgGgEQgDgCgCgEQgBgDAAgEQAAgGAFgGQAGgGAHABQAIgBAFAGQAGAFAAAHQAAAIgFAFQgGAGgIAAIgGgCg");
	this.shape.setTransform(216.425,45.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA5IgahPIAAAAIgZBPIgeAAIgnhyIAeAAIAZBSIAAAAIAZhSIAdAAIAaBSIAAAAIAZhSIAeAAIgpByg");
	this.shape_1.setTransform(204.55,41.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA5QgMgFgIgJQgJgHgFgMQgFgLAAgNQAAgNAFgLQAFgMAJgHQAIgJAMgEQALgEAMAAQANAAALAEQAMAEAIAJQAJAHAFAMQAFALAAANQAAANgFALQgFAMgJAHQgIAJgMAFQgLAEgNAAQgMAAgLgEgAgOghQgGADgEAFQgEAGgCAGQgCAGAAAHQAAAGACAHQACAGAEAGQAEAFAGADQAGAEAIAAQAJAAAGgEQAGgDAEgFQAEgGACgGQACgHAAgGQAAgHgCgGQgCgGgEgGQgEgFgGgDQgGgDgJgBQgIABgGADg");
	this.shape_2.setTransform(187.625,41.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAYBbIAAhAIAAgKIgEgKQgCgEgEgDQgEgCgIAAQgGAAgFACQgFACgDAFQgDAEgBAGQgCAFgBAGIAAA/IgcAAIAAi1IAcAAIAABTIABAAIAFgHIAIgHIAKgEQAEgCAGAAQAMAAAHAEQAJAEAFAHQAFAGADAHQACAJAAAJIAABIg");
	this.shape_3.setTransform(173.4,37.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcAMIAAgXIA5AAIAAAXg");
	this.shape_4.setTransform(162.475,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbA5IgbhPIAAAAIgZBPIgeAAIgohyIAfAAIAYBSIABAAIAZhSIAdAAIAZBSIABAAIAZhSIAdAAIgnByg");
	this.shape_5.setTransform(149.05,41.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXA5QgMgFgIgJQgJgHgFgMQgFgLAAgNQAAgNAFgLQAFgMAJgHQAIgJAMgEQALgEAMAAQANAAALAEQAMAEAIAJQAJAHAFAMQAFALAAANQAAANgFALQgFAMgJAHQgIAJgMAFQgLAEgNAAQgMAAgLgEgAgOghQgGADgEAFQgEAGgCAGQgCAGAAAHQAAAGACAHQACAGAEAGQAEAFAGADQAGAEAIAAQAJAAAGgEQAGgDAEgFQAEgGACgGQACgHAAgGQAAgHgCgGQgCgGgEgGQgEgFgGgDQgGgDgJgBQgIABgGADg");
	this.shape_6.setTransform(132.125,41.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYA7IAAg/IAAgKQgBgGgDgEQgCgFgEgCQgEgDgHAAQgGAAgFACQgFADgEAFQgDAEgBAFQgCAGAAAGIAAA+IgdAAIAAhyIAbAAIAAATIABAAQAEgJAJgHQAKgGAMAAQALAAAIAEQAIAEAFAGQAFAHADAIQACAIAAAJIAABHg");
	this.shape_7.setTransform(117.875,40.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATBbIgug7IAAAAIAAA7IgdAAIAAi1IAdAAIAAByIAAAAIArgvIAlAAIgxAzIA1A/g");
	this.shape_8.setTransform(105.3,37.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNBbIAAi1IAbAAIAAC1g");
	this.shape_9.setTransform(88.675,37.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXA7QgIgCgGgEQgHgEgEgHQgEgHAAgKQAAgNAHgIQAIgGALgFQAMgEAOgBIAagBIAAgDQAAgLgIgFQgHgFgLAAQgIAAgJAEQgIADgGAGIgPgSQAKgJANgEQANgFAMAAQAPAAAKAEQAKAFAGAHQAGAHACAIQACAJAAAJIAABFIgaAAIAAgPIgBAAQgEAIgKAFQgKAFgLAAQgHAAgHgCgAAFAGQgHAAgGACQgHADgEADQgEAEAAAGQAAAEABADIAFAFIAHACIAHABQAOAAAHgIQAIgIAAgOIAAgEIgGAAg");
	this.shape_10.setTransform(78.475,41.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYA7IAAg/IAAgKQgBgGgDgEQgCgFgEgCQgEgDgHAAQgGAAgFACQgFADgEAFQgDAEgBAFQgCAGAAAGIAAA+IgdAAIAAhyIAbAAIAAATIABAAQAEgJAJgHQAKgGAMAAQALAAAIAEQAIAEAFAGQAFAHADAIQACAIAAAJIAABHg");
	this.shape_11.setTransform(65.325,40.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXA5QgMgFgIgJQgJgHgFgMQgFgLAAgNQAAgNAFgLQAFgMAJgHQAIgJAMgEQALgEAMAAQANAAALAEQAMAEAIAJQAJAHAFAMQAFALAAANQAAANgFALQgFAMgJAHQgIAJgMAFQgLAEgNAAQgMAAgLgEgAgOghQgGADgEAFQgEAGgCAGQgCAGAAAHQAAAGACAHQACAGAEAGQAEAFAGADQAGAEAIAAQAJAAAGgEQAGgDAEgFQAEgGACgGQACgHAAgGQAAgHgCgGQgCgGgEgGQgEgFgGgDQgGgDgJgBQgIABgGADg");
	this.shape_12.setTransform(51.025,41.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBWIAAhyIAbAAIAABygAgMg3QgGgGAAgHQAAgGAGgGQAFgFAHAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_13.setTransform(40.5,38.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAABIQgGgDgEgGQgEgFgCgIQgBgHAAgJIAAg0IgVAAIAAgXIAVAAIAAghIAbAAIAAAhIAdAAIAAAXIgdAAIAAA0QAAAIADAFQACAFAKAAIAGgBIAGgBIABAWIgJADIgKABQgLgBgIgDg");
	this.shape_14.setTransform(33.075,39.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXA7QgIgCgGgEQgHgEgEgHQgEgHAAgKQAAgNAHgIQAIgGALgFQAMgEAOgBIAagBIAAgDQAAgLgIgFQgHgFgLAAQgIAAgJAEQgIADgGAGIgPgSQAKgJANgEQANgFAMAAQAPAAAKAEQAKAFAGAHQAGAHACAIQACAJAAAJIAABFIgaAAIAAgPIgBAAQgEAIgKAFQgKAFgLAAQgHAAgHgCgAAFAGQgHAAgGACQgHADgEADQgEAEAAAGQAAAEABADIAFAFIAHACIAHABQAOAAAHgIQAIgIAAgOIAAgEIgGAAg");
	this.shape_15.setTransform(22.175,41.025);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAYA7IAAg/IAAgKQgBgGgDgEQgCgFgEgCQgEgDgHAAQgGAAgFACQgFADgEAFQgDAEgBAFQgCAGAAAGIAAA+IgdAAIAAhyIAbAAIAAATIABAAQAEgJAJgHQAKgGAMAAQALAAAIAEQAIAEAFAGQAFAHADAIQACAIAAAJIAABHg");
	this.shape_16.setTransform(9.025,40.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAfIARg+IAbAAIgVA+g");
	this.shape_17.setTransform(251.8,25.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgIgHgFgLQgEgLAAgOQAAgNAEgLQAFgMAIgIQAIgIAMgFQALgEAMAAQAMAAAKAEQAKAEAIAHQAHAIAEAMQAEAMAAAPIAAADIAAAEIhWAAQAAAGADAGQADAEAEAFQAFADAFACQAGADAFAAQALAAAIgFQAHgDAFgHIATAPQgRAXggAAQgNAAgLgEgAAegLQAAgFgCgFQgBgFgEgEQgDgEgFgCQgFgCgHgBQgMAAgJAJQgJAHgBAMIA6AAIAAAAg");
	this.shape_18.setTransform(242.125,20.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgRBXIgPgDIgPgHIgMgIIARgWQAHAIAMAEQAKAEAKAAQAKAAAHgDQAHgDAEgFQAFgGABgGQACgIAAgJIAAgIIgBAAQgFAIgLAFQgJAEgLAAQgNAAgLgEQgKgFgIgJQgGgHgFgKQgEgMAAgMQAAgMAEgLQAEgLAHgIQAIgIAKgGQALgEANAAQALAAALAFQAKAFAGAKIAAAAIAAgRIAcAAIAABoQAAAQgEANQgEAMgIAJQgIAIgMAGQgNAEgPAAgAgNg8QgFACgFAFQgEAFgDAHQgCAGAAAIQAAAHACAHQADAGAEAFQAFAEAFADQAHADAHAAQAHAAAGgDQAHgCAEgFQAEgEADgHQACgHAAgHQAAgIgCgGQgDgHgEgFQgEgFgHgCQgGgEgHAAQgHAAgHAEg");
	this.shape_19.setTransform(227.35,22.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcBXQgKgEgIgJQgHgIgEgLQgEgMAAgMQAAgNAEgLQAEgKAIgIQAHgIAKgFQALgEAMgBQAHAAAGACIALAFIAIAGIAFAFIABAAIAAhRIAdAAIAAC1IgbAAIAAgRIgBAAQgGAKgKAFQgLAFgMABQgMAAgLgGgAgOgCQgFADgFAEQgEAGgCAGQgCAHAAAHQAAAHACAGQACAHAEAGQAFAEAFAEQAHADAIAAQAHAAAGgDQAHgDAEgFQAEgGADgHQACgGAAgHQAAgHgCgGQgDgHgEgFQgEgGgHgCQgGgDgHAAQgIAAgHADg");
	this.shape_20.setTransform(212.15,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgIgHgFgLQgEgLAAgOQAAgNAEgLQAFgMAIgIQAIgIAMgFQALgEAMAAQAMAAAKAEQAKAEAIAHQAHAIAEAMQAEAMAAAPIAAADIAAAEIhWAAQAAAGADAGQADAEAEAFQAFADAFACQAGADAFAAQALAAAIgFQAHgDAFgHIATAPQgRAXggAAQgNAAgLgEgAAegLQAAgFgCgFQgBgFgEgEQgDgEgFgCQgFgCgHgBQgMAAgJAJQgJAHgBAMIA6AAIAAAAg");
	this.shape_21.setTransform(198.025,20.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgNBbIAAi1IAbAAIAAC1g");
	this.shape_22.setTransform(187.975,16.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAbA6IgbhQIAAAAIgZBQIgeAAIgohzIAfAAIAYBSIABAAIAZhSIAdAAIAZBSIABAAIAZhSIAdAAIgnBzg");
	this.shape_23.setTransform(175.15,20.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXA5QgMgFgIgJQgJgHgFgMQgFgLAAgNQAAgNAFgLQAFgMAJgHQAIgJAMgEQALgEAMAAQANAAALAEQAMAEAIAJQAJAHAFAMQAFALAAANQAAANgFALQgFAMgJAHQgIAJgMAFQgLAEgNAAQgMAAgLgEgAgOghQgGADgEAFQgEAGgCAGQgCAHAAAGQAAAGACAHQACAGAEAGQAEAFAGADQAGAEAIAAQAJAAAGgEQAGgDAEgFQAEgGACgGQACgHAAgGQAAgGgCgHQgCgGgEgGQgEgFgGgDQgGgEgJAAQgIAAgGAEg");
	this.shape_24.setTransform(158.225,20.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAYA7IAAg/IAAgKQgBgGgDgEQgCgFgEgCQgEgDgHAAQgGAAgFACQgFADgEAFQgDAEgBAFQgCAGAAAGIAAA+IgdAAIAAhyIAbAAIAAATIABAAQAEgJAJgHQAKgGAMAAQALAAAIAEQAIAEAFAGQAFAHADAIQACAIAAAJIAABHg");
	this.shape_25.setTransform(143.975,20.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATBbIgug7IAAAAIAAA7IgdAAIAAi1IAdAAIAAByIAAAAIArgvIAlAAIgxAzIA1A/g");
	this.shape_26.setTransform(131.4,16.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAABIQgGgDgEgGQgEgGgCgGQgBgIAAgJIAAg0IgVAAIAAgXIAVAAIAAghIAbAAIAAAhIAdAAIAAAXIgdAAIAAA0QAAAIADAFQACAFAKAAIAGAAIAGgCIABAWIgJADIgKABQgLAAgIgEg");
	this.shape_27.setTransform(113.725,18.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaA4QgMgFgJgJIATgSQAFAGAIAEQAHAFAJAAIAGgBIAGgDIAFgEQABgCAAgEQAAgIgGgDQgHgCgMgEIgNgEQgGgBgFgEQgEgDgDgGQgDgFAAgIQAAgKAEgHQAEgHAGgEQAHgFAIgCQAIgCAIAAQAMAAAMAEQAMAEAHAKIgTAQQgEgFgGgEQgHgDgIgBQgGAAgGADQgGAEAAAGQAAAGAHAEQAGACALADIAOAEQAGACAFAEQAGADADAGQAEAGAAAJQAAAKgEAHQgEAHgHAFQgGAFgJACQgJACgJAAQgNAAgNgFg");
	this.shape_28.setTransform(104.275,20.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUA5QgLgFgJgIQgIgHgFgLQgEgLAAgOQAAgNAEgLQAFgMAIgIQAIgIAMgFQALgEAMAAQAMAAAKAEQAKAEAIAHQAHAIAEAMQAEAMAAAPIAAADIAAAEIhWAAQAAAGADAGQADAEAEAFQAFADAFACQAGADAFAAQALAAAIgFQAHgDAFgHIATAPQgRAXggAAQgNAAgLgEgAAegLQAAgFgCgFQgBgFgEgEQgDgEgFgCQgFgCgHgBQgMAAgJAJQgJAHgBAMIA6AAIAAAAg");
	this.shape_29.setTransform(92.275,20.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAbA6IgbhQIAAAAIgZBQIgdAAIgphzIAgAAIAXBSIABAAIAZhSIAdAAIAZBSIABAAIAYhSIAeAAIgnBzg");
	this.shape_30.setTransform(75.8,20.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAYBbIAAhAIgBgKIgDgKQgCgEgEgDQgEgCgIAAQgFAAgFACQgGACgCAFQgEAEgCAGQgCAFAAAGIAAA/IgcAAIAAi1IAcAAIAABTIABAAIAFgHIAIgHIAKgEQAEgCAGAAQAMAAAHAEQAJAEAFAHQAFAGACAHQADAJAAAJIAABIg");
	this.shape_31.setTransform(59.25,16.925);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAABIQgGgDgEgGQgEgGgCgGQgBgIAAgJIAAg0IgVAAIAAgXIAVAAIAAghIAbAAIAAAhIAdAAIAAAXIgdAAIAAA0QAAAIADAFQACAFAKAAIAGAAIAGgCIABAWIgJADIgKABQgLAAgIgEg");
	this.shape_32.setTransform(47.925,18.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgiA7IAAhyIAcAAIAAATIABAAQAEgKAJgGQAIgGAMAAIADAAIAEAAIAAAbIgGgBIgDAAQgLAAgGADQgFAEgEAFQgCAFgCAFIgBAJIAAA8g");
	this.shape_33.setTransform(40.45,20.075);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXA5QgMgFgIgJQgJgHgFgMQgFgLAAgNQAAgNAFgLQAFgMAJgHQAIgJAMgEQALgEAMAAQANAAALAEQAMAEAIAJQAJAHAFAMQAFALAAANQAAANgFALQgFAMgJAHQgIAJgMAFQgLAEgNAAQgMAAgLgEgAgOghQgGADgEAFQgEAGgCAGQgCAHAAAGQAAAGACAHQACAGAEAGQAEAFAGADQAGAEAIAAQAJAAAGgEQAGgDAEgFQAEgGACgGQACgHAAgGQAAgGgCgHQgCgGgEgGQgEgFgGgDQgGgEgJAAQgIAAgGAEg");
	this.shape_34.setTransform(28.025,20.25);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAkBVIhPiCIgBAAIAACCIgeAAIAAipIAoAAIBOB+IABAAIAAh+IAeAAIAACpg");
	this.shape_35.setTransform(11.375,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,275.9,57.6), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIA6IAAhzIARAAIAABzg");
	this.shape.setTransform(127.75,15.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAlQgFgBgEgCQgEgDgCgEQgDgFAAgGQAAgIAFgFQAEgEAIgDQAHgCAJgBIAQgBIAAgCQAAgHgFgDQgEgDgHAAQgFAAgFACQgGADgDADIgKgLQAGgGAJgDQAIgDAHAAQAKAAAGADQAHADADAEQAEAFABAFIACALIAAAsIgRAAIAAgKIgBAAQgCAFgHADQgGAEgGAAIgKgCgAADAEIgIABQgEACgDACQgDACAAAEQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIADADIAEABIAEABQAJAAAFgFQAEgFAAgJIAAgDIgEAAg");
	this.shape_1.setTransform(121.275,17.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAkQgHgCgFgFQgGgFgDgIQgEgHAAgJQAAgIAEgHQADgHAGgFQAEgFAIgDQAHgDAHAAQAIAAAHADQAIADAFAGIgNALQgCgDgEgCQgEgCgFAAQgFAAgDACQgDACgDADQgDADgBAFIgBAHIABAJIAEAHQACAEAFACQACACAGAAQAEAAAEgCQAFgCACgDIAMAMQgFAFgIACQgHADgHAAQgIAAgHgDg");
	this.shape_2.setTransform(113.9,17.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAkQgHgDgFgFQgFgFgDgHQgEgIAAgIQAAgIAEgHQADgHAFgFQAFgFAHgDQAIgDAHAAQAIAAAIADQAHADAFAFQAFAFAEAHQADAHAAAIQAAAIgDAIQgEAHgFAFQgFAFgHADQgIADgIAAQgHAAgIgDgAgIgVQgEACgDAEIgEAHIgBAIIABAIQABAFADADQADADAEACQADADAFAAQAGAAADgDQAEgCADgDQACgDACgFQABgEAAgEIgBgIIgEgHQgDgEgEgCQgDgCgGAAQgFAAgDACg");
	this.shape_3.setTransform(105.25,17.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfA2IAAhrIATAAIAABaIAsAAIAAARg");
	this.shape_4.setTransform(97.55,15.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAlQgFgBgEgCQgEgDgCgEQgDgFAAgGQAAgIAFgFQAEgEAIgDQAHgCAJgBIAQgBIAAgCQAAgHgFgDQgEgDgHAAQgFAAgFACQgGADgDADIgKgLQAGgGAJgDQAIgDAHAAQAKAAAGADQAHADADAEQAEAFABAFIACALIAAAsIgRAAIAAgKIgBAAQgCAFgHADQgGAEgGAAIgKgCgAADAEIgIABQgEACgDACQgDACAAAEQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIADADIAEABIAEABQAJAAAFgFQAEgFAAgJIAAgDIgEAAg");
	this.shape_5.setTransform(84.875,17.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAPA6IAAgpIAAgGIgCgGIgEgFQgDgBgEAAQgEAAgDABQgDABgCADIgEAHIgBAHIAAAoIgSAAIAAhzIASAAIAAA1IABAAIADgFIAFgEIAGgDIAGgBQAIAAAFADQAFACADAEQAEAFABAEQACAFAAAGIAAAug");
	this.shape_6.setTransform(72.675,15.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAuQgEgCgCgDIgEgJIgBgKIAAghIgMAAIAAgPIAMAAIAAgVIASAAIAAAVIARAAIAAAPIgRAAIAAAhQAAAFABADQACADAGAAIAEAAIAEgBIAAAOIgGACIgGAAQgHAAgFgCg");
	this.shape_7.setTransform(65.5,16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIA3IAAhJIARAAIAABJgAgHgjQgEgDAAgEQAAgFAEgDQADgDAEAAQAFAAAEADQADACAAAGQAAAEgDADQgEADgFAAQgEAAgDgDg");
	this.shape_8.setTransform(60.925,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AARAlIgRgzIAAAAIgQAzIgSAAIgahJIAUAAIAPA0IABAAIAPg0IATAAIAQA0IAAAAIAQg0IATAAIgZBJg");
	this.shape_9.setTransform(52.775,17.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AALA6IgbgmIgBAAIAAAmIgSAAIAAhzIASAAIAABIIABAAIAbgeIAXAAIggAhIAiAog");
	this.shape_10.setTransform(39.35,15.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAPAmIAAgoIAAgHQAAgDgCgDIgEgFQgDgBgEAAQgEAAgDABIgFAFIgDAGIgBAHIAAAoIgTAAIAAhJIASAAIAAAMQACgFAGgEQAGgFAIAAQAHAAAFADQAFACADAEQAEAFABAFIACALIAAAtg");
	this.shape_11.setTransform(30.225,17.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPAlQgFgBgEgCQgEgDgCgEQgDgFAAgGQAAgIAFgFQAEgEAIgDQAHgCAJgBIAQgBIAAgCQAAgHgFgDQgEgDgHAAQgFAAgFACQgGADgDADIgKgLQAGgGAJgDQAIgDAHAAQAKAAAGADQAHADADAEQAEAFABAFIACALIAAAsIgRAAIAAgKIgBAAQgCAFgHADQgGAEgGAAIgKgCgAADAEIgIABQgEACgDACQgDACAAAEQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIADADIAEABIAEABQAJAAAFgFQAEgFAAgJIAAgDIgEAAg");
	this.shape_12.setTransform(21.325,17.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgnA2IAAhrIApAAIAMABQAGACAEADQAGAEACAFQADAEAAAIQAAAJgFAGQgFAGgJADIAAAAQAKABAHAGQAHAHAAALQAAAIgDAGQgEAHgGADQgFAEgIABIgOACgAgUAmIARAAIAHgBQAEAAAEgCQAEgCACgDQACgDABgFQAAgJgHgEQgFgCgLAAIgSAAgAgUgJIARAAQAJAAAFgEQAFgEAAgHQAAgHgFgDQgFgDgLAAIgPAAg");
	this.shape_13.setTransform(12.7,15.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFA400").ss(1,1,1).p("AqxiVIVjAAIAAErI1jAAg");
	this.shape_14.setTransform(69,15);

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-1.4,-1,140.4,32), null);


(lib.Logohorizstack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Heritage_HorzStack_Rvsai("synched",0);
	this.instance.setTransform(56.1,7.65,0.2592,0.2592,0,0,0,216.4,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logohorizstack, new cjs.Rectangle(0,0,115,26.9), null);


// stage content:
(lib.HB_Display_SMBknowhow300x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [78];
	// timeline functions:
	this.frame_78 = function() {
		//if(!this.alreadyExecuted){
		//this.alreadyExecuted=true;
		//this.loopNum=1;
		//} else {
		//this.loopNum++;
		//if(this.loopNum==2){
		this.stop();
		//}
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(78).call(this.frame_78).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A3Wj0MAutAAAIAAHpMgutAAAg");
	this.shape.setTransform(150,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(79));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(-250.95,23.25,0.88,0.88,0,0,0,52.1,13);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({x:63.05},10,cjs.Ease.quadOut).wait(20));

	// Logo-HB-horiz
	this.instance_1 = new lib.Logohorizstack();
	this.instance_1.setTransform(-71.95,25.1,0.9872,0.9872,0,0,0,57.6,13.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({x:224.75},10,cjs.Ease.quadOut).wait(20));

	// HEAD1
	this.instance_2 = new lib.HEAD1();
	this.instance_2.setTransform(-162.55,35.95,0.8703,0.8703,0,0,0,100.5,41.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:123.45},11,cjs.Ease.quadOut).to({_off:true},38).wait(30));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14509B").s().p("A3bD6IAAnzMAu3AAAIAAHzg");
	this.shape_1.setTransform(150,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(79));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-148,24.5,448.5,26);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 300,
	height: 50,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0957C5EC3B874C629166840920B09671'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;