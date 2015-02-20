define(['dojo/_base/declare',
    'dijit/_Widget',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/Dropdownmenu.html",
    'dojo/domReady!',
    'dojo/dom-class',
    'dijit/_Contained'
], function (declare, _Widget, _Templated, templateString, dom, domClass, _Contained) {


    return declare([ _Widget, _Templated, _Contained], {
        widgetsInTemplate: true,
        templateString: templateString,
        showLabel: false,
        size: "medium",
        label: "default",
        buttonClass: " btn btn-default ",
        setButtonClass: function () {
            var buttonClass = "btn";
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
        },

        type: "default",
        _setLabelAttr: function (/*String*/ content) {
            // summary:
            //		Hook for set('label', ...) to work.
            // description:
            //		Set the label (text) of the button; takes an HTML string.
            //		If the label is hidden (showLabel=false) then and no title has
            //		been specified, then label is also set as title attribute of icon.
            this.inherited(arguments);
         //   this.containerNode.innerHTML = content;

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