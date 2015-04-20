define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!dostrap/buttons/templates/button.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/topic",
	"require"
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require){

	var Button =declare("dostrap.buttons.Button",[_WidgetBase, _TemplatedMixin], {
		// summary:
		//		Basically the same thing as a normal HTML button, but with special styling.
		// description:
		//		Buttons can display a label, an icon, or both.
		//		A label should always be specified (through innerHTML) or the label
		//		attribute.  It can be hidden via showLabel=false.
		// example:
		// |	<button data-dojo-type="dostrap/buttons/Button" onClick="...">Hello world</button>
		
		// btnClass : String
		// set the class for the button
		btnClass: "btn btn-default",
		// btnType: String
		// button type , based on the type append the btnClass in reference to bootstrap css
		// allowed values "primary","success","failure","info","warning","danger"
		type: "default",
		// btnSize: String
		// button size, based on the size of the append the btnClass in reference to bottstrap css
		// allowed values "xs-small","small","default","large"
		size: "default",
		
		templateString: template,
		// iconClass: String
		iconClass: "",
		
		// read the source inner HTML and append to the text node specific to the button
	    _fillContent: function (/*DomNode*/ source) {
	    	
	    	 if(source)
	    	{
	    		 // append the label 
	    		 this.buttonLabelNode.innerHTML =  source.innerHTML;
	             console.debug(source.innerHTML);  	
	    	}
	    		
	     },
        
        // set the button type
		_setTypeAttr: function(val){
			var displayClass="";
			if(val=="default"){
			displayClass="btn btn-default";
			}else if(val=="primary"){
				displayClass="btn btn-primary";
			}
			else if(val=="success"){
				displayClass="btn btn-success";
			}
			else if(val=="info"){
				displayClass="btn btn-info";
			}
			else if(val=="warning"){
				displayClass="btn btn-warning";
			}
			else if(val=="danger"){
				displayClass="btn btn-danger";
			}

			if(this.containerNode){
			domClass.replace(this.containerNode, displayClass);
			}
			 this._set("btnType", val);
		},
		
		// set the button size
	    _setSizeAttr: function(val){
 		       var displayClass = "";
			
			if(val=="default"){
			  displayClass = "default"
			}
			else if(val=="large")
			{
 			  displayClass = "btn-lg";
			}
			// case of  small sized button
			else if(val =="small")
			{
			  displayClass="btn-sm";
			}
			// case of  xtra small sized button
			else if(val =="xs-small")
			{
			  displayClass="btn-xs";
			}

			if(this.containerNode){
			domClass.add(this.containerNode, displayClass);
			}
		},

		// set the icon class 
		_setIconClassAttr: { node: "iconNode", type: "class" },
		

		_setLabelAttr(/*String*/label)
		{
			console.debug(" setting the button label as "+label)
			// set the label of the for the button
			this.buttonLabelNode.innerHTML = label;
		}
	});

	return Button;
});
