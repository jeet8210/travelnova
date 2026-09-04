import Destination from "../models/Destination.js";

export const getDestinations = async (req, res) => {
  const filter = {};
  if (req.query.featured) filter.featured = req.query.featured === "true";
  const destinations = await Destination.find(filter).sort({ createdAt: -1 });
  res.json(destinations);
};

export const getDestinationById = async (req, res) => {
  const destination = await Destination.findById(req.params.id);
  if (!destination) return res.status(404).json({ message: "Destination not found" });
  res.json(destination);
};

export const createDestination = async (req, res) => {
  const destination = await Destination.create(req.body);
  res.status(201).json(destination);
};

export const updateDestination = async (req, res) => {
  const destination = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!destination) return res.status(404).json({ message: "Destination not found" });
  res.json(destination);
};

export const deleteDestination = async (req, res) => {
  const destination = await Destination.findByIdAndDelete(req.params.id);
  if (!destination) return res.status(404).json({ message: "Destination not found" });
  res.json({ message: "Destination removed" });
};
