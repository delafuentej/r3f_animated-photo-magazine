import { PositionalAudio } from "@react-three/drei";

const Preloader = () => {
  return (
    <>
      {/* By mounting the <PositionalAudio /> components at the top of the App,
       the scene will only be rendered when the sounds are loaded. */}
      <PositionalAudio
        url="/audios/page-flip-01a.mp3"
        autoplay={false} // to prevent the sounds from playing whe they are loaded
      />
    </>
  );
};

export default Preloader;
