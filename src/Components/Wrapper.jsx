export function Wrapper(props) {
  return (
    <div className="flex flex-col w-full h-full min-h-screen gap-20   xl:h-auto  bg-black px-14 xl:px-40">
      {props.children}
    </div>
  );
}
