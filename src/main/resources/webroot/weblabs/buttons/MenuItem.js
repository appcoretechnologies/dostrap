define([

"dojo/_base/declare", // declare
"dojo/dom-class", // domClass.toggle
"dojo/has", // has("dijit-legacy-requires")
"dojo/_base/kernel", // kernel.deprecated
"dojo/_base/lang", // lang.trim
"dojo/ready", "dojo/text!weblabs/buttons/templates/MenuItem.html", "dijit/_WidgetBase",
		"dijit/_TemplatedMixin", "dojo/topic", "require" ], function(declare,
		domClass, has, kernel, lang, ready, template, _WidgetBase,
		_TemplatedMixin, topic, require) {

	var Button = declare([ _WidgetBase, _TemplatedMixin ], {
		templateString : template,
		menuItemType: "",
		disabled: "",
		label:"",
		_setMenuItemTypeAttr : function(val) {
			var displayClass = "";
			if (val == "divider") {
				displayClass = "divider";
			}
			if (this.containerNode) {
				domClass.add(this.menuItemNode, displayClass);
			}
			this._set("menuItemType", val);
		},
		_setLabelAttr: function(/*String*/ val){
			// summary:
			//		Hook for set('label', ...) to work.
			// description:
			//		Set the label (text) of the button; takes an HTML string.
		
			this._set("label", val);
			var labelNode = this.containerNode;
			labelNode.innerHTML = val;
		},
		
		
		_setDisabledAttr : function(val) {
			var displayClass = "";
		
			if (val == "disabled") {
				displayClass = "disabled";
			}
			if (this.containerNode) {
				domClass.add(this.menuItemNode, displayClass);
			}
			this._set("disabled", val);
			
		}
	});

	return Button;
});
