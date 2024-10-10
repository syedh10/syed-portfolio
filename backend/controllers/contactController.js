// controllers/contactController.js

const Contact = require('../models/Contact');

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contacts", error: error.message });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contact", error: error.message });
  }
};

// Add new contact
exports.addContact = async (req, res) => {
  const { firstname, lastname, email } = req.body;

  // Validate input
  if (!firstname || !lastname || !email) {
    return res.status(400).json({ message: "First name, last name, and email are required." });
  }

  try {
    const newContact = new Contact({ firstname, lastname, email });
    await newContact.save();
    res.status(201).json({ message: "Contact created successfully", contact: newContact });
  } catch (error) {
    res.status(500).json({ message: "Failed to create contact", error: error.message });
  }
};

// Update contact by ID
exports.updateContact = async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact updated successfully", contact: updatedContact });
  } catch (error) {
    res.status(500).json({ message: "Failed to update contact", error: error.message });
  }
};

// Remove contact by ID
exports.removeContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete contact", error: error.message });
  }
};

// Remove all contacts
exports.removeAllContacts = async (req, res) => {
  try {
    await Contact.deleteMany();
    res.json({ message: "All contacts deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete contacts", error: error.message });
  }
};
