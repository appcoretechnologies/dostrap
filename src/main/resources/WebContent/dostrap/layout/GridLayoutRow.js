define([
	"dojo/_base/declare", 
	"dojo/dom-class", 
	"dojo/has", 
	"dojo/_base/kernel", 
	"dojo/_base/lang",
	"dojo/ready",
	"dojo/text!./templates/GridLayoutRow.html",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"require",
	"dojo/dom-construct",
	'dojo/_base/array'
], function( declare, domClass, has, kernel, lang, ready, template,_WidgetBase, _TemplatedMixin,require,domConstruct,array,GridLayoutColumn){
	var GridRow =declare("dostrap.layout.GridLayoutRow",[_WidgetBase, _TemplatedMixin], {
		// summary:
		//		A row widget for the layout grid widget
		// description:
		//		This widget being the child of the Layout grid widget,
		//		a place holder for the columns of the row , and each column
		// 		could be a any container widget. This widget would generate
		//		an HTML fragment inline with the bootstrap. 
		// 		for example:
		//		<div class="row">
		//			  <div class="col-sm-1">
		//					<contenpane></contentPane>
		//			   </div>
		//			   <div class="col-sm=1">
		//					<contenpane></contentPane>
		//			   </div>
		//			</div>
		// 	   To start with all the children are placed right below the "row" class div
		//	   (attached to the containerNode by default, refer template for more info).The 
		//		children are read and each of them are append to a newly created div with "col-sm-1" class
		//		and hence, to the Row class div.
		//		The calculation of "col-sm-<number>"  class where <number> would be replaced by the total number
		// 		of children/ 12, as bootstrap supports 12 column based grid system. In other option <number> 
		// 		could be replaced with the child attribute of "colspan"
		
		templateString: template,
		
		// columnClassPrefix : <string>
		// a column class prefix used based on the bootstrap grid system
		// it could be either of these : col-sm-* , col-xs-* , col-lg-*
		// where * could be replaced with the column number
		columnClassPrefix: "col-sm-",
		
		// maxColumns : <Integer>
		// maximum number of columns supported in a grid system
		maxColumns: 12,
		
		// noOfEqualColumnClass : Integer
		// number of columns having equal classes i,e the child panels other than 
		// mentioned colspans ,by default all the columns get equal class
		noOfEqualColumnClass : 0,
		
		startup : function()  { 
			
			// get all the children of for the row of a layout
			var dest = this.getChildren();
			this.noOfEqualColumnClass = dest.length;
			// calculate the max number of columns available,as 
			// few of the panel could have a colspan
			array.forEach(dest, this.calculateMaxNoColumns,this);
			// Setup each page panel to be initially hidden
			array.forEach(dest, this.createColumn, this);
		},
		
		calculateMaxNoColumns : function(child)
		{
			//check if the child has a column span
			if(child.colspan && child.colspan != 0)
			{
				this.maxColumns =  this.maxColumns - child.colspan;
				// reduce the number of columns having equal columns
				this.noOfEqualColumnClass =  this.noOfEqualColumnClass - 1;
			}
		},
		createColumn : function(child) {
			// create a div which would have a column specific bootstrap css class  based on the number
			// of columns for a row or based on the column span attribute specified in the child 
			var node = domConstruct.create("div");
			// get the class for the column
			var columClass =  this._calculateColumnClass(child);
			domClass.add(node,columClass);
			node.appendChild(child.domNode)
			
			domConstruct.place(node,this.containerNode);
		},
		
		// calculate the column class based on the number of children /12
		_calculateColumnClass :function(/**widget**/ child)
		{
			// by default the column suffix would be maximum number of columns
			var columnClassSuffix = this.maxColumns;
			if(child.colspan && child.colspan != 0)
			{
				columnClassSuffix =  child.colspan;
			}
			else
			{
				 columnClassSuffix = Math.round((this.maxColumns / this.noOfEqualColumnClass ));
			}
			
			return this.columnClassPrefix + columnClassSuffix;
		}
	});

	return GridRow;
});
