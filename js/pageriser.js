(function ( $ ) {
	$.fn.pagerise = function( options ) {
		var defaults = {  
			pageCols: 3,
			pageRows: 3  			
		};  
		var options = $.extend(defaults, options);
		var element = $(this);
		var pageCols = element.attr("data-pageriser-pageCols").split(",");
		if(pageCols==null||pageCols.length <= 0){
			pageCols = options.pageCols;
		}
		var pageRows = element.attr("data-pageriser-pageRows");
		if(pageRows==null||pageRows.length <= 0){
			pageRows = options.pageRows;
		}
		var pageSize = pageCols*pageRows;
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
