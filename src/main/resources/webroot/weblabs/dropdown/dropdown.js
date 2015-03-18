define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/dropdown.html",
    'dojo/domReady!',
    'dijit/_Container'
], function (declare, _WidgetBase, _Templated, templateString, dom, _Container) {
    var isOpen=false;
    return declare([ _WidgetBase, _Templated, _Container], {
        templateString:templateString,
        label: "default",
        buttonClass:"btn btn-danger dropdown-toggle",
        size:"small",
        type:"default",
        toggleClass: "dropdown",
        buttonCaret:"caret",
        _setToggleClassAttr: { node: "menuNode", type: "class" },
        _connectHandlers : [],

        buildRendering: function(){
            this.inherited(arguments);
            var onClickHandler = this.connect(this.domNode, "onclick", "toggleDropDown");
            this._connectHandlers.push(onClickHandler);
        },
        toggleDropDown: function(){
            if(isOpen)
            {
                this.set("toggleClass","dropdown");
                isOpen=false;
            }else{
                this.set("toggleClass","dropdown open");
                isOpen=true;
            }
        },

        setButtonClass:function(){
            var buttonClass="btn dropdown-toggle ";
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
            this.titleNode.className = this.buttonClass;
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
        },
        _setLabelAttr: function (/*String*/ content) {      //_set is called from _widgetBase.js
            // summary:
            //		Hook for set('label', ...) to work.
            // description:
            //		Set the label (text) of the button; takes an HTML string.
            //		If the label is hidden (showLabel=false) then and no title has
            //		been specified, then label is also set as title attribute of icon.
            this.inherited(arguments);
            this.labelNode.innerHTML = content;
           // this.caretNode.className=this.buttonCaret;

        },
    });
});