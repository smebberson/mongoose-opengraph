var mongoose = require.main.require('mongoose'),
	types = mongoose.Schema.Types;

var ogTypeList = 'article book books.author books.book books.genre business.business event fitness.unit fitness.course music.song music.radio_station music.playlist music.album object place profile product restaurant.restaurant restaurant.menu_item restaurant.menu_section restaurant.menu website';

var defaults = function (options) {

	options = options || {};

	// ogType
	options.ogType = (options.ogType == undefined) ? true : options.ogType;
	options.ogTypeList = options.ogTypeList || ogTypeList;

	if (options.ogTypeList && typeof options.ogTypeList === 'string') {
		options.ogTypeList = options.ogTypeList.split(' ');
	}

	options.ogTypeDefault = options.ogTypeDefault || options.ogTypeList[0];

	// ogDescription
	options.ogDescription = (options.ogDescription == undefined) ? true : options.ogDescription;

	return options;

}

module.exports = function openGraphPlugin (schema, options) {

	options = defaults(options);

	if (options.ogType === true) {
		schema.add({
			ogType: {
				type: String,
				enum: options.ogTypeList,
				default: options.ogTypeDefault
			}
		});
	}

	if (options.ogDescription === true) {
		schema.add({
			ogDescription: {
				type: types.Text
			}
		});
	}

}