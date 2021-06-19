import ProgressBar from 'progress'

import clientTests from './entities/clientTests.js'
import categoryTests from './entities/categoryTests.js'
import projectTests from './entities/projectTests.js'
import taskTests from './entities/taskTests.js'
import clientStoreTests from './entities/stores/clientStoreTests.js'
import categoryStoreTests from './entities/stores/categoryStoreTests.js'
import projectStoreTests from './entities/stores/projectStoreTests.js'
import taskStoreTests from './entities/stores/taskStoreTests.js'

function runTestsAndReturnFailures (tests) {
  const testTotalCount = tests.length

  const testBar = new ProgressBar(
    `\x1b[36mRunning Tests [:bar] :current/${testTotalCount}`,
    { total: testTotalCount }
  )

  let testsFailed = []

  for (let i = 0; i < testTotalCount; i++) {
    const passedTest = tests[i].test()
    testBar.tick()

    if (!passedTest) testsFailed.push(tests[i].name)
    
    if (testBar.complete) return testsFailed
  }
}

function init (tests) {
  const failedTestsResults = runTestsAndReturnFailures(tests)
  if (failedTestsResults.length === 0) {
    console.log('\x1b[32m%s\x1b[0m', 'All Tests Passed!!')
  } else {
    console.log(`\x1b[31mFailed ${failedTestsResults.length} tests.\x1b[0m`)
    failedTestsResults.forEach(test => {
      console.log(`\x1b[33m${test}\x1b[0m`)
    })
  }
}

const testsArray = [
  clientTests,
  categoryTests,
  projectTests,
  taskTests,
  clientStoreTests,
  categoryStoreTests,
  projectStoreTests,
  taskStoreTests
]

init (testsArray.flat())