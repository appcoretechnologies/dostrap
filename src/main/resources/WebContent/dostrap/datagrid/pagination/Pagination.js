define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/Pagination.html",
    'dojo/domReady!',
    "dostrap/datagrid/pagination/PageNavButton",
    "dojo/dom-construct"

], function (declare, _WidgetBase, _Templated, templateString, dom, PageNavButton, domConstruct) {
    return declare([ _WidgetBase, _Templated], {
        templateString: templateString,
        recordsPerPage: null,
        totalRecodes: null,
        dataGrid: null,

        postCreate: function () {
            this.inherited(arguments);
            this._setPaginationCount();
        },

        _setPaginationCount: function () {
            var pageCount = Math.ceil(this.totalRecodes / this.recordsPerPage);
            for (var i = 0; i < pageCount; i++) {
                var pageNavButton = new PageNavButton({pageNumberLabel: i + 1, recordCount: this.recordsPerPage, dataGrid: this.dataGrid});
                var pageNumber = pageNavButton.pageNumberLabel;
                domConstruct.place(pageNavButton.domNode, this.paginationNode);
            }
        }
    });
});
