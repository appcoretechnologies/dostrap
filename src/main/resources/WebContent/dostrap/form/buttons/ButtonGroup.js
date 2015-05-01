define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!./templates/ButtonGroup.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/topic",
	"require"
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require){

	var ButtonGroup =declare([_WidgetBase, _TemplatedMixin], {
		
		grpbtnType: "default",//"primary","success","failure","info","warning","danger"
				
		templateString: template,
		buildRendering: function(){


		},
	
		_setGrpbtnTypeAttr: function(val){
			var displayClass="btn-group";
			if(val=="split"){
			displayClass="btn-toolbar";
			}

			if(this.containerNode){
			domClass.replace(this.containerNode, displayClass);
			}
			 this._set("grpbtnType", val);
		},
		
		// Map widget attributes to DOMNode attributes.
		

		
	});

	

	return ButtonGroup;
});
