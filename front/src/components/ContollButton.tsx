export function ContoButton({ splideRef }) {
  const start = () => {
    splideRef.current.Components.AutoScroll.play();
  };

  const stop = () => {
    splideRef.current.Components.AutoScroll.pause();
  };

  const reset = () => {
    splideRef.current.go(0);
  };

  return (
    <div>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
