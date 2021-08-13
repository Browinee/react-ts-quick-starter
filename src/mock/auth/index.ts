import { rest } from 'msw';

const handlers = [
  rest.post('/api/login', async (req, res, ctx) => {
    const { name, password } = req.body as any;
    return name === '123' && password === '123'
      ? res(
          ctx.status(200),
          ctx.json({
            msg: '登陸成功',
            data: {
              token: '4378488sdsd29399281xjdjfkdf',
              avatar:
                'https://s5.mogucdn.com/mlcdn/c45406/200902_7ekllijh17kb8hccca8aa8774hfjl_400x400.jpg_160x160.v1cAC.70.webp',
              account: 'Justin',
            },
          }),
        )
      : res(
          ctx.status(10000),
          ctx.json({
            msg: '帳號密碼有誤',
            data: {},
          }),
        );
  }),
];
export { handlers };
