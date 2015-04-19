define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/pagination.html",
    'dojo/domReady!',
    "weblabs/datagrid/pagination/pageNavButton",
    "dojo/dom-construct"
], function (declare, _WidgetBase, _Templated, templateString, dom, PageNavButton, domConstruct) {
    return declare([ _WidgetBase, _Templated], {
        templateString: templateString,
        recordsPerPage:null,
        totalRecodes:null,
        dataGrid:null,
        postCreate: function () {
            this.inherited(arguments);
            this._setPaginationCount();
        },

        _setPaginationCount: function(){
                console.debug("recordCount "+this.recordsPerPage);
                console.debug("totalRecodes "+this.totalRecodes);
                var pageCount = Math.ceil(this.totalRecodes/ this.recordsPerPage);
                console.debug("pageCount "+ pageCount);

            for (var i=0; i < pageCount; i++){
                var pageNavButton = new PageNavButton ({pageNumberLabel:i+1, recordCount:this.recordsPerPage, dataGrid: this.dataGrid});
              //  console.debug("pageNumberLabel "+pageNavButton.pageNumberLabel);
                var pageNumber = pageNavButton.pageNumberLabel;
                domConstruct.place(pageNavButton.domNode, this.paginationNode);
            }
           // console.debug("pageNumber "+pageNumber);

            //console.debug("SBN "+startbeginNum);
}

    });
});