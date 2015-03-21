define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!weblabs/buttons/templates/panel.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/topic",
	"require",
	"dijit/layout/ContentPane",
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require,ContentPane){
//Order of inheritese
	var Button =declare([ContentPane,_WidgetBase, _TemplatedMixin], {
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
		headerclass:"",
		
		templateString: template,
		postCreate: function(){
            		this.connect(this.domNode, "onclick", "alertME");
        		},
		alertME: function(){
			alert(" publish: " );
            		topic.publish("giri/topic", { msg:this.domNode});
        	
		var handle = topic.subscribe("giri/topic", function(e){
    			alert(" received: " + e.msg.className);
    			handle.remove();
		});
		},
	
		
			_setBodyAttr: function(val){
		
		
			
			
		},
		
			_setHeaderAttr: function(val){
			this._set("header", val);
			var labelNode = this.headerNode;
			labelNode.innerHTML = val;
		}
			


		// Map widget attributes to DOMNode attributes.
		

		
	});

	

	return Button;
});
