define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./template/TabContainer.html",
    'dojo/domReady!',
    'dojo/dom-class',
    'dijit/_Container',
    "dojo/dom-construct"
], function (declare, _WidgetBase, _Templated, templateString, dom, domClass,_Container,domConstruct) {


    return declare([ _WidgetBase, _Templated, _Container], {
      //  widgetsInTemplate: true,
        templateString: templateString,
        postMixInProperties: function () {
            this.inherited(arguments);
        },
        _fillContent: function (/*DomNode*/ source) {
            var dest = this.containerNode;
            if(source && dest){
                while(source.hasChildNodes()){
                    var node=source.firstChild;
                    dest.appendChild(node);
                    console.debug('node '+node.nodeName );
                    if(node.nodeName =='DIV')
                    domConstruct.place('<li role=\"presentation\" class=\"active\"><a href=\"#\">'+node.title+'</a></li>',  this.tabNode);
                }
            }

        }

    });
});
