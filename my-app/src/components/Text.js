export default function TextPage() {
  return (
    <>
      <div className="container">
        <h1>Text.</h1>
        <br />
        <form>
          <label htmlFor="fname">First Name: </label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label htmlFor="fname">Last Name: </label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label htmlFor="fmovie">Gender: </label>
          <br />
          <input type="radio" id="male" name="gender" value="male" />
          <label htmlFor="male">Male</label>
          <br />
          <input type="radio" id="female" name="gender" value="female" />
          <label htmlFor="female">Female</label>
          <br />
          <input type="radio" id="other" name="gender" value="other" />
          <label htmlFor="other">Other</label>
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
