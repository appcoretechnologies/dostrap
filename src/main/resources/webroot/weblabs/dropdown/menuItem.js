define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/menuItem.html",
], function (declare, _WidgetBase, _Templated, templateString) {
    return declare([ _WidgetBase, _Templated], {
        templateString:templateString,
        label: "default",
        buttonClass:"btn btn-default",
        size:"small",
        type:"default",

        setButtonClass:function(){
            var buttonClass="";
            switch (this.size) {
                case "small":
                    buttonClass += " btn-sm";
                    break;
                case "medium":
                    buttonClass += " btn-lg";
                    break;
                case "xsmall":
                    buttonClass += " btn-xs";
                    break;
            }
            switch (this.type){
                case "default":
                    buttonClass +=" btn-default";
                    break;
                case "primary":
                    buttonClass +=" btn-primary";
                    break;
                case "success":
                    buttonClass +=" btn-success";
                    break;
                case "info":
                    buttonClass +=" btn-info";
                    break;
                case "warning":
                    buttonClass +=" btn-warning";
                    break;
                case "danger":
                    buttonClass +=" btn-danger";
                    break;
            }
            this.buttonClass = buttonClass;
            this.containerNode.className = this.buttonClass;
        },
        _setSizeAttr: function (/*String*/ size) {
            this.inherited(arguments);
            this.size = size;
            this.setButtonClass();
        },
        _setTypeAttr: function (/*String*/ Type) {
            this.inherited(arguments);
            this.type = Type;
            this.setButtonClass();
        }
    });
});