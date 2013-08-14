/*global $ _ JSON localStorage persona3 */

$(function() {
	var owned = JSON.parse(localStorage.owned)
		, fusions = window.fusions
		, allNames = persona3.names(fusions)
		;

	console.log('You own ', owned.length, ' personas');

	$('#newName').autocomplete({
		source: allNames
	});
});