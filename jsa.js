
    const sections = document.querySelectorAll('section'); // Seleciona todas as seções
    const navLinks = document.querySelectorAll('.nav1 a'); // Seleciona todos os links de navegação



    window.addEventListener('scroll', () => {
			
			let indexSec =-1
			
	sections.forEach((section,index)=>{
		
		var secTop = section.offsetTop;
		var secHeig = section.clientHeight;
		
		if(window.pageYOffset >=secTop -secHeig - 3){
			
			indexSec = index
			
	
			
		}
		
		
		
		
	})
	
		navLinks.forEach((link,index)=>{
				
					link.classList.remove("active")
			
		if(indexSec === index){
			
			link.classList.add("active")
			
		}
			
		})
			
			
    });

const elementos = document.querySelectorAll('[data-anima]')
const animacao  = "animacao";


	function animaScroll(){
		
		var scroll = window.pageYOffset +500;
		
		
		elementos.forEach((el)=>{
			
			if(scroll > el.offsetTop){
				
				el.classList.add("animacao")
				
			}else{
				
				el.classList.remove("animacao")
			}
			
		})
		
		
	}
	
	if(elementos.length){
		
		window.addEventListener("scroll",()=>{
			
			animaScroll()
			
		})
		
	}