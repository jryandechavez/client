// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

/**
  @scope XM.InvoiceLine
  @mixin

  This code is automatically generated and will be over-written. Do not edit directly.
*/
XM._InvoiceLine = {
  /** @scope XM.InvoiceLine.prototype */
  
  className: 'XM.InvoiceLine',

  nestedRecordNamespace: XM,

  // .................................................
  // PRIVILEGES
  //

  privileges: {
    "all": {
      "create": true,
      "read": true,
      "update": true,
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
    @type XM.Invoice
  */
  invoice: SC.Record.toOne('XM.Invoice', {
    isRequired: true,
    label: '_invoice'.loc()
  }),

  /**
    @type Number
  */
  lineNumber: SC.Record.attr(Number, {
    isRequired: true,
    label: '_lineNumber'.loc()
  }),

  /**
    @type XM.ItemInfo
  */
  item: SC.Record.toOne('XM.ItemInfo', {
    isNested: true,
    label: '_item'.loc()
  }),

  /**
    @type String
  */
  itemNumber: SC.Record.attr(String, {
    label: '_itemNumber'.loc()
  }),

  /**
    @type String
  */
  description: SC.Record.attr(String, {
    label: '_description'.loc()
  }),

  /**
    @type XM.SalesCategory
  */
  salesCategory: SC.Record.toOne('XM.SalesCategory', {
    defaultValue: -1,
    label: '_salesCategory'.loc()
  }),

  /**
    @type String
  */
  customerPartNumber: SC.Record.attr(String, {
    label: '_customerPartNumber'.loc()
  }),

  /**
    @type Quantity
  */
  ordered: SC.Record.attr(Quantity, {
    isRequired: true,
    label: '_ordered'.loc()
  }),

  /**
    @type Quantity
  */
  billed: SC.Record.attr(Quantity, {
    isRequired: true,
    label: '_billed'.loc()
  }),

  /**
    @type XM.Unit
  */
  quantityUnit: SC.Record.toOne('XM.Unit', {
    label: '_quantityUnit'.loc()
  }),

  /**
    @type UnitRatio
  */
  quantityUnitRatio: SC.Record.attr(UnitRatio, {
    isRequired: true,
    defaultValue: 1,
    label: '_quantityUnitRatio'.loc()
  }),

  /**
    @type SalesPrice
  */
  price: SC.Record.attr(SalesPrice, {
    isRequired: true,
    label: '_price'.loc()
  }),

  /**
    @type XM.Unit
  */
  priceUnit: SC.Record.toOne('XM.Unit', {
    label: '_priceUnit'.loc()
  }),

  /**
    @type UnitRatio
  */
  priceUnitRatio: SC.Record.attr(UnitRatio, {
    isRequired: true,
    defaultValue: 1,
    label: '_priceUnitRatio'.loc()
  }),

  /**
    @type SalesPrice
  */
  customerPrice: SC.Record.attr(SalesPrice, {
    label: '_customerPrice'.loc()
  }),

  /**
    @type XM.TaxType
  */
  taxType: SC.Record.toOne('XM.TaxType', {
    label: '_taxType'.loc()
  }),

  /**
    @type String
  */
  notes: SC.Record.attr(String, {
    label: '_notes'.loc()
  }),

  /**
    @type XM.InvoiceLineTax
  */
  taxes: SC.Record.toMany('XM.InvoiceLineTax', {
    isNested: true,
    inverse: 'invoiceLine',
    label: '_taxes'.loc()
  })

};