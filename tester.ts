interface Props {
  texto: string
  numeroInteiro: number
}

const objeto = { texto: 'foo1', numeroInteiro: 10 }

function foo() {
  return 'foo'
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
