const {createApp} = Vue;

createApp({
    data(){
        return{
            titolo: 'Che figata Vue.Js',
            img: 'https://www.studiolegalesantiapichi.it/wp-content/uploads/2017/08/nature-img.jpg',
            centerText: 'align-center font-80',
        }
    }
}).mount('#app');


