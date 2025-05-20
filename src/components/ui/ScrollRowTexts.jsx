const ScrollRowTexts = ({ texts, animation }) => (
  <div
    className={`absolute top-0 left-0 bg-white/0 ${animation} flex items-center gap-8 px-8 w-max`}
  >
    {texts.map(({ text, className }, index) => (
      <p key={index} className={`shrink-0 ${className}`}>
        {text}
      </p>
    ))}
  </div>
);

export default ScrollRowTexts;
