import { useProgress } from "@react-three/drei";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <img src="/favicon.ico" alt="Logo" className="loading-screen__logo" />
        <h1 className="loading-screen__title">Photo Magazine: </h1>
        <h4 className="loading-screen__title">Segovia, World Heiretage City</h4>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${Math.min(Math.round(progress), 100)}%` }}
          ></div>
        </div>
        <p className="progress__indicator">
          Loading... ({parseInt(progress)}%)
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
