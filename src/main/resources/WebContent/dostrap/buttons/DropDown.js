define([
	
	"dojo/_base/declare", // declare
	"dojo/dom-class", // domClass.toggle
	"dojo/has", // has("dijit-legacy-requires")
	"dojo/_base/kernel", // kernel.deprecated
	"dojo/_base/lang", // lang.trim
	"dojo/ready",
	"dojo/text!./templates/DropDown.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/topic",
	"require",
	"dojo/dom-construct" ,// domConstruct.place,
	"dostrap/buttons/Button"
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,_WidgetsInTemplateMixin,topic,require,domConstruct,button){

	var isOpen=false;
	var Button =declare("dostrap.buttons.DropDown",[_WidgetBase, _TemplatedMixin,_WidgetsInTemplateMixin], {
		// summary:
		//		A widget representing the dropdown allows to select one value
		//		from the set of given values
		//
		// description:
		//		This widget is comprised of three two different widgets a button
		//		representing a the dropdown default value and a dostrap.form.MenuItem
		//		representing the items in the dropdown 
		
		// toggleClase: String
		// a main css class to toggle the drop down as open (to show the items) or hide 
		// the items. allowed values "dropdown" to hide the values of the items or
		// "dropdown open" to show the items
		toggleClass: "dropdown",
		templateString: template,
		widgetsInTemplate: true,
		// disabled : boolean
		// disable the main dropdown
		disabled: false,
		// lable: string
		// label for the dropdown 
		label:"",
		// buttonClass: String
		// representation of button  class
		buttonClass: "btn btn-default dropdown-toggle",
		// _connectHandlers: array of objects
		// list of connect events associated with this widget
		_connectHandlers : [],
		_setToggleClassAttr: { node: "menuNode", type: "class" },
		
		
		buildRendering: function(){
				    this.inherited(arguments);
				    // by default connect on click event to show the menu items or not
					var onClickHandler = this.connect(this.domNode, "onclick", "toggleDropDown");
            		this._connectHandlers.push(onClickHandler);
        		},
        		
        // toggle function change the toggle class
		toggleDropDown: function(){
			var toggleClass;
		if(isOpen)
		{
			toggleClass =  this.type == 'up' ? 'dropup' : 'dropdown';
			this.set("toggleClass",toggleClass);
			isOpen=false;
		}else{
			toggleClass = this.toggleClass ;
			this.set("toggleClass",toggleClass + " open");
			isOpen=true;
		}
		},
		
		// disable the dropdown
		_setDisabledAttr : function(val) {
			var displayClass = "";
		
			if (this.disabled) {
				displayClass = "disabled";
				//disconnect all the event handler 
				dojo.forEach(this._connectHandlers, function(connectHandler, i){
					dojo.disconnect(connectHandler);
				});
				//Adding css disabled to dropdown to make the dropdown button look
				//like its disabled
				if (this.dropdownButton) {
					this.dropdownButton.set("class",dispalyClass);
			}
		 }
		},
		
		// set the label for the dropdown  which is equal 
		// to setting up the label for the button widget included in the 
		// template dostrap/templates/DropDown.html
		_setLabelAttr: function(/*String*/ val){
			 this.dropdownButton.set("label",val);
		},
		
		
		_setTypeAttr: function(/*String*/ type){
			// type of dropdown either could be dropdown or drop up
			// by default dropdown
			if(type =="up")
			{
				this.set("toggleClass","dropup");
			}else
			{
				this.set("toggleClass","dropdown");
			}
		},
		

		addChild: function(/*dijit/_WidgetBase*/ widget, /*int?*/ insertIndex){
			// summary:
			//		Makes the given widget a child of this widget.
			// description:
			//		Inserts specified child widget's dom node as a child of this widget's
			//		container node, and possibly does other processing (such as layout).

			// I want to just call domConstruct.place(widget.domNode, this.containerNode, insertIndex), but the counting
			// is thrown off by text nodes and comment nodes that show up when constructed by markup.
			// In the future consider stripping those nodes on construction, either in the parser or this widget code.
			var refNode = this.containerNode;
			if(insertIndex > 0){
				// Old-school way to get nth child; dojo.query would be easier but _Container was weened from dojo.query
				// in #10087 to minimize download size.   Not sure if that's still and issue with new smaller dojo/query.
				refNode = refNode.firstChild;
				while(insertIndex > 0){
					if(refNode.nodeType == 1){ insertIndex--; }
					refNode = refNode.nextSibling;
				}
				if(refNode){
					insertIndex = "before";
				}else{
					// to support addChild(child, n-1) where there are n children (should add child at end)
					refNode = this.containerNode;
					insertIndex = "last";
				}
			}

			domConstruct.place(widget.domNode, refNode, insertIndex);

			// If I've been started but the child widget hasn't been started,
			// start it now.  Make sure to do this after widget has been
			// inserted into the DOM tree, so it can see that it's being controlled by me,
			// so it doesn't try to size itself.
			if(this._started && !widget._started){
				widget.startup();
			}
		}

	});

	

	return Button;
});

