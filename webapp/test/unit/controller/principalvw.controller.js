/*global QUnit*/

sap.ui.define([
	"spinnerayotlo.com./project1/controller/principalvw.controller"
], function (Controller) {
	"use strict";

	QUnit.module("principalvw Controller");

	QUnit.test("I should test the principalvw controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
