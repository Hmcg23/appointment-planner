import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      required
      name="title"
      type="text"
      value={title}
      onChange={(e) => {
        setTitle(e.target.value);
      }} />
      <input
      required
      type="date"
      name="date"
      min={getTodayString()}
      value={date}
      onChange={(e) => {
        setDate(e.target.value);
      }} />
      <input
      required
      type="time"
      name="time"
      value={time}
      onChange={(e) => {
        setTime(e.target.value);
      }} />
      <ContactPicker
      required
      name="contacts"
      contacts={getContactNames()} 
      value={contact} 
      onChange={(e) => {
        setContact(e.target.value)
      }} />
      <input type="submit" value="Submit!" />
    </form>
  );
};
