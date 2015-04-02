define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/dataGrid.html",
    "weblabs/datagrid/headerCell",
    "weblabs/datagrid/tableRow",



    'dojo/domReady!',
   // 'dojox/grid/_Grid',
    "dojo/_base/lang",
    'dojo/_base/array',
    "dojo/dom-construct",
    'dojo/data/ItemFileReadStore'
], function (declare, _WidgetBase, _Templated, templateString, HeaderCell, TableRow, dom, lang, array, domConstruct, ItemFileReadStore) {
    return declare([ _WidgetBase, _Templated], {
        templateString:templateString,
        store:null,
        structure:null,
        postCreate: function(){
            this.inherited(arguments);
            this._setStructure(this.structure);
            this._setStore(this.store);

        },


        _setStructure: function(structure){
             array.forEach(structure, this.setupHeaderCell, this);
        },
        setupHeaderCell: function (structure){
            var headerCell= new HeaderCell(structure);
            domConstruct.place(headerCell.labelNode, this.viewsHeaderNode);
        },

       _setStore: function(store){
           var grid = this;
           store.fetch({
               onComplete:function(items, request){
                   grid.gotList(items, request, grid)
               },
              // onError: gotError
           });
       },

        gotList: function(items, request, grid){
       // var itemsList = "";
            var structure = this.structure;
        dojo.forEach(items, function(item){
           // item._RI=null;
            var tableRow = new TableRow({item:item, layout: structure});   //TO read a data from this page to other page(item: item)
            console.debug(tableRow.item);

            domConstruct.place(tableRow.rowNode, this.bodyNode);
           // tableRow.startup();//for (var key in item) {
          //  }

        },this);


            //tableRow.rowNode;
            //domConstruct.place(tableRow.rowNode, this.rowNode);
            //itemsList += items.getValue(item, "label") + " ";
       // });
       // console.debug("All items are: " + itemsList);
     },

   /*var gotError = function(error, request){
        alert("The request to the store failed. " +  error);
    }*/



    });
});