import { client } from '../sanity/lib/client';

export async function getPosts() {
  const query = '*[_type == "post"]';
  const data = await client.fetch(query);
  return data;
}
export async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == "${slug}"]`;
  const data = await client.fetch(query);
  return data[0];
}
export async function getProjects(slug: string) {
  const query = `*[_type == "project" && slug.current == "${slug}"]`;
  const data = await client.fetch(query);
  return data[0];
}
export async function getAuthor(slug: string) {
  const query = `*[_type == 'author' && _id == "${slug}"]`;
  const data = await client.fetch(query);
  return data[0];
}
