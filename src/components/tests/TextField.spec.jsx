import { screen } from '@testing-library/react';
import React from 'react';

import TextField from '@/components/TextField';
import render from '@/utils/test/render';

it('className prop으로 설정한 css class가 적용된다..', async () => {
  // Arrange
  // -> className을 지닌 컴포넌트 렌더링
  // render API 호출 -> 테스트 환경의 jsDOM에 리액트 컴포넌트가 렌더링된 DOM 구조가 반영
  await render(<TextField className="my-class" />);

  // Act
  // 현재는 없음

  // Assert
  // -> className이란 내부 prop이나 state 값을 검증하는 것이 아니라
  // -> 렌더링 후 DOM에 해당 클래스가 존재하는지 검증
  // vitest의 expect 함수를 사용하여 기대 결과를 검증
  expect(screen.getByPlaceholderText('텍스트를 입력해 주세요.')).toHaveClass(
    'my-class',
  );
});
