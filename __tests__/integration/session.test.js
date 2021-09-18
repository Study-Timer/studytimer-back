/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
const request = require('supertest');

const app = 'http://localhost:3333';

const truncate = require('../../utils/truncate');

describe('User', () => {
  afterAll(async () => {
    await truncate();
  });

  it('should create a User', async () => {
    const response = await request(app).post('/users').send({
      username: 'userTest',
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    expect(response.body).toHaveProperty('id');
    expect(response.status).toBe(201);
  });

  it('should fail to create a User (Bad request)', async () => {
    const response = await request(app).post('/users').send({
      username: 'userTest',
      password: 'testpsswd',
    });

    expect(response.status).toBe(400);
  });

  it('should log in the created User', async () => {
    const response = await request(app).post('/login').send({
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });
    expect(response.status).toBe(200);
  });

  it('should fail to log in the created User (Bad request)', async () => {
    const response = await request(app).post('/login').send({
      email: 'userTest@gmail.com',

    });
    expect(response.status).toBe(400);
  });
});

describe('Subject', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should create a Subject', async () => {
    const user = await request(app).post('/users').send({
      username: 'userTest',
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    const login = await request(app).post('/login').send({
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    const response = await request(app).post(`/${user.body.id}/subjects`).send({
      name: 'Eng Soft',
      description: 'engenharia de software',
      difficulty: 'MEDIUM',
    })
      .set('auth-token', login.body.token);

    expect(response.status).toBe(201);
  });

  it('should fail to create a Subject (Bad request)', async () => {
    const user = await request(app).post('/users').send({
      username: 'userTest',
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    const login = await request(app).post('/login').send({
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    const response = await request(app).post(`/${user.body.id}/subjects`).send({
      name: 'Eng Soft',
      description: 'engenharia de software',

    })
      .set('auth-token', login.body.token);

    expect(response.status).toBe(400);
  });

  it('should get all subjects', async () => {
    const user = await request(app).post('/users').send({
      username: 'userTest',
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    const login = await request(app).post('/login').send({
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    const subject = await request(app).post(`/${user.body.id}/subjects`).send({
      name: 'Eng Soft',
      description: 'engenharia de software',
      difficulty: 'MEDIUM',
    })
      .set('auth-token', login.body.token);

    const response = await request(app).get(`/${user.body.id}/subjects`).set('auth-token', login.body.token);

    expect(response.status).toBe(200);
  });

  it('should fail to get all subjects(Unauthorized)', async () => {
    const user = await request(app).post('/users').send({
      username: 'userTest',
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    const login = await request(app).post('/login').send({
      email: 'userTest@gmail.com',
      password: 'testpsswd',
    });

    const subject = await request(app).post(`/${user.body.id}/subjects`).send({
      name: 'Eng Soft',
      description: 'engenharia de software',
      difficulty: 'MEDIUM',
    })
      .set('auth-token', login.body.token);

    const response = await request(app).get(`/${user.body.id}/subjects`);

    expect(response.status).toBe(401);
  });
});

/* describe('Activity', () => {
    it('should create a activity', async () => {

      const user = await request(app).post('/users').send({
        username: 'userTest',
        email: 'userTest@gmail.com',
        password: 'testpsswd'
      });

      const login = await request(app).post('/login').send({
        "email": "userTest@gmail.com",
        "password": "testpsswd"
      });

      const subject = await request(app).post('/'+user.body.id+'/subjects').send({
        name: 'Eng Soft',
        description: 'engenharia de software',
        difficulty: 'MEDIUM'
      })
      .set("auth-token", login.body.token);

      const response = await request(app).post('/'+user.body.id+'/'+subject.body.id+'/activities').send({
        description: 'descrição teste',
        time: '20',
      })
      .set("auth-token", login.body.token);

      expect(response.status).toBe(201);
    });
  }); */
