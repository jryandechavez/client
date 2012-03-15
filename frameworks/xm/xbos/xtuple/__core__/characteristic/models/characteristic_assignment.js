// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

sc_require('xbos/__generated__/_characteristic_assignment');

/**
  @class

  @extends XM._CharacteristicAssignment
*/
XM.CharacteristicAssignment = XM._CharacteristicAssignment.extend(
  /** @scope XM.CharacteristicAssignment.prototype */ {

  // .................................................
  // CALCULATED PROPERTIES
  //

  value:          SC.Record.attr(String, {
    toType: function(record, key, value) {
      if(value) {
        var type = record.getPath('characteristic.type');
        if(type && type === XM.Characteristic.DATE) {
          value = SC.DateTime.parse(value, '%Y-%m-%d');
        }
      }
      return value;
    },
    fromType: function(record, key, value) {
      if(value) {
        var type = record.getPath('characteristic.type');
        if(type && type === XM.Characteristic.DATE) {
          value = value.toFormattedString('%Y-%m-%d'); }
      }
      return value;
    }
  }),

  // ..........................................................
  // OBSERVERS
  //

  characteristicDidChange: function() {
    var characteristic = this.get('characteristic');

    if(this._oldChar && this._oldChar != characteristic) {
      this.set('value', '');
    };

    this._oldChar = characteristic;

  }.observes('characeteristic'),

  validate: function() {
    var characteristic = this.get('characteristic');
    errors = this.get('validateErrors');
    nameErr = XT.errors.findProperty('code', 'xt1004');

    // Validate Characteristic
    this.updateErrors(nameErr, SC.none(characteristic));

    return errors;
  }.observes('characteristic')

}) ;