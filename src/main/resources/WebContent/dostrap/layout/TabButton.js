define(['dojo/_base/declare',
    'dijit/_Widget',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/TabButton.html",
    'dojo/domReady!',
    'dojo/dom-class',
    'dojo/on',
    "dojo/dom-style",
], function (declare, _Widget, _Templated, templateString, dom, domClass, on, domStyle) {
    return declare([ _Widget, _Templated], {
    	// summary:
		//		A widget containing an Button HTML fragment
		// description:
		//		This widget embeds a document fragment in the tab container, specified
		//		by javascript.This widget has a reference to the content pane
    	//		which will be shown or hidden based on the click of this widget,
    	//		the content pane object reference is set while the this widget
    	//		is created.
        templateString: templateString,//Overrides the templates
        // label: string
        // button label represented as title of each tab
        label:"tab",
        // buttonClass: string
        // css class for the button, to show active or non active tab by
        // setting the button class 
        buttonClass:"",
        // contentPane: object
        // reference to the content pane with this widget
        contentPane:null,
        // disabled: boolean
        // button to be shown as disabled or not, by default
        // its false
        disabled: false,
        
        // closable  :boolean
        // navbutton with closable icon if set as true, so that onclick of close should
        // close or destroy the content pane associated with this tab button  
        closable : false,
        
        buildRendering: function(){
            this.inherited(arguments);
            // attach an on click event with the button, which would set the button 
            // class as active or inactive and show/hide corresponding content pane
            if(!this.disabled)
            	var onClickHandler = this.connect(this.menuNode, "onclick","setActive");  //this.menuNode= To which node onCLick should be assigned
            
            // attach event for the closable icon, so that on click,it should destroy the 
            // current content pane
            if(this.closable)
            {
            	this.connect(this.iconNode, "onclick","closePane");
            	
            }
          
        },
        closePane : function()
        {
        	if(this.contentPane)
        	{
        		this.contentPane.containerNode.remove();
        		this.menuNode.remove();
        	}
        },

        setActive: function(){
        	// de active the currently active button and hide the corresponding
        	// content pane
            if(this && this.getParent() != null && this.getParent().getActiveNode())
            {
                this.getParent().getActiveNode().setClass("");
                var cp = this.getParent().getActiveNode().contentPane;
                domStyle.set(cp.containerNode,'display','none');
            }
            
            if(this && this.getParent() != null)
            {
	            // set the class of the button
	            this.setClass("active");
	            this.getParent().setActiveNode(this);
	            domStyle.set(this.contentPane.containerNode,'display','block');
            }
        },
        setClass: function(classname ) {
            this.menuNode.className=classname;


        },
        
        // if closeable is true set the icon as a closeable option 
        _setClosableAttr : function(/**boolean**/ closable)
        {
        	if(closable)
        	 {
        		this.iconNode.className= "glyphicon glyphicon-remove";
        	 }
        },
        // if disabled change the button class as disabled
        _setDisabledAttr : function(/**boolean**/disabled)
        {
        	if(disabled)
        	{
        		this.menuNode.className = "disabled";
        	}
        }

    });
});
