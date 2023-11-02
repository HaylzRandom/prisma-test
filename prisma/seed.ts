import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      username: 'Alice',
      password: 'password',
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: 'bob@prisma.io' },
    update: {},
    create: {
      email: 'bob@prisma.io',
      username: 'Bob',
      password: 'password',
    },
  });
  const hayley = await prisma.user.upsert({
    where: { email: 'hayley@email.com' },
    update: {},
    create: {
      email: 'hayley@email.com',
      username: 'Hayley',
      password: 'password',
    },
  });

  const harryPotter = await prisma.movie.create({
    data: {
      title: 'Harry Potter',
      description: 'Harry Potter description',
      trailerURL: 'https://youtube.com',
    },
  });

  const starWars = await prisma.movie.create({
    data: {
      title: 'Star Wars',
      description: 'Star Wars description',
      trailerURL: 'https://youtube.com',
    },
  });
  console.log({ harryPotter, starWars });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
