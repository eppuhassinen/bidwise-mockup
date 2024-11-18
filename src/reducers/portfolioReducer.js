import { createSlice } from "@reduxjs/toolkit"
import portfolioService from '../services/portfolios'

const portfolioSlice = createSlice({
  name: 'portfolios',
  initialState: [],
  reducers: {
    setPortfolios(state, action) {
      return action.payload
    }
  }
})

export const { setPortfolios } = portfolioSlice.actions

export const initializePortfolios = () => {
  return async dispatch => {
    const portfolios = await portfolioService.getAll()
    dispatch(setPortfolios(portfolios))
  }
}

export default portfolioSlice.reducer
