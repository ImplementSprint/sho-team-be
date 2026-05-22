const MAX_EMAIL_LENGTH = 254;
const MAX_EMAIL_LOCAL_LENGTH = 64;

export function isValidEmailAddress(value: string | undefined): value is string {
  if (!value || value.length > MAX_EMAIL_LENGTH) {
    return false;
  }

  const atIndex = value.indexOf('@');
  if (atIndex <= 0 || atIndex !== value.lastIndexOf('@')) {
    return false;
  }

  const local = value.slice(0, atIndex);
  const domain = value.slice(atIndex + 1);
  if (
    local.length > MAX_EMAIL_LOCAL_LENGTH ||
    domain.length === 0 ||
    domain.startsWith('.') ||
    domain.endsWith('.') ||
    domain.indexOf('.') <= 0
  ) {
    return false;
  }

  return !hasEmailWhitespace(value);
}

function hasEmailWhitespace(value: string): boolean {
  for (const char of value) {
    if (char <= ' ') {
      return true;
    }
  }

  return false;
}
