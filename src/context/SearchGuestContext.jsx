import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvaGZpdGpmYXBxbmRjaHd4anVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MjgzMjYsImV4cCI6MjAxMzQwNDMyNn0.RnA0I8CFopywtTyN4R0Ay2vOpNDSCFR-ibRbhKVXfj8";

const searchContext = createContext();

function SearchGuestContext({ children }) {
  const SUPABASE_URL = "https://lohfitjfapqndchwxjun.supabase.co";
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const { data, error } = await supabase
      .from("guests")
      .select("*")
      .textSearch("nationalID", `%${query}%`, { ilike: true });

    if (error) {
      console.error("Error fetching data from Supabase:", error);
      // Handle the error appropriately
    } else {
      console.log("Fetched data:", data);
    }
  };

  return (
    <searchContext.Provider
      value={{ handleSearchQueryChange, searchQuery, setSearchQuery }}
    >
      {children}
    </searchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(searchContext);
  if (context === undefined) throw new Error("context is out of context scope");
  return context;
}

export { SearchGuestContext, useSearch };
