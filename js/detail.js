//$(function(){
	
//	document.write("<script language='javascript' src='service.js'></script>");
	
	var paginate = {
	    count: 0,
	    currentPage: 1,
	    pagesize:6,
	    is_page:true,
    };

	//-------banner1----------------
		var post1Data = paginate;
		post1Data.searchItem = {};
		post1Data.searchItem.thirdapp_id =18;
		post1Data.searchItem.id=422;

		
		var callback = function(data){
			
			app.bannerData = data.data;
		};
		
		
		window.base.articleList(post1Data,callback);

	function getArticleData(){
		//1
//		var postData = paginate;
//		postData.searchItem = {};
//		postData.searchItem.thirdapp_id = 18;
//		postData.searchItem.menu_id;
//
//
//		
//		var callback = function(data){
//			
//			app.productData = data.data;
//		};
//		
//		
//		window.base.articleList(postData,callback);	
		
			//news
		var postData1 = paginate;
		postData1.searchItem = {};
		postData1.searchItem.thirdapp_id = 18;
		postData1.searchItem.id=461;


		
		var callback = function(data){
			
			app.productData1 = data.data;
		};
		
		
		window.base.articleList(postData1,callback);	
		
		
	//honor
		var postData2 = paginate;
		postData2.searchItem = {};
		postData2.searchItem.thirdapp_id = 18;
		postData2.searchItem.id=462;


		
		var callback = function(data){
			
			app.productData2 = data.data;
		};
		
		
		window.base.articleList(postData2,callback);	

	}
	


//});