define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/TabContainer.html",
    'dojo/domReady!',
    'dojo/dom-class',
    'dijit/_Container',
    "dojo/dom-construct",
    'weblabs/layout/navButton',
    "dojo/dom-style",
    "dojo/dom-attr",
    'dijit/dijit',
    'dojo/_base/array'

], function (declare, _WidgetBase, _Templated, templateString, dom, domClass,_Container, domConstruct, NavButton,domStyle,domAttr, dijit, array) {
  var isActive= true;

    return declare([ _WidgetBase, _Templated, _Container], {
      //  widgetsInTemplate: true,
        showLabel: false,
        templateString: templateString,
        activeNode: null,
        contentPane:null,
        startup: function(){
            if(this._started){
                return;
            }

            var dest = this.getChildren();

            // Setup each page panel to be initially hidden
            array.forEach(dest, this.setupChild, this);
           //var contentPane = dijit.byNode(child);
        },

           setupChild:function(child){
              //  var node=child.firstChild;  // Firstchild= content pane
                //child.removeChild(node);

                //console.debug('node '+node.nodeName );   //HTML nodeName
               // if(node.nodeName =='DIV'){
                    var navButton;
                    var selected = child.selected;
                    if(selected){
                        navButton = new NavButton({label:child.title, buttonClass:"active", contentPane:child});

                        //this.containerNode.appendChild(child.domNode); //we are attaching Child domNode into containerNode
                            //dest.appendChild(child);
                       // var contentPane = dijit.byNode(containerNode); // we get the widget of the particular node.
                        firstNode = false;
                       this.activeNode=navButton;
                    }
                    else{
                        navButton  = new NavButton({label:child.title, contentPane:child});
                        domStyle.set(child.domNode, 'display', 'none');
                      //  this.containerNode.appendChild(child.domNode);
                    }

                    domConstruct.place(navButton.menuNode, this.tabNode);


            },

        setActiveNode: function(activeNode){
        this.activeNode=activeNode;
    },

    getActiveNode: function(){
        return this.activeNode;
    },

        //_fillContent: function (/*DomNode*/ source) {

          /*  var firstNode = true;
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
                            navButton = new NavButton({label:node.title, buttonClass:"active"});
                            dest.appendChild(node);
                           var contentPane = dijit.byNode(node);
                           firstNode = false;
                        }
                     else{
                            navButton  = new NavButton({label:node.title});
                            domStyle.set(node, 'display', 'none');
                            dest.appendChild(node);
                        }

                            domConstruct.place(navButton.menuNode, this.tabNode);

                    }
                }
            }

        }*/

    });
});
