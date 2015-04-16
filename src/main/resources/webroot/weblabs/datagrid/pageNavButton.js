define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/pageNavButton.html",
    'dojo/domReady!'
], function (declare, _WidgetBase, _Templated, templateString, dom) {
    return declare([ _WidgetBase, _Templated], {
        templateString: templateString,
        pageNumberLabel: null,
        recordCount:null,
        dataGrid: null,
        postCreate: function () {
            this.inherited(arguments);
            this._setPaginationPage(this.pageNumberLabel, this.recordCount);
        },
        _setPaginationPage: function(pageNumberLabel, recordCount){
            console.debug("pageNumberLabel "+pageNumberLabel);
            console.debug("recordCount "+recordCount);

       },
        setItems:function(){
            console.debug("HI");
            var startbeginNum=((this.pageNumberLabel-1)*this.recordCount);
            console.debug("startbeginNum "+startbeginNum);
            this.dataGrid.setItems(startbeginNum);
        }                                                                                       //setItems function from dataGrid
    });
});