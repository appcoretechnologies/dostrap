define(['dojo/_base/declare',
    'dijit/_Widget',
    'dijit/_Templated',
    "dojo/text!./templates/Button.html",
    //'dojo/html',
   // 'dojo/dom',
   // 'dojo/on',
    'dojo/domReady!'
],function(declare,_Widget,_Templated,templateString, dom){
    //on(dom.byId("setContent").value);
  // this.set("label", content);

   // dojo.ready(function() {
        //...make elements into widgets
    //    var widget = new dojo.byId("makeMeAWidget"); //options,elementID
   // });
   // this.set("label", widget);


    return declare([ _Widget, _Templated], {
        widgetsInTemplate: true,
        templateString: templateString,
       // showLabel: false,
        label:"default",
        setLabel: function(/*DomNode*/ label){
            this._set("label", label);
            console.debug("TESt"+label);
        }

       // _fillContent: function(/*DomNode*/ source){
            // Overrides _Templated._fillContent().
            // If button label is specified as srcNodeRef.innerHTML rather than
            // this.params.label, handle it here.
            // TODO: remove the method in 2.0, parser will do it all for me
       //     if(source && (!this.params || !("label" in this.params))){
          //      var sourceLabel = lang.trim(source.innerHTML);
            //    if(sourceLabel){
           //         this.label = sourceLabel; // _applyAttributes will be called after buildRendering completes to update the DOM
           //   }
          //  }
      //  }

        //   setLabel: function(/*String*/ content){
        // summary:
            //		Deprecated.  Use set('label', ...) instead.
      //      kernel.deprecated("dijit.form.Button.setLabel() is deprecated.  Use set('label', ...) instead.", "", "2.0");
       //     this.set("label", "Amit");
     //   }
        //buildRendering: function(){
            // create the DOM for this widget
          //  this.domNode = domConstruct.create("button", {innerHTML: "push me"});
      //  }
    });
});
