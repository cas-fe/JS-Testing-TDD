/**
 * Exercise 4a - Test-Driven Development
 */
export default function parse(input) {
  if (!input) { return 0 }
  const split = input.split(',')
  return (split.length === 1)
    ? Number(split[0])
    : Number(split[0]) + Number(split[1])
}
