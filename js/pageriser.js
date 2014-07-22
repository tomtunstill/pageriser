(function ( $ ) {
	$.fn.arrange = function( options ) {
		var pageCols = 3;
		var pageRows = 3;
		var pageSize = pageCols*pageRows;
		var element = $(this);
		element.addClass("list-parent");
		var divsToArrange = element.children();
		var numberOfDivs = divsToArrange.length;
		var pageDiv;
		var rowDiv;
		divsToArrange.each(function(i,obj) {
			var item = $(obj);
			item.attr("data-itemnumber",i);
			var pageNum = (i-i%pageSize)/pageSize;
			var pageItem = (i-(pageNum*pageSize));
			var rowNum = (pageItem-pageItem%pageCols)/pageCols;
			if(i%pageSize==0){
				pageDiv = $(document.createElement("div"));
				element.append(pageDiv);
				pageDiv.addClass("item-page");
				pageDiv.attr("data-pageNum",pageNum);
			}
			if(i%pageCols==0){
				rowDiv = $(document.createElement("div"));
				rowDiv.addClass("item-row");
				rowDiv.attr("data-rowNum",rowNum);
				pageDiv.append(rowDiv);
			}
			rowDiv.append(item);
		});
		element.removeClass("hide");
		return this;
	};
}( jQuery ));
