var opengraph = require('../lib/opengraph'),
	util = require('util');

describe('opengraph', function () {

	var PostSchema,
		Text;

	var extendTypes = function () {

		Text = function Text (path, options) {
		    Text.super_.call(this, path, options);
		};
		
		util.inherits(Text, mongoose.Schema.Types.String);

		mongoose.Types.Text = String;
		mongoose.Schema.Types.Text = Text;

	}

	beforeEach(function () {
		PostSchema = new mongoose.Schema({ title: String });
	});

	it('adds the ogTitle, ogDescription, ogImage property to the schema by default', function () {

		PostSchema.plugin(opengraph);

		PostSchema.paths.should.have.property('ogTitle');
		PostSchema.paths['ogTitle'].should.include({instance:'String'});
		PostSchema.paths.should.have.property('ogDescription');
		PostSchema.paths['ogDescription'].should.include({instance:'String'});
		PostSchema.paths.should.have.property('ogImage');
		PostSchema.paths['ogImage'].should.include({instance:'String'});
		PostSchema.paths['ogImage'].options.type.should.equal(String);

	});

	it('should not add the ogURL, ogLocale, ogVideo, ogAudio, ogDeterminer, ogUpdatedTime, ogSeeAlso properties by default', function () {

		PostSchema.plugin(opengraph);

		PostSchema.paths.should.not.have.property('ogURL');
		PostSchema.paths.should.not.have.property('ogLocale');
		PostSchema.paths.should.not.have.property('ogVideo');
		PostSchema.paths.should.not.have.property('ogAudio');
		PostSchema.paths.should.not.have.property('ogDeterminer');
		PostSchema.paths.should.not.have.property('ogUpdatedTime');
		PostSchema.paths.should.not.have.property('ogSeeAlso');

	});

	it('should allow you to overwrite the type for the ogDescription, ogImage and ogVideo properties', function () {

		extendTypes();

		PostSchema.plugin(opengraph, {ogDescriptionType:Text, ogImageType:Text, ogVideo:true, ogVideoType:Text});

		PostSchema.paths.should.have.property('ogDescription');
		PostSchema.paths['ogDescription'].options.type.should.equal(Text);
		PostSchema.paths.should.have.property('ogImage');
		PostSchema.paths['ogImage'].options.type.should.equal(Text);
		PostSchema.paths.should.have.property('ogVideo');
		PostSchema.paths['ogVideo'].options.type.should.equal(Text);

	});

});