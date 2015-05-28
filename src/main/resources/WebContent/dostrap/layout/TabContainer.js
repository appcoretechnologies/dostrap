define([ 'dojo/_base/declare', 'dijit/_WidgetBase', 'dijit/_TemplatedMixin',
		"dojo/text!./templates/TabContainer.html", 'dojo/domReady!',
		'dojo/dom-class', 'dijit/_Container', "dojo/dom-construct",
		'dostrap/layout/TabButton', "dojo/dom-style", "dojo/dom-attr",
		'dijit/dijit', 'dojo/_base/array'

], function(declare, _WidgetBase, _Templated, templateString, dom, domClass,
		_Container, domConstruct, NavButton, domStyle, domAttr, dijit, array) {
	return declare("dostrap.form.TabContainer",[ _WidgetBase, _Templated, _Container ], {
		// summary:
		//		A widget containing an HTML fragment, specified with its
		//      child elements represented as content pane.
		//
		// description:
		//		This widget embeds a document fragment in the page, specified
		//		either by javascript generated mark up or DOM reference. All the
		// 		child elements are instantiated. Here, a nav button is instantiated
		//      along with the content pane widget ( which holds the content of the
		//		pane ). Each Nav Button is represented as a header of the pane
		// 		and hence, a on click event is attached to each of the nav button
		//		to show/hide a corresponding content pane.
		//		Any widgets within this content are instantiated and managed,
		templateString : templateString,
		// activeNode : object ( a content pane object)
		// currently  active pane  object, this would be the content pane object
		activeNode : null,
		// navType : string
		// css class type for the tab container either it should have a value
		// of tabs or pills. By default it is set to tabs as below
		navType    : "nav nav-tabs",

		startup : function() {
			if (this._started) {
				return;
			}
			this._started = true;
			// get all the children of the tab container
			var dest = this.getChildren();
			// Setup each page panel to be initially hidden
			array.forEach(dest, this.setupChild, this);
		},

		setupChild : function(child) {

			var navButton,buttonClass = "";
			// get the selected flag for each of the child panes
			// by default it would be false
			var selected = child.selected;
			// if selected, make the look and feel of the nav button as active
			// and show the content pane content 
			if (selected) {
				// create a button with active status, to show its selected,
				// assign the content pane as its child.  
				navButton = new NavButton({
					label : child.title,
					buttonClass : "active",
					contentPane : child,
					closable: child.closable 
				});
				// this will be used in the nav button on click event, to disable
				// the currently active button and activated the clicked button
				this.activeNode = navButton;
			} else {
				// if the child pane is disabled, make the 
				//  button as disabled
				//  create a button
				navButton = new NavButton({
					label : child.title,
					contentPane : child,
					disabled: child.disabled,
					closable: child.closable
				});
				// as the content pane is not selected make it invisible
				domStyle.set(child.domNode, 'display', 'none');
			}
			// place the button and its content pane 
			domConstruct.place(navButton.menuNode, this.tabNode);
		},
		_setNavTypeAttr : function(/** String **/ navType)
		{
			// nav tab css class 
			var navTabClass = "nav";
			switch (navType) 
			{
            	case "pills":
            		  navTabClass += " nav-pills";
            		  break;
            	case "tabs":
            		  navTabClass += " nav-tabs";
            		  break;
            	default:
            		  navTabClass =  this.navType;
            		  break;
			}
			this.tabNode.className = navTabClass;
		},
		setActiveNode : function(activeNode) {
			this.activeNode = activeNode;
		},

		getActiveNode : function() {
			return this.activeNode;
		},
		addChild: function(/*dijit/_WidgetBase*/ widget){
		  this.inherited(arguments);
            if (!this._started) {
                this._started = true;
            }
		  this.setupChild(widget);

		},
        removeChild: function(/*dijit/_WidgetBase*/ widget){
            this.inherited(arguments);
        }

	});
});
