

const Nav = () => {
  return (
    <div>
      <image
        src="./assets/logo.svg"
        alt="Audiophile Logo"
        width={150}
        height={50}
      />
      <h2>audiophile</h2>
      <ul style={{ textTransform:"uppercase", textDecoration:"none" }}>
        <a href="">HOME</a>
        <a href="">HEADPHONES</a>
        <a href="">SPEAKERS</a>
        <a href="">EARPHONES</a>
      </ul>
    </div>
  );
}

export default Nav;