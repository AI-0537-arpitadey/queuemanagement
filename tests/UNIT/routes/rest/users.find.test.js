/* eslint-disable no-param-reassign */
const test = require("ava")
const faker = require("faker")
const sinon = require("sinon")

const { runRouteHandler, beforeHookMongo, afterHookMongo } = require("../../../_utils")
const User = require("../../../../models/user")
const { find } = require("../../../../routes/rest/users") // function to unit test

test.before(beforeHookMongo)
test.after.always(afterHookMongo)

test.beforeEach(async (t) => {
  // fixture data set:
  faker.seed(123)
  const fixture = Array(5).fill().map((x) => ({
    email: faker.internet.email(),
    name: faker.name.findName(),
    password: faker.internet.password
  }))
  t.context.fixture = fixture
  await User.create(fixture)
})
test.afterEach(async (t) => {
  await User.remove({})
})

test.serial("Users.find: my passing test", async (t) => {
  const { status, body } = await runRouteHandler(find)
  t.is(status, 200)
  t.is(body.users.length, 5)
})

test.serial("Users.find: my second passing test", async (t) => {
  const { status, body } = await runRouteHandler(find)
  t.is(status, 200)
  const givenEmails = t.context.fixture.map(({ email }) => email.toLowerCase())
  const returnedEmails = body.users.map(({ email }) => email.toLowerCase())
  const usersMatch = givenEmails.length === returnedEmails.length
    && returnedEmails.every((email) => givenEmails.includes(email))
  t.true(usersMatch)
})

test.serial("Users.find: If DB ops throw an error, status should be 500", async (t) => {
  sinon.stub(User, "find").throws(new Error("Dummy DB Error!!"))
  const { status, body } = await runRouteHandler(find)
  t.is(status, 500)
  t.is(body.reason, "Dummy DB Error!!")
})
