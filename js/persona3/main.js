/*global $ _ */

$(function() {
	// Assumes window.fusions exists
	window.persona3 = {

		personaNames:  _(window.fusions).map(function(item) {
			return _.keys(item)[0];
		}).unique().value()

		// returns the personas that can be used to create NAME
		, willCreate: function(list, name) {
			if (!_.isArray(list)) {
				throw new Error('Need a list of personas');
			}

			return _(list).where(name).map(function(item) {
				return item[name];
			}).unique().value();
		}

		, makes: function(list) {
			var names = _.rest(arguments);

			return _(list).map(function(item) {
				var name = _.keys(item)[0];
				if (_.contains(item[name], 'Jack Frost')) {
					return item[name];
				}
				return null;
			}).compact().value();
		}
	}
});