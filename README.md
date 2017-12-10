# HTML Input Type SerialNumber
A new type of HTML Input field which is specially built for Serial Numbers. It assists the user while filling out the input field LIVE.

## _LIVE_ Pattern Matching and Auto Completion

### Pattern Matching
It test for the Regular Expression separately on separate pieces of the input, instead of all at once. The invalid characters __automatically get deleted__.

### Auto Completion
Some Serial Numbers have separating characters, such as dashes, between the pieces. This input field __automatically adds__ those separators wherever required.

Since both these features LIVE, this software __assists__ the user while filling out the Serial Number, instead of simply pointing out that it was wrong.

## DEMO

## Installation
1. Link jQuery version 3.x.x to the head of the page (if not already linked)
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```
2. Download and link jquery.serialnumber.js to the head of the page
```html
<script type="text/javascript" src="jquery.serialnumber.js"></script>
```
3. Add this script anywhere on the page. Configure it according to your needs.
```html
<script type="text/javascript">
	$("input[type='serialnumber']").serialnumberinput(
	{
		/*
		 The following configuration would allow a serial number in the format 12-34\AB-CD
		 */
		"separator": "-",
		"pieces":
		[
			{
				"length": 2,
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
				"separator": "\\",
			},
			{
				"length": 2,
				"pattern": "[a-zA-Z]",
			},
			{
				"type": "separator",
			},
			{
				"length": 2,
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
__`separator:`__ This property can be defined for the whole input box in general, or specially for each separator. Specific definitions override the general ones. (Default value is an empty string `""`)

__`pieces:`__ This is an array of the __`piece`__ objects.

    __`length:`__ A positive integer denoting the number of character in a piece. (Default value is `1`)

    __`pattern:`__ A [Regular Expression](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) which defines the allowed characters in a piece.

    __`type:`__ Should be set to `separator` to add a separator, or else, should be left blank. 

## Information
Made as a plugin for jQuery

Dependent on jQuery version 3.x.x

## Creator
__Made By:__ _Ishpreet Singh Bhasin_

[__Website__](http://ishpreet.tech/)

[__GitHub__](https://github.com/ish-101/)