define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/dataCell.html",
    "dojo/dom-construct"
    //"weblabs/datagrid/tableData",

], function (declare, _WidgetBase, _Templated, templateString, domConstruct) {



    return declare([ _WidgetBase, _Templated], {
        templateString:templateString,
        data: null,
        //widget:"",
        entity:null,
        _setDataAttr:function (/*String*/ content) {
            console.debug("In _setDataAttr " +content);
            console.debug("In dataNode " +this.dataNode);
            console.debug("In domConstruct " +domConstruct);
            console.debug("check "+ this.entity.widgetType);
            var DC = this;
            if(!DC.entity.widgetType || DC.entity.widgetType == ""){
                console.debug("check ");
                domConstruct.place( "<div>" +content+
                    "</div>",this.dataNode);
             }else{
                require([DC.entity.widgetType], function(widget){
                var wt = new widget (content);
                    console.debug("wt "+ wt);
                    console.debug("wtD "+ wt.domNode);
                    console.debug("wtC "+ wt.containerNode);
                    //domConstruct.place( "<div>" +content+
                      //  "</div>",this.dataNode);
                domConstruct.place(wt.domNode, DC.dataNode);
                });
                }

           // domConstruct.place( "<div>" +content+"22"+
           //     "</div>",this.dataNode);
        }
    });

});