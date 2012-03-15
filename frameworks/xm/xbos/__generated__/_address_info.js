// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.AddressInfo
  @class

  This code is automatically generated and will be over-written. Do not edit directly.

  @extends XM.Record
*/
XM._AddressInfo = XM.Record.extend(
  /** @scope XM.AddressInfo.prototype */ {
  
  className: 'XM.AddressInfo',

  

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": false,
      "read": true,
      "update": false,
      "delete": false
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
    @type String
  */
  line1: SC.Record.attr(String),

  /**
    @type String
  */
  line2: SC.Record.attr(String),

  /**
    @type String
  */
  line3: SC.Record.attr(String),

  /**
    @type String
  */
  city: SC.Record.attr(String),

  /**
    @type String
  */
  state: SC.Record.attr(String),

  /**
    @type String
  */
  postalCode: SC.Record.attr(String),

  /**
    @type String
  */
  country: SC.Record.attr(String)

});