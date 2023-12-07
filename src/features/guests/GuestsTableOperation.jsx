import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";
import Input from "./../../ui/Input";
import { useSearch } from "../../context/SearchGuestContext";

function GuestsTableOperation() {
  const { searchQuery, handleSearchQueryChange } = useSearch();
  return (
    <TableOperations>
      <Input
        type="text"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        placeholder="nationalID"
      />
      <SortBy
        options={[
          { value: "fullName-asc", label: "Sort by name (ascending)" },
          { value: "fullName-desc", label: "Sort by name (descending)" },
          {
            value: "email-asc",
            label: "Sort by email (ascending)",
          },
          { value: "email-desc", label: "Sort by email (descending)" },
        ]}
      />
    </TableOperations>
  );
}

export default GuestsTableOperation;
