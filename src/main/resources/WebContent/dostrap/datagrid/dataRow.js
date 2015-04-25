define(['dojo/_base/declare',
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',
    "dojo/text!./templates/DataRow.html",
    "dostrap/datagrid/DataCell",
    "dojo/dom-construct"

], function (declare, _WidgetBase, _Templated, templateString, DataCell, domConstruct) {
    return declare([ _WidgetBase, _Templated], {
        templateString: templateString,
        item: null,
        layout: null,
        store: null,
        field: null,

        postCreate: function () {
            this.inherited(arguments);
            this.setData(this.layout, this.item);
        },

        setData: function (structure, item) {
            dojo.forEach(structure, function (entity) {
                this.setupDataCell(entity, item)
            }, this);
        },

        setupDataCell: function (entity, item) {
             var params = {};
            if (entity.getWidgetParams) {
                var entityParams = entity.getWidgetParams(item);
                var dataCell = new DataCell({data: entityParams, entity: entity});
                domConstruct.place(dataCell.dataNode, this.rowNode);
            }
            else if (entity.widgetLayout) {
                for (var key in entity.widgetLayout) {
                    var val = entity.widgetLayout[key];
                    if (val[0] == '@') {
                        var string = val.substring(1);
                        params[key] = item[string];
                    }
                    else {
                        params[key] = val;
                    }
                }
                var dataCell = new DataCell({data: params, entity: entity});
                domConstruct.place(dataCell.dataNode, this.rowNode);
            } else {
                var dataCell = new DataCell({data: item[entity.field], entity: entity});
                domConstruct.place(dataCell.dataNode, this.rowNode);
            }
        }
    });
});