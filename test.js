import test from 'ava'

test('foo', t => {
  t.pass()
})

test('bar', async t => {
  const bar = Promise.resolve('bar')

  t.is(await bar, 'bar')
})

test('foo will run', t => {
  t.pass()
})

test('run', t => {
  t.pass()
})
