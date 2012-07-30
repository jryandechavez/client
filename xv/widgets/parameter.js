/*jshint indent:2, curly:true eqeqeq:true, immed:true, latedef:true, 
newcap:true, noarg:true, regexp:true, undef:true, trailing:true
white:true*/
/*global enyo:true, XT:true, _:true, console:true */

(function () {
  
  enyo.kind({
    name: "XV.FancyInput",
    published: {
      value: ""
    },
    components: [
      {kind: "onyx.InputDecorator", components: [
        {kind: "onyx.Input", onchange: "inputChanged"}
      ]}
    ],
    getValue: function () {
      return this.$.input.getValue();
    },
    valueChanged: function () {
      this.$.input.setValue(this.value);
    }
  });

  enyo.kind({
    name: "XV.ParameterItem",
    classes: "parameter-item",
    published: {
      value: "",
      label: "",
      attr: "",
      operator: "MATCHES"
    },
    components: [
      {name: "label", kind: "Control", classes: 'parameter-label'},
      {name: "input", classes: "parameter-item-input"}
    ],
    defaultKind: "XV.FancyInput",
    create: function () {
      this.inherited(arguments);
      this.valueChanged();
      this.labelChanged();
    },
    attrChanged: function () {
      this.labelChanged();
    },
    labelChanged: function () {
      this.$.label.setContent(this.label || ("_" + this.getAttr()).loc());
    },
    getParameter: function () {
      var param;
      if (this.getValue()) {
        param = {
          attribute: this.getAttr(),
          operator: this.getOperator(),
          value: this.getValue()
        };
      }
      return param;
    },
    getValue: function () {
      return this.$.input.getValue();
    },
    valueChanged: function () {
      this.$.input.setValue(this.value);
    }
  });
  
  enyo.kind({
    name: "XV.ParameterWidget",
    kind: "FittableRows",
    classes: "enyo-fit",
    components: [
      {kind: "XV.ParameterItem", attr: "isActive",
        label: "_showInactive".loc(), defaultKind: "onyx.Checkbox",
        getParameter: function () {
          var param;
          if (!this.getValue()) {
            param = {
              attribute: this.getAttr(),
              operator: '=',
              value: true
            };
          }
          return param;
        }
      },
      {kind: "XV.ParameterItem", attr: "name"},
      {kind: "XV.ParameterItem", attr: "city"},
      {kind: "XV.ParameterItem", attr: "state"}
    ],
    getParameters: function () {
      var i,
        param,
        params = [];
      for (i = 0; i < this.children.length; i++) {
        param = this.children[i].getParameter();
        if (param) { params.push(param); }
      }
      return params;
    }
  });

}());