// ==========================================================================
// Project:   xTuple Postbooks - Business Management System Framework        
// Copyright: ¬©2012 OpenMFG LLC, d/b/a xTuple                             
// ==========================================================================

/*globals XM */

sc_require('mixins/_project');


/**
  @class

  @extends XM.Document
  @extends XM.Documents
*/
XM.Project = XM.Document.extend(XM._Project, XM.Documents, 
/** @scope XM.Project.prototype */ {	

  /**
    @type Quantity
  */
  budgetedHoursTotal: 0,

  /**
    @type Quantity
  */ 
  actualHoursTotal: 0,

  /**
    @type Money
  */
  budgetedExpensesTotal: 0,

  /**  
    @type Money
  */
  actualExpensesTotal: 0,

  // .................................................
  // CALCULATED PROPERTIES
  //

  number: SC.Record.attr(Number, {
    toType: function(record, key, value) {
      if(value) return value.toUpperCase();
    }
  }),

  /**
    @type Quantity
  */
  balanceHoursTotal: function() {
    var hours = this.get('budgetedHoursTotal') - this.get('actualHoursTotal');
    return hours.toQuantity();
  }.property('budgetedHoursTotal','actualHoursTotal'),

  /**
    @type Money
  */
  balanceExpensesTotal: function() {
    var expenses = this.get('budgetedExpensesTotal') - this.get('actualExpensesTotal');
    return expenses.toMoney();
  }.property('budgetedExpensesTotal','actualExpensesTotal'),

  copy: function() { 
    return XM.Project.copy(this,number,offset) 
  },

  //..................................................
  // METHODS
  //

  updateBudgetedHours: function() {
    var tasks = this.get('tasks'),
        budgetedHours = 0;
    for (var i = 0; i < tasks.get('length'); i++) {
      var task = tasks.objectAt(i),
          status = task.get('status'),
          hours = status & SC.Record.DESTROYED ? 0 : task.get('budgetedHours');
      budgetedHours = budgetedHours + hours;
    }
    this.setIfChanged('budgetedHoursTotal', budgetedHours.toQuantity());
  },	

  updateActualHours: function() {
    var tasks = this.get('tasks'),
        actualHours = 0;
    for (var i = 0; i < tasks.get('length'); i++) {
      var task = tasks.objectAt(i),
          status = task.get('status'),
          hours = status & SC.Record.DESTROYED ? 0 : task.get('actualHours');
      actualHours = actualHours + hours;
    }
    this.setIfChanged('actualHoursTotal', actualHours.toQuantity());
  },

  updateBudgetedExpenses: function() {
    var tasks = this.get('tasks'),
        budgetedExpenses = 0;
    for (var i = 0; i < tasks.get('length'); i++) {
      var task = tasks.objectAt(i),
          status = task.get('status'),
          expenses = status & SC.Record.DESTROYED ? 0 : task.get('budgetedExpenses');
      budgetedExpenses = budgetedExpenses + expenses;
    }
    this.setIfChanged('budgetedExpensesTotal', budgetedExpenses.toMoney());
  },	

  updateActualExpenses: function() {
    var tasks = this.get('tasks'),
        actualExpenses = 0;
    for (var i = 0; i < tasks.get('length'); i++) {
      var task = tasks.objectAt(i),
          status = task.get('status'),
          expenses = status & SC.Record.DESTROYED ? 0 : task.get('actualExpenses');
      actualExpenses = actualExpenses + expenses;
    }
    this.setIfChanged('actualExpensesTotal', actualExpenses.toMoney());
  },	

  //..................................................
  // OBSERVERS
  //

  statusDidChange: function(){
    var status = this.get('status');
    if (status === SC.Record.READY_CLEAN) {
      this.number.set('isEditable', false);
      this.updateActualHours(),
      this.updateBudgetedHours();
      this.updateActualExpenses(),
      this.updateBudgetedExpenses();
    }
  }.observes('status'),

  projectStatusDidChange: function() {
    var status = this.get('status'),
        projectStatus = this.get('projectStatus');
    if (this.isDirty()) {
      if (projectStatus === XM.Project.IN_PROCESS &&
          !this.get('assignDate')) {
        this.set('assignDate', SC.DateTime.create());
      } else if (projectStatus === XM.Project.COMPLETED &&
                 !this.get('completeDate')) {
        this.set('completeDate', SC.DateTime.create());
      }
    }
  }.observes('projectStatus')

});

/**
A utility function to copy an project.

@param {XM.Project} project
@return {XM.Project} copy of the project
*/
XM.Project.copy = function(project,number,offset) {
  if (!SC.kindOf(project, XM.Project)) return NO;

  var store = project.get('store'),
  hash = project.get('attributes');

  for (var i = 0; i < hash.tasks.length; i++) { 
    if (offset > 0) {
      hash.tasks[i].dueDate = hash.tasks[i].dueDate.advance({day: + offset});
    }
    hash.tasks[i].projectTaskStatus = 'P';
    delete hash.tasks[i].assignDate;
  } 
  hash.projectStatus = 'P';
  hash.number = number;
  if (offset > 0) {
    hash.dueDate = hash.dueDate.advance({day: + offset});
  }
  delete hash.startDate;
  delete hash.guid;
  return store.createRecord(XM.Project, hash).normalize();
}

XM.Project.mixin( /** @scope XM.Project */ {

/**
  Concept status for project.
  
  @static
  @constant
  @type String
  @default P
*/
  CONCEPT: 'P',

/**
  In-Process status for project.
  
  @static
  @constant
  @type String
  @default O
*/
  IN_PROCESS: 'O',

/**
  Completed status for project.
  @static
  @constant
  @type String
  @default C
*/
  COMPLETED: 'C'
  
});