"use strict";
var addBookPage = require('../../pages/engageExperienceApp/addBook.page.js');
var appShell = require('./appShell.test.js');
const createClassPage = require('../../pages/engageExperienceApp/createClass.page.js');
var dashboardPage = require('../../pages/engageExperienceApp/dashboard.page.js');
var sts;
module.exports = {

	//Validate the content of add book page in english language
	//rename to ENG_ADDBOOK_TC_2 as per QA touch
	ENG_ADDBOOK_TC_1: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
			assertion.typeOf(sts, 'object', new Error(sts));
			assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page title Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subtitle Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts))
			assertion.assertEqual(sts.noBooklbl, testdata.noBooklbl, "Bottom label Text Mismatch: " + JSON.stringify(sts))

	},

	//Validate the "My Books" page content
	ENG_ADDBOOK_TC_4: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts.addtoClassbtn))
			assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelAndGoBackbtn))
			//assertion.assertEqual(sts.bookAddedlbl, testdata.bookAddedlbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
			//bookData
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the "All Books" page content
	ENG_ADDBOOK_TC_5: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'false', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'true', "All Books Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts.addtoClassbtn))
			assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelAndGoBackbtn))
			//assertion.assertEqual(sts.bookAddedlbl, testdata.bookAddedlbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
			//bookData
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the "My Books" tab selected when click on my book tab
	ENG_ADDBOOK_TC_6: function (testdata) {
		sts = addBookPage.click_MyBooks_Tab()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the "All Books" tab selected when click on my book tab
	ENG_ADDBOOK_TC_7: function (testdata) {
		sts = addBookPage.click_AllBooks_Tab()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'false', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'true', "All Books Tab is selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//check instructor classtest.json	
	//Validate that create class page is launched after click on add to class button
	ENG_ADDBOOK_TC_8: function (testdata) {

		sts = addBookPage.click_AddtoClass_Button()
		sts = createClassPage.isInitialized();
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, testdata, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, true, "Book Icon is mismatched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the create class page is launched and book is not chnaged after click on Cancel and go Back button
	ENG_ADDBOOK_TC_9: function () {
		sts = createClassPage.isInitialized();
		var existingbookTitle = sts.bookTitle;
		sts = createClassPage.click_AddANewBook_Button();
		assertion.assertEqual(sts.pageStatus, true, "Add Book Page not launched: " + JSON.stringify(sts))
		sts = addBookPage.click_CancelAndGoBack_Button()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, existingbookTitle, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, true, "Book Icon is mismatched: " + JSON.stringify(sts))

		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the create class page is launched and no book is added after click on Cancel and go Back button
	ENG_ADDBOOK_TC_10: function (testdata) {
		sts = addBookPage.click_CancelAndGoBack_Button()
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageStatus, true, "Create Class Page not launched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookTitle, null, "Book Title is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookIcon, false, "Book Icon is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.selectBook_lbl, testdata.selectBook_lbl, "SelectBook Label Text Mismatch: " + JSON.stringify(sts.selectBook_lbl))
			assertion.assertEqual(sts.selectBook_txt, testdata.selectBook_txt, "SelectBook Label Text Mismatch: " + JSON.stringify(sts.selectBook_txt))

		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the bottom label when no book added in a class
	ENG_ADDBOOK_TC_11: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.noBooklbl, testdata.noBookerror, "Botton book label is not matched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//check instructor classtest.json
	//Validate the book is added on clicking of add book button of a specific book
	ENG_ADDBOOK_TC_12: function (testdata) {
		sts = addBookPage.click_addBook(testdata[0])
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookData.bookList[0].addBookbtntxt, testdata[1].addedBookbtntxt, "My Books Tab is mismatched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},
	//Validate the book details in bottom lable when book is added
	ENG_ADDBOOK_TC_13: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookAddedlbl, testdata[0].bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, testdata[1], "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebottomIcon, true, "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the book is remove from class when click on cross icon on bottom lable
	ENG_ADDBOOK_TC_14: function (testdata) {
		sts = addBookPage.clickBookDeleteIcon()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookData.bookList[0].addBookbtntxt, testdata.addBookbtntxt, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedlbl, sts.bookAddedlbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, null, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebottomIcon, null, "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the book is removed after clicking on "Added" button of a book which is already added
	ENG_ADDBOOK_TC_15: function (testdata) {
		sts = addBookPage.click_addBook(testdata[1])
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.bookData.bookList[0].bookTitle, testdata[1], "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookData.bookList[0].addBookbtntxt, testdata[0].addBookbtntxt, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.noBooklbl, testdata[0].noBooklbl, "Book label is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookAddedtxt, null, "book text is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.bookdeletebottomIcon, null, "Cross icon is not selected: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the error message when click on add to class button  without adding any class
	ENG_ADDBOOK_TC_16: function () {
		sts = addBookPage.click_AddtoClass_Button()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.noBooklbl, null, "Error Message is mismatched: " + JSON.stringify(sts))
		} else {
			assertion.assertFail(sts);
		}
	},

	//Validate the content when no book is added on my book tab
	ENG_ADDBOOK_TC_19: function (testdata) {
		sts = addBookPage.isInitialized()
		//console.log(sts)
		if ((typeof (sts)) === "object") {
			assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Page title is Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.pageSubTitle, testdata.pageSubTitle, "Page subtitle is Not Displayed: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTab, testdata.myBooksTab, "My Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTab, testdata.allBooksTab, "All Books Tab is mismatched: " + JSON.stringify(sts))
			assertion.assertEqual(sts.myBooksTabSelected, 'true', "My BooksTab is not selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.allBooksTabSelected, 'false', "All Books Tab is selected: " + JSON.stringify(sts))
			assertion.assertEqual(sts.addtoClassbtn, testdata.addtoClassbtn, "Add Class button Text Mismatch: " + JSON.stringify(sts.createBtn_txt))
			assertion.assertEqual(sts.cancelAndGoBackbtn, testdata.cancelAndGoBackbtn, "Cancel button Text Mismatch: " + JSON.stringify(sts.cancelBtn_txt))
			assertion.assertEqual(sts.noBooklbl, testdata.noBooklbl, "Bottom label Text Mismatch: " + JSON.stringify(sts.bookAddedlbl))
			assertion.assertEqual(sts.noBookTitle, testdata.noBookTitle, "No Book Title is mismatched " + JSON.stringify(sts.noBookTitle))
			assertion.assertEqual(sts.noBookSubTitle, testdata.noBookSubTitle, "No Book SubTitle is mismatched: " + JSON.stringify(sts.noBookSubTitle))

		} else {
			assertion.assertFail(sts);
		}
	},

	/****************************Dashboard Add Book Testcases******************************************/
	//Validate that clicking on Book Thumbnail launches the book View page
	ENG_ADDBOOK_TC_20: function (testdata) {

		sts = addBookPage.clickOnBook(testdata[1].name);

		assertion.assertEqual(sts.bookCover, true, "Book Cover Not displayed");
		assertion.assertEqual(sts.bookTitle, testdata[1].name, "Book Title Mismatch");
		assertion.assertEqual(sts.bookSubTitle, testdata[1].description, "Book Description Mismatch");
		assertion.assertEqual(sts.viewClass, testdata[0].viewClasses, "View Class Text Mismatch");
		assertion.assertEqual(sts.openFlipbook_btn, testdata[0].openFlipbook, "Open Flipbook Button text Mismatch");
	},

	//Validate that clicking on '+' button adds the book to My Books
	ENG_ADDBOOK_TC_21: function (testdata) {
		sts = addBookPage.clickPlusbutton(testdata);
		var bookObj;
		var arr = sts.bookList;
		for (var i = 0; i < arr.length; i++) {
            bookObj = arr.find(book => book.bookTitle === testdata);
            assertion.assertEqual(book.bookAddedIcon, true, "Book Added to My Books");
            break;
        }
	},

	//Validate clicking on the breadcrumb on add book page launches the dashboard page
	ENG_ADDBOOK_TC_22: function (testdata) {
		appShell.ENG_SHELL_TC_11();

		sts = dashboardPage.isInitialized();
		assertion.assertEqual(sts.pageTitle, testdata.pageTitle, "Dashboard text mismatch");
        assertion.assertEqual(sts.createPlaylist_Txt, testdata.createPlaylist_Txt, "Create Playlist text mismatch");
        assertion.assertEqual(sts.addBook_Txt, testdata.addBook_Txt, "Add Book text mismatch");
        assertion.assertEqual(sts.myBooksHeading_Txt, testdata.myBooksHeading_Txt, "My books text mismatch");
        assertion.assertEqual(sts.myPlaylistsHeading_Txt, testdata.myPlaylistsHeading_Txt, "my playlist text mismatch");
	},
	/****************************Dashboard Add Book Testcases******************************************/

	/****************************Browse Book Testcases*************************************************/


	//Validate that clicking on more options displays a list of options available
	ENG_ADDBOOK_TC_23: function (testdata) {

		sts = addBookPage.clickMoreOptions();
		assertion.assertEqual(sts.viewClass_btn, testdata.viewClass_btn, "View Class button mismatch");
        assertion.assertEqual(sts.createClass_btn, testdata.createClass_btn, "Create Class button mismatch");
        assertion.assertEqual(sts.openFlipbook_btn, testdata.openFlipbook_btn, "Open Flipbook  button mismatch");

        if(sts.addToMyBooks_btn ! == undefined)
        assertion.assertEqual(sts.addToMyBooks_btn, testdata.addBook_Txt, "Add To My Books button mismatch");
	},

	//Validate that clicking on View Classes launches Class Drawer
	ENG_ADDBOOK_TC_24: function (testdata) {
		//use testdata from ENG_BOOK_TC_3
		sts = addBookPage.clickViewClasses();
		assertion.assertEqual(sts.classDrawerHeader, testdata[0] + ' ' + testdata[1], "Class Drawer Header Mismatch");

        sts = classDrawerPage.Click_classDrawerCloseBtn();
        assertion.assertEqual(sts, true, "Close Class List Menu Not Clicked");
	},

    //Validate that clicking on Add to My Books adds the book to My Books in Dashboard
	ENG_ADDBOOK_TC_25: function (testdata) {
		sts = addBookPage.clickAddToMyBooks();
		assertion.assertEqual(sts, testdata, "Snackbar text Mismatch");

	},

	//Validate that clicking on Open flipbook launches the flipbook associated with the book
	ENG_ADDBOOK_TC_26: function (testdata) {
		sts = addBookPage.clickOpenFlipbook();
		assertion.assertEqual(sts, true, "Open Flipbook Not Clicked");

	},

	//Validate that clicking on Open flipbook displays a list of flipbooks associated with the book
	ENG_ADDBOOK_TC_27: function (testdata) {
		sts = addBookPage.clickOpenFlipbook();
		assertion.assertEqual(sts.length, testdata.length, "Number of Flipbooks Mismatch");


	},

	//Validate that clicking on Create New Class launches create class workflow where book is added to Class Books
	ENG_ADDBOOK_TC_28: function (testdata) {
		sts = addBookPage.clickCreateNewClass();
		assertion.assertEqual(sts.pageTitle, testdata[0].pageTitle, "Create Class Page Title Mismatch");
		assertion.assertEqual(sts.pageSubTitle, testdata[0].pageSubTitle, "Create Class Page SubTitle Mismatch");
		assertion.assertEqual(sts.classHeader, testdata[0].classHeader, "Create Class Page Header Mismatch");
		assertion.assertEqual(sts.classSubHeader, testdata[0].classSubHeader, "Create Class Page Class SubHeader Mismatch");
		assertion.assertEqual(sts.title_lbl, testdata[0].title_lbl, "Create Class Page Title Label Mismatch");
		assertion.assertEqual(sts.startDate_lbl, testdata[0].startDate_lbl, "Create Class Page Start Date Label Mismatch");
		assertion.assertEqual(sts.endDate_lbl, testdata[0].endDate_lbl, "Create Class Page End Date Label Mismatch");
		assertion.assertEqual(sts.selectBook_lbl, testdata[0].selectBook_lbl, "Create Class Page Select Book Label Mismatch");
		assertion.assertEqual(sts.cancelBtn_txt, testdata[0].cancelBtn_txt, "Create Class Page Cancel Button Mismatch");
		assertion.assertEqual(sts.createBtn_txt, testdata[0].createBtn_txt, "Create Class Page Create Button Mismatch");
		
		assertion.assertEqual(sts.bookTitle, testdata[1].bookTitle, "Create Class Page Book Title Mismatch");
		assertion.assertEqual(sts.bookIcon, true, "Create Class Page Book Cover Thumbnail Mismatch");

	},

	//Validate that clicking on a page number launches the list of books 
	ENG_ADDBOOK_TC_29: function (testdata) {
		sts = addBookPage.goToPageNumber(testdata[0]);
		
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.pageInfo.pageTitle, testdata.pageTitle, "Page title Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.pageInfo.pageSubTitle, testdata.pageSubTitle, "Page subtitle Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.previousPageArrow, true, "Previous Arrow Not displayed")
		assertion.assertEqual(sts.previousPageArrow, true, "Previous Arrow Not displayed")

	},

	/****************************Browse Book Testcases*************************************************/
	
	/****************************Search Testcases*************************************************/

	//Validate that the serach result count displays the correct number of resources as listed under the tab.
	ENG_ADDBOOK_TC_32: function (testdata) {
		sts = addBookPage.enterTextInSearchBox(testdata[0]);
		assertion.assertEqual(sts, true, "Search Text Not Entered")

		sts = addBookPage.clickOnMoreSerachResult()
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.booksList.boobooksArray, testdata[1].count, "Count Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.booksList.boobooksArray[0].bookTitle, testdata[1].bookTitle, "Book Title Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.booksList.boobooksArray[0].bookSubTitle, testdata[1].bookSubTitle, "Book SubTitle Mismatch: " + JSON.stringify(sts))
		
		sts = addBookPage.getSearchData()
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed: " + JSON.stringify(sts))
		assertion.assertEqual(sts.searchCount, testdata[1].count, "Serach Count Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.searchPill, testdata[0], "Serach Pill Mismatch: " + JSON.stringify(sts))
		
		sts = addBookPage.clearSearch()
		assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

	},

	//Validate that search results are listed correctly for alpha numeric text.
	ENG_ADDBOOK_TC_36: function (testdata) {
		sts = addBookPage.enterTextInSearchBox(testdata[0]);
		assertion.assertEqual(sts, true, "Search Text Not Entered")

		sts = addBookPage.clickOnMoreSerachResult()
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.booksList.boobooksArray, testdata[1].count, "Count Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.booksList.boobooksArray[0].bookTitle, testdata[1].bookTitle, "Book Title Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.booksList.boobooksArray[0].bookSubTitle, testdata[1].bookSubTitle, "Book SubTitle Mismatch: " + JSON.stringify(sts))
		
		sts = addBookPage.getSearchData()
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed: " + JSON.stringify(sts))
		assertion.assertEqual(sts.searchCount, testdata[1].count, "Serach Count Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.searchPill, testdata[0], "Serach Pill Mismatch: " + JSON.stringify(sts))
		
		sts = addBookPage.clearSearch()
		assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

	},

	//Validate that a search text lists maximum 5 suggestions matching the search text.
	ENG_ADDBOOK_TC_36: function (testdata) {
		sts = addBookPage.enterTextInSearchBox(testdata[0]);
		assertion.assertEqual(sts, true, "Search Text Not Entered")

		sts = addBookPage.getSearchList();
		assertion.isAtMost(sts.length, 6 , "Search List Count Mismatch")
		
		sts = addBookPage.clearSearch()
		assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

	},

	//Validate that No Result Found screen is displayed when no resource matching the search crietria is fulfilled
	ENG_ADDBOOK_TC_39: function (testdata) {
		sts = addBookPage.enterTextInSearchBox(testdata[0]);
		assertion.assertEqual(sts, true, "Search Text Not Entered")

		sts = addBookPage.getSearchList();
		assertion.assertEqual(sts[0].itemName, testdata[1].NoBooksFound , "No Books Found Mismatch")

		sts = addBookPage.pressEnter()
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.searchData.search_NoResult_title, testdata[1].search_NoResult_title, "No Result Found Title Mismatch")
		assertion.assertEqual(sts.searchData.search_NoResult_subTitle, testdata[1].search_NoResult_subTitle, "No Result Found Sub-Title Mismatch")
		
		sts = addBookPage.clearSearch()
		assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

	},

	//Validate that clicking on close search pill icon, the search results are cleared
	ENG_ADDBOOK_TC_40: function (testdata) {
		
		sts = addBookPage.getSearchData()
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed: " + JSON.stringify(sts))
		assertion.assertEqual(sts.searchCount, testdata[1].count, "Serach Count Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.searchPill, testdata[0], "Serach Pill Mismatch: " + JSON.stringify(sts))

		sts = addBookPage.enterTextInSearchBox(testdata[0]);
		assertion.assertEqual(sts, true, "Search Text Not Entered")

		sts = addBookPage.clickOnMoreSerachResult()
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.booksList.boobooksArray, testdata[2].count, "Count Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.booksList.boobooksArray[0].bookTitle, testdata[2].bookTitle, "Book Title Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.booksList.boobooksArray[0].bookSubTitle, testdata[2].bookSubTitle, "Book SubTitle Mismatch: " + JSON.stringify(sts))
		
		sts = addBookPage.clearSearchPill()
		assertion.assertEqual(sts.searchData.searchPill, null, "Serach Pill Displayed: " + JSON.stringify(sts))

		sts = addBookPage.getSearchData()
		assertion.typeOf(sts, 'object', new Error(sts));
		assertion.assertEqual(sts.searchIcon, true, "Serach Icon Not Displayed: " + JSON.stringify(sts))
		assertion.assertEqual(sts.searchCount, testdata[1].count, "Serach Count Mismatch: " + JSON.stringify(sts))
		assertion.assertEqual(sts.searchPill, testdata[0], "Serach Pill Mismatch: " + JSON.stringify(sts))

	},

	//Validate that clicking on a resource from the search suggestion drop down list launches the resource.
	ENG_ADDBOOK_TC_41: function (testdata) {
		sts = addBookPage.enterTextInSearchBox(testdata[0]);
		assertion.assertEqual(sts, true, "Search Text Not Entered")

		sts = addBookPage.getSearchList();
		assertion.assertEqual(sts[0].itemName, testdata[1].NoBooksFound , "No Books Found Mismatch")

		sts = addBookPage.clickOnSearchSuggestion(testdata[0])
		assertion.assertEqual(sts.componentList.length, testdata[1].component.length, "Number of Components Mismatch")
        assertion.assertEqual(sts.bookTitle, testdata[1].name, "Book Name Mismatch")
        assertion.assertEqual(sts.bookSubTitle, testdata[1].description, "Book Description Mismatch")

	}
};
