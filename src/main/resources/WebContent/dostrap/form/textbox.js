define([
	"dojo/_base/declare", // declare
	"dojo/dom-class",
	"dojo/dom-construct", // domConstruct.create
	"dojo/dom-style", // domStyle.getComputedStyle
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.hitch
	"dojo/on",
	"dojo/sniff", // has("ie") has("mozilla")
	"dijit/form/_FormValueWidget",
	"dijit/form/_TextBoxMixin",
	"dojo/text!./templates/Textbox.html",
	"dojo/dom-class"
		// to export dijit._setSelectionRange, remove in 2.0
], function(declare,domClass,  domConstruct, domStyle, kernel, lang, on, has,
			_FormValueWidget, _TextBoxMixin, template, dijit){

	// module:
	//		dijit/form/TextBox

	var TextBox = declare([_FormValueWidget, _TextBoxMixin], {
		// summary:
		//		A base class for textbox form inputs

		templateString: template,
		
		title:"",
		postTitle:"",

		_setTitleAttr: function(val){
			
			this.before_addon.innerHTML=val;
			console.debug()
			domClass.replace(this.before_addon, "input-group-addon");
			
		},
		_setPostTitleAttr: function(val){
			this.after_addon.innerHTML=val;
				domClass.replace(this.after_addon, "input-group-addon");
				
			
		},
			
	
		
	});



	return TextBox;
});

