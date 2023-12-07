import styled from "styled-components";

import CreateGuestForm from "./CreateGuestForm";
import { HiPencil, HiTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { useDeleteGuest } from "./useDeleteGuest";

const GuestName = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Email = styled.div`
  font-size: 1em;
  font-family: "Sono";
  font-weight: 500;
`;

const NationalID = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const Natioanlity = styled.div`
  font-weight: 500;
  font-family: "Sono";
  font-size: 1.3rem;
`;

const Flag = styled.img`
  max-width: 3rem;
  border-radius: 0.2em;
  border: 1px solid var(--color-grey-100);
`;

function GuestRow({ guest }) {
  const { isDeleting, deleteGuest } = useDeleteGuest();
  const {
    id: guestId,
    fullName,
    email,
    nationalID,
    nationality,
    countryFlag,
  } = guest;

  return (
    <Table.Row>
      <GuestName>{fullName}</GuestName>
      <Email>{email}</Email>
      <NationalID>{nationalID}</NationalID>
      <Natioanlity>{nationality}</Natioanlity>
      <Flag src={countryFlag} alt="" />

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={guestId} />

            <Menus.List id={guestId}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateGuestForm guestToEdit={guest} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="guest"
                disabled={isDeleting}
                onConfirm={() => deleteGuest(guestId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default GuestRow;
