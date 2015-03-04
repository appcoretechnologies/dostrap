define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/TabContainer.html",
    'dojo/domReady!',
    'dojo/dom-class',
    'dijit/_Container',
    "dojo/dom-construct",
    'weblabs/container/tabbuttons',
    "dojo/dom-style",
    "dojo/dom-attr",
	"dojo/_base/array"
], function (declare, _WidgetBase, _Templated, templateString, dom, domClass,_Container, domConstruct, tabbuttons,domStyle,domAttr) {
  var isActive= false;

    return declare([ _WidgetBase, _Templated, _Container], {
      //  widgetsInTemplate: true,
        showLabel: false,
        templateString: templateString,
      /* toggleClass: "",
        _setToggleClassAttr: { node: "menuNode", type: "class" },
        _connectHandlers : [],
        buildRendering: function(){
            this.inherited(arguments);
            var onClickHandler = this.connect(this.domNode, "onclick", "toggleNavBar");
            this._connectHandlers.push(onClickHandler);
        },
        toggleNavBar: function(){
            if(isActive)
            {
                this.set("toggleClass","");
                isActive=false;
            }else{
                this.set("toggleClass","active");
                isActive=true;
            }
        },*/

         postMixInProperties: function () {
            this.inherited(arguments);
        },
		startup: function(){
			if(this._started){
				return;
			}
alert("hi");
			var children = this.getChildren();

			// Setup each page panel to be initially hidden
			array.forEach(children, this._setupChild, this);

			// Figure out which child to initially display, defaulting to first one
			if(this.persist){
				this.selectedChildWidget = registry.byId(cookie(this.id + "_selectedChild"));
			}else{
				array.some(children, function(child){
					if(child.selected){
						this.selectedChildWidget = child;
					}
					return child.selected;
				}, this);
			}
			var selected = this.selectedChildWidget;
			if(!selected && children[0]){
				selected = this.selectedChildWidget = children[0];
				selected.selected = true;
			}

			// Publish information about myself so any StackControllers can initialize.
			// This needs to happen before this.inherited(arguments) so that for
			// TabContainer, this._contentBox doesn't include the space for the tab labels.
			topic.publish(this.id + "-startup", {children: children, selected: selected, textDir: this.textDir});

			// Startup each child widget, and do initial layout like setting this._contentBox,
			// then calls this.resize() which does the initial sizing on the selected child.
			this.inherited(arguments);
		}
       

    });
});