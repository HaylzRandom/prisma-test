import { prisma } from '@/prisma/db';

const getUsers = () => {
  return prisma.user.findMany();
};

const getMovies = () => {
  return prisma.movie.findMany();
};

export default async function Home() {
  const users = await getUsers();
  const movies = await getMovies();
  return (
    <>
      <h1>Test Prisma</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        );
      })}
      <hr />
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <p>Title: {movie.title}</p>
            <p>Description: {movie.description}</p>
            <a href={movie.trailerURL} target='_blank'>
              {movie.title} Trailer
            </a>
          </div>
        );
      })}
    </>
  );
}
