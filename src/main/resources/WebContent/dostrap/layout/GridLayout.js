define([
	"dojo/_base/declare", 
	"dojo/dom-class", 
	"dojo/has", 
	"dojo/_base/kernel", 
	"dojo/_base/lang",
	"dojo/ready",
	"dojo/text!./templates/GridLayout.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"require",
	
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,topic,require){
	var GridLayout =declare("dostrap.layout.GridLayout",[_WidgetBase, _TemplatedMixin], {
		// summary:
		//		A layout grid similar to the bootstrap grid system 
		// description:
		//		A layout grid widget consists of a row child widget which 
		//		would represent a "row" class of the bootstrap grid system
		//		This being the parent widget, would be responsible to attach 
		//      the child  elements in accordance with grid system. 
		// 		for example : A layout widget having 3 panel widgets to build a 
		//		responsive would result the html fragment once this widget is used as below
		//		<div class="grid">
		//			<div class="row">
		//			  <div class="col-sm-1">
		//					<contenpane></contentPane>
		//			   </div>
		//			   <div class="col-sm=1">
		//					<contenpane></contentPane>
		//			   </div>
		//			</div>
		//		</div>
		//
		templateString: template
	
	});

	return GridLayout;
});
