export class AppareilService{
      appareils=[
                  {
                  id:1,
                  name:"machine a laver",
                  status:"allumer"
                  },
                  {
                  id:2,
                  name:"television",
                  status:"allumer"
                  },
                  {
                  id:3,
                  name:"orinateur",
                  status:"eteint"
                  }
      ]

      getappareilbyid(id:number){
            const appareil=this.appareils.find(
                  (appareilObject)=>{
                        return appareilObject.id===id
                  }
            );
            return appareil;
      }

      switchonall(){
            for(let appareil of this.appareils){
                  appareil.status='allumer'
            }
      }

      switchoffall(){
            for(let appareil of this.appareils){
                  appareil.status='eteint'
            }
      }

      switchonone(index:number){
            this.appareils[index].status='allumer'
      }

      switchoffone(index:number){
            this.appareils[index].status='eteint'
      }

      
}