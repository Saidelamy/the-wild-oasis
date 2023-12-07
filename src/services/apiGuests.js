import { PAGE_SIZE } from "../utils/constans";
import supabase from "./supabase";

export async function getGuests({ sortBy, page, search }) {
  let query = supabase.from("guests").select("*", { count: "exact" });

  // sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // pagination
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  // search

  if (search) {
    query = query.textSearch("fullName", `%${sortBy}%`, { ilike: true });
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("guests could not be loaded");
  }

  return { data, count };
}

export async function createGuest(newGuest) {
  const { data, error } = await supabase
    .from("guests")
    .insert([{ ...newGuest }])
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("guests could not be created");
  }

  return data;
}

export async function updateGuest(newGuest, id) {
  const { data, error } = await supabase
    .from("guests")
    .update({ ...newGuest })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("guests could not be updated");
  }
  return data;
}

export async function deleteGuest(id) {
  const { error, data } = await supabase.from("guests").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("guests could not be deleted");
  }
  return data;
}
