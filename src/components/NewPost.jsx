export default function NewPost({ item }) {
  return (
    <>
      <li className="title">{item.title}</li>
      <a href={item.link}>{item.link}</a> <br />
      <span>{item.pubDate}</span>
      <p>{item.content}</p>
    </>
  );
}
