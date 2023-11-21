import { defineStore } from 'pinia'

export const useQrCode = defineStore('criarQrCode', {

  //Estado
  state: () => ({
    code: ''
  }),

  //método que retorna a propriedade do estado
  getters: {

    codigoGerado(state) {
      return state.code;

    }
  },

  //ação para gerar o qrCode
  actions: {

    async criarQrCode(valor) {

      //api do googleChart

      //cht=qr	Especifica o QR code.
      //chs=<width>x<height>	Largura e altura do qrCode.
      //chl=<data></data> recebe os dados

      var googleChart = "https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl=";

      //função encodeURIComponent para tornar a entrada em URL
      this.code = googleChart + encodeURIComponent(valor);

    }


  },
})