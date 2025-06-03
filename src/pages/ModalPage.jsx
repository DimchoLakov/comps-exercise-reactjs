import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal((prev) => !prev);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <>
      <div className="relative">
        <Button onClick={handleClick} primary>
          Open Modal
        </Button>
        {showModal && modal}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi id
          alias totam nostrum quo nemo odio fugiat, iure perspiciatis culpa
          cumque, cum suscipit atque quidem eum aspernatur dicta pariatur et!
        </p>
      </div>
    </>
  );
}

export default ModalPage;
