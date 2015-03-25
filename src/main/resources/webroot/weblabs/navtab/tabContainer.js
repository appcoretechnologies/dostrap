define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/tabContainer.html",
    'dojo/_base/array',
    'dojo/domReady!',
    "dojo/dom-style",
    "weblabs/navtab/navButton",
    'dijit/_Container',
    "dojo/dom-construct",
    'dijit/dijit',
    "dojo/dom-attr"
], function (declare, _WidgetBase, _Templated, templateString, array, dom, domStyle, NavButton, _Container, domConstruct, dijit, domAttr) {

       return declare([_WidgetBase, _Templated, _Container], {
        templateString:templateString,
        showLabel: false,

       startup: function(){
            if(this._started){
                return;
            }
            var dest = this.getChildren();
            array.forEach(dest, this.setupChild, this);
        },
        setupChild: function(child){
            var navButton;
            var selected = child.selected;
            if(selected){
                navButton = new NavButton({label:child.title, buttonClass:"active", contentPane: child});
                this.activeNode=navButton;
            }
            else{
                navButton  = new NavButton({label:child.title, contentPane: child});
                domStyle.set(child.domNode, 'display', 'none');
            }
            domConstruct.place(navButton.menuNode, this.tabNode);
        },
      setActiveNode: function(activeNode){
            this.activeNode=activeNode;
        },
        getActiveNode: function(){
            return this.activeNode;
        },

    });
});