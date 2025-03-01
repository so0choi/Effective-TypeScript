/**
 * 아래의 함수가 정상적으로 동작하기 위해 어떤 타입을 활용하면 될까요?
 */

function prettyPrint(x: unknown): string {
  if (typeof x === 'string') return `"${x}"`;

  if (typeof x === 'number') return String(x);

  if (Array.isArray(x)) return '[' + x.map(prettyPrint).join(', ') + ']';

  if (x && typeof x === 'object') return Object.keys(x).join(', '); // null도 Array로 분류되므로 제외하는 부분 추가 필요

  return 'etc.';
}


