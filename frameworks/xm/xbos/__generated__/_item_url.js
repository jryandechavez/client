// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.ItemUrl
  @class

  This code is automatically generated and will be over-written. Do not edit directly.

  @extends XM.Record
*/
XM._ItemUrl = XM.Record.extend(
  /** @scope XM.ItemUrl.prototype */ {
  
  className: 'XM.ItemUrl',

  nestedRecordNamespace: XM,

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": true,
      "read": true,
      "update": false,
      "delete": true
    }
  },

  //..................................................
  // ATTRIBUTES
  //
  
  /**
    @type Number
  */
  guid: SC.Record.attr(Number),

  /**
    @type XM.Item
  */
  source: SC.Record.toOne('XM.Item'),

  /**
    @type XM.Url
  */
  url: SC.Record.toOne('XM.Url', {
    isNested: true
  }),

  /**
    @type String
  */
  purpose: SC.Record.attr(String)

});