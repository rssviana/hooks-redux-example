import { Helpers as HLP } from '../../helpers';

//Actions types
export const Types = {
  SELECT_SERIE: "serie/SELECT",
  ADD_SERIE: "serie/ADD",
};

// Intial State
const INITIAL_STATE = {
  data: {
    activeSerie: {
      id: "1",
      title: "Game of Thrones",
      image: "./statics/images/got.jpg",
    },
    series: [
      {
        id: "1",
        title: "Game of Thrones",
        image: "./statics/images/got.jpg",
      },
      {
        id: "2",
        title: "Vikings",
        image: "./statics/images/vikings.png",
      },
    ],
  }
};

//Reducer
export const serie = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;

  HLP.consoleActions(type, payload);

  switch (type) {
    case Types.SELECT_SERIE:
      return {
        ...state,
        data: { 
          activeSerie: payload.serie,
          series: state.data.series
        }
      };

    case Types.ADD_SERIE:
      payload.serie.id = HLP.generateID('serie');
      console.log('ADD_SERIE/payload :: ',payload);
      return {
        ...state,
        data: {
          activeSerie: payload.serie,
          series: state.data.series.push(payload.serie)
        }
      };

    default:
      return state;
  }
};

//ActionCreators
export const Creators = {
  selectSerie: serie => ({ 
    type: Types.SELECT_SERIE,
    payload: { serie }
  }),

  addSerie: serie => ({
    type: Types.ADD_SERIE,
    payload: { serie }
  })
};