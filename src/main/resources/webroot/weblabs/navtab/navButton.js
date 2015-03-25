define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/navButton.html",
    'dojo/domReady!',
    "dojo/dom-style"
], function (declare, _WidgetBase, _Templated, templateString, dom, domStyle) {
    return declare([_WidgetBase, _Templated], {

        templateString:templateString,
        buttonClass:"",
        label:"default",
        contentPane:null,
        navButton:"",
        buildRendering: function(){
            this.inherited(arguments);
            var onClickHandler = this.connect(this.menuNode, "onclick","setActive");  //this.menuNode= To which node onCLick should be assigned
        },
        setActive:function(){
            if(this.getParent().getActiveNode)
            {
            this.getParent().activeNode.setClass("");
            var cp = this.getParent().activeNode.contentPane;
            domStyle.set(cp.domNode, "display", "none");
            }
           this.setClass('active');
           this.getParent().setActiveNode(this);
           domStyle.set(this.contentPane.domNode,'display','block');

    },
        setClass: function(classname ) {
            this.menuNode.className=classname;
        },
    });

});