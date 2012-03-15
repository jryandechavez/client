// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.UserAccountRolePrivilegeAssignment
  @class

  This code is automatically generated and will be over-written. Do not edit directly.

  @extends XM.Record
*/
XM._UserAccountRolePrivilegeAssignment = XM.Record.extend(
  /** @scope XM.UserAccountRolePrivilegeAssignment.prototype */ {
  
  className: 'XM.UserAccountRolePrivilegeAssignment',

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
    @type XM.UserAccountRole
  */
  userAccountRole: SC.Record.toOne('XM.UserAccountRole'),

  /**
    @type XM.Privilege
  */
  privilege: SC.Record.toOne('XM.Privilege', {
    isNested: true
  })

});