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


(lib.hiliterev = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#002677").s().p("AgLA4IgJgDIgJgEIgIgFIAKgOQAGAFAHADQAGACAHAAQAFAAAFgBQAEgDADgDQADgEABgEIABgKIAAgFQgEAFgHADQgFACgHAAQgIAAgHgCQgHgEgEgEQgFgGgDgGQgCgHAAgHQgBgIADgIQADgGAFgFQAEgGAGgDQAHgDAJAAQAGAAAHADQAHAEAEAGIAAgLIASAAIAABCQAAAKgDAIQgCAIgFAGQgGAFgIADQgHADgKAAgAgIgmQgEABgCAEIgEAHQgBAFgBAFQABAEABAEIAEAHQACACAEACQAFACADAAQAGAAADgCIAHgDQADgDACgFQABgEAAgEQAAgGgBgDQgCgFgDgDQgCgEgFgBQgDgCgGAAQgDAAgFACg");
	this.shape.setTransform(37.15,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#002677").s().p("AAPAmIAAgoIAAgHQAAgDgCgDIgEgFQgDgBgEAAQgEAAgDABIgFAFIgDAGIgBAHIAAAoIgTAAIAAhJIASAAIAAAMQACgFAGgEQAGgFAIAAQAHAAAFADQAFACADAEQAEAFABAFIACALIAAAtg");
	this.shape_1.setTransform(28.175,1.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002677").s().p("AgIA3IAAhJIARAAIAABJgAgHgjQgEgDAAgFQAAgEAEgEQADgCAEAAQAFAAAEACQADAEAAAEQAAAFgDADQgEAEgFgBQgEABgDgEg");
	this.shape_2.setTransform(21.675,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#002677").s().p("AgJAlIgdhJIAUAAIASA1IAAAAIAUg1IATAAIgdBJg");
	this.shape_3.setTransform(15.725,1.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002677").s().p("AgPAlQgFgBgEgCQgEgDgCgEQgDgFAAgGQAAgIAFgFQAEgEAIgDQAHgCAJgBIAQgBIAAgCQAAgHgFgDQgEgDgHAAQgFAAgFACQgGADgDADIgKgLQAGgGAJgDQAIgDAHAAQAKAAAGADQAHADADAEQAEAFABAFIACALIAAAsIgRAAIAAgKIgBAAQgCAFgHADQgGAEgGAAIgKgCgAADAEIgIABQgEACgDACQgDACAAAEQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIADADIAEABIAEABQAJAAAFgFQAEgFAAgJIAAgDIgEAAg");
	this.shape_4.setTransform(7.375,1.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#002677").s().p("AgVA1QgKgEgGgIIANgMQAEAFAHADQAHADAGABIAGgBIAGgDQADgCACgDQACgDAAgFQAAgEgCgDIgGgEIgIgEIgIgEIgKgDQgFgCgEgDQgEgDgCgGQgDgEAAgIQAAgJAEgGQADgFAGgEQAFgEAHgCQAIgCAGAAQAIAAAJADQAIADAGAGIgMAOQgDgEgGgDQgFgDgGAAIgGABIgGACIgEAFQgCADAAAEQAAADABADQACADADACIAGADIAHACIALAFQAGACAEACQAFADADAGQADAGAAAHQAAAJgDAHQgDAGgGAEQgFAFgHABQgHADgHAAQgLAAgKgEg");
	this.shape_5.setTransform(-1.125,-0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#002677").s().p("AAAAuQgDgCgDgEIgEgIIgBgKIAAghIgMAAIAAgPIAMAAIAAgVIARAAIAAAVIASAAIAAAPIgSAAIAAAhQABAFABADQACADAGAAIAEAAIADgCIABAPIgGABIgGABQgHAAgFgCg");
	this.shape_6.setTransform(-11.8,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002677").s().p("AgVAmIAAhJIASAAIAAANIAAAAQADgHAFgEQAFgEAIAAIACAAIACABIAAARIgDgBIgDAAQgGAAgEACQgEACgCAEIgCAGIAAAGIAAAmg");
	this.shape_7.setTransform(-16.575,1.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#002677").s().p("AgPAlQgFgBgEgCQgEgDgCgEQgDgFAAgGQAAgIAFgFQAEgEAIgDQAHgCAJgBIAQgBIAAgCQAAgHgFgDQgEgDgHAAQgFAAgFACQgGADgDADIgKgLQAGgGAJgDQAIgDAHAAQAKAAAGADQAHADADAEQAEAFABAFIACALIAAAsIgRAAIAAgKIgBAAQgCAFgHADQgGAEgGAAIgKgCgAADAEIgIABQgEACgDACQgDACAAAEQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIADADIAEABIAEABQAJAAAFgFQAEgFAAgJIAAgDIgEAAg");
	this.shape_8.setTransform(-24.275,1.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#002677").s().p("AAAAuQgEgCgCgEIgEgIIAAgKIAAghIgOAAIAAgPIAOAAIAAgVIARAAIAAAVIASAAIAAAPIgSAAIAAAhQgBAFACADQACADAGAAIAEAAIAEgCIABAPIgHABIgGABQgHAAgFgCg");
	this.shape_9.setTransform(-30.9,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#002677").s().p("AgVA1QgKgEgGgIIANgMQAEAFAHADQAHADAGABIAGgBIAGgDQADgCACgDQACgDAAgFQAAgEgCgDIgGgEIgIgEIgIgEIgKgDQgFgCgEgDQgEgDgCgGQgDgEAAgIQAAgJAEgGQADgFAGgEQAFgEAHgCQAIgCAGAAQAIAAAJADQAIADAGAGIgMAOQgDgEgGgDQgFgDgGAAIgGABIgGACIgEAFQgCADAAAEQAAADABADQACADADACIAGADIAHACIALAFQAGACAEACQAFADADAGQADAGAAAHQAAAJgDAHQgDAGgGAEQgFAFgHABQgHADgHAAQgLAAgKgEg");
	this.shape_10.setTransform(-37.925,-0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(72));

	// border
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FBA401").ss(1,1,1).p("AoRiVIQjAAIAAErIwjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(72));

	// bkgd
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFA400").s().p("AoRCWIAAkrIQjAAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-16,108.69999999999999,32);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgGAQIgGgDIgEgGIgCgHQABgGAFgFQAGgGAGAAQAHAAAGAFQAGAFgBAHQABAHgGAFQgGAGgHAAQgDAAgDgCg");
	this.shape.setTransform(201.85,46.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZA1QgMgEgIgJIASgRQAFAGAHAEQAIAEAIAAIAGgBIAGgCIAEgEQABgCAAgEQAAgHgGgDQgGgDgMgDIgMgEQgGgCgEgCQgFgEgDgGQgDgEAAgIQAAgKAEgGQAEgHAGgEQAGgEAIgCQAIgCAHAAQAMAAAMADQALAEAHAJIgSAQQgEgFgGgEQgHgDgHAAQgGAAgGADQgFACAAAHQAAAHAGACQAGADALADIAMADQAHADAFAEQAFACADAFQAEAGAAAJQAAAJgEAHQgEAIgGAEQgHAFgIABQgJADgIAAQgMgBgNgFg");
	this.shape_1.setTransform(193.575,42.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbA1QgIgEgFgGQgFgGgCgJQgDgIAAgIIAAhEIAcAAIAAA8IABAKQAAAGADAEQACAEAEADQAEADAHAAQAFAAAFgDQAFgCADgEQADgFACgFIABgLIAAg8IAcAAIAABuIgaAAIAAgSIgBAAQgDAIgJAGQgKAHgLAAQgLAAgHgEg");
	this.shape_2.setTransform(181.925,43.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA5IAAg8IAAgLQgBgFgDgEQgCgEgEgDQgEgDgHAAQgFAAgFADQgFACgDAFQgDAEgBAFQgCAFgBAGIAAA8IgbAAIAAhuIAaAAIAAASQAFgIAJgHQAIgGAMAAQALAAAHAEQAJAEAEAGQAFAGACAIQADAIAAAJIAABEg");
	this.shape_3.setTransform(162.95,42.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWA2QgMgFgHgHQgJgIgEgLQgFgLAAgMQAAgNAFgLQAEgKAJgIQAHgIAMgEQAKgDAMAAQANAAALADQALAEAIAIQAHAIAFAKQAFALAAANQAAAMgFALQgFALgHAIQgIAHgLAFQgLAFgNAAQgMAAgKgFgAgNggQgGADgEAFQgEAFgCAHQgCAGAAAGQAAAGACAGQACAGAEAGQAEAFAGADQAGADAHAAQAIAAAHgDQAFgDAEgFQAEgGACgGQACgGAAgGQAAgGgCgGQgCgHgEgFQgEgFgFgDQgHgDgIAAQgHAAgGADg");
	this.shape_4.setTransform(149.2,42.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZA1QgMgEgIgJIASgRQAFAGAHAEQAIAEAIAAIAGgBIAGgCIAEgEQABgCAAgEQAAgHgGgDQgGgDgMgDIgMgEQgGgCgEgCQgFgEgDgGQgDgEAAgIQAAgKAEgGQAEgHAGgEQAGgEAIgCQAIgCAHAAQAMAAAMADQALAEAHAJIgSAQQgEgFgGgEQgHgDgHAAQgGAAgGADQgFACAAAHQAAAHAGACQAGADALADIAMADQAHADAFAEQAFACADAFQAEAGAAAJQAAAJgEAHQgEAIgGAEQgHAFgIABQgJADgIAAQgMgBgNgFg");
	this.shape_5.setTransform(131.175,42.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBTIgHgCIACgYIAGABIAEABIAHgCIAGgCIADgGIAEgIIAFgNIgvhuIAeAAIAfBQIAAAAIAchQIAcAAIg0CFIgHAOQgCAFgFAEQgEAFgIACQgGACgJAAg");
	this.shape_6.setTransform(120.4,45.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA4QgHgBgGgEQgHgFgDgGQgEgHAAgJQAAgNAHgHQAHgGALgEQALgEAOgBIAZgCIAAgDQAAgKgIgFQgHgFgKAAQgJAAgHAEQgJAEgFAFIgOgRQAJgJAMgEQANgEAMAAQAPAAAJAEQAJAEAGAHQAFAGACAJQADAIAAAIIAABCIgaAAIAAgOIAAAAQgFAIgJAEQgJAFgLAAQgGAAgIgCgAAEAFIgMADQgGACgEADQgFAEAAAGQABAEABADIAFAEIAGACIAGABQAOAAAIgHQAGgIABgNIAAgEIgGAAg");
	this.shape_7.setTransform(107.85,42.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbBUQgKgFgHgIQgHgIgEgLQgDgKgBgMQAAgNAFgKQADgKAIgIQAGgHALgFQAJgEAMAAQAGAAAHABIAKAFIAIAFIAFAGIAAAAIAAhOIAcAAIAACtIgaAAIAAgQIgBAAQgFAJgKAFQgKAGgMAAQgMAAgKgFgAgNgCQgGACgEAFQgDAFgDAHQgCAGAAAHQAAAGACAGQADAHADAFQAEAFAGADQAGADAHAAQAIAAAFgDQAHgDAEgFQAEgFACgGQACgGAAgHQAAgGgCgHQgCgGgEgFQgEgFgHgDQgFgDgIAAQgHAAgGADg");
	this.shape_8.setTransform(94.25,39.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXBQQgLgHgIgKQgHgLgDgQQgEgQgBgUQABgSAEgQQADgQAHgLQAIgMALgFQAKgHAOAAQANAAALAHQALAFAHAMQAHALAEAQQAEAQgBASQABAUgEAQQgEAQgHALQgHAKgLAHQgLAFgNAAQgOAAgKgFgAgOg3QgGAHgDAJQgDAKgBALIgBASIABAUQABAKADAJQADAKAGAHQAGAGAJAAQAJAAAGgGQAFgHADgKQADgJACgKIAAgUIAAgSQgCgLgDgKQgDgJgFgHQgGgGgJAAQgJAAgGAGg");
	this.shape_9.setTransform(74.55,40.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBUIApg9IAAgBIgIADIgIABQgLAAgKgEQgJgEgHgHQgHgIgEgIQgEgKAAgKQAAgNAEgLQAFgKAIgIQAIgHALgEQAKgFAMAAQANABALAEQAKAEAJAHQAHAIAFAKQAEALAAALIgBAOIgDALIgFAKIgHANIgpA/gAgWgyQgIAIAAAPQAAAHACAGQACAGAEAEQAFAEAFACQAGACAGAAQAHAAAFgCQAGgCAFgEQAEgEACgGQACgGAAgHQAAgHgCgFQgCgGgEgEQgEgFgGgDQgGgDgHABQgNgBgJAKg");
	this.shape_10.setTransform(60.575,40.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAXBXIAAg9IAAgKIgDgJQgCgEgEgDQgEgCgHAAQgGAAgFACQgFACgDAEQgDAEgBAGQgCAFAAAGIAAA8IgcAAIAAitIAcAAIAABPIAAAAIAFgHIAHgGQAEgDAGgBQAEgBAGAAQALgBAIAEQAHAEAFAGQAFAGADAIQACAHAAAJIAABFg");
	this.shape_11.setTransform(41.175,39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAABFQgGgDgEgFQgEgFgBgIQgCgGAAgJIAAgyIgTAAIAAgWIATAAIAAggIAaAAIAAAgIAcAAIAAAWIgcAAIAAAyQAAAIADAEQADAFAJAAIAGAAIAGgCIABAWIgJACIgKAAQgLAAgHgDg");
	this.shape_12.setTransform(30.375,41.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNBSIAAhtIAbAAIAABtgAgMg1QgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAEAAAHQAAAIgFAEQgGAFgHAAQgHAAgFgFg");
	this.shape_13.setTransform(23.525,40.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZA3IgZhMIAAAAIgYBMIgcAAIgnhtIAfAAIAWBOIAZhOIAcAAIAYBOIABAAIAWhOIAeAAIgnBtg");
	this.shape_14.setTransform(11.25,42.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTA2QgLgEgIgHQgIgHgFgLQgEgLAAgOQAAgMAEgKQAFgLAIgJQAIgHALgFQAKgDALAAQAMgBAKAEQAKAEAGAHQAIAIAEALQAEAMAAANIAAAEIAAADIhTAAQAAAHADAEQADAGAEADQAEAEAGACQAFABAFAAQAKAAAHgDQAIgEAEgGIATAOQgQAWggABQgMAAgKgFgAAdgKIgCgKQgCgFgDgEQgDgEgFgCQgFgCgHAAQgLAAgIAIQgKAHAAAMIA4AAIAAAAg");
	this.shape_15.setTransform(165.45,19.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgNA3IgthtIAeAAIAcBPIABAAIAdhPIAdAAIgsBtg");
	this.shape_16.setTransform(153,19.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXA4QgHgBgGgEQgGgFgEgGQgEgHAAgJQAAgNAGgHQAIgGALgEQALgEAOgBIAZgCIAAgDQAAgKgIgFQgHgFgKAAQgIAAgJAEQgHAEgGAFIgOgRQAKgJALgEQANgEALAAQAQAAAJAEQAKAEAFAHQAGAGABAJQADAIAAAIIAABCIgaAAIAAgOIAAAAQgFAIgJAEQgJAFgLAAQgGAAgIgCgAAFAFIgNADQgHACgDADQgEAEgBAGQAAAEACADIAEAEIAHACIAHABQANAAAHgHQAIgIAAgNIAAgEIgHAAg");
	this.shape_17.setTransform(140.45,19.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZA1QgMgEgIgJIASgRQAFAGAHAEQAIAEAIAAIAGgBIAGgCIAEgEQABgCAAgEQAAgHgGgDQgGgDgMgDIgMgEQgGgCgEgCQgFgEgDgGQgDgEAAgIQAAgKAEgGQAEgHAGgEQAGgEAIgCQAIgCAHAAQAMAAAMADQALAEAHAJIgSAQQgEgFgGgEQgHgDgHAAQgGAAgGADQgFACAAAHQAAAGAGADQAGADALADIAMADQAHADAFAEQAFACADAGQAEAFAAAJQAAAJgEAHQgEAIgGAEQgHAFgIABQgJADgIAAQgMgBgNgFg");
	this.shape_18.setTransform(129.175,19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbBUQgKgFgHgIQgHgIgEgLQgDgKgBgMQAAgNAFgKQADgKAIgIQAGgHALgFQAJgEAMAAQAGAAAHABIAKAFIAIAFIAFAGIAAAAIAAhOIAcAAIAACtIgaAAIAAgQIgBAAQgFAJgKAFQgKAGgMAAQgMAAgKgFgAgNgCQgGACgEAFQgDAFgDAHQgCAGAAAHQAAAGACAGQADAHADAFQAEAFAGADQAGADAHAAQAIAAAFgDQAHgDAEgFQAEgFACgGQACgGAAgHQAAgGgCgHQgCgGgEgFQgEgFgHgDQgFgDgIAAQgHAAgGADg");
	this.shape_19.setTransform(110.9,16.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAXA5IAAg8IAAgLQgBgFgDgEQgCgEgEgDQgEgDgHAAQgFAAgFADQgFACgDAFQgDAEgBAFQgCAFAAAGIAAA8IgcAAIAAhuIAaAAIAAASQAFgIAJgHQAJgGALAAQALAAAHAEQAJAEAEAGQAFAGADAIQACAIAAAJIAABEg");
	this.shape_20.setTransform(97.35,19.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWA4QgIgBgGgEQgHgFgDgGQgEgHAAgJQAAgNAGgHQAIgGALgEQALgEANgBIAagCIAAgDQgBgKgHgFQgIgFgJAAQgIAAgJAEQgHAEgGAFIgOgRQAJgJANgEQAMgEALAAQAQAAAJAEQAJAEAGAHQAGAGACAJQACAIAAAIIAABCIgaAAIAAgOIAAAAQgEAIgKAEQgJAFgLAAQgHAAgGgCgAAFAFIgNADQgHACgEADQgDAEAAAGQAAAEABADIAEAEIAGACIAIABQANAAAHgHQAIgIAAgNIAAgEIgHAAg");
	this.shape_21.setTransform(83.95,19.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAXBXIAAg9IAAgKIgDgJQgCgEgEgDQgEgCgHAAQgGAAgFACQgFACgDAEQgDAEgBAGQgCAFAAAGIAAA8IgcAAIAAitIAcAAIAABPIAAAAIAFgHIAHgGQAEgDAGgBQAEgBAGAAQALgBAIAEQAHAEAFAGQAFAGADAIQACAHAAAJIAABFg");
	this.shape_22.setTransform(65.575,16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgNA2QgLgDgIgIQgIgIgEgKQgGgMAAgNQAAgNAGgLQAEgKAIgIQAIgIALgEQAKgDAMAAQAMgBALAFQAMAEAGAJIgTAQQgDgEgGgDQgHgEgGAAQgIAAgFAEQgFADgEAEQgEAGgCAGIgCAMQAAAHACAGQADAGADAFQAEAFAGADQAFADAIAAQAGAAAGgCQAHgDAEgFIARASQgHAHgLAEQgKAFgMAAQgMAAgLgFg");
	this.shape_23.setTransform(53.65,19.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAABFQgGgDgEgFQgEgFgBgIQgCgGAAgJIAAgyIgTAAIAAgWIATAAIAAggIAaAAIAAAgIAcAAIAAAWIgcAAIAAAyQAAAIADAEQADAFAJAAIAGAAIAGgCIABAWIgJACIgKAAQgLAAgHgDg");
	this.shape_24.setTransform(43.575,17.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNBSIAAhtIAbAAIAABtgAgMg1QgFgFAAgHQAAgGAFgFQAFgFAHAAQAHAAAGAFQAFAEAAAHQAAAIgFAEQgGAFgHAAQgHAAgFgFg");
	this.shape_25.setTransform(36.725,16.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAZA3IgZhMIAAAAIgYBMIgcAAIgmhtIAdAAIAYBOIAYhOIAcAAIAYBOIABAAIAWhOIAdAAIgmBtg");
	this.shape_26.setTransform(24.45,19.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AggBQQgPgGgKgLIAVgUQAGAJAKAEQAKAFAKAAIAJgCQAFgBAFgCQAEgDADgFQACgFAAgGQAAgHgDgEQgDgEgFgDQgFgEgHgCIgNgEIgPgGQgHgDgGgFQgGgFgEgHQgDgIAAgLQAAgNAFgJQAFgJAIgGQAJgGALgCQAKgEAKAAQANABAMAEQANAFAKAIIgTAUQgFgFgIgFQgJgDgIAAIgJABQgFABgEADQgFACgCAFQgDAEAAAGQAAAFACAEQADAEAEADQAEADAGACIALAEIAQAGQAJADAHAFQAHAFAEAHQAFAJAAALQAAAOgFAJQgFAKgIAHQgIAGgLAEQgLACgLAAQgPABgQgGg");
	this.shape_27.setTransform(8.325,16.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,324.2,58.8), null);


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

	// timeline functions:
	this.frame_71 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(71).call(this.frame_71).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2BIhIGr45IdaH4ImrY5g");
	var mask_graphics_23 = new cjs.Graphics().p("A2BIhIGr45IdaH4ImrY5g");
	var mask_graphics_24 = new cjs.Graphics().p("AzjIhIGr45IdaH4ImrY5g");
	var mask_graphics_25 = new cjs.Graphics().p("AyCIhIGr45IdaH4ImrY5g");
	var mask_graphics_26 = new cjs.Graphics().p("AyCIhIGr45IdaH4ImrY5g");
	var mask_graphics_27 = new cjs.Graphics().p("AyCIhIGr45IdaH4ImrY5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-141.025,y:-0.025}).wait(23).to({graphics:mask_graphics_23,x:-141.025,y:-0.025}).wait(1).to({graphics:mask_graphics_24,x:-125.2125,y:-0.025}).wait(1).to({graphics:mask_graphics_25,x:-103.275,y:-0.025}).wait(1).to({graphics:mask_graphics_26,x:-71.65,y:-0.025}).wait(1).to({graphics:mask_graphics_27,x:-40.025,y:-0.025}).wait(45));

	// reverse
	this.instance = new lib.hiliterev();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(72));

	// type
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA4IgJgDIgJgEIgIgFIAKgOQAGAFAHADQAGACAHAAQAFAAAFgBQAEgDADgDQADgEABgEIABgKIAAgFQgEAFgHADQgFACgHAAQgIAAgHgCQgHgEgEgEQgFgGgDgGQgCgHAAgHQgBgIADgIQADgGAFgFQAEgGAGgDQAHgDAJAAQAGAAAHADQAHAEAEAGIAAgLIASAAIAABCQAAAKgDAIQgCAIgFAGQgGAFgIADQgHADgKAAgAgIgmQgEABgCAEIgEAHQgBAFgBAFQABAEABAEIAEAHQACACAEACQAFACADAAQAGAAADgCIAHgDQADgDACgFQABgEAAgEQAAgGgBgDQgCgFgDgDQgCgEgFgBQgDgCgGAAQgDAAgFACg");
	this.shape.setTransform(37.15,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAmIAAgoIAAgHQAAgDgCgDIgEgFQgDgBgEAAQgEAAgDABIgFAFIgDAGIgBAHIAAAoIgTAAIAAhJIASAAIAAAMQACgFAGgEQAGgFAIAAQAHAAAFADQAFACADAEQAEAFABAFIACALIAAAtg");
	this.shape_1.setTransform(28.175,1.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIA3IAAhJIARAAIAABJgAgHgjQgEgDAAgFQAAgEAEgEQADgCAEAAQAFAAAEACQADAEAAAEQAAAFgDADQgEAEgFgBQgEABgDgEg");
	this.shape_2.setTransform(21.675,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAlIgdhJIAUAAIASA1IAAAAIAUg1IATAAIgdBJg");
	this.shape_3.setTransform(15.725,1.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAlQgFgBgEgCQgEgDgCgEQgDgFAAgGQAAgIAFgFQAEgEAIgDQAHgCAJgBIAQgBIAAgCQAAgHgFgDQgEgDgHAAQgFAAgFACQgGADgDADIgKgLQAGgGAJgDQAIgDAHAAQAKAAAGADQAHADADAEQAEAFABAFIACALIAAAsIgRAAIAAgKIgBAAQgCAFgHADQgGAEgGAAIgKgCgAADAEIgIABQgEACgDACQgDACAAAEQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIADADIAEABIAEABQAJAAAFgFQAEgFAAgJIAAgDIgEAAg");
	this.shape_4.setTransform(7.375,1.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVA1QgKgEgGgIIANgMQAEAFAHADQAHADAGABIAGgBIAGgDQADgCACgDQACgDAAgFQAAgEgCgDIgGgEIgIgEIgIgEIgKgDQgFgCgEgDQgEgDgCgGQgDgEAAgIQAAgJAEgGQADgFAGgEQAFgEAHgCQAIgCAGAAQAIAAAJADQAIADAGAGIgMAOQgDgEgGgDQgFgDgGAAIgGABIgGACIgEAFQgCADAAAEQAAADABADQACADADACIAGADIAHACIALAFQAGACAEACQAFADADAGQADAGAAAHQAAAJgDAHQgDAGgGAEQgFAFgHABQgHADgHAAQgLAAgKgEg");
	this.shape_5.setTransform(-1.125,-0.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAuQgDgCgDgEIgEgIIgBgKIAAghIgMAAIAAgPIAMAAIAAgVIARAAIAAAVIASAAIAAAPIgSAAIAAAhQABAFABADQACADAGAAIAEAAIADgCIABAPIgGABIgGABQgHAAgFgCg");
	this.shape_6.setTransform(-11.8,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAmIAAhJIASAAIAAANIAAAAQADgHAFgEQAFgEAIAAIACAAIACABIAAARIgDgBIgDAAQgGAAgEACQgEACgCAEIgCAGIAAAGIAAAmg");
	this.shape_7.setTransform(-16.575,1.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPAlQgFgBgEgCQgEgDgCgEQgDgFAAgGQAAgIAFgFQAEgEAIgDQAHgCAJgBIAQgBIAAgCQAAgHgFgDQgEgDgHAAQgFAAgFACQgGADgDADIgKgLQAGgGAJgDQAIgDAHAAQAKAAAGADQAHADADAEQAEAFABAFIACALIAAAsIgRAAIAAgKIgBAAQgCAFgHADQgGAEgGAAIgKgCgAADAEIgIABQgEACgDACQgDACAAAEQAAABAAABQAAAAABABQAAAAAAABQAAAAABABIADADIAEABIAEABQAJAAAFgFQAEgFAAgJIAAgDIgEAAg");
	this.shape_8.setTransform(-24.275,1.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAuQgEgCgCgEIgEgIIAAgKIAAghIgOAAIAAgPIAOAAIAAgVIARAAIAAAVIASAAIAAAPIgSAAIAAAhQgBAFACADQACADAGAAIAEAAIAEgCIABAPIgHABIgGABQgHAAgFgCg");
	this.shape_9.setTransform(-30.9,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVA1QgKgEgGgIIANgMQAEAFAHADQAHADAGABIAGgBIAGgDQADgCACgDQACgDAAgFQAAgEgCgDIgGgEIgIgEIgIgEIgKgDQgFgCgEgDQgEgDgCgGQgDgEAAgIQAAgJAEgGQADgFAGgEQAFgEAHgCQAIgCAGAAQAIAAAJADQAIADAGAGIgMAOQgDgEgGgDQgFgDgGAAIgGABIgGACIgEAFQgCADAAAEQAAADABADQACADADACIAGADIAHACIALAFQAGACAEACQAFADADAGQADAGAAAHQAAAJgDAHQgDAGgGAEQgFAFgHABQgHADgHAAQgLAAgKgEg");
	this.shape_10.setTransform(-37.925,-0.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(72));

	// border
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFA400").ss(1,1,1).p("AoRiVIQjAAIAAErIwjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(72));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.3,-16,108.69999999999999,32);


// stage content:
(lib.HB_Display_SMBretarg01300x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [84];
	// timeline functions:
	this.frame_84 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("A3Wj0MAutAAAIAAHpMgutAAAg");
	this.shape.setTransform(150,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(85));

	// HEAD1
	this.instance = new lib.HEAD1();
	this.instance.setTransform(-177.55,34.95,0.8703,0.8703,0,0,0,100.5,41.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:94.45},11,cjs.Ease.quadOut).to({_off:true},59).wait(14));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(-165.95,36.45,0.88,0.88,0,0,0,52.1,13);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(71).to({_off:false},0).to({x:114.05},12,cjs.Ease.quadOut).wait(2));

	// Logo-HB-vert
	this.instance_2 = new lib.Logohorizstack();
	this.instance_2.setTransform(-113.9,11.95,1,1,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).to({x:166.1},12,cjs.Ease.quadOut).wait(2));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14509B").s().p("A3bD6IAAnzMAu3AAAIAAHzg");
	this.shape_1.setTransform(149.975,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(85));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-310,-42.3,610.5,159.6);
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