import { isValidEmailAddress } from './email';

describe('isValidEmailAddress', () => {
  it('accepts a simple address', () => {
    expect(isValidEmailAddress('user@example.com')).toBe(true);
  });

  it('rejects addresses without a single at sign', () => {
    expect(isValidEmailAddress('user.example.com')).toBe(false);
    expect(isValidEmailAddress('user@@example.com')).toBe(false);
  });

  it('rejects missing or malformed domains', () => {
    expect(isValidEmailAddress('user@')).toBe(false);
    expect(isValidEmailAddress('user@example')).toBe(false);
    expect(isValidEmailAddress('user@.example.com')).toBe(false);
  });

  it('rejects whitespace and overlong values without regex backtracking', () => {
    expect(isValidEmailAddress('user name@example.com')).toBe(false);
    expect(isValidEmailAddress(`${'a'.repeat(255)}@example.com`)).toBe(false);
  });
});
