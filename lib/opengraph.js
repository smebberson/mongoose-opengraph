
var ogTypeList = 'article book books.author books.book books.genre business.business event fitness.unit fitness.course music.song music.radio_station music.playlist music.album object place profile product restaurant.restaurant restaurant.menu_item restaurant.menu_section restaurant.menu website';

var defaults = function (options) {

	options = options || {};

	options.ogType = options.ogType || true;
	options.ogTypeList = options.ogTypeList || ogTypeList;

	if (options.ogTypeList && typeof options.ogTypeList === 'string') {
		options.ogTypeList = options.ogTypeList.split(' ');
	}

	options.ogTypeDefault = options.ogTypeDefault || options.ogTypeList[0];

	return options;

}

module.exports = function openGraphPlugin (schema, options) {

	options = defaults(options);

	if (options.ogType) schema.add({
			ogType: {
				type: String,
				enum: options.ogTypeList,
				default: options.ogTypeDefault
			}
		});

}