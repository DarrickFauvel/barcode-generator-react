// Vitest example using sum function
export default function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

// In-source Vitesting
if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest

  describe('#sum', () => {
    it('returns 0 with no number', () => {
      expect(sum()).toBe(0)
    })

    it('returns same number with one number', () => {
      expect(sum(2)).toBe(2)
    })

    it('returns sum with multiple numbers', () => {
      expect(sum(1, 2, 3)).toBe(6)
    })
  })
}
