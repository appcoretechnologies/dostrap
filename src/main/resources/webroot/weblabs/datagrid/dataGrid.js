define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/dataGrid.html",
    "weblabs/datagrid/headerCell",
    "weblabs/datagrid/dataRow",
    'dojo/domReady!',
    "dojo/_base/lang",
    'dojo/_base/array',
    "dojo/dom-construct",
    'dojo/data/ItemFileReadStore'
], function (declare, _WidgetBase, _Templated, templateString, HeaderCell, DataRow, dom, lang, array, domConstruct, ItemFileReadStore) {
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
           store.query({
           }).then (function(results){
               console.debug("result "+ results);
               grid.gotList(results.items, grid);

           });
       },

        gotList: function(items, grid){
            var store = this.store;
            var structure = this.structure;
            dojo.forEach(items, function(item){
            var dataRow = new DataRow({item:item, layout: structure, store: store});   //TO read a data from this page to other page(item: item)
            domConstruct.place(dataRow.rowNode, this.bodyNode);
        },this);
     }
    });
});