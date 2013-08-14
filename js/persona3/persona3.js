/*global $ _ */

$(function() {
	// Assumes window.fusions exists
	window.persona3 = {

		// returns the names of all the personas in LIST
		names: function(list) {
			return _(list).map(function(item) {
				return _.keys(item)[0];
			}).unique().value();
		}

		// returns the names of all the persona that can combie to make NAME
		, requiresNames: function(list, name) {
			var makes = this.willCreate(list, name);

			return _(makes).map(function(fusion) {
				var name = _.keys(fusion)[0];
				return fusion[name];
			}).flatten().unique().value();
		}

		// returns the personas that can be used to create NAME
		, willCreate: function(list, name) {
			if (!_.isArray(list)) {
				throw new Error('Need a list of personas');
			}

			return _(list).where(name).map(function(item) {
				return item;
			}).unique().value();
		}

		// returns all of the personas that can be made with NAMES
		// NAMES can be an array or list of arguments
		, makes: function(list, names) {
			names = _(arguments).rest().flatten().value();

			return _(list).map(function(item) {
				var name = _.keys(item)[0]
					, children = item[name]
					;

				if (_.containsAll(names, children)) {
					return item
				}
				return null;
			}).compact().value();
		}

		// returns a list of personas that can be made from NAME
		, makesWith: function(list, personaName) {
			return _(list).filter(function(persona) {
				var name = _.keys(persona)[0];
				return _.some(persona[name], function(name) { return name === personaName});
			}).value();
		}
	}
});