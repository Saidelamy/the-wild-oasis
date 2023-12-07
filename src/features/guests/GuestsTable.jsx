import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import GuestRow from "./GuestRow";
import { useGuests } from "./useGuests";

function GuestsTable() {
  const { isLoading, guests, count } = useGuests();

  if (isLoading) return <Spinner />;
  if (!guests.length) return <Empty resourceName="guests" />;

  return (
    <Menus>
      <Table columns="1.5fr 1.4fr 1fr 1fr .4fr .1fr">
        <Table.Header>
          <div>Full name</div>
          <div>email</div>
          <div>national id</div>
          <div>nationality</div>
          <div>flag</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={guests}
          render={(guest) => <GuestRow guest={guest} key={guest.id} />}
        />

        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default GuestsTable;
