// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework
// Copyright: ©2011 OpenMFG LLC, d/b/a xTuple
// ==========================================================================
/*globals global Postbooks XM XT sc_assert */

Postbooks.PAYABLES = SC.State.design({

  initialSubstate: 'DUMMY',

  enterState: function() {
    if (this.__movingUp__) {
      this.__movingUp__ = false;

      // Clear the selection. This is somewhat tricky to find...
      var listView = this.listContainer.get('contentSurface');
      if (listView) listView.set('selection', SC.IndexSet.create().freeze());
      return;
    }

    SC.routes.set('location', 'payables');

    Postbooks.LoadModule("Payables", 'Vendor Voucher Payable PaymentApproval Payment'.w(), this);
  },

  exitState: function() {
    if (this.__movingUp__) return;
    SC.app.get('ui').popSurface();
  },

  // ACTIONS

  showPayables: function() {
    // Do nothing.
  },

  showDashboard: function() {
    this.gotoState('DASHBOARD');
  },

  showVendor: function() {
    this.gotoState('VENDOR');
  },

  showVoucher: function() {
    this.gotoState('VOUCHER');
  },

  showPayable: function() {
    this.gotoState('PAYABLE');
  },

  showPaymentApproval: function() {
    this.gotoState('PAYMENT_APPROVAL');
  },

  showPayment: function() {
    this.gotoState('PAYMENT');
  },

  // SUBSTATES

  "DUMMY":             SC.State, // HACK: Prevent "missing initial state" error message from SC.
  "VENDOR":            SC.State.plugin('Postbooks.VENDOR'),
  "VOUCHER":           SC.State.plugin('Postbooks.VOUCHER'),
  "PAYABLE":           SC.State.plugin('Postbooks.PAYABLE'),
  "PAYMENT_APPROVAL":  SC.State.plugin('Postbooks.PAYMENT_APPROVAL'),
  "PAYMENT":           SC.State.plugin('Postbooks.PAYMENT')


});