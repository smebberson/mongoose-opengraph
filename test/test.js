var opengraph = require('../lib/opengraph');

describe('opengraph', function () {

	var PostSchema = new mongoose.Schema({ title: String });

	it('adds the ogTitle, ogDescription, ogImage property to the schema by default', function () {

		PostSchema.plugin(opengraph);

		PostSchema.paths.should.have.property('ogTitle');
		PostSchema.paths.should.have.property('ogDescription');
		PostSchema.paths.should.have.property('ogImage');

	});

});