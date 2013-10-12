mongoose-opengraph
==================

A mongoose plugin allowing you to easily add properties required by the open graph protocol.

At present mongoose-opengraph supports the following open graph properties:

- og:url (ogURL, String)
- og:title (ogTitle, String)
- og:image (ogImage, String)
- og:type (ogType, String, enum)
- og:locale (ogLocale, String, enum)
- og:video (ogVideo, String)
- og:audio (ogAudio, String)
- og:description (ogDescription, Text)
- og:determiner (ogDeterminer, String)
- og:updated_time (ogUpdatedTime, Date)
- og:see_also (ogSeeAlso, String)

## Usage

Simply install the plugin using NPM:

```npm install mongoose-opengraph --save```

And then add the plugin to your schema like so:

	var mongoose = require('mongoose'),
		opengraph = require('mongoose-opengraph');

	var mySchema = new mongoose.Schema({title:String});
	mySchema.plugin(opengraph);

## Configuration

mongoose-opengraph is highly configurable. You can turn properties on or off, reset enum values, and alter defaults for enum properties.

The following properties are __on__ by default:

- ogType
- ogDescription
- ogTitle
- ogImage

You can configure mongoose-opengraph to not use these properties by setting the property name to false in the options object. For example:

	var mongoose = require('mongoose'),
		opengraph = require('mongoose-opengraph');

	var mySchema = new mongoose.Schema({title:String});
	mySchema.plugin(opengraph, {ogTitle:false});

To turn a property on, that is off bY default, simply do the reverse:

	var mongoose = require('mongoose'),
		opengraph = require('mongoose-opengraph');

	var mySchema = new mongoose.Schema({title:String});
	mySchema.plugin(opengraph, {ogTitle:false, ogAudio:true});

If you want to update the default value for any enum properties:

	var mongoose = require('mongoose'),
		opengraph = require('mongoose-opengraph');

	var mySchema = new mongoose.Schema({title:String});
	mySchema.plugin(opengraph, {ogLocaleDefault:'en_GB'});

If you want to update the list of available values for any enum properties, just provide a list seperated by a space:

	var mongoose = require('mongoose'),
		opengraph = require('mongoose-opengraph');

	var mySchema = new mongoose.Schema({title:String});
	mySchema.plugin(opengraph, {ogTypeList:'first-value second-value'});

