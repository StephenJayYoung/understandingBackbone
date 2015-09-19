
// This view displays a single task, showing its title, description, status,
// creator, and assignee (if any). Each TaskView should include one or more
// controls (e.g. a select or set of buttons) to change its state.Each task
// view will be associated with exactly one task model, although a model may
// have more than one view instance.
var TaskView = Backbone.View.extend({
  initialize: function(){
    alert("the TaskView.");
  }
});
var taskView = new TaskView();


//You'll need a view with input fields for the user to fill in when creating a new task.
// It should probably have both a create and cancel button. The location and format of
// the view is up to you.
var CreateTaskView = Backbone.View.extend({
  initialize: function(){
    alert("the TaskView.");
  }
});
var createTaskView = new CreateTaskView();


//This view should include multiple TaskViews, each showing one of the unassigned tasks
//reated by any user. The view should include a "Create New Task" button which triggers
// a CreateTaskView, allowing the user to create a new task.
var UnassignedTaskView = Backbone.View.extend({
  initialize: function(){
    alert("the unassigned task View.");
  }
});
var unassignedTaskView = new UnassignedTaskView();

// This view should include multiple TaskViews, one for each task for which the user
//  is either the creator or assignee.
var UserTaskViews = Backbone.View.extend({
  initialize: function(){
    alert("the user task View.");
  }
});
var userTaskViews = new UserTaskViews();

//This view contains everything the user sees once logged in. It should include 
//both an UnassignedTasksView for claiming or creating new tasks and a UserTasksView 
//for tracking the status of all tasks associated with the user.
//It should also include a "logout" button which replaces the UserView with the 
//LoginView
//
var UserView = Backbone.View.extend({
  initialize: function(){
    alert("the user view.");
  }
});
var userView = new UserView();

//This is the initial view shown when launching the app 
//(i.e. opening the html file in a browser). It should let the user either 
//log in by choosing from a list of known user names, or create a new user name. 
//Feel free to add some form of user authentication later, but keep things simple for now.
//
var LoginView = Backbone.View.extend({
  initialize: function(){
    alert("the loginView view.");
  }
});
var loginView = new LoginView();
