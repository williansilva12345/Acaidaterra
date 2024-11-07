		
		class Carro {
			
			constructor(tipo,estagio){
				
				this.turbo = new Turbo(estagio)
				
				if(tipo==1){
					
					this.velmax = 120
					this.nome = "Esport"
				}
				else if (tipo==2){
					
					this.velmax = 200
					this.nome  = "fusca tunado"
				}
				else if (tipo==3){
					
					this.velmax = 500
					this.nome ="ferrari"
				}
				
				this.velmax +=this.turbo
			}
			
				info(){
			console.log(`Velocidade ${this.velmax}`)
			console.log(`Nome ${this.nome}`)
			console.log(`Turbo ${this.turbo}`)
			}
		}
		
		
		class Turbo{
			
			constructor(e){
				
				if(e==1){
					
					this.pot =100
				}else if(e==2){
					
					this.pot=300
				}
				else if(e==3){
					
					this.pot = 500
				}
				
				
				
			}
			
		
			
		}
		
		const c1 = new Carro(1,1)
		
		c1.info();