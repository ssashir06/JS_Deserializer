(function($)
{

	$.fn.deserialize = function(data_orig)
	{
		var $this = $(this);
		var map = deserialize(data_orig);

		$this.each(function(idx_form)
		{
			if ($this[idx_form].tagName != "FORM") return;
			$this.children().each(function(idx_children)
			{
				if (
					this.tagName != "INPUT" &&
					this.tagName != "SELECT") return;
				var $input = $(this);
				var key = $input.context.name;

				applyInputSelect($input, map[key]);
			});
		});


	}

	function deserialize(data)
	{
		var splited = data.split("&");

		var map = {};
		$(splited).each(function(idx)
		{
			var splited_kv = splited[idx].split("=");
			var k = splited_kv[0];
			var v = splited_kv[1];

			map[k] = v;
		});

		return map;
	}

	function applyInputSelect($input, value)
	{
		switch ($input.context.type.toUpperCase())
		{
			case "TEXT":
				$input.val(value);
				break;

			case "RADIO":
				$input.val([value]);
				break;

			case "CHECKBOX":
				$input.val([value]);
				break;

		}
	}


})(jQuery);

