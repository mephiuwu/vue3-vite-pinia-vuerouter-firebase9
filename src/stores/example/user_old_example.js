import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
    state: () => ({
        userData: 'Ramiro@test.com'
    }),
    /* state: () => {
        return {
            
        }
    } */
    //Los getters son solo propiedades computadas detrás de escena, por lo que no es posible pasarles ningún parámetro. Sin embargo, puede devolver una función del getter para aceptar cualquier argumento
    //NO cambia el valor de userdata
    //https://pinia.vuejs.org/core-concepts/getters.html#passing-arguments-to-getters
    getters: {
        minuscula(state){
            return state.userData.toLowerCase();
        }
    },
    //Las acciones son el equivalente de los métodos en los componentes. Se pueden definir con la actionspropiedad en defineStore() y son perfectos para definir la lógica empresaria
    //SI cambia el valor de userdata
    actions: {
        //Con el this se accede a la información, en este caso, de state
        registerUser(name){
            this.userData = name;
        }
    }
})