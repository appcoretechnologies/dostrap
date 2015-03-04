define(['dojo/_base/declare',
    'dijit/_Widget',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/tabbuttons.html",
    'dojo/domReady!',
    'dojo/dom-class'
], function (declare, _Widget, _Templated, templateString, dom, domClass) {


    return declare([ _Widget, _Templated], {
        widgetsInTemplate: true,
        templateString: templateString,//Overrides the templates
        showLabel: false,
        label:"tab",
        buttonClass:""
    });
});