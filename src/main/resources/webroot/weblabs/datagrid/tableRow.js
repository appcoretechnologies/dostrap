define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/tableRow.html",
    "weblabs/datagrid/tableData",
    "dojo/dom-construct"
], function (declare, _WidgetBase, _Templated, templateString, TableData, domConstruct) {
    return declare([ _WidgetBase, _Templated], {
        templateString:templateString,
        item: null,
        layout:null,

        /*postCreate: function(){
           //this.inherited(arguments);
           this.setStructure(structure);
           console.debug("inPostCreate");
        },*/

        postCreate: function(){

           this.inherited(arguments);
           console.debug("layout "+ this.layout);
           console.debug("item "+ this.item);
           this.setStructure(this.layout, this.item);
        },
        setStructure:function(structure, item){
           //this.inherited(arguments);
           // array.forEach(structure, this.setupDataCell, this);

          //  var Structure = structure.item;

            dojo.forEach(structure, function(field){
            this.setupDataCell(field, item)
        },this);
        },

        setupDataCell: function(field, item){
             console.debug(item[field.field][0]);
             var tableData= new TableData({data: item[field.field][0]});
            //  console.debug(tableData);
            // var tableRow= new TableData();
            //tableData.dataNode
            domConstruct.place(tableData.dataNode, this.rowNode);
        },
    });
});