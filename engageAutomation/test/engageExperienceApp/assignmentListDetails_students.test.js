"use strict";
var assignmentListDetailsPage_student = require('../../pages/engageExperienceApp/assignmentListDetailsPage_student.page.js');
var appShell = require('../../pages/engageExperienceApp/appShell.page');
const { confirmPassword_input } = require('../../pages/engageExperienceApp/settings.page.js');
var sts;

module.exports = {

   //Validate the blank Due assignment page
   ENG_ASSLISTDETAILS_STU_TC_1: function (testdata) {
      sts = assignmentListDetailsPage_student.getData_assignmentListPage()
      assertion.assertEqual(sts.due_noAssignmentTitle, testdata.due_noAssignmentTitle, "due_noAssignmentTitle Label status mismatch");
      assertion.assertEqual(sts.due_noAssignmentSubTitle, testdata.due_noAssignmentSubTitle, "due_noAssignmentSubTitle Label is avialable");

   },

   //Validate the blank Upcoming assignment page
   ENG_ASSLISTDETAILS_STU_TC_2: function (testdata) {
      sts = assignmentListDetailsPage_student.getData_assignmentListPage()
      assertion.assertEqual(sts.upcoming_noAssignmentTitle, testdata.upcoming_noAssignmentTitle, "upcoming_noAssignmentTitle Label status mismatch");
      assertion.assertEqual(sts.upcoming_noAssignmentSubTitle, testdata.upcoming_noAssignmentSubTitle, "upcoming_noAssignmentSubTitle Label is avialable");
   },

   //Validate the blank Completed assignment page
   ENG_ASSLISTDETAILS_STU_TC_3: function (testdata) {
      sts = assignmentListDetailsPage_student.getData_assignmentListPage()
      assertion.assertEqual(sts.completed_noAssignmentTitle, testdata.completed_noAssignmentTitle, "completed_noAssignmentTitle Label status mismatch");
      assertion.assertEqual(sts.completed_noAssignmentSubTitle, testdata.completed_noAssignmentSubTitle, "completed_noAssignmentSubTitle Label is avialable");
   },

   //Validate the click on upcoming assignment
   ENG_ASSLISTDETAILS_TC_1: function (testdata) {
      sts = assignmentListDetailsPage.click_upcoming_lbl();
      assertion.assertEqual(sts, true, "Select tab error");
      sts = appShell.getTabsListData();
      assertion.assertEqual(sts.selected.includes(testdata.tabList[1]), true, "Selected tab mismatch");
   },

   //Validate the click on past assignment
   ENG_ASSLISTDETAILS_TC_2: function (testdata) {
      sts = assignmentListDetailsPage.click_past_lbl();
      assertion.assertEqual(sts, true, "Select tab error");
      sts = appShell.getTabsListData();
      assertion.assertEqual(sts.selected.includes(testdata.tabList[2]), true, "Selected tab mismatch");
   },

   //Validate the click on in-progress assignment
   ENG_ASSLISTDETAILS_TC_3: function (testdata) {
      sts = assignmentListDetailsPage.click_inProgress_lbl();
      assertion.assertEqual(sts, true, "Select tab error");
      sts = appShell.getTabsListData();
      assertion.assertEqual(sts.selected.includes(testdata.tabList[0]), true, "Selected tab mismatch");
   },



   //Validate the content of assignment list details page
   ENG_ASSLISTDETAILS_TC_7: function (testdata) {
      sts = assignmentListDetailsPage.getData_assignmentListPage()
      assertion.assertEqual(sts.Assignment_title, testdata.Assignment_title, "Assignment_title status mismatch");
      assertion.assertEqual(sts.Assignment_subtitle, testdata.Assignment_subtitle, "Assignment_subtitle Label status mismatch");
      assertion.assertEqual(sts.addNew_btn, testdata.addNew_btn, "addNew_btn Label is avialable");
      assertion.assertEqual(sts.inProgress_lbl, testdata.inProgress_lbl, "inProgress_lbl status mismatch");
      assertion.assertEqual(sts.upcoming_lbl, testdata.upcoming_lbl, "upcoming_lbl status mismatch");
      assertion.assertEqual(sts.past_lbl, testdata.past_lbl, "past_lbl Label status mismatch");
   },

   //validate the details of assignment card
   ENG_ASSLISTDETAILS_TC_8: function (testdata) {
      sts = assignmentListDetailsPage.getData_assignmentCard(testdata)
      assertion.assertEqual(sts[0].assignmentName, testdata, "Assignment name is mismatch");
   },

   ENG_ASSLISTDETAILS_TC_9: function (testdata) {
      sts = assignmentListDetailsPage.click_editAssignment_btn(testdata)
      assertion.assertEqual(sts.pageStatus, true, "Edit Assignment page status mismatch");
   },

   ENG_ASSLISTDETAILS_TC_10: function (testdata) {
      sts = assignmentListDetailsPage.click_cloneAssignment_btn(testdata)
      assertion.assertEqual(sts.pageStatus, true, "Create Assignment page status mismatch");
   },

   ENG_ASSLISTDETAILS_TC_11: function (testdata) {
      sts = assignmentListDetailsPage.click_deleteAssignment_btn(testdata)
      //ENG_ASSDETAILS_TC_3
      assertion.assertEqual(sts.deletedialogueHeader, testdata.deletedialogueHeader, "deletedialogueHeader is mismatch");
      assertion.assertEqual(sts.cancel_btn, testdata.cancel_btn, "cancel_btn is  mismatch");
      assertion.assertEqual(sts.delete_btn, testdata.delete_btn, "delete_btn is  mismatch");
   },

   ENG_ASSLISTDETAILS_TC_12: function (testdata) {
      sts = assignmentListDetailsPage.click_viewProgress_btn(testdata)
      assertion.assertEqual(sts.pageStatus, true, "Assignment Details page status mismatch");
   },

}