const data = [
  {
    title: "Switz",
    artist: "Vulfpeck",
    id: "01",
  },
  {
    title: "Bohemian Rapsody",
    artist: "Queen",
    id: "02",
  },
  {
    title: "Flowers",
    artist: "Miley Cirus",
    id: "03",
  },
];

export default function App() {
  return (
    <main>
      <h1>Collectify</h1>
      <ul>
        {data.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </main>
  );
}
