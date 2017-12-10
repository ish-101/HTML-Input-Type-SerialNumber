# HTML Input Type SerialNumber
A new type of HTML Input field which is specially built for Serial Numbers. It assists the user while filling out the input field LIVE.
## _LIVE_ Pattern Matching and Auto Completion
### Pattern Matching
It test for the Regular Expression separately on separate pieces of the input, instead of all at once. The invalid characters __automatically get deleted__.
### Auto Completion
Some Serial Numbers have separating characters, such as dashes, between the pieces. This input field __automatically adds__ those separators wherever required.

Since both these features LIVE, this software __assists__ the user while filling out the Serial Number, instead of simply pointing out that it was wrong.

## Installation
1. Link jQuery version 3.x.x to the head of the page (if not already linked)
```html
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```
2. Download and link jquery.serialnumber.js to the head of the page
```html
<script type="text/javascript" src="../src/jquery.serialnumber.js"></script>
```
3. Add this script anywhere on the page.
```html
<script type="text/javascript">
	$("input[type='serialnumber']").serialnumberinput(
	{
		/*
		 The following configuration would allow a serial number of the format 12-34\AB-CD
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