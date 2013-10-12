var mongoose = require.main.require('mongoose'),
	types = mongoose.Schema.Types;

var ogTypeList = 'article book books.author books.book books.genre business.business event fitness.unit fitness.course music.song music.radio_station music.playlist music.album object place profile product restaurant.restaurant restaurant.menu_item restaurant.menu_section restaurant.menu website';
var ogLocaleList = 'af_ZA ar_AR az_AZ be_BY bg_BG bn_IN bs_BA ca_ES cs_CZ cy_GB da_DK de_DE el_GR en_GB en_PI en_UD en_US eo_EO es_ES es_LA et_EE eu_ES fa_IR fb_LT fi_FI fo_FO fr_CA fr_FR fy_NL ga_IE gl_ES he_IL hi_IN hr_HR hu_HU hy_AM id_ID is_IS it_IT ja_JP ka_GE km_KH ko_KR ku_TR la_VA lt_LT lv_LV mk_MK ml_IN ms_MY nb_NO ne_NP nl_NL nn_NO pa_IN pl_PL ps_AF pt_BR pt_PT ro_RO ru_RU sk_SK sl_SI sq_AL sr_RS sv_SE sw_KE ta_IN te_IN th_TH tl_PH tr_TR uk_UA vi_VN zh_CN zh_HK zh_TW';

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

	// ogURL
	options.ogURL = (options.ogURL == undefined) ? false : options.ogURL;

	// ogTitle
	options.ogTitle = (options.ogTitle == undefined) ? true : options.ogTitle;

	// ogImage
	options.ogImage = (options.ogImage == undefined) ? true : options.ogImage;

	// ogLocale
	options.ogLocale = (options.ogLocale == undefined) ? false : options.ogLocale;
	options.ogLocaleList = options.ogLocaleList || ogLocaleList;

	if (options.ogLocaleList && typeof options.ogLocaleList === 'string') {
		options.ogLocaleList = options.ogLocaleList.split(' ');
	}

	options.ogLocaleDefault = options.ogLocaleDefault || 'en_US';

	// ogVideo
	options.ogVideo = (options.ogVideo == undefined) ? false : options.ogVideo;

	// ogAudio
	options.ogAudio = (options.ogAudio == undefined) ? false : options.ogAudio;

	// ogDeterminer
	options.ogDeterminer = (options.ogDeterminer == undefined) ? false : options.ogDeterminer;

	// ogUpdatedTime
	options.ogUpdatedTime = (options.ogUpdatedTime == undefined) ? false : options.ogUpdatedTime;

	// ogSeeAlso
	options.ogSeeAlso = (options.ogSeeAlso == undefined) ? false : options.ogSeeAlso;

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
			ogDescription: String
		});
	}

	if (options.ogURL === true) {
		schema.add({
			ogURL: String
		});
	}

	if (options.ogTitle === true) {
		schema.add({
			ogTitle: String
		});
	}

	if (options.ogImage === true) {
		schema.add({
			ogImage: String
		});
	}

	if (options.ogLocale === true) {
		schema.add({
			ogLocale: {
				type: String,
				enum: options.ogLocaleList,
				default: options.ogLocaleDefault
			}
		});
	}

	if (options.ogVideo === true) {
		schema.add({
			ogVideo: String
		});
	}

	if (options.ogAudio === true) {
		schema.add({
			ogAudio: String
		});
	}

	if (options.ogDeterminer === true) {
		schema.add({
			ogDeterminer: String
		});
	}

	if (options.ogUpdatedTime === true) {
		schema.add({
			ogUpdatedTime: {
				type: Date,
				default: Date.now
			}
		});
	}

	if (options.ogSeeAlso === true) {
		schema.add({
			ogSeeAlso: String
		});
	}

	schema.pre('save', function (next) {
		this.ogUpdatedTime = new Date();
		next();
	});

}