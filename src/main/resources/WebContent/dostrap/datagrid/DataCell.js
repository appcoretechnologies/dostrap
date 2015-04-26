define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/DataCell.html",
    "dojo/dom-construct"

], function (declare, _WidgetBase, _Templated, templateString, domConstruct) {

    return declare([ _WidgetBase, _Templated], {
        templateString: templateString,
        data: null,
        entity: null,
        widgetType: null,

        _setDataAttr: function (/*String*/ content) {
            var dataCell = this;
            if (!dataCell.entity.widgetType || dataCell.entity.widgetType == "") {
                domConstruct.place("<div>" + content +
                    "</div>", this.dataNode);
            } else {
                require([dataCell.entity.widgetType], function (widget) {
                    var wt = new widget(content);
                    domConstruct.place(wt.domNode, dataCell.dataNode);
                });
            }
        }
    });

});
