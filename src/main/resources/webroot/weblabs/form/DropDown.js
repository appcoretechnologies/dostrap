define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!weblabs/form/templates/DropDown.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/topic",
	"require",
	"dojo/dom-construct" // domConstruct.place
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require,domConstruct){

	var isOpen=false;
	var Button =declare("weblabs.form.DropDown",[_WidgetBase, _TemplatedMixin], {
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
				if (this.dropdownButtonNode) {
				domClass.add(this.dropdownButtonNode, displayClass);
			}
		}
			
			if (this.containerNode) {
				domClass.replace(this.domNode, displayClass);
			}
			this._set("disabled", val);
		},
			_setLabelAttr: function(/*String*/ val){
			// summary:
			//		Hook for set('label', ...) to work.
			// description:
			//		Set the label (text) of the button; takes an HTML string.
			this._set("label", val);
			var labelNode = this.dropdownButtonNode;
			labelNode.innerHTML = val;
			
		},
	});

	

	return Button;
});
