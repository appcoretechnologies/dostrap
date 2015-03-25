define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/dataGrid.html",
    "weblabs/datagrid/headerCell",
    'dojo/domReady!',
   // 'dojox/grid/_Grid',
    "dojo/_base/lang",
    'dojo/_base/array',
    "dojo/dom-construct"

], function (declare, _WidgetBase, _Templated, templateString, HeaderCell,dom, lang, array, domConstruct) {
    return declare([ _WidgetBase, _Templated], {
        templateString:templateString,

        _setStructureAttr: function(structure){
             array.forEach(structure, this.setupHeaderCell, this);
        },

        setupHeaderCell: function (structure){
            var headerCell= new HeaderCell(structure);
            domConstruct.place(headerCell.labelNode, this.viewsHeaderNode);
        },


    });
});