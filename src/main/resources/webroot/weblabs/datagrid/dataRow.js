define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/dataRow.html",
    "weblabs/datagrid/dataCell",
    "dojo/dom-construct"
    //"weblabs/buttons/button"
], function (declare, _WidgetBase, _Templated, templateString, DataCell, domConstruct) {
    return declare([ _WidgetBase, _Templated], {
        templateString:templateString,
        item: null,
        layout:null,
        store: null,
        field:null,
        postCreate: function(){
           this.inherited(arguments);
           this.setData(this.layout, this.item);
        },

        setData:function(structure, item){
           dojo.forEach(structure, function(entity){
           this.setupDataCell(entity, item)
        },this);
        },

        setupDataCell: function(entity, item){

         //   var wt = entity.widgetType;
           // console.debug("wt "+ wt);
            var dataCell= new DataCell({data: item[entity.field] ,entity:entity});
            domConstruct.place(dataCell.dataNode, this.rowNode);
        }
    });
});