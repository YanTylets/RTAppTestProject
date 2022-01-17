export function passwordConfirmValidator(password, passwordConfirm) {
    if (!passwordConfirm) return 'Please, confirm your password.'
    if (passwordConfirm !== password) return 'Passwords do not match.'
    return ''
  }