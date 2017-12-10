/*
  HTML Input Type SerialNumber
  GitHub: https://github.com/ish-101/HTML-Input-Type-SerialNumber
  Dependency: jQuery 3.x.x
  License:  GNU GENERAL PUBLIC LICENSE Version 3

  Made by Ishpreet Singh Bhasin (ish-101)
  Website: http://ishpreet.tech/
*/

(function($)
{
	$.fn.serialnumberinput = function(user_options)
	{
		var target = this;
		var options = $.extend(
		{
			"separator": "",
			"pieces":
			[
			],
		}, user_options, this.data());
		var digits = [];
		var counter = -1;
		$.each(options.pieces, function(i)
		{
			if (this.type === "separator")
			{
				if (this.separator === undefined)
				{
					this.separator = options.separator;
				}
				this.length = 1;
			}
			else
			{
				this.type = "character";
				if (this.length === undefined)
				{
					this.length = 1;
				}
			}
			this.length = Number(this.length);
			this.length = Math.max(this.length, 0);

			for (var j = 0; j < this.length; j++)
			{
				digits[counter + j + 1] = i;
			}
			counter += this.length;
		});
		target.attr(
		{
			'minlength': digits.length,
			'maxlength': digits.length,
		});
		function main(key)
		{
			var x = target.val().split("");
			var correct;
			var recur = false;
			if (x.length <= digits.length)
			{
				for (var i = 0; i < x.length; i++)
				{
					var regex_string;
					if (options.pieces[digits[i]].type === "character")
					{
						regex_string = options.pieces[digits[i]].pattern;
					}
					if (options.pieces[digits[i]].type === "separator")
					{
						regex_string = "[\\" + options.pieces[digits[i]].separator + "]"; 
					}
					correct = RegExp(regex_string).test(x[i]);
					if (!correct)
					{
						correct  = (options.pieces[digits[i]].type === "separator");
						if (correct)
						{
							x[i+1] = x[i];
							x[i] = options.pieces[digits[i]].separator;
							recur = true;
						}
						else
						{
							break;
						}
					}
				}
				var y = x.join("");
				if (!correct)
				{
					y = y.substring(0,i);
				}
				if ((x.length < digits.length) && ((key !== undefined) && ((key !== "Backspace") && (key !== "Delete"))) && (options.pieces[digits[x.length]].type === "separator"))
				{
					y += options.pieces[digits[x.length]].separator;
					main();
				}
				target.val(y);
				if (recur)
				{
					main();
				}
			}
		}
		target.on('keyup', function(e)
		{
			main(e.key);
		});
		return;
	};
}(jQuery));