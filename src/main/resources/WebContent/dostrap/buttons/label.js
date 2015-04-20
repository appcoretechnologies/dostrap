define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!dostrap/buttons/templates/label.html",
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
		labelClass: "btn btn-default",
		
		
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
		_setLabelClassAttr: function(val){
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
			 this._set("labelClass", val);
		}
		


		// Map widget attributes to DOMNode attributes.
		

		
	});

	

	return Button;
});
