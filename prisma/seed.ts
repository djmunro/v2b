import faker from "faker";

import prisma from "../lib/db";

async function main() {
  const users = [...new Array(5)].map(() => {
    return {
      email: faker.internet.email(),
      name: faker.name.findName(),
      image: faker.image.image(),
      builds: {
        create: {
          title: faker.lorem.words(),
          link: faker.internet.url(),
          notes: faker.lorem.sentence(),
          heroClass: faker.lorem.word(),
          heroCareer: faker.lorem.words(),
        },
      },
    };
  });

  for (let data of users) {
    const user = await prisma.user.create({ data });
    console.log(user);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect);
