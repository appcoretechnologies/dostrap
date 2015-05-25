define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!./templates/navbar.html",
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
		// |	<button data-dojo-type="dijit/form/Button" onClick="...">Hello world</button>
		navtype:"nav navbar-nav",
		templateString: template,
		navBarClass: "navbar-collapse collapse",
		
		buildRendering: function(){
				    this.inherited(arguments);
				    // by default connect on click event to show the menu items or not
					var onClickHandler = this.connect(this.toggleNode, "onclick", "toggleNavBar");
        		},
        		
        
        		
        // toggle function change the toggle class
        	      // toggle function change the toggle class
        		toggleNavBar: function(){
        			var navBarClass;
        		if(isOpen)
        		{
        			navBarClass= "navbar-collapse collapse";
        			domClass.replace(this.navBarNode, navBarClass);
        			isOpen=false;
        		}else{
        			navBarClass=navBarClass + "in";
        			domClass.replace(this.navBarNode, navBarClass);
        			isOpen=true;
        		}
        		},
        		
		_setNavtypeAttr: function(val){
			var displayClass="";
			if(val=="horizontal"){
			displayClass="nav navbar-nav";
			}
			else if(val=="verticle"){
				displayClass="nav nav-stacked";
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
