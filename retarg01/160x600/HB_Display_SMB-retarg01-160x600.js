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


(lib.LogoHBvertai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Logo HB-vert.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");
	this.shape.setTransform(468.3,154.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhvBwQgvguAAhCQAAhBAvguQAugvBBAAQBBAAAvAvQAuAuAABBQAABCguAuQgvAvhBAAQhBAAgugvg");
	this.shape_1.setTransform(435.45,432.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADgJoQglgigZhNQhxBHguAWQhyA3hlAAQisAAhlhrQhdhkAAiXQAAhoAyhLQA8hcB/gmIEwhfQCgg4ApgqIAAhZQAAiNhBhBQg4g4hlAAQhUAAg5AyQhDA8goCFQgJAlgSASQgVAUgmAAQguAAgrgeQgzgkAAg3QAAhuCLhYQCThdDRAAQEBAABqB1QBLBTAACTIAAJkQAABuAaA1QAVArAoAKQAwAJArgJIAABFQgyAahCASQhGARhAAAQhBAAgoglgAAmgmQg4AXhpAmQhoAogrA1QgsA2AABaQAABxA6BEQA+BIBwAAQBdAABCgyQBXhBAAiIIAAloQglAYhZAkg");
	this.shape_2.setTransform(622.325,533.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkSJ+IAAhCQBtgIAYgXQAXgWAAhaIAAssQAAhCgRgVQgOgUgygIIhLgJIAAg+IGQhEIAAQqQAABZAWAVQAXAXBoAJIAABDg");
	this.shape_3.setTransform(435.275,531.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSLqQhrhJAAioIAAtrIi0AAIAAhrIC+AAICpk+IBDAAIAAE+IE5AAIAABrIk5AAIAAMPQAAB+AyBCQAsA7BHAAQAtAAAfgGQAjgGAlgQIAABJQhEAog6AVQhLAahNAAQhmAAhIgyg");
	this.shape_4.setTransform(512.925,518.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmzJ9IAAhCQBrgJAZgXQAYgWgBhZIAAsrQAAhDgPgWQgPgVgzgGIhKgJIAAhAIFzg9IAeDPQCEh4A8goQBMgyBBAAQBFAAAlApQAeAjAAAzQAAA7gkAwQglAxgvAAQggAAgWgQQgwgigkgOQgigOgfAAQg1AAgrA5QgyBIAACBIAAJZQAABVAXAWQAaAaBsAIIAABEg");
	this.shape_5.setTransform(348.4,531.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmgHgQiGieAAk5QAAkoCQiwQCbi9EgAAQEuAACADIQBUCBAAC6QAAA5ggAZQgZAUgwAAIrUAAQgEDrBHCLQBdCzDTABQCJAABchOQBHg8A9h/IBRAsQh7Fjl3AAQkzAAiSitgAjfmFQg0BvAACJIHWAAQAyAAAUgUQARgTAAgpQAAh4gshWQhCiDiVAAQioAAhOCpg");
	this.shape_6.setTransform(881.525,533.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AmvNbQilhlAAi5QAAh2BphOQBBgvB7gnIAAgGQhagKhAg9QhAg8AAhJQAAiODghUIAAgFQhpgehChNQhYhnAAinQAAiqByhyQCLiKEQAAQBZAABaAUQBgAWA1AkIEshBIAACnIjTAAQAhAiAXBCQAYBGAABLQAADZilBrQiHBYjVAAQgYAAgngCQgugCgfgEQgrANgcAUQgtAhAAAvQAABrDQAAIDmAAQDZAABxBQQCABbAADGQAAB7g+BnQg4BdhfA5QhaA5hmAYQhjAYiDAAQjvAAiWhbgAi3FGQg/ANgpAeQhWBBAAB2QAACIBwBVQBtBUCpAAIACAAQCUAABhhJQBshRAAiMQAAiJhhg7Qhbg2jEgBQhrABhAANgAjZsPQhQBYAACtQAACbBLBUQBFBMBvAAQBxAABEhOQBIhUAAiZQAAiqhPhYQhChMhmAAIgDAAQhuAAhEBJg");
	this.shape_7.setTransform(751.825,562.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmfHgQiHieAAk5QAAkoCRiwQCai9EfAAQEvAACADIQBTCBAAC6QABA5ggAZQgZAUgwAAIrUAAQgEDrBHCLQBcCzDUABQCJAABchOQBHg8A9h/IBRAsQh8Fjl3AAQkzAAiQitgAjgmFQgzBvAACJIHWAAQAyAAAUgUQAQgSAAgqQAAh4grhWQhCiDiVAAQioAAhPCpg");
	this.shape_8.setTransform(235.95,533.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AD5NvIAAhEQB1gKAagbQAXgYAAhjIAAp/Is3AAIAAJ/QAABjAXAYQAaAbB1AKIAABEIpVAAIAAhEQBzgLAZgaQAWgYAAhjIAA0ZQAAhigWgXQgagbhygIIAAhEIJVAAIAABEQh0AIgaAcQgYAXAABhIAAI1IM3AAIAAo1QAAhigXgYQgagah1gJIAAhDIJPAAIAABEQhtAJgZAbQgWAXAABhIAAUZQAABhAWAZQAZAbBtAKIAABFg");
	this.shape_9.setTransform(84.025,507.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACGFqIk8lqIgEAAIAAFqIiBAAIAArTICBAAIAAE5IAEAAIEtk5ICuAAIlSFOIFoGFg");
	this.shape_10.setTransform(591.45,693.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ACcFqIlXouIgCAAIAAIuIiBAAIAArTICrAAIFQIdIACAAIAAodICAAAIAALTg");
	this.shape_11.setTransform(505.9,693.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ADeFqIhDimIk5AAIhCCmIiQAAIE7rTIBvAAIE3LTgAhyBWIDgAAIhvkmg");
	this.shape_12.setTransform(423.8,693.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkLFqIAArTIEaAAQAqAAAnAKQAoAKAfAVQAeAWAUAjQATAjAAAxQABA+gjAnQgjAog4ASIAAACQBFAJAsArQArAtABBIQgBA7gXApQgZApglAYQgmAZgyAKQgyALgyAAgAiJD+IBzAAQAUAAAggEQAcgDAYgMQAZgLAQgWQAPgVAAgkQAAg5gngXQgngWhNAAIh4AAgAiJhCIByAAQA/AAAigaQAigaAAgvQAAgxgjgUQgjgVhJAAIhmAAg");
	this.shape_13.setTransform(350.15,693.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,936.6,730);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgNAhIgMgIQgFgEgDgHQgDgGAAgHQAAgOALgLQALgKAOAAQAPAAALAKQALAKAAAOQAAAOgLALQgLAKgPAAQgGAAgHgCg");
	this.shape.setTransform(121.425,343.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBrQgZgJgPgSIAkghQAJALAPAJQAOAHARAAIANgBIALgFQAFgDAEgFQACgFAAgHQAAgOgMgGQgNgGgYgGIgYgHQgMgEgJgHQgJgHgFgKQgGgLAAgQQAAgRAHgOQAIgOAMgIQANgJAPgDQAQgFAPAAQAZAAAWAIQAXAJANARIgkAgQgHgKgNgHQgNgIgOAAQgNABgLAFQgLAGAAANQAAANAMAFQANAFAVAGIAaAHQAMAFALAHQAKAGAGAMQAHALAAAQQAAAVgIANQgHAOgNAKQgMAIgRAEQgRAEgRAAQgZAAgZgKg");
	this.shape_1.setTransform(104.9,336.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4BqQgQgIgJgMQgKgMgFgQQgFgRAAgRIAAiJIA4AAIAAB6IABAUQABALAFAIQAFAJAIAFQAIAGANAAQAMAAAKgGQAKgFAGgIQAGgIADgLQAEgLAAgLIAAh5IA3AAIAADcIg1AAIAAgjIAAAAQgIAQgSANQgSANgYAAQgWAAgPgIg");
	this.shape_2.setTransform(81.575,336.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAvByIAAh6IgCgUQgBgKgFgJQgEgJgIgFQgJgGgNAAQgMAAgKAGQgKAFgGAIQgGAJgDAKQgDALAAALIAAB5Ig4AAIAAjcIA1AAIAAAjIABAAQAHgQASgNQATgNAXAAQAWAAAPAIQAQAIAKAMQAKAMAEARQAFAQAAARIAACJg");
	this.shape_3.setTransform(43.525,335.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBsQgWgIgQgQQgQgPgKgWQgJgVAAgaQAAgaAJgWQAKgVAQgPQAQgPAWgJQAWgIAYAAQAZAAAWAIQAWAJAQAPQAQAPAKAVQAJAWAAAaQAAAagJAVQgKAWgQAPQgQAQgWAIQgWAJgZAAQgYAAgWgJgAgbhBQgNAHgHAKQgIAKgEAMQgEANAAANQAAAMAEANQAEAMAIALQAHAKANAHQAMAGAPAAQARAAAMgGQAMgHAHgKQAIgLAEgMQAEgNAAgMQAAgNgEgNQgEgMgIgKQgHgKgMgHQgMgFgRgBQgPABgMAFg");
	this.shape_4.setTransform(16.025,336.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyBrQgYgJgQgSIAkghQAJAMAOAIQAPAHARAAIAMgBIAMgFQAFgCAEgGQADgFAAgHQAAgOgNgGQgMgGgZgGIgYgHQgMgEgJgHQgJgGgFgLQgGgLAAgQQAAgSAIgNQAHgNAMgJQANgJAPgEQAQgEAQAAQAYAAAXAIQAWAJAOARIgkAgQgIgKgMgHQgNgIgPAAQgNABgLAFQgLAGAAANQAAANAMAFQAMAFAWAFIAaAIQANAFAJAHQALAGAGAMQAHALAAAQQAAAVgIANQgHAOgNAKQgNAIgQAEQgRAEgRAAQgaAAgYgKg");
	this.shape_5.setTransform(89.85,286.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhTClIgOgDIAEgvIALACIAKABIAOgCQAHgCADgFIAIgKIAHgQIALgcIhfjcIA9AAIA9ChIABAAIA3ihIA5AAIhpEMIgMAbQgGALgKAIQgJAIgNAEQgNAFgTAAg");
	this.shape_6.setTransform(68.25,291.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBxQgOgDgNgJQgMgHgIgNQgIgOAAgTQAAgZAOgOQAOgOAWgIQAWgIAbgDIA0gCIAAgGQAAgUgPgKQgPgKgUAAQgRAAgQAIQgRAGgKALIgdghQATgSAZgJQAYgJAZABQAdAAATAIQAUAIALANQAKAOAFARQAEAQAAAQIAACGIgzAAIAAgcIgBAAQgJAPgSAJQgSAKgYAAQgNgBgOgDgAAJALQgNABgNAFQgMADgJAHQgHAIgBAMQAAAIAEAFQADAGAGADIAMAEIAOABQAcABAOgPQAPgQAAgaIAAgIIgMAAg");
	this.shape_7.setTransform(43.1,286.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag3CnQgUgJgOgQQgOgPgHgWQgIgWAAgYQAAgYAIgWQAIgTAOgQQAOgQAUgJQAUgJAXAAQAOAAAMAEIAVAJIAQAKIAKAMIACAAIAAibIA3AAIAAFbIg1AAIAAgiIgBAAQgLAUgUAKQgVAKgWAAQgaAAgUgKgAgagFQgMAGgIAKQgIAKgEANQgEAMAAANQAAANAEANQAEANAIAKQAIAKAMAHQAMAGAPAAQAPAAAMgGQAMgHAIgJQAJgLAEgNQAEgMAAgNQAAgNgEgMQgEgNgJgLQgIgKgMgFQgMgHgPABQgPAAgMAFg");
	this.shape_8.setTransform(15.875,280.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwCfQgVgMgPgWQgPgWgHggQgIggAAgnQAAgnAIgfQAHggAPgWQAPgWAVgMQAVgMAcAAQAbAAAVAMQAWAMAOAWQAPAWAHAgQAIAfAAAnQAAAngIAgQgHAggPAWQgOAWgWAMQgVAMgbAAQgcAAgVgMgAgdhvQgLANgHATQgGAUgDAVIgCAmIACAnQADAVAGATQAHATALANQAMANASAAQARAAAMgNQAMgNAGgTQAGgTADgVIACgnIgCgmQgDgVgGgUQgGgTgMgNQgMgNgRAAQgSAAgMANg");
	this.shape_9.setTransform(44.1,231.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+CnIBSh5IAAAAIgRAEIgRACQgWgBgSgHQgTgJgPgOQgOgOgIgSQgIgTAAgWQAAgZAKgWQAIgVAQgPQAQgPAWgIQAWgIAYAAQAZAAAWAIQAWAJAQAQQAQAPAJAUQAJAUAAAYIgCAaIgHAXIgKAWIgPAYIhRB+gAgshmQgRATAAAdQAAANAEAMQAEAMAJAIQAIAIALAEQAMAFANAAQANAAAMgFQAMgDAIgJQAJgIAEgNQAFgLAAgOQAAgNgFgMQgEgMgIgIQgJgKgLgFQgMgFgNAAQgbAAgSASg");
	this.shape_10.setTransform(16.05,230.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAuCuIAAh6IgBgUQgBgKgFgJQgEgIgIgFQgIgFgNAAQgNAAgKAFQgJAEgHAIQgGAJgDALQgEAKAAALIAAB5Ig3AAIAAlbIA3AAIAACeIABAAIAKgOIAOgMQAJgFAKgDQAKgEAMAAQAWAAAPAIQAQAIAKAMQAJAMAFAQQAFAQAAARIAACKg");
	this.shape_11.setTransform(80.425,180.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AABCLQgNgHgJgKQgIgLgDgOQgCgOAAgQIAAhmIgnAAIAAgtIAnAAIAAhAIA1AAIAABAIA3AAIAAAtIg3AAIAABlQAAAPAFAKQAFAJATAAIALgBIAMgDIACArIgSAEIgSACQgXAAgNgGg");
	this.shape_12.setTransform(58.8,183.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbClIAAjdIA2AAIAADdgAgZhrQgJgKAAgOQAAgNAJgJQAKgLAPAAQAPAAAKAKQAKAKAAANQAAAPgKAKQgKAJgPAAQgPAAgKgKg");
	this.shape_13.setTransform(45.125,181.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAzBvIgziaIAAAAIgxCaIg5AAIhMjdIA8AAIAuCeIABAAIAvieIA6AAIAwCeIABAAIAuieIA6AAIhNDdg");
	this.shape_14.setTransform(20.5,186.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnBtQgWgIgQgPQgQgPgJgVQgJgWAAgaQAAgaAJgWQAJgWAQgPQAQgQAVgIQAWgJAXAAQAXAAAUAIQATAIAPAOQAOAQAIAVQAIAXAAAdIAAAHIAAAIIinAAQABALAFAKQAFALAJAGQAJAIALAEQALAEALAAQAUAAAPgIQAOgHAJgNIAlAdQghAsg+AAQgZAAgVgIgAA5gVQAAgLgDgJQgDgKgHgIQgGgGgKgFQgKgFgNAAQgYAAgRAPQgRAPgCAYIBwAAIAAAAg");
	this.shape_15.setTransform(84.425,136.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcBuIhZjbIA8AAIA5CgIABAAIA6igIA7AAIhYDbg");
	this.shape_16.setTransform(59.5,136.65);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AguBxQgPgEgLgHQgNgJgIgNQgIgNAAgTQAAgZAOgPQAOgNAWgIQAWgIAbgCIA0gDIAAgFQAAgVgPgKQgPgKgUAAQgRAAgRAIQgPAHgLAKIgdgiQATgRAZgJQAYgIAZgBQAdAAATAJQAUAIAKAOQALANAFAQQAEARAAARIAACFIgzAAIAAgcIgBAAQgJAOgSAKQgTAJgXAAQgMABgPgEgAAJAMQgNABgNADQgNAEgHAHQgJAIAAAMQAAAIADAFQAEAGAFADIANAEIAOACQAbAAAPgPQAPgPAAgbIAAgIIgNAAg");
	this.shape_17.setTransform(34.35,136.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgyBsQgZgKgPgRIAkgiQAJAMAPAHQAOAIARAAIANgBIALgFQAFgDAEgEQACgGAAgHQAAgOgMgGQgNgGgYgGIgYgHQgMgFgJgFQgJgIgGgKQgFgLAAgPQAAgTAHgNQAIgNAMgJQANgIAQgFQAPgEAPAAQAZAAAWAJQAXAIANARIgkAfQgHgJgNgIQgNgGgPgBQgMAAgLAGQgLAGAAAMQAAANAMAGQANAFAVAFIAaAIQANAEAKAIQAKAHAHALQAGALAAARQAAATgIAOQgHAOgNAJQgMAJgRAEQgRAEgRAAQgZAAgZgJg");
	this.shape_18.setTransform(11.85,136.65);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag3CoQgUgKgOgQQgOgQgHgVQgIgVAAgZQAAgYAIgVQAIgVAOgPQAOgQAUgJQAUgJAXAAQAOAAAMAEIAVAIIAQAMIAKALIACAAIAAibIA3AAIAAFaIg1AAIAAggIgBAAQgLATgUAKQgVAKgWAAQgaAAgUgJgAgagEQgMAEgIALQgIAKgEANQgEAMAAANQAAANAEANQAEAMAIALQAIAKAMAGQAMAHAPAAQAPAAAMgHQAMgFAIgLQAJgKAEgMQAEgNAAgNQAAgNgEgNQgEgNgJgJQgIgLgMgFQgMgGgPAAQgPgBgMAHg");
	this.shape_19.setTransform(67.925,80.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAvByIAAh6IgCgUQgBgKgFgJQgEgJgIgFQgJgGgNAAQgMAAgKAGQgKAFgGAIQgGAJgDAKQgDALAAALIAAB5Ig4AAIAAjcIA1AAIAAAjIABAAQAHgQASgNQATgNAXAAQAWAAAPAIQAQAIAKAMQAKAMAEARQAFAQAAARIAACJg");
	this.shape_20.setTransform(40.775,86.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBxQgOgEgNgHQgMgJgIgNQgIgNAAgTQAAgZAOgPQAOgNAWgIQAWgIAbgCIA0gDIAAgFQAAgVgPgKQgPgKgUAAQgRAAgQAHQgRAIgKAKIgcgiQASgRAZgJQAZgIAYgBQAdAAATAJQAUAJALANQAKANAFAQQAEARAAARIAACFIgzAAIAAgcIgCAAQgIAOgTAKQgRAJgYAAQgNABgOgEgAAJAMQgNABgNADQgMAFgJAGQgHAIgBAMQAAAIAEAFQADAFAGAEIAMAFIAOABQAbAAAPgQQAPgOAAgbIAAgIIgMAAg");
	this.shape_21.setTransform(13.95,86.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAuCuIAAh6IgBgUQgBgKgFgJQgEgIgIgFQgIgFgNAAQgNAAgKAFQgJAEgHAIQgGAJgDALQgEAKAAALIAAB5Ig3AAIAAlbIA3AAIAACeIABAAIAKgOIAOgMQAJgFAKgDQAKgEAMAAQAWAAAPAIQAQAIAKAMQAJAMAFAQQAFAQAAARIAACKg");
	this.shape_22.setTransform(129.225,30.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaBtQgWgIgQgPQgRgPgJgVQgKgWAAgcQAAgaAKgVQAJgWARgPQAPgPAWgIQAVgJAYAAQAYAAAXAJQAXAKANAQIgmAhQgGgKgNgFQgNgHgNAAQgPAAgLAHQgLAFgIALQgIAKgDAMQgEANAAAMQAAANAEANQAEAMAIAKQAIALALAFQALAHAQAAQAMAAANgFQANgFAIgKIAiAjQgNAPgWAIQgVAIgZAAQgXAAgWgIg");
	this.shape_23.setTransform(105.325,36.95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAACLQgNgHgHgKQgJgLgCgOQgEgOAAgQIAAhmIgmAAIAAgtIAmAAIAAhAIA2AAIAABAIA3AAIAAAtIg3AAIAABlQAAAPAFAKQAGAJASAAIAMgBIALgDIACArIgSAEIgTACQgWAAgOgGg");
	this.shape_24.setTransform(85.2,33.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgbCkIAAjbIA2AAIAADbgAgZhrQgJgKAAgOQAAgMAJgKQAKgLAPABQAPAAAKAJQAKAJAAAOQAAAPgKAJQgKAKgPAAQgPAAgKgKg");
	this.shape_25.setTransform(71.525,31.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAyBuIgxiZIgBAAIgxCZIg4AAIhNjbIA8AAIAtCdIABAAIAwidIA6AAIAvCdIABAAIAwidIA5AAIhNDbg");
	this.shape_26.setTransform(46.9,36.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhBCfQgegMgTgWIApgnQAMARAUAJQAUAKATAAIAUgDQALgCAIgGQAJgGAFgJQAFgJAAgNQAAgNgGgJQgGgIgKgHQgKgGgOgEIgcgKIgdgLQgPgGgMgKQgLgLgIgPQgHgPAAgYQAAgYAKgSQALgSARgMQAQgMAWgFQAVgGAVAAQAZAAAZAJQAaAIATASIgmApQgJgMgRgIQgRgIgRAAIgTADQgKACgIAFQgJAGgFAIQgFAJAAAMQAAALAEAIQAFAHAIAGQAIAFAMAFIAYAIIAgALQARAHAOAJQAOALAJAQQAJAQAAAYQAAAagKAUQgJATgQANQgQANgWAHQgWAGgWAAQggAAgfgMg");
	this.shape_27.setTransform(14.675,31.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1, new cjs.Rectangle(0,0,165.6,366), null);


(lib.Logovert = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.LogoHBvertai("synched",0);
	this.instance.setTransform(-0.05,0,0.12,0.12,0,0,0,467.6,365.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logovert, new cjs.Rectangle(-56.1,-43.8,112.30000000000001,87.6), null);


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
(lib.HB_Display_SMBretarg01160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [47];
	// timeline functions:
	this.frame_47 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(48));

	// HEAD1
	this.instance = new lib.HEAD1();
	this.instance.setTransform(-188.55,44.95,0.8703,0.8703,0,0,0,100.5,41.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:103.45},11,cjs.Ease.quadOut).wait(36));

	// CTA
	this.instance_1 = new lib.CTA();
	this.instance_1.setTransform(125.85,441.4,0.88,0.88,0,0,0,52.1,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// Logo-HB-vert
	this.instance_2 = new lib.Logovert();
	this.instance_2.setTransform(80.1,545.1,0.85,0.85,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(48));

	// BKGD
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#14509B").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(48));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-196,299.5,356.5,301);
// library properties:
lib.properties = {
	id: '0957C5EC3B874C629166840920B09671',
	width: 160,
	height: 600,
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