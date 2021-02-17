const initialState = {
  paymentDetails:[
    {
      "cardNumber": "5424789321548752",
      "cardHolder": "john doe",
      "expirationDate": "03/05/2021",
      "CCV": "542",
      "amount": "1200",
      "id":"1"
    }],
    loading: false,
    loaded: true
};

export function paymentReducer(state=initialState, action) {
  switch (action.type){
    case "LOAD_PAYMENTS": {
      return {
        ...state,
        loading:true,
        loaded:false,
      };
    }
  default:{
    return state;
  }
  }
}
