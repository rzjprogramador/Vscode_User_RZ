interface Props {
  texto: string
  numeroInteiro: number
}

const objeto: Props = { texto: 'foo1', numeroInteiro: 10 }

function foo() {
  return 'foobar'
}

console.log('Ola')
console.log(objeto)
console.log(foo())

/*
  bar
  foo
  bar
  foo
*/

export default 1
