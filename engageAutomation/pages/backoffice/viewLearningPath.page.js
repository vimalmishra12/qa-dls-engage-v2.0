"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js');
var selectorFile = jsonParserUtil.jsonParser(selectorDir);

module.exports = {

    folderList: selectorFile.viewLearningPathPage.folderList,
    activityList: selectorFile.viewLearningPathPage.activityList,
    addFolderBtn: selectorFile.viewLearningPathPage.addFolderBtn,
    addActivityBtn: selectorFile.viewLearningPathPage.addActivityBtn,
    loadingContainer: selectorFile.common.loadingContainer,
    dialogContent: selectorFile.common.dialogContent,
    deleteComponentBtn: selectorFile.viewLearningPathPage.deleteComponentBtn,
    activityTypeList: selectorFile.viewLearningPathPage.activityTypeList,
    proceedBtn: selectorFile.common.proceedBtn,
    activityMenuBtn: selectorFile.viewLearningPathPage.activityMenuBtn,
    activityMenuDeleteBtn: selectorFile.viewLearningPathPage.activityMenuDeleteBtn,
    emptyStateBtn: selectorFile.common.emptyStateBtn,
    deleteItemBtn: selectorFile.viewLearningPathPage.deleteItemBtn,
    itemCheckboxes: selectorFile.viewLearningPathPage.itemCheckboxes,

    isInitialized: function () {
        logger.logInto(stackTrace.get());
        //action.waitForDocumentLoad();
        action.waitForDisplayed(this.loadingContainer);
        action.waitForDisplayed(this.loadingContainer, undefined, true);
        let res = action.waitForDisplayed(this.deleteComponentBtn);
        return res;
    },

    click_AddFolder_Button: function () {
        logger.logInto(stackTrace.get());
        let res;
        if (action.isClickable(this.emptyStateBtn)) {
            res = action.click(this.emptyStateBtn);
        }
        else {
            res = action.click(this.addFolderBtn);
        }
        if (res == true) {
            res = require('./addFolder.page.js').isInitialized();
            browser.pause(5000);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_AddActivity_Button: function () {
        logger.logInto(stackTrace.get());
        let res;
        if (action.isClickable(this.emptyStateBtn)) {
            res = action.click(this.emptyStateBtn);
        }
        else {
            res = action.click(this.addActivityBtn);
        }
        if (res == true) {
            res = action.waitForDisplayed(this.proceedBtn);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Folder: function (name) {
        logger.logInto(stackTrace.get());
        let res = null;
        let i, list;
        list = action.findElements(this.folderList);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == name) {
                res = action.click(list[i]);
                if (res == true) {
                    res = action.waitForDisplayed(this.loadingContainer, undefined, true);
                    browser.pause(5000);
                }
                break;
            }
            res = "folder \"" + name + "\" not found";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Activity: function (name) {
        logger.logInto(stackTrace.get());
        let res = null;
        let i, list;
        list = action.findElements(this.activityList);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]).includes(name)) {
                browser.pause(10000);
                res = action.click(list[i]);
                if (res == true) {
                    res = action.waitForDisplayed(this.loadingContainer, undefined, true);
                    browser.pause(5000)
                }
                break;
            }
            res = "activity \"" + name + "\" not found";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_ActivityType_and_Proceed: function (type) {
        logger.logInto(stackTrace.get());
        let res = null;
        let i, list;
        list = action.findElements(this.activityTypeList);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == type) {
                res = action.click(list[i]);
                if (res == true) {
                    res = action.click(this.proceedBtn);
                    if (res == true) {
                        res = require('./addActivity.page.js').isInitialized();
                        browser.pause(5000);
                    }
                }
                break;
            }
            res = "activity type \"" + type + "\" not found";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_DeleteComponent_Button: function () {
        logger.logInto(stackTrace.get());
        let res = action.click(this.deleteComponentBtn);
        if (res == true) {
            action.waitForDisplayed(this.dialogContent);
            res = action.getText(this.dialogContent);
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    click_Delete_Button_in_ActivityMenu: function () {
        logger.logInto(stackTrace.get());
        let res = action.click(this.activityMenuBtn);
        if (res == true) {
            res = action.click(this.activityMenuDeleteBtn);
            if (res == true) {
                action.waitForDisplayed(this.dialogContent);
                res = action.getText(this.dialogContent);
            }
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    },

    select_Item_and_Click_Delete: function (item) {
        logger.logInto(stackTrace.get());
        let res = null;
        let i, list, checkboxes;
        list = action.findElements(this.folderList);
        checkboxes = action.findElements(this.itemCheckboxes);
        for (i = 0; i < list.length; i++) {
            if (action.getText(list[i]) == item) {
                res = action.click(checkboxes[i]);
                if (res == true) {
                    res = action.click(this.deleteItemBtn);
                    if (res == true) {
                        action.waitForDisplayed(this.dialogContent);
                        res = action.getText(this.dialogContent);
                    }
                }
                break;
            }
            res = "Item \"" + item + "\" not found";
        }
        logger.logInto(stackTrace.get(), res);
        return res;
    }
}