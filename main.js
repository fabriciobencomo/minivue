class Reactivity{
    constructor(options){
        this.src = options.data(); 
        
        //to 
        
        this.$data = new Proxy(this.src, {
            get(target, name){
                return target[name]
            }
        });
    }

    mount(){
        document.querySelectorAll("*[p-text]").forEach(el => {
            this.pText(el, this.$data, el.getAttribute("p-text"));  
        });
    }
    
    pText(el, target, name){
         el.innerText = target[name];
    }

    pModel(){}
}




var miniVue = {
    createApp(options) {
        return new Reactivity(options);
    }
}