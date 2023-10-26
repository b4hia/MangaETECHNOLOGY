const navBar = document.querySelector(".nav_menu_bars");
		const navUl = document.querySelector(".nav_ul");
		const navLinks = document.querySelectorAll(".nav_ul li");
		function add_removeClass(){
    		navBar.classList.toggle("nav_menu_bars_active");
    		navUl.classList.toggle("nav_ul_active");
		}
		navBar.addEventListener("click", ()=>{
    		add_removeClass();
		});
		navLinks.forEach((e)=>{
    		e.addEventListener("click", ()=>{
        		add_removeClass()
    		});
		});
		function widthSize (){
    		let ancho = window.innerWidth;
    		if(ancho > 750){
        		console.log("hi")
        		navBar.classList.remove("nav_menu_bars_active");
        		navUl.classList.remove("nav_ul_active");
    		};
    		console.log(ancho);
		};
		window.addEventListener("resize", widthSize);
		class SlideStories {
  			constructor(id) {
    		this.slide = document.querySelector(`[data-slide="${id}"]`);
    		this.active = 0;
    		this.init();
  			}

  			activeSlide(index) {
    			this.active = index;
    			this.items.forEach((item) => item.classList.remove('active'));
    			this.items[index].classList.add('active');
    			this.thumbItems.forEach((item) => item.classList.remove('active'));
    			this.thumbItems[index].classList.add('active');
    			this.autoSlide();
  			}

  			prev() {
    			if (this.active > 0) {
      				this.activeSlide(this.active - 1);
    			} else {
      				this.activeSlide(this.items.length - 1);
    			}
 		 	}

  			next() {
    			if (this.active < this.items.length - 1) {
      				this.activeSlide(this.active + 1);
    			} else {
      				this.activeSlide(0);
    			}
 		 	}

  			addNavigation() {
    			const nextBtn = this.slide.querySelector('.slide-next');
    			const prevBtn = this.slide.querySelector('.slide-prev');
    			nextBtn.addEventListener('click', this.next);
    			prevBtn.addEventListener('click', this.prev);
  			}

  			addThumbItems() {
    			this.items.forEach(() => (this.thumb.innerHTML += `<span></span>`));
    			this.thumbItems = Array.from(this.thumb.children);
  			}

  			autoSlide() {
    			clearTimeout(this.timeout);
    			this.timeout = setTimeout(this.next, 5000);
  			}

  			init() {
    			this.next = this.next.bind(this);
    			this.prev = this.prev.bind(this);
    			this.items = this.slide.querySelectorAll('.slide-items > *');
    			this.thumb = this.slide.querySelector('.slide-thumb');
    			this.addThumbItems();
    			this.activeSlide(0);
    			this.addNavigation();
  			}
		}
		new SlideStories('slide');

		var countDowndate = new Date("Jan 01, 2024 00:00:00").getTime();
		var x = setInterval(function(){
			var agora = new Date().getTime();
			var distancia = countDowndate - agora;
			var days = Math.floor(distancia / (1000 * 60 * 60 * 24));
			var hours = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			var minutes = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distancia % (1000 * 60)) / 1000);
			document.getElementById("days").innerHTML = days;
			document.getElementById("hours").innerHTML = hours;
			document.getElementById("minutes").innerHTML = minutes;
			document.getElementById("seconds").innerHTML = seconds;
		},1000)