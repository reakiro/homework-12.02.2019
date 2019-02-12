$(function() {

	$.ajax({
		type: "GET",
		url: "http://localhost:4000/products",
		dataType: "json",
		success: function(products) {			
			products.forEach((product) => {

				$("table").append("<tr data-id=\"" + product.id + "\"><td>" + product.id + "</td><td>" + product.name + "</td><td>" + product.category + "</td><td>" + product.price + "</td><td><button id=\"edit\">edit</button></td><td><button id=\"delete\">delete</button></td></tr>");
			})

		}
	})

	$("#add").on("click", function() {
		window.location.replace("add.html");
	});

	//сейчас удаление производится по клику на всю строку потому что я не могу получить доступа к кнопке delete

	$("table").on("click", "tr", function() {
		var id = $(this).attr("data-id")

		$.ajax({
			type: "DELETE",
			url: "http://localhost:4000/products/" + id,
			dataType: "json",
			success: function(product) {	
				location.reload();		
			}
		});
	});
});