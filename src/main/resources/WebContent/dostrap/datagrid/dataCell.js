define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/dataCell.html",
    "dojo/dom-construct"
    //"dostrap/datagrid/tableData",

], function (declare, _WidgetBase, _Templated, templateString, domConstruct) {


    return declare([ _WidgetBase, _Templated], {
        templateString: templateString,
        data: null,
        //widget:"",
        entity: null,
        widgetType: null,
        _setDataAttr: function (/*String*/ content) {
            var dc = this;
          //  console.debug("content "+content);
            if (!dc.entity.widgetType || dc.entity.widgetType == "") {
               domConstruct.place("<div>" + content +
                    "</div>", this.dataNode);
            } else {
                require([dc.entity.widgetType], function (widget) {
                    var wt = new widget(content);
                    domConstruct.place(wt.domNode, dc.dataNode);
                });
            }
        }
    });

});