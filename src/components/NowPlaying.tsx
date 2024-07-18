import Card from './ui/card';

const NowPlaying = () => {
  return (
    <Card title='Music Player'>
      <iframe
        style={{ borderRadius: '12px' }}
        src='https://open.spotify.com/embed/track/14pW05SVZyTmNQYeXMwbzC?utm_source=generator'
        width='100%'
        height='152'
        allowFullScreen
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
    </Card>
  );
};

export default NowPlaying;
