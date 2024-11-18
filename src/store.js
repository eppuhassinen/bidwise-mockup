import { configureStore } from '@reduxjs/toolkit'
import portfolioReducer from './reducers/portfolioReducer'

const store = configureStore({
  reducer: {
    portfolios: portfolioReducer,
  }
})

export default store