export default function TextPage() {
  return (
    <>
      <header>
        <h3 class="nav-brand">Vincent Tieu's PA2</h3>
        <nav>
          <ul class="nav-links">
            <li>
              <a href="index.html" id="page-selected">
                Text
              </a>
            </li>
            <li>
              <a href="images">Images</a>
            </li>
            <li>
              <a href="videos">Videos</a>
            </li>
            <li>
              <a href="table">Table</a>
            </li>
            <li>
              <a href="email">Email</a>
            </li>
          </ul>
        </nav>
      </header>

      <button onclick="topFunction()" id="back-to-top-btn">
        &#8593;
      </button>

      <div class="container">
        <h1>Text.</h1>
        <br />
        <form>
          <label for="fname">First Name: </label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="fname">Last Name: </label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label for="fmovie">Gender: </label>
          <br />
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female">Female</label>
          <br />
          <input type="radio" id="other" name="gender" value="other" />
          <label for="other">Other</label>
          <br />
          <br />
          <button type="submit" value="Submit">
            Done
          </button>
          <br />
          <br />
        </form>
      </div>
    </>
  );
}
