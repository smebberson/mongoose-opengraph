var opengraph = require('../lib/opengraph');

describe('opengraph', function () {

	var PostSchema;

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

});