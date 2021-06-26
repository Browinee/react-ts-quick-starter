import Mock from 'mockjs';

export default {
  login(config: any) {
    const { name, password } = JSON.parse(config.body);
    return name === '123' && password === '123'
      ? Mock.mock({
          status: 200,
          msg: '登陸成功',
          data: {
            token: '4378488sdsd29399281xjdjfkdf',
            avatar:
              'https://s5.mogucdn.com/mlcdn/c45406/200902_7ekllijh17kb8hccca8aa8774hfjl_400x400.jpg_160x160.v1cAC.70.webp',
            account: 'Justin',
          },
        })
      : Mock.mock({
          status: 10000,
          msg: '帳號密碼有誤',
          data: {},
        });
  },
  logout() {},
};
