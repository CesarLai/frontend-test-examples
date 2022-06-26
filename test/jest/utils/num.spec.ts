import { sum } from '@source/utils/num'

describe('utils/num testing', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toEqual(3)
  })
})
