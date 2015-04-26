define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/PageNavButton.html",
    'dojo/domReady!'
], function (declare, _WidgetBase, _Templated, templateString, dom) {
    return declare([ _WidgetBase, _Templated], {
        templateString: templateString,
        pageNumberLabel: null,
        recordCount: null,
        dataGrid: null,
        postCreate: function () {
            this.inherited(arguments);
            this._setPaginationPage(this.pageNumberLabel, this.recordCount);
        },

        _setPaginationPage: function (pageNumberLabel, recordCount) {
        },

        setItems: function () {
            var setPages = ((this.pageNumberLabel - 1) * this.recordCount);
            this.dataGrid.setItems(setPages);
        }
    });
});
