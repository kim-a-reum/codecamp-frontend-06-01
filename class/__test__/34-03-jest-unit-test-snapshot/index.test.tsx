import { render } from "@testing-library/react"
import JestUnitTestSnapShotPage from "../../pages/34-03-jest-unit-test-snapshot"

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보자 - 스냅샷 테슷흐",()=>{     
    const result = render(<JestUnitTestSnapShotPage/>)
    expect(result.container).toMatchSnapshot()

})