define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!weblabs/buttons/templates/button.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/topic",
	"require"
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require){

	var Button =declare([_WidgetBase, _TemplatedMixin], {
		// summary:
		//		Basically the same thing as a normal HTML button, but with special styling.
		// description:
		//		Buttons can display a label, an icon, or both.
		//		A label should always be specified (through innerHTML) or the label
		//		attribute.  It can be hidden via showLabel=false.
		// example:
		// |	<button data-dojo-type="dijit/form/Button" onClick="...">Hello world</button>
		btnClass: "btn btn-default",
		btnType: "default",//"primary","success","failure","info","warning","danger"
		btnSize: "default", //"xs-small","small","default","large"
		
		templateString: template,
		postCreate: function(){
            		this.connect(this.domNode, "onclick", "alertME");
        		},
		alertME: function(){
            		topic.publish("some/topic", { msg:this.domNode});
        	
		var handle = topic.subscribe("some/topic", function(e){
    			alert("I received: " + e.msg.className);
    			handle.remove();
		});
		},
		_setBtnTypeAttr: function(val){
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
		
	     _setBtnSizeAttr: function(val){
 		       var displayClass = "";
			
			if(val=="default"){
			  // TODO : should be addd any other class here ??? as
			 // required css already added in by btn type attribute
			 // for this case
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
			this._set("btnSize", val);

		},

		_setIconClassAttr: { node: "iconNode", type: "class" },
		


		// Map widget attributes to DOMNode attributes.
		

		
	});

	

	return Button;
});
