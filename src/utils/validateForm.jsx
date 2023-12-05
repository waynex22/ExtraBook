const validationConfig = {
    name: {
      required: 'Tên Tài Khoản không được trống.',
    },
    email: {
      required: 'Email không được trống.',
      invalid: 'Email không hợp lệ.',
    },
    password: {
      required: 'Mật khẩu không được trống.',
      minLength: 'Mật khẩu phải chứa ít nhất 6 ký tự.',
    },
    confirmPassword: {
      match: 'Mật khẩu không khớp.',
    },
  };
  
  export default validationConfig;
  