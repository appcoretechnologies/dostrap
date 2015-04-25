define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/DataGrid.html",
    "dostrap/datagrid/HeaderCell",
    "dostrap/datagrid/DataRow",
    "dostrap/datagrid/pagination/Pagination",
    'dojo/domReady!',
    "dojo/_base/lang",
    'dojo/_base/array',
    "dojo/dom-construct",
    'dojo/data/ItemFileReadStore'
], function (declare, _WidgetBase, _Templated, templateString, HeaderCell, DataRow, Pagination, dom, lang, array, domConstruct, ItemFileReadStore) {
    return declare([_WidgetBase, _Templated], {
        templateString: templateString,
        store: null,
        structure: null,

        postCreate: function () {
            this.inherited(arguments);
            this._setStructure(this.structure);
            this._setStore(this.store);
        },

        _setStructure: function (structure) {
            array.forEach(structure, this.setupHeaderCell, this);
        },
        setupHeaderCell: function (structure) {
            var headerCell = new HeaderCell(structure);
            domConstruct.place(headerCell.labelNode, this.viewsHeaderNode);
        },

        _setStore: function (store) {
            var grid = this;
            store.query({start: 10,
                count: 10
            }).then(function (results) {
                    var totalRecodes = results.items.length;
                    grid.items = results.items;
                    grid.setItems(0);
                    grid._setPagination(totalRecodes);
                });
        },

        setItems: function (startRowNumber) {
            var items = this.items;
            var store = this.store;
            var structure = this.structure;
            var recordsPerPage = this.pagination.recordsPerPage;
            var counter = 0;
            domConstruct.empty(this.bodyNode);
            for (var i = startRowNumber; i < items.length; i++) {
                if (counter >= recordsPerPage) {
                    break;
                }                                                 // BreakPoint
                var dataRow = new DataRow({item: items[i], layout: structure, store: store});
                counter++;
                domConstruct.place(dataRow.rowNode, this.bodyNode);
            }
        },

        _setPagination: function (totalRecodes) {
            var pagination = new Pagination({recordsPerPage: this.pagination.recordsPerPage, totalRecodes: totalRecodes, dataGrid: this });
            domConstruct.place(pagination.paginationNode, this.containerNode);
        }
    });
});
