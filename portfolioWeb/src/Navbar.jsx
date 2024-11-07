function Navbar() {
  return (
    <>
      <div className="flex bg-black w-screen h-14 border-b-2 border-red-800 text-center justify-around  items-center content-center">
        <div id="logo" className="border-2 border-white inline-block float-left">
          <img src="#" alt="Logo" />
        </div>
        <div id="menu " className="text-red-800 flex gap-10 border-red-300 border-2 w-min">
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </div>

        <div id="logIn_signIn" className="gap-6 flex text-white">
          <button>
            Log In
          </button>

          <button>Sign In</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
