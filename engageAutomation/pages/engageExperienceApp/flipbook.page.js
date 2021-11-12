"use strict";
var action = require('../../core/actionLibrary/baseActionLibrary.js')
var selectorFile = jsonParserUtil.jsonParser(selectorDir)
var appShellPage = require('./appShell.page.js')

module.exports = {

  readerContainerWrapper: selectorFile.css.ComproEngage.flipbook.page.readerContainerWrapper,
  pageLayoutDouble: selectorFile.css.ComproEngage.flipbook.page.pageLayoutDouble,
  notesDockContainer: selectorFile.css.ComproEngage.flipbook.page.notesDockContainer,
  notesBtn: selectorFile.css.ComproEngage.flipbook.page.notesBtn,
  annotationsBtn: selectorFile.css.ComproEngage.flipbook.page.annotationsBtn,
  zoomInBtn: selectorFile.css.ComproEngage.flipbook.page.zoomInBtn,
  zoomOutBtn: selectorFile.css.ComproEngage.flipbook.page.zoomOutBtn,
  fitToScreenBtn: selectorFile.css.ComproEngage.flipbook.page.fitToScreenBtn,
  doublePageBtn: selectorFile.css.ComproEngage.flipbook.page.doublePageBtn,
  singlePageBtn: selectorFile.css.ComproEngage.flipbook.page.singlePageBtn,
  fullScreenBtn: selectorFile.css.ComproEngage.flipbook.page.fullScreenBtn,
  bookmarkBtn: selectorFile.css.ComproEngage.flipbook.page.bookmarkBtn,
  TOCBtn: selectorFile.css.ComproEngage.flipbook.page.TOCBtn,
  previousBtn: selectorFile.css.ComproEngage.flipbook.page.previousBtn,
  nextBtn: selectorFile.css.ComproEngage.flipbook.page.nextBtn,
  myNotesTitle: selectorFile.css.ComproEngage.flipbook.page.myNotesTitle,
  notesDockBtn: selectorFile.css.ComproEngage.flipbook.page.notesDockBtn,
  notesUndockBtn: selectorFile.css.ComproEngage.flipbook.page.notesUndockBtn,
  notesCloseBtn: selectorFile.css.ComproEngage.flipbook.page.notesCloseBtn,
  addNoteBtn: selectorFile.css.ComproEngage.flipbook.page.addNoteBtn,
  noNoteIcon: selectorFile.css.ComproEngage.flipbook.page.noNoteIcon,
  noNoteText: selectorFile.css.ComproEngage.flipbook.page.noNoteText,
  noteListItemLabel: selectorFile.css.ComproEngage.flipbook.page.noteListItemLabel,
  noteListItemText: selectorFile.css.ComproEngage.flipbook.page.noteListItemText,
  noteListDeleteBtn: selectorFile.css.ComproEngage.flipbook.page.noteListDeleteBtn,
  noteListEditBtn: selectorFile.css.ComproEngage.flipbook.page.noteListEditBtn,
  addNotesTitle: selectorFile.css.ComproEngage.flipbook.page.addNotesTitle,
  notesPageLabel: selectorFile.css.ComproEngage.flipbook.page.notesPageLabel,
  notesPageValueSingle: selectorFile.css.ComproEngage.flipbook.page.notesPageValueSingle,
  notesPageValueLeft: selectorFile.css.ComproEngage.flipbook.page.notesPageValueLeft,
  notesPageValueRight: selectorFile.css.ComproEngage.flipbook.page.notesPageValueRight,
  notesTextArea: selectorFile.css.ComproEngage.flipbook.page.notesTextArea,
  notesCancelBtn: selectorFile.css.ComproEngage.flipbook.page.notesCancelBtn,
  notesSaveBtn: selectorFile.css.ComproEngage.flipbook.page.notesSaveBtn,
  deleteNoteTitle: selectorFile.css.ComproEngage.flipbook.page.deleteNoteTitle,
  deleteNoteSubTitle: selectorFile.css.ComproEngage.flipbook.page.deleteNoteSubTitle,
  deleteNoteCancelBtn: selectorFile.css.ComproEngage.flipbook.page.deleteNoteCancelBtn,
  deleteNoteDeleteBtn: selectorFile.css.ComproEngage.flipbook.page.deleteNoteDeleteBtn,
  myBookmarksTitle: selectorFile.css.ComproEngage.flipbook.page.myBookmarksTitle,
  bookmarkCloseBtn: selectorFile.css.ComproEngage.flipbook.page.bookmarkCloseBtn,
  noBookmarkIcon: selectorFile.css.ComproEngage.flipbook.page.noBookmarkIcon,
  noBookmarkText: selectorFile.css.ComproEngage.flipbook.page.noBookmarkText,
  addBookmarkBtn: selectorFile.css.ComproEngage.flipbook.page.addBookmarkBtn,
  bookmarkListItemLabel: selectorFile.css.ComproEngage.flipbook.page.bookmarkListItemLabel,
  bookmarkListItemName: selectorFile.css.ComproEngage.flipbook.page.bookmarkListItemName,
  bookmarkListDeleteBtn: selectorFile.css.ComproEngage.flipbook.page.bookmarkListDeleteBtn,
  bookmarkListEditBtn: selectorFile.css.ComproEngage.flipbook.page.bookmarkListEditBtn,
  bookmarkNameLabel: selectorFile.css.ComproEngage.flipbook.page.bookmarkNameLabel,
  bookmarkPageValueSingle: selectorFile.css.ComproEngage.flipbook.page.bookmarkPageValueSingle,
  bookmarkPageValueLeft: selectorFile.css.ComproEngage.flipbook.page.bookmarkPageValueLeft,
  bookmarkPageValueRight: selectorFile.css.ComproEngage.flipbook.page.bookmarkPageValueRight,
  bookmarkTextArea: selectorFile.css.ComproEngage.flipbook.page.bookmarkTextArea,
  bookmarkCancelBtn: selectorFile.css.ComproEngage.flipbook.page.bookmarkCancelBtn,
  bookmarkSaveBtn: selectorFile.css.ComproEngage.flipbook.page.bookmarkSaveBtn,
  flipbookTitle: selectorFile.css.ComproEngage.flipbook.page.flipbookTitle,
  tableOfContentTitle: selectorFile.css.ComproEngage.flipbook.page.tableOfContentTitle,
  jumpToPageInput: selectorFile.css.ComproEngage.flipbook.page.jumpToPageInput,
  jumpToPageBtn: selectorFile.css.ComproEngage.flipbook.page.jumpToPageBtn,
  resourceTitle: selectorFile.css.ComproEngage.flipbook.page.resourceTitle,

  isInitialized: function () {
    var res;
    logger.logInto(stackTrace.get());
    action.waitForDocumentLoad();
    res = {
      pageStatus: action.waitForDisplayed(this.readerContainerWrapper),
      appShellPage: appShellPage.isInitialized()
    };
    return res;
  },

  getData_flipbookPage: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      pageLayoutDouble: (action.getElementCount(this.pageLayoutDouble) > 0) ? action.waitForDisplayed(this.pageLayoutDouble) : null,
      notesBtn: (action.getElementCount(this.notesBtn) > 0) ? action.getText(this.notesBtn) : null,
      annotationsBtn: (action.getElementCount(this.annotationsBtn) > 0) ? action.getText(this.annotationsBtn) : null,
      zoomInBtn: (action.getElementCount(this.zoomInBtn) > 0) ? action.getText(this.zoomInBtn) : null,
      zoomOutBtn: (action.getElementCount(this.zoomOutBtn) > 0) ? action.getText(this.zoomOutBtn) : null,
      fitToScreenBtn: (action.getElementCount(this.fitToScreenBtn) > 0) ? action.getText(this.fitToScreenBtn) : null,
      doublePageBtn: (action.getElementCount(this.doublePageBtn) > 0) ? action.getText(this.doublePageBtn) : null,
      singlePageBtn: (action.getElementCount(this.singlePageBtn) > 0) ? action.getText(this.singlePageBtn) : null,
      fullScreenBtn: (action.getElementCount(this.fullScreenBtn) > 0) ? action.getText(this.fullScreenBtn) : null,
      bookmarkBtn: (action.getElementCount(this.bookmarkBtn) > 0) ? action.getText(this.bookmarkBtn) : null,
      TOCBtn: (action.getElementCount(this.TOCBtn) > 0) ? action.getText(this.TOCBtn) : null,
      previousBtn: (action.getElementCount(this.previousBtn) > 0) ? action.getText(this.previousBtn) : null,
      nextBtn: (action.getElementCount(this.nextBtn) > 0) ? action.getText(this.nextBtn) : null,
    }
    return obj;
  },

  getData_notesModal: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      myNotesTitle: (action.getElementCount(this.myNotesTitle) > 0) ? action.getText(this.myNotesTitle) : null,
      notesDockBtn: (action.getElementCount(this.notesDockBtn) > 0) ? action.getText(this.notesDockBtn) : null,
      notesUndockBtn: (action.getElementCount(this.notesUndockBtn) > 0) ? action.getText(this.notesUndockBtn) : null,
      notesCloseBtn: (action.getElementCount(this.notesCloseBtn) > 0) ? action.getText(this.notesCloseBtn) : null,
      addNoteBtn: (action.getElementCount(this.addNoteBtn) > 0) ? action.getText(this.addNoteBtn) : null,
      noNoteIcon: (action.getElementCount(this.noNoteIcon) > 0) ? action.waitForExist(this.noNoteIcon) : false,
      noNoteText: (action.getElementCount(this.noNoteText) > 0) ? action.getText(this.noNoteText) : null,
    }
    return obj;
  },

  getData_notesList: function () {
    logger.logInto(stackTrace.get());
    var obj;
    action.waitForDisplayed(this.noteListItemText);
    var list = action.findElements(this.noteListItemText);
    for (var i = 0; i <= list.length; i++) {
      obj[i] = {
        noteListItemLabel: (action.getElementCount(this.noteListItemLabel + i + "]") > 0) ? action.getText(this.noteListItemLabel + i + "]") : null,
        noteListItemText: (action.getElementCount(this.noteListItemText + i + "]") > 0) ? action.getText(this.noteListItemText + i + "]") : null,
        noteListDeleteBtn: (action.getElementCount(this.noteListDeleteBtn + i + "]") > 0) ? action.getText(this.noteListDeleteBtn + i + "]") : null,
        noteListEditBtn: (action.getElementCount(this.noteListEditBtn + i + "]") > 0) ? action.getText(this.noteListEditBtn + i + "]") : null,
      }
    }
    return obj;
  },

  getData_addNotes: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      addNotesTitle: (action.getElementCount(this.addNotesTitle) > 0) ? action.getText(this.addNotesTitle) : null,
      notesPageLabel: (action.getElementCount(this.notesPageLabel) > 0) ? action.getText(this.notesPageLabel) : null,
      notesPageValueSingle: (action.getElementCount(this.notesPageValueSingle) > 0) ? action.getText(this.notesPageValueSingle) : null,
      notesPageValueLeft: (action.getElementCount(this.notesPageValueLeft) > 0) ? action.getText(this.notesPageValueLeft) : null,
      notesPageValueRight: (action.getElementCount(this.notesPageValueRight) > 0) ? action.getText(this.notesPageValueRight) : null,
      notesTextArea: (action.getElementCount(this.notesTextArea) > 0) ? action.getText(this.notesTextArea) : null,
      notesCancelBtn: (action.getElementCount(this.notesCancelBtn) > 0) ? action.getText(this.notesCancelBtn) : null,
      notesSaveBtn: (action.getElementCount(this.notesSaveBtn) > 0) ? action.getText(this.notesSaveBtn) : null,
    }
    return obj;
  },

  getData_deleteNotes: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      deleteNoteTitle: (action.getElementCount(this.deleteNoteTitle) > 0) ? action.getText(this.deleteNoteTitle) : null,
      deleteNoteSubTitle: (action.getElementCount(this.deleteNoteSubTitle) > 0) ? action.getText(this.deleteNoteSubTitle) : null,
      deleteNoteCancelBtn: (action.getElementCount(this.deleteNoteCancelBtn) > 0) ? action.getText(this.deleteNoteCancelBtn) : null,
      deleteNoteDeleteBtn: (action.getElementCount(this.deleteNoteDeleteBtn) > 0) ? action.getText(this.deleteNoteDeleteBtn) : null,
    }
    return obj;
  },

  getData_bookmarkModal: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      myBookmarksTitle: (action.getElementCount(this.myBookmarksTitle) > 0) ? action.getText(this.myBookmarksTitle) : null,
      bookmarkCloseBtn: (action.getElementCount(this.bookmarkCloseBtn) > 0) ? action.getText(this.bookmarkCloseBtn) : null,
      noBookmarkIcon: (action.getElementCount(this.noBookmarkIcon) > 0) ? action.waitForExist(this.noBookmarkIcon) : false,
      noBookmarkText: (action.getElementCount(this.noBookmarkText) > 0) ? action.getText(this.noBookmarkText) : null,
      addBookmarkBtn: (action.getElementCount(this.addBookmarkBtn) > 0) ? action.getText(this.addBookmarkBtn) : null,
    }
    return obj;
  },

  getData_bookmarkList: function () {
    logger.logInto(stackTrace.get());
    var obj;
    action.waitForDisplayed(this.bookmarkListItemName);
    var list = action.findElements(this.bookmarkListItemName);
    for (var i = 0; i <= list.length; i++) {
      obj[i] = {
        bookmarkListItemLabel: (action.getElementCount(this.bookmarkListItemLabel + i + "]") > 0) ? action.getText(this.bookmarkListItemLabel + i + "]") : null,
        bookmarkListItemName: (action.getElementCount(this.bookmarkListItemName + i + "]") > 0) ? action.getText(this.bookmarkListItemName + i + "]") : null,
        bookmarkListDeleteBtn: (action.getElementCount(this.bookmarkListDeleteBtn + i + "]") > 0) ? action.getText(this.bookmarkListDeleteBtn + i + "]") : null,
        bookmarkListEditBtn: (action.getElementCount(this.bookmarkListEditBtn + i + "]") > 0) ? action.getText(this.bookmarkListEditBtn + i + "]") : null,
      }
    }
    return obj;
  },

  getData_addBookmark: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      bookmarkNameLabel: (action.getElementCount(this.bookmarkNameLabel) > 0) ? action.getText(this.bookmarkNameLabel) : null,
      bookmarkPageValueSingle: (action.getElementCount(this.bookmarkPageValueSingle) > 0) ? action.getText(this.bookmarkPageValueSingle) : null,
      bookmarkPageValueLeft: (action.getElementCount(this.bookmarkPageValueLeft) > 0) ? action.getText(this.bookmarkPageValueLeft) : null,
      bookmarkPageValueRight: (action.getElementCount(this.bookmarkPageValueRight) > 0) ? action.getText(this.bookmarkPageValueRight) : null,
      bookmarkTextArea: (action.getElementCount(this.bookmarkTextArea) > 0) ? action.getText(this.bookmarkTextArea) : null,
      bookmarkCancelBtn: (action.getElementCount(this.bookmarkCancelBtn) > 0) ? action.getText(this.bookmarkCancelBtn) : null,
      bookmarkSaveBtn: (action.getElementCount(this.bookmarkSaveBtn) > 0) ? action.getText(this.bookmarkSaveBtn) : null,
    }
    return obj;
  },

  getData_flipbookTOC: function () {
    logger.logInto(stackTrace.get());
    var obj;
    obj = {
      flipbookTitle: (action.getElementCount(this.flipbookTitle) > 0) ? action.getText(this.flipbookTitle) : null,
      tableOfContentTitle: (action.getElementCount(this.tableOfContentTitle) > 0) ? action.getText(this.tableOfContentTitle) : null,
      jumpToPageInput: (action.getElementCount(this.jumpToPageInput) > 0) ? action.getText(this.jumpToPageInput) : null,
      jumpToPageBtn: (action.getElementCount(this.jumpToPageBtn) > 0) ? action.getText(this.jumpToPageBtn) : null,
      resourceTitle: this.resourceTitle_Data(),
    }
    return obj;
  },

  resourceTitle_Data: function () {
    logger.logInto(stackTrace.get());
    var i, list;
    var resourceTitle_Arr = [];
    list = action.findElements(this.resourceTitle);
    for (i = 0; i < list.length; i++) {
      resourceTitle_Arr[i] = action.getText(list[i])
    }
    logger.logInto(stackTrace.get(), resourceTitle_Arr);
    return resourceTitle_Arr;
  },

  click_notesBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.notesBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " notesBtn button is clicked");
      res = this.getData_notesModal();
    }
    else {
      logger.logInto(stackTrace.get(), res + " notesBtn button is not clicked", 'error');
    }
    return res;
  },

  click_annotationsBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.annotationsBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " annotationsBtn button is clicked");
      //expected behaviour to be added
    }
    else {
      logger.logInto(stackTrace.get(), res + " annotationsBtn button is not clicked", 'error');
    }
    return res;
  },

  click_zoomInBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.zoomInBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " zoomInBtn button is clicked");
      res = action.getCSSProperty(this.readerContainerWrapper, 'height');
    }
    else {
      logger.logInto(stackTrace.get(), res + " zoomInBtn button is not clicked", 'error');
    }
    return res;
  },

  click_zoomOutBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.zoomOutBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " zoomOutBtn button is clicked");
      res = action.getCSSProperty(this.readerContainerWrapper, 'height');
    }
    else {
      logger.logInto(stackTrace.get(), res + " zoomOutBtn button is not clicked", 'error');
    }
    return res;
  },

  click_fitToScreenBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.fitToScreenBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " fitToScreenBtn button is clicked");
      res = action.getCSSProperty(this.readerContainerWrapper, 'width');
    }
    else {
      logger.logInto(stackTrace.get(), res + " fitToScreenBtn button is not clicked", 'error');
    }
    return res;
  },

  click_doublePageBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.doublePageBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " doublePageBtn button is clicked");
      res = action.isDisplayed(this.pageLayoutDouble);
    }
    else {
      logger.logInto(stackTrace.get(), res + " doublePageBtn button is not clicked", 'error');
    }
    return res;
  },

  click_singlePageBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.singlePageBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " singlePageBtn button is clicked");
      res = action.isDisplayed(this.pageLayoutDouble);
    }
    else {
      logger.logInto(stackTrace.get(), res + " singlePageBtn button is not clicked", 'error');
    }
    return res;
  },

  click_fullScreenBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.fullScreenBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " fullScreenBtn button is clicked");
      res = action.getCSSProperty(this.fullScreenBtn, 'aria-label');
    }
    else {
      logger.logInto(stackTrace.get(), res + " fullScreenBtn button is not clicked", 'error');
    }
    return res;
  },

  click_bookmarkBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookmarkBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookmarkBtn button is clicked");
      res = this.getData_bookmarkModal();
    }
    else {
      logger.logInto(stackTrace.get(), res + " bookmarkBtn button is not clicked", 'error');
    }
    return res;
  },

  click_TOCBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.TOCBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " TOCBtn button is clicked");
      res = this.getData_flipbookTOC();
    }
    else {
      logger.logInto(stackTrace.get(), res + " TOCBtn button is clicked", 'error');
    }
    return res;
  },

  click_previousBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.previousBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " previousBtn button is clicked");
      res = this.getData_flipbookPage();
    }
    else {
      logger.logInto(stackTrace.get(), res + " previousBtn button is not clicked", 'error');
    }
    return res;
  },

  click_nextBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.nextBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " nextBtn button is clicked");
      res = this.getData_flipbookPage();
    }
    else {
      logger.logInto(stackTrace.get(), res + " nextBtn button is not clicked", 'error');
    }
    return res;
  },

  click_notesDockBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.notesDockBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " notesDockBtn button is clicked");
      res = action.waitForDisplayed(this.notesDockContainer); //manually added
    }
    else {
      logger.logInto(stackTrace.get(), res + " notesDockBtn button is not clicked", 'error');
    }
    return res;
  },

  click_notesUndockBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.notesUndockBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " notesUndockBtn button is clicked");
      res = action.waitForDisplayed(this.notesDockContainer, undefined, true);  //manually added
    }
    else {
      logger.logInto(stackTrace.get(), res + " notesUndockBtn button is not clicked", 'error');
    }
    return res;
  },

  click_notesCloseBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.notesCloseBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " notesCloseBtn button is clicked");
      res = action.waitForDisplayed(this.notesCloseBtn, undefined, true);
    }
    else {
      logger.logInto(stackTrace.get(), res + " notesCloseBtn button is not clicked", 'error');
    }
    return res;
  },

  click_addNoteBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.addNoteBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " addNoteBtn button is clicked");
      res = this.getData_addNotes();
    }
    else {
      logger.logInto(stackTrace.get(), res + " addNoteBtn button is not clicked", 'error');
    }
    return res;
  },

  click_noteListDeleteBtn: function (noteListItemTextName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.noteListDeleteBtn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.noteListItemText + i + "]")) == noteListItemTextName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --noteListDeleteBtn clicked");
      res = this.getData_deleteNotes();
    }
    else
      logger.logInto(stackTrace.get(), res + " --noteListDeleteBtn NOT clicked", "error")
    return res;
  },

  click_noteListEditBtn: function (noteListItemTextName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.noteListEditBtn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.noteListItemText + i + "]")) == noteListItemTextName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --noteListEditBtn clicked");
      res = this.getData_addNotes();
    }
    else
      logger.logInto(stackTrace.get(), res + " --noteListEditBtn NOT clicked", "error")
    return res;
  },

  click_notesPageValueLeft: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.notesPageValueLeft);
    if (true == res) {
      logger.logInto(stackTrace.get(), " notesPageValueLeft button is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + " notesPageValueLeft button is not clicked", 'error');
    }
    return res;
  },

  click_notesPageValueRight: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.notesPageValueRight);
    if (true == res) {
      logger.logInto(stackTrace.get(), " notesPageValueRight button is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + " notesPageValueRight button is not clicked", 'error');
    }
    return res;
  },

  click_notesCancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.notesCancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " notesCancelBtn button is clicked");
      res = this.getData_notesList();
    }
    else {
      logger.logInto(stackTrace.get(), res + " notesCancelBtn button is not clicked", 'error');
    }
    return res;
  },

  click_notesSaveBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.notesSaveBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " notesSaveBtn button is clicked");
      res = this.getData_notesList();
    }
    else {
      logger.logInto(stackTrace.get(), res + " notesSaveBtn button is not clicked", 'error');
    }
    return res;
  },

  click_deleteNoteCancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.deleteNoteCancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " deleteNoteCancelBtn button is clicked");
      res = this.getData_notesList();
    }
    else {
      logger.logInto(stackTrace.get(), res + " deleteNoteCancelBtn button is not clicked", 'error');
    }
    return res;
  },

  click_deleteNoteDeleteBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.deleteNoteDeleteBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " deleteNoteDeleteBtn button is clicked");
      res = this.getData_notesList();
    }
    else {
      logger.logInto(stackTrace.get(), res + " deleteNoteDeleteBtn button is not clicked", 'error');
    }
    return res;
  },

  click_bookmarkCloseBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookmarkCloseBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookmarkCloseBtn button is clicked");
      res = action.waitForDisplayed(this.bookmarkCloseBtn, undefined, true);
    }
    else {
      logger.logInto(stackTrace.get(), res + " bookmarkCloseBtn button is not clicked", 'error');
    }
    return res;
  },

  click_addBookmarkBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.addBookmarkBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " addBookmarkBtn button is clicked");
      res = this.getData_addBookmark();
    }
    else {
      logger.logInto(stackTrace.get(), res + " addBookmarkBtn button is not clicked", 'error');
    }
    return res;
  },

  click_bookmarkListDeleteBtn: function (bookmarkListItemNameName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.bookmarkListDeleteBtn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.bookmarkListItemName + i + "]")) == bookmarkListItemNameName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --bookmarkListDeleteBtn clicked");
      res = this.getData_bookmarkList();
    }
    else
      logger.logInto(stackTrace.get(), res + " --bookmarkListDeleteBtn NOT clicked", "error")
    return res;
  },

  click_bookmarkListEditBtn: function (bookmarkListItemNameName) {
    logger.logInto(stackTrace.get());
    var i, list, res;
    list = action.findElements(this.bookmarkListEditBtn);
    for (i = 0; i < list.length; i++) {
      if ((action.getText(this.bookmarkListItemName + i + "]")) == bookmarkListItemNameName) {
        res = action.click(list[i]);
        break;
      }
    }
    if (res == true) {
      logger.logInto(stackTrace.get(), " --bookmarkListEditBtn clicked");
      res = this.getData_addBookmark();
    }
    else
      logger.logInto(stackTrace.get(), res + " --bookmarkListEditBtn NOT clicked", "error")
    return res;
  },

  click_bookmarkPageValueLeft: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookmarkPageValueLeft);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookmarkPageValueLeft button is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + " bookmarkPageValueLeft button is not clicked", 'error');
    }
    return res;
  },

  click_bookmarkPageValueRight: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookmarkPageValueRight);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookmarkPageValueRight button is clicked");
    }
    else {
      logger.logInto(stackTrace.get(), res + " bookmarkPageValueRight button is not clicked", 'error');
    }
    return res;
  },

  click_bookmarkCancelBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookmarkCancelBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookmarkCancelBtn button is clicked");
      res = this.getData_bookmarkList();
    }
    else {
      logger.logInto(stackTrace.get(), res + " bookmarkCancelBtn button is not clicked", 'error');
    }
    return res;
  },

  click_bookmarkSaveBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.bookmarkSaveBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " bookmarkSaveBtn button is clicked");
      res = this.getData_bookmarkList();
    }
    else {
      logger.logInto(stackTrace.get(), res + " bookmarkSaveBtn button is not clicked", 'error');
    }
    return res;
  },

  click_jumpToPageBtn: function () {
    logger.logInto(stackTrace.get());
    var res;
    res = action.click(this.jumpToPageBtn);
    if (true == res) {
      logger.logInto(stackTrace.get(), " jumpToPageBtn button is clicked");
      res = this.getData_flipbookPage();
    }
    else {
      logger.logInto(stackTrace.get(), res + " jumpToPageBtn button is not clicked", 'error');
    }
    return res;
  },

  set_notesTextArea: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.notesTextArea, value);
    if (true == res) {
      logger.logInto(stackTrace.get(), "Value is entered in notesTextArea");
    } else {
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },

  set_bookmarkTextArea: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.bookmarkTextArea, value);
    if (true == res) {
      logger.logInto(stackTrace.get(), "Value is entered in bookmarkTextArea");
    } else {
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },

  set_jumpToPageInput: function (value) {
    var res;
    logger.logInto(stackTrace.get());
    res = action.setValue(this.jumpToPageInput, value);
    if (true == res) {
      logger.logInto(stackTrace.get(), "Value is entered in jumpToPageInput");
    } else {
      logger.logInto(stackTrace.get(), res, 'error');
    }
    return res;
  },

}

