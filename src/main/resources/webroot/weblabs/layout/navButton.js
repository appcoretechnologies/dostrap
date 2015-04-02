define(['dojo/_base/declare',
    'dijit/_Widget',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/navButton.html",
    'dojo/domReady!',
    'dojo/dom-class',
    'dojo/on',
    "dojo/dom-style",
], function (declare, _Widget, _Templated, templateString, dom, domClass, on, domStyle) {
var isActive=true;

    return declare([ _Widget, _Templated], {
        widgetsInTemplate: true,
        templateString: templateString,//Overrides the templates
        showLabel: false,
        label:"tab",
        buttonClass:"",
       // activeMenuNode:null,
        contentPane:null,

        //_setToggleClassAttr: { node: "menuNode", type: "class" },
       // _connectHandlers : [],
        navButton:"",

        buildRendering: function(){
            this.inherited(arguments);
            var onClickHandler = this.connect(this.menuNode, "onclick","setActive");  //this.menuNode= To which node onCLick should be assigned
           //var onClickHandler = on(this.menuNode, "dblclick",  this.setActive());//
            //this._connectHandlers.push(onClickHandler);
        },
       /* setActive: function(){

            this.menuNode.className = "active";
            //  menuNode.set("buttonClass","active");
            //console.debug("buttonClass" + this.buttonClass);

        },*/

        setActive: function(){

            if(this.getParent().getActiveNode)
            {
                this.getParent().activeNode.setClass("");
                var cp = this.getParent().activeNode.contentPane;
                domStyle.set(cp.domNode,'display','none');
            }
            this.setClass("active");
            this.getParent().setActiveNode(this);
            //this.getChildren(child);
            domStyle.set(this.contentPane.domNode,'display','block');

           // this.setcontentPane();
        },

        setClass: function(classname ) {
            this.menuNode.className=classname;
        },
       /* setcontentPane: function(){
            this.contentPane=contentPane;
        },*/
/*setContentPane: function(child)
{
    this.containerNode.appendChild(child.domNode);
}*/
     // setActiveMenuNode: function (/*String*/ activeNode) {   //instead of _setActiveMenuNode we have written setActiveMenuNode, bcuz we are not exposing to user end.
       //    this.activeMenuNode=activeNode;                      //referance for tab, which was active
       // }

    });
});
