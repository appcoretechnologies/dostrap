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
    "dojo/dom-attr"
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

        _fillContent: function (/*DomNode*/ source) {

          
            var dest = this.containerNode;
		
            if(source && dest){
                while(source.hasChildNodes()){
                    var node=source.firstChild;  // Firstchild= content pane
                    source.removeChild(node);

                    console.debug('node '+node.nodeName );   //HTML nodeName
                    if(node.nodeName =='DIV'){
                    var navButton;
                     var selected = domAttr.get(node, "selected");
	

                        if(selected){
                            navButton = new tabbuttons({label:node.title, buttonClass:"active"});
                         
                            dest.appendChild(node);
                        }
                        else{
                            navButton  = new tabbuttons({label:node.title});
                            domStyle.set(node, 'display', 'none');
                            dest.appendChild(node);
                        }

                            domConstruct.place(navButton.menuNode, this.tabNode);

                    }
                }
            }

        }

    });
});