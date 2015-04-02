define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!weblabs/form/templates/DropDownMenu.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/topic",
	"require",
	"dojo/dom-construct" // domConstruct.place
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require,domConstruct){

	var isOpen=false;
	var Button =declare("weblabs.form.DropDownMenu",[_WidgetBase, _TemplatedMixin], {
		// summary:
		//		Basically the same thing as a normal HTML button, but with special styling.
		// description:
		//		Buttons can display a label, an icon, or both.
		//		A label should always be specified (through innerHTML) or the label
		//		attribute.  It can be hidden via showLabel=false.
		// example:
		// 	<button data-dojo-type="dijit/form/Button" onClick="...">Hello world</button>
		toggleClass: "dropdown",
		_setToggleClassAttr: { node: "menuNode", type: "class" },
		templateString: template,
		disabled: "",
		label:"",
		_connectHandlers : [],
		
		buildRendering: function(){
				    this.inherited(arguments);
					var onClickHandler = this.connect(this.domNode, "onclick", "toggleDropDown");
            		this._connectHandlers.push(onClickHandler);
        		},
		toggleDropDown: function(){
		if(isOpen)
		{
			this.set("toggleClass","dropdown");
			isOpen=false;
		}else{
			this.set("toggleClass","dropdown open");
			isOpen=true;
		}
		},
		_setDisabledAttr : function(val) {
			var displayClass = "";
		
			if (val == "disabled") {
				displayClass = "disabled";
				//disconnect all the event handler 
				dojo.forEach(this._connectHandlers, function(connectHandler, i){
					dojo.disconnect(connectHandler);
				});
				//Adding css disabled to dropdown
				if (this.dropdownMenuNode) {
				domClass.add(this.dropdownMenuNode, displayClass);
			}
			}
			
			if (this.containerNode) {
				domClass.replace(this.domNode, displayClass);
			}
			this._set("disabled", val);
		},
		addChild: function(/*dijit/_WidgetBase*/ widget, /*int?*/ insertIndex){
			// summary:
			//		Makes the given widget a child of this widget.
			// description:
			//		Inserts specified child widget's dom node as a child of this widget's
			//		container node, and possibly does other processing (such as layout).

			// I want to just call domConstruct.place(widget.domNode, this.containerNode, insertIndex), but the counting
			// is thrown off by text nodes and comment nodes that show up when constructed by markup.
			// In the future consider stripping those nodes on construction, either in the parser or this widget code.
			var refNode = this.containerNode;
			if(insertIndex > 0){
				// Old-school way to get nth child; dojo.query would be easier but _Container was weened from dojo.query
				// in #10087 to minimize download size.   Not sure if that's still and issue with new smaller dojo/query.
				refNode = refNode.firstChild;
				while(insertIndex > 0){
					if(refNode.nodeType == 1){ insertIndex--; }
					refNode = refNode.nextSibling;
				}
				if(refNode){
					insertIndex = "before";
				}else{
					// to support addChild(child, n-1) where there are n children (should add child at end)
					refNode = this.containerNode;
					insertIndex = "last";
				}
			}

			domConstruct.place(widget.domNode, refNode, insertIndex);

			// If I've been started but the child widget hasn't been started,
			// start it now.  Make sure to do this after widget has been
			// inserted into the DOM tree, so it can see that it's being controlled by me,
			// so it doesn't try to size itself.
			if(this._started && !widget._started){
				widget.startup();
			}
		},
			_setLabelAttr: function(/*String*/ val){
			// summary:
			//		Hook for set('label', ...) to work.
			// description:
			//		Set the label (text) of the button; takes an HTML string.
			this._set("label", val);
			var labelNode = this.dropdownMenuNode;
			labelNode.innerHTML = val;
			
		}
		
			
		
	
	});

	

	return Button;
});
