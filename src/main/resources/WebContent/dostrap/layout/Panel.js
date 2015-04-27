define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!./templates/Panel.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/topic",
	"require",
	"dijit/layout/ContentPane",
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require,ContentPane){
//Order of inheritese
	var Button =declare("dostrap.form.Panel",[ContentPane,_WidgetBase, _TemplatedMixin], {
		// summary:
		//		Basically the same thing as a normal HTML button, but with special styling.
		// description:
		//		Buttons can display a label, an icon, or both.
		//		A label should always be specified (through innerHTML) or the label
		//		attribute.  It can be hidden via showLabel=false.
		// example:
		// |	<button data-dojo-type="dijit/form/Button" onClick="...">Hello world</button>
		labelClass: "btn btn-default",
		body:"",
		header:"",
		footer:"",
		headerclass:"",
		footerclass:"",
		
		// colspan: <integer>
		// this attribute is used to span the panel when used with layout widget
		colspan: 0,
		
		templateString: template,
		
		startup : function() {
		 this.inherited(arguments);
		},
	
		_setBodyAttr: function(val){
		
			
		},
		
		_setHeaderAttr: function(val){
			this._set("header", val);
			var labelNode = this.headerNode;
			labelNode.innerHTML = val;
		},
		
		_setFooterAttr: function(val){
			this._set("footer", val);
			var labelNode = this.footerNode;
			labelNode.innerHTML = val;
		},	
		
		_setColspanAttr: function(val){
			this._set("colspan",val);
		}
		
	});

	

	return Button;
});
