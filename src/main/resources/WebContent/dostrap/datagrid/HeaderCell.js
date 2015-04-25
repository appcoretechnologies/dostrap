define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/HeaderCell.html",
    'dojo/domReady!'
], function (declare, _WidgetBase, _Templated, templateString, dom) {
    return declare([ _WidgetBase, _Templated], {
        templateString: templateString,
        label: "default",
        field: ""
    });
});
