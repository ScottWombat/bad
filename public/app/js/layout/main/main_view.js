define([ "application",'handlebars' ,
         'utils/templateManager',
         'layout/hsecond/hsecond_layout',
         'layout/main/entities/language',
         'layout/main/entities/currency',
         'layout/main/entities/catalogues',
         'layout/main/entities/wishlist',
         'layout/content/login/login_app',
         ], function(Mystore,HandleBars,TemplateManager,ViewSearch) {
	
	Mystore.module("Main.View", function(View,Mystore,Backbone, Marionette, $, _) {
		/*
		 View.Menu = Marionette.Region.extend({
			    el: "#menu",
			    initialize: function(){
			    	 console.info('Initialize Menu region');
			    },
			    
			    onShow: function (view) {
			        this.listenTo(view, "itemview:menu:navigate", this.displayMessage);
			    },
			    displayMessage: function (id) {
			    
			        console.log('regionManager received display:message');
			    }
			    
		 });
		 */
		 
		 View.Layout = Marionette.Layout.extend({
			  className : 'main-wrapper',
			  itemViewContainer :'div',
		      template: TemplateManager.getMainTemplate(),
		      regions: {
		        languageRegion: "#language",
		        currencyRegion: "#currency",
		        navRegion : '#menu',
		        linksRegion : '#links',
		        searchRegion:'.hsecond'
		      
		       
		      },
		      initialize: function(){
		    	  var languageCollection = Mystore.request("language:entities");
		    	  var currencyCollection = Mystore.request("currency:entities");
		    	  var catalogueCollection = Mystore.request("catalogues:entities");
		    	  
		    	  this.viewLanguages = new View.Languages({collection:languageCollection});
		    	  this.viewCurrencies = new View.Currencies({collection:currencyCollection});
		    	  this.viewMenu		= new View.Catalogues({collection:catalogueCollection});
		    	  this.viewLinksLayout = new View.LinksLayout();
		    	  
		    	  this.viewSearch = new ViewSearch.Layout();
		    	  
		    	 
		    	 
		    	  this.viewMenu.on("itemview:menu:navigate",function(myobject,id){
		    		  // args.view; // => the view instance that triggered the
						// event
		    		  // args.model; // => the view.model, if one was set on
						// the view
		    		 // args.collection; // =>
					  // Mystore.trigger("itemview:menu:navigate",id);
		    		  Mystore.trigger("products:show",id);
				   });
		      },
		      onRender: function() {},

			  onShow: function() {
					this.languageRegion.show(this.viewLanguages);
					this.currencyRegion.show(this.viewCurrencies);
					this.navRegion.show(this.viewMenu);
					this.linksRegion.show(this.viewLinksLayout);
					this.searchRegion.show(this.viewSearch);
					
			  }
		      
		});
		 /************* Cotalogue view ************************/
		 
		 View.Catalogue = Marionette.ItemView.extend({
				template : TemplateManager.getCatalogueTemplate(),
				tagName : "li",
				className:'categories_hor',
				
				events : {
					"click a" : "navigate",
				},
				
				navigate : function(e) {
					e.preventDefault();
					e.stopPropagation();
					var menuId = $(e.currentTarget).attr('id');
				
					this.trigger("menu:navigate",menuId,menuId);
					// this.trigger("menu:navigate",menuId);
				},
				onRender : function() {
					if (this.model.selected) {
						// add class so Bootstrap will highlight the active entry in
						// the navbar
						this.$el.addClass("active");
					}
					
				}
			});
			View.Catalogues = Marionette.CompositeView.extend({
				template : TemplateManager.getCataloguesTemplate(),
				itemViewContainer : "ul",
				itemView : View.Catalogue
				// className:'my'
				 // el: '#menu'
				// tagName:'nav'
				
		});
			
		/************* Language view ************************/
			
		View.Language = Marionette.ItemView.extend({
			
			template : TemplateManager.getLanguageTemplate(),
			tagName : "li",
			
			events : {
				"click a" : "navigate",
			},
			navigate : function(e) {
				e.preventDefault();
				this.trigger("navigate", this.model);
			},
			onRender : function() {
				if (this.model.selected) {
					// add class so Bootstrap will highlight the active entry in
					// the navbar
					this.$el.addClass("active");
				}
				
			}
		});
		
		View.Languages = Marionette.CompositeView.extend({
			// template: HandleBars.compile('<span>Language<b></b></span><ul
			// class="ulLanguages"></ul>'),
			template : TemplateManager.getLanguagesTemplate(),
			itemViewContainer : ".ulLanguages",
			itemView : View.Language
			
		});
		
		/************* Currency view ************************/
		
		View.Currency = Marionette.ItemView.extend({
			// template: HandleBars.compile(
			// '<a title="{{name}}">&nbsp;&nbsp;&nbsp;&nbsp;{{name}}</a>'
			// ),
			template : TemplateManager.getCurrencyTemplate(),
			tagName : "li",
			events : {
				"click a" : "navigate",
			},
			navigate : function(e) {
				e.preventDefault();
				this.trigger("navigate", this.model);
			},
			onRender : function() {
				if (this.model.selected) {
					// add class so Bootstrap will highlight the active entry in
					// the navbar
					this.$el.addClass("active");
				}
				
			}
		});
		
		View.Currencies = Marionette.CompositeView.extend({
			// template: HandleBars.compile('<span>Currency<b></b></span><ul
			// class="ulCurrencies"></ul>'),
			template : TemplateManager.getCurrenciesTemplate(),
			itemViewContainer : ".ulCurrencies",
			itemView : View.Currency
			
		});
		
		/************************Links layout **************************/
		
		View.LinksLayout = Marionette.Layout.extend({
			/* the auto-generated element which contains this view */
	         tagName:'span',
	        /* id attribute for the auto-generated container element */
	          id: 'toplinks',
	      
		      template: TemplateManager.getTopLinksTemplate(),
	          regions: {
		        loginRegion    : "#loginRegion",
		        signupRegion   : "#signupRegion",
		        wishlistRegion : "#wishlistRegion",
		        myaccountRegion: "#myaccountRegion",
		        contactRegion  : "#contactRegion",
		        checkoutRegion : "#checkoutRegion"
		        
		      },
		      initialize: function(){
		    	  /** Login Link **/
		    	
		    	  this.viewLogin = new View.Login();
		    	  this.viewLogin.on("loginlink_clicked",function(options){
		    		 Mystore.trigger("trigger:login",options);
		    	  });
		    	  
		    	  this.viewLogin.on("logoutlink_clicked",function(options){
		    		 Mystore.trigger("trigger:logout",options);
		    	  });
		    	  
		    	  /** Signup Link **/
		    	  this.viewSignup = new View.Signup();
		    	  
		    	  this.viewMyAccount = new View.MyAccount();
		    	  
		    	  this.viewContact = new View.Contact();
		    	  this.viewCheckout = new View.Checkout();
		    
		    	  var wishItemCollection = Mystore.request("wishitems:entities");
		    	  console.info('wishlist');
		    	  console.info(wishItemCollection);
		    	  this.viewWishListCollectionView = new View.WishListCollectionView({collection:wishItemCollection});
		    	 
		      },
		      onRender: function() {},
			  onShow: function() {
				  this.loginRegion.show(this.viewLogin);
				  this.signupRegion.show(this.viewSignup);
				  this.wishlistRegion.show(this.viewWishListCollectionView);
				  this.myaccountRegion.show(this.viewMyAccount);
				  this.contactRegion.show(this.viewContact);
				  this.checkoutRegion.show(this.viewCheckout);
			  }
		      
		});
	
		View.LoginModel = Backbone.Model.extend({
			defaults:{
				loggedIn: false,
				loginMsg:''
			}
		});
		
		View.Login = Marionette.ItemView.extend({
			template:TemplateManager.getLoginTemplate(),
			model : new View.LoginModel(),
			className:'login',
			tagName:'div',
			initialize:function(){
				//this.wishitems = Mystore.request("wishitems:entities");
				//console.info(this.wishitems);
			},
			
			modelEvents: {
			        'change': 'fieldsChanged'
			 },
			 fieldsChanged: function() {
			        this.render();
			},
			events : {
				"click a.loginLink" : "navigateToLogin",
				"click a.logoutLink": "navigateToLogout"
			},
			navigateToLogin : function(e) {
				e.preventDefault();
				
				this.trigger("loginlink_clicked", this.model);
			},
			navigateToLogout : function(e) {
				e.preventDefault();
				
				this.trigger("logoutlink_clicked", this.model);
			}	
		});
		
		/** Toplinks Sign up View **/
		View.Signup = Marionette.ItemView.extend({
			template:TemplateManager.getSignupTemplate(),
			tagname:'div',
			events : {
				"click a.signupLink" : "navigateToSignup"
				
			},
			navigateToSignup : function(e) {
				e.preventDefault();
				
				this.trigger("signuplink_clicked");
			}
		
		});
		
		View.MyAccount = Marionette.ItemView.extend({
			template:TemplateManager.getMyAccountTemplate(),
			tagname:'div',
			events : {
				"click a.signupLink" : "navigateToSignup"
				
			},
			navigateToSignup : function(e) {
				e.preventDefault();
				
				this.trigger("signuplink_clicked");
			}
		
		});
		
		View.Contact = Marionette.ItemView.extend({
			template:TemplateManager.getContactTemplate(),
			tagname:'div',
			events : {
				"click a.signupLink" : "navigateToSignup"
				
			},
			navigateToSignup : function(e) {
				e.preventDefault();
				
				this.trigger("signuplink_clicked");
			}
		
		});
		
		View.Checkout = Marionette.ItemView.extend({
			template:TemplateManager.getCheckoutTemplate(),
			tagname:'div',
			events : {
				"click a.signupLink" : "navigateToSignup"
				
			},
			navigateToSignup : function(e) {
				e.preventDefault();
				
				this.trigger("signuplink_clicked");
			}
		
		});
		/** end Toplinks Signupr View **/
		
		/****************** View WishItem and view WishList no use ************************/
		
		View.WishItem = Marionette.ItemView.extend({
			//template: TemplateManager.getLoginTemplate(),
			//model: new View.LoginModel(),
			template: TemplateManager.getWishItemTemplate(),//HandleBars.compile('{{name}}'),
			tagName : "li",
			//itemView : View.Login,
			//collection : Mystore.request("wishitems:entities")
		});
		
		View.WishList = Marionette.CompositeView.extend({
			template: HandleBars.compile('<a style="margin-left:20px;margin-right:30px">Wish List</a><ul class="ulWishlist"></ul>'),
			//template: TemplateManager.getWishListTemplate(),
			itemViewContainer : ".ulCurrencies",
			itemView : View.WishItem,
			collectionEvents: {
		       'add': 'refresh'
		    },
		    refresh: function() {
		    	console.info("refresh");
		    	this.model.set('count', this.collection.length)
		    }
		    /*
			initialize:function(){
				this.collection.each(function(index,model){
						console.info(model); 
                });
				this.len = this.collection.length;
			},
			
			templateHelpers: function() {
			    return {colLength: this.model.count};
			},
			/*
			serializeData: function () {
		        return {
		            
		            collection_length: this.collection.length // here the length is zero
		                                           // after the fetch the length is > 0
		                                           // but in template remains 0
		        };
		    }
		    */
		});
		View.WishListItemCompositeView = Marionette.ItemView.extend({
			//template: HandleBars.compile('<div>{{name}}</div><div>{{price}}</div><div><a>add to cart</a><a>remove</a>'),
			template:TemplateManager.getWishItemTemplate(),
			tagName : "li",
		});
		
		View.WishListCompositeView =  Marionette.CompositeView.extend({
			id:'mylinks1',
			template : TemplateManager.getWishListTemplate(),
			//template : HandleBars.compile("<a>Wish List({{size}})</a><div class='content'><div class='mini-cart-info'><ul class='wishitems'><li>dddd</li></ul></div></div>"),
			itemViewContainer : ".wishitems",
			itemView: View.WishListItemCompositeView,
			initialize: function(){
				 var items = this.model.get('items');
				 this.collection = new Backbone.Collection(items);
			 }
			
		});
		
		View.WishListCollectionView = Marionette.CollectionView.extend({
			
			itemView : View.WishListCompositeView,
			
		});
		
		//View.ButtonSearchView = Marionette.ItemView.extend({
			//template: HandleBars.compile('<div>{{name}}</div><div>{{price}}</div><div><a>add to cart</a><a>remove</a>'),
			//template:TemplateManager.getButtonSearchItemTemplate(),
			//tagName : "div",
		//});
				
	
	
		
		

		
	});

	return Mystore.Main.View;
});
