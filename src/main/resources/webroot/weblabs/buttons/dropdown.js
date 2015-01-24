define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!weblabs/buttons/templates/DropDown.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/topic",
	"require"
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require){

	var isOpen=false;
	var Button =declare([_WidgetBase, _TemplatedMixin], {
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
		postCreate: function(){
            		this.connect(this.domNode, "onclick", "toggleDropDown");
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
		
		//_setIconClassAttr: { node: "iconNode", type: "class" },
		
		
		

		
	});

	

	return Button;
});
