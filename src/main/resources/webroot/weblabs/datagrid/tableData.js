define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/tableData.html",
    //"weblabs/datagrid/tableData",
], function (declare, _WidgetBase, _Templated, templateString) {
    return declare([ _WidgetBase, _Templated], {
        templateString:templateString,

        data: "",
    });
});