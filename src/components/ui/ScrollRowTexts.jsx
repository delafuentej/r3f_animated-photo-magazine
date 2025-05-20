const ScrollRowTexts = ({ texts, animation }) => (
  <div
    className={`absolute top-0 left-0 bg-white/0 ${animation} flex items-center gap-8 px-8 w-max`}
  >
    {texts.map(({ text, className }, index) => (
      <h2 key={index} className={`shrink-0 ${className}`}>
        {text}
      </h2>
    ))}
  </div>
);

export default ScrollRowTexts;
