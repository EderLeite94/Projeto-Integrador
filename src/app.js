const MyNameApp = {
    data(){
        return{
            errors:[],
            name: null,
            email: null,
            contato: null,
            texto: null,
        }
    },
    methods:{
        submitForm(e) {
            this.errors = [];
            if (this.name && this.email && this.contato && this.texto) {
                return true;
              }
            if (!this.name) {
                this.errors.push('O nome é obrigatório.');
              }
            if(!this.email){
                this.errors.push('O e-mail é obrigatório.');
               
            }
            if(!this.contato){
                this.errors.push('O contato é obrigatório.');
               
            }
            if(!this.texto){
                this.errors.push('Escreva o a sua duvida.');
               
            }
            
              e.preventDefault();
              
        }
       
    }
}

Vue.createApp(MyNameApp).mount("#app");
