import { PrismaClient, Student } from '@prisma/client';

async function start() {
  const repository = new PrismaClient();

  console.log('Alunos');
  console.log(await repository.student.findMany());

  // await repository.student.create({
  //   data: {
  //     name: 'Growdever',
  //     email: 'growdever1@mail.com',
  //     password: '12345',
  //   },
  // });

  // console.log('Alunos - apos insert');
  // console.log(await repository.student.findMany());
  const student = await repository.student.findFirst({});
  if(!student) return

  await repository.grade.create({
    data: {
      value: 10,
      studentId: student.id,
    },
  });
  console.log('notas');

  console.log(await repository.grade.findMany());
}

start();
