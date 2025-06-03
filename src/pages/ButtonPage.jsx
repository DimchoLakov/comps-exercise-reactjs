import Button from "../components/Button";
import { GoBell, GoDatabase, GoCheck } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <>
      <div>
        <Button primary outline onClick={handleClick}>
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button
          secondary
          rounded
          outline
          onMouseLeave={handleClick}
          className="mb-3"
        >
          <GoCheck />
          Secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          Success
        </Button>
      </div>
      <div>
        <Button warning>Warning</Button>
      </div>
      <div>
        <Button danger>Danger</Button>
      </div>
    </>
  );
}

export default ButtonPage;
