$(document).ready(function()
{

$("#form1").submit(function(e)
{
	e.preventDefault();

	var data = $(this).serialize();

	$("#form2").deserialize(data);
});

});
