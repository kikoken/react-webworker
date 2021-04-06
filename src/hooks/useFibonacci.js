import { useWebworker } from './useWebworker'
import { getNthFobonacciNumber } from '../helpers/fibonacci-number'

export const useFibonacci = () => {
  return useWebworker(getNthFobonacciNumber)
}