/*global _ */
_.mixin({
	'not': function(val) {
		return !!val;
	}

	// returns true if LIST contains all values in VALUES.
	// LIST must be an array
	// VALUES must be an array
	, containsAll: function(list, values) {
		return !_(values).map(function(item) {
			return _.contains(list, item);
		}).contains(false);
	}
});