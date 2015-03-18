define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/Dropdown.html",
    'dojo/domReady!',
    'dojo/dom-class',
    'dijit/_Container'
], function (declare, _WidgetBase, _Templated, templateString, dom, domClass,_Container) {

    var isOpen=false;
    return declare([ _WidgetBase, _Templated, _Container], {
       // widgetsInTemplate: true,
        templateString: templateString,
        showLabel: false,
        size: "medium",
        label: "default",
        buttonClass: " btn btn-default dropdown-toggle",
        type: "default",
        toggleClass: "dropdown",
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

        setButtonClass: function () {
            var buttonClass = "btn dropdown-toggle";
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
            switch (this.type) {
                case "default":
                    buttonClass += " btn-default";
                    break;
                case "primary":
                    buttonClass += " btn-primary";
                    break;
                case "success":
                    buttonClass += " btn-success";
                    break;
                case "info":
                    buttonClass += " btn-info";
                    break;
                case "warning":
                    buttonClass += " btn-warning";
                    break;
                case "danger":
                    buttonClass += " btn-danger";
                    break;

            }
            this.buttonClass = buttonClass;
            this.titleNode.className = this.buttonClass;
        },

        _setLabelAttr: function (/*String*/ content) {
            // summary:
            //		Hook for set('label', ...) to work.
            // description:
            //		Set the label (text) of the button; takes an HTML string.
            //		If the label is hidden (showLabel=false) then and no title has
            //		been specified, then label is also set as title attribute of icon.
            this.inherited(arguments);
            //this.titleNode.innerHTML = content;

        },

        _setSizeAttr: function (/*String*/ size) {
            this.inherited(arguments);
            this.size = size;
            this.setButtonClass();
        },

        postMixInProperties: function () {
            this.inherited(arguments);

        },

        _setTypeAttr: function (/*String*/ type) {
            this.inherited(arguments);
            this.type = type;
            this.setButtonClass();
        },

        _fillContent: function (/*DomNode*/ source) {
            this.inherited(arguments);
            // Overrides _Templated._fillContent().
            // If button label is specified as srcNodeRef.innerHTML rather than
            // this.params.label, handle it here.
            // TODO: remove the method in 2.0, parser will do it all for me
            console.debug("size " + this.size);
            console.debug("type" + this.type);

            if (source && (!this.params || !("label" in this.params))) {
              var sourceLabel = source.innerHTML;
              if (sourceLabel) {
                    this.label = sourceLabel; // _applyAttributes will be called after buildRendering completes to update the DOM
             }
            }
        }
    });
});
