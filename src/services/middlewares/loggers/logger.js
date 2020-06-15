/**
 * This middle logs the action dospatched before and after the reducer has executed
 */

 const logger = ({getState, dispatch}) => next => action => {
 	console.log('Before action hit the reducer...CURRENT STATE>>>', getState())
 	next(action)
 	console.log('After the action has hit the reducer...UPDATED STATE>>>', getState())
 }

 export { logger }