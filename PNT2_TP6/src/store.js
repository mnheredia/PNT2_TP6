import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colorCount: 6,
        isHard:true,
        colors:[],
        pickedColor:0,
        colorDisplayText:"",
        headerBackgroundColor:"",
        restartButtonText:"",
        messageDisplayText:""       
    },
    actions : {
        difChanged({commit},isHard) {
            commit('difChanged',isHard)
            commit('restart')
        },
        restart({commit}) {
            commit('restart')
        },
        checkSelection({commit},clickedSquare) {
            commit('checkSelection',clickedSquare)
        }
    },
    getters: {
        getIH: state => {
            return state.isHard
        },
    },    
    mutations : {
        checkSelection(state,clickedSquare){
            let clickedColor = state.colors[clickedSquare]
            if (clickedColor === state.pickedColor) {
                state.messageDisplayText = "Elegiste el correcto!";
                let newColors = []
                for (let i = 0;i < state.colorCount; i++) {
                    newColors.push(clickedColor)
                }
                state.colors = newColors
                state.restartButtonText = "Jugar otra vez!";
                state.headerBackgroundColor = state.pickedColor;
            } else {
                state.colors.splice(clickedSquare, 1, "#232323")
                state.messageDisplayText = "Intenta otra vez!";
            }
        },            
        difChanged(state,isHard) {
            state.isHard = isHard
            state.colorCount = isHard?6:3
        },
        restart(state){
            state.colors = createNewColors(state.colorCount);
            state.pickedColor = state.colors[PickColor(state.isHard)];
            state.colorDisplayText = state.pickedColor;
            state.textContent = "Elegir otros coloresvos colores!";
            state.headerBackgroundColor = "steelblue";
            state.messageDisplayText = "";
            state.restartButtonText = "Nuevos colores!";
        }        
    }
}) 

function PickColor(isHard){
    var quantity;
    if (isHard) {
      quantity = 6;
    } else {
      quantity = 3;
    }
    return Math.floor(Math.random() * quantity );
  }
  function  createNewColors(numbers){
    var arr = [];
    for (var i = 0; i < numbers; i++) {
      arr.push(createRandomStringColor());
    }
      return arr;
  }
  function  createRandomStringColor(){
    var newColor = "rgb(" + randomInt() + ", " + randomInt() + ", " + randomInt() + ")" ;
    return newColor;
  }
  function  randomInt(){
    return Math.floor(Math.random() * 256);
  }