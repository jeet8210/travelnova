import Package from "../models/Package.js";

export const getPackages = async (req, res) => {
  const packages = await Package.find().populate("destination").sort({ createdAt: -1 });
  res.json(packages);
};

export const getPackageById = async (req, res) => {
  const pkg = await Package.findById(req.params.id).populate("destination");
  if (!pkg) return res.status(404).json({ message: "Package not found" });
  res.json(pkg);
};

export const createPackage = async (req, res) => {
  const pkg = await Package.create(req.body);
  res.status(201).json(pkg);
};

export const updatePackage = async (req, res) => {
  const pkg = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!pkg) return res.status(404).json({ message: "Package not found" });
  res.json(pkg);
};

export const deletePackage = async (req, res) => {
  const pkg = await Package.findByIdAndDelete(req.params.id);
  if (!pkg) return res.status(404).json({ message: "Package not found" });
  res.json({ message: "Package removed" });
};
