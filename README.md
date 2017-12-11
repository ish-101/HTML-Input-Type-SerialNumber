# HTML Input Type SerialNumber
A widget that assists users while filling out HTML Input fields intended for Serial Numbers.

## _LIVE_ Pattern Matching and Auto Completion

### Pattern Matching
It test for the Regular Expression separately on separate pieces of the input, instead of all at once. The invalid characters __automatically get deleted__.

### Auto Completion
Some Serial Numbers have separating characters, such as dashes, between the pieces. This input field __automatically adds__ those separators wherever required.

Since both these features LIVE, this widget __assists__ the user while filling out the Serial Number, instead of simply pointing out that it was incorrectly formatted.

## [DEMO](http://ishpreet.tech/projects/HTML-Input-Type-SerialNumber/demo)

## Installation
1. Link jQuery version 3.x.x to the head of the page (if not already linked)
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```
2. [Download](https://raw.githubusercontent.com/ish-101/HTML-Input-Type-SerialNumber/master/src/jquery.serialnumberinput.js) and link jquery.serialnumberinput.js to the head of the page
```html
<script type="text/javascript" src="jquery.serialnumberinput.js"></script>
```
3. Add this script anywhere on the page. [Configure](#configuration) it according to your own needs.
```html
<script type="text/javascript">
	// If you want a separate configuration for each input box, you can replace the general selector input[type='serialnumber'] with specific IDs, Classes, etc.
	$("input[type='serialnumber']").serialnumberinput(
	{
		/*
		 The following configuration would allow a serial number of the format 000\00\A
		 */
		"separator": "\\",
		"pieces":
		[
			{
				"length": 3,
				"pattern": "[0-9]",
			},
			{
				"type": "separator",
			},
			{
				"length": 2,
				"pattern": "[0-9]",
			},
			{
				"type": "separator",
			},
			{
				"length": 1,
				"pattern": "[a-zA-Z]",
			},
		],
	});
</script>
```
4. Use the input type `serialnumber` anywhere in the page to test if it works.
```html
<input type="serialnumber">
```

## Configuration

1. __`separator:`__ Defines the character which should be automatically added as a separator. (Default value is an empty string `""`)

   __NOTE:__ The `separator` property can be defined for the whole input box in general, or specially for each separator. Specific definitions override the general ones.   

2. __`pieces:`__ This is an array of __`piece`__ objects.

   a. __`length:`__ A positive integer denoting the number of character in a piece. (Default value is `1`)   

   b. __`pattern:`__ A [Regular Expression](https://www.regular-expressions.info/) which defines the allowed characters in a piece.   

   c. __`type:`__ Should be set to `separator` to add a separator, or else, should not be set at all.    

## Information
Made as a plugin to [jQuery](https://jquery.com/)

Dependent on [jQuery version 3.x.x](https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js)

## Author
_Ishpreet Singh Bhasin_

[__Website__](http://ishpreet.tech/)

[__GitHub__](https://github.com/ish-101)